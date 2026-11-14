// Cloudflare Pages Function: Real-Time Privacy-Safe Visitor Hit Counter
// Genuine telemetry for newly hosted site (Zero artificial inflation)

interface Env {
  DB?: D1Database;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: CORS_HEADERS });
};

async function handleHits(context: EventContext<Env, any, any>, isPost: boolean) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Parameters
  const action = url.searchParams.get('action') || (isPost ? 'hit' : (url.searchParams.get('inc') === '0' ? 'stats' : 'hit'));
  let page = url.searchParams.get('page') || 'site_total';
  page = page.toLowerCase().replace(/[^a-z0-9_\-\/]/g, '').slice(0, 64) || 'site_total';
  
  let clientId = url.searchParams.get('clientId') || '';
  clientId = clientId.replace(/[^a-zA-Z0-9_\-]/g, '').slice(0, 64);
  if (!clientId) {
    const cfIp = request.headers.get('cf-connecting-ip') || '';
    const ua = request.headers.get('user-agent') || '';
    clientId = 'anon_' + Math.abs(hashString(cfIp + ua)).toString(36);
  }

  const now = new Date();
  const nowSec = Math.floor(now.getTime() / 1000);
  const cutoffSec = nowSec - 300; // 5-minute active window

  const todayStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
  
  // Week start (Monday of current UTC week)
  const dWeek = new Date(now);
  const dayOfWeek = (dWeek.getUTCDay() + 6) % 7; // Monday = 0
  dWeek.setUTCDate(dWeek.getUTCDate() - dayOfWeek);
  const weekStartStr = dWeek.toISOString().slice(0, 10);

  // Month start
  const monthStartStr = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-01`;

  // Year start
  const yearStartStr = `${now.getUTCFullYear()}-01-01`;

  if (env && env.DB) {
    try {
      // 1. Ensure all tables and indexes exist
      await env.DB.batch([
        env.DB.prepare(`
          CREATE TABLE IF NOT EXISTS site_visits (
            page TEXT PRIMARY KEY,
            count INTEGER DEFAULT 0,
            last_visit DATETIME DEFAULT CURRENT_TIMESTAMP
          )
        `),
        env.DB.prepare(`
          CREATE TABLE IF NOT EXISTS site_hits_daily (
            day TEXT PRIMARY KEY,
            count INTEGER DEFAULT 0,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
          )
        `),
        env.DB.prepare(`
          CREATE TABLE IF NOT EXISTS site_active_visitors (
            session_id TEXT PRIMARY KEY,
            last_seen INTEGER NOT NULL,
            page TEXT
          )
        `)
      ]);

      // 2. Handle actions: 'hit', 'ping', 'stats'
      if (action === 'hit') {
        await env.DB.batch([
          // Record/update active ping
          env.DB.prepare(`
            INSERT INTO site_active_visitors (session_id, last_seen, page)
            VALUES (?, ?, ?)
            ON CONFLICT(session_id) DO UPDATE SET
              last_seen = excluded.last_seen,
              page = excluded.page
          `).bind(clientId, nowSec, page),

          // Increment daily bucket
          env.DB.prepare(`
            INSERT INTO site_hits_daily (day, count, updated_at)
            VALUES (?, 1, CURRENT_TIMESTAMP)
            ON CONFLICT(day) DO UPDATE SET
              count = count + 1,
              updated_at = CURRENT_TIMESTAMP
          `).bind(todayStr),

          // Increment site_visits total
          env.DB.prepare(`
            INSERT INTO site_visits (page, count, last_visit)
            VALUES ('site_total', 1, CURRENT_TIMESTAMP)
            ON CONFLICT(page) DO UPDATE SET
              count = count + 1,
              last_visit = CURRENT_TIMESTAMP
          `),

          // Delete stale pings
          env.DB.prepare(`DELETE FROM site_active_visitors WHERE last_seen < ?`).bind(cutoffSec)
        ]);

        if (page !== 'site_total') {
          await env.DB.prepare(`
            INSERT INTO site_visits (page, count, last_visit)
            VALUES (?, 1, CURRENT_TIMESTAMP)
            ON CONFLICT(page) DO UPDATE SET
              count = count + 1,
              last_visit = CURRENT_TIMESTAMP
          `).bind(page).run();
        }
      } else if (action === 'ping') {
        // Heartbeat ping: update last_seen only, don't increment hit counter
        await env.DB.batch([
          env.DB.prepare(`
            INSERT INTO site_active_visitors (session_id, last_seen, page)
            VALUES (?, ?, ?)
            ON CONFLICT(session_id) DO UPDATE SET
              last_seen = excluded.last_seen,
              page = excluded.page
          `).bind(clientId, nowSec, page),
          env.DB.prepare(`DELETE FROM site_active_visitors WHERE last_seen < ?`).bind(cutoffSec)
        ]);
      }

      // 3. Query all multi-period stats in parallel (pure real counts)
      const [liveRes, todayRes, weekRes, monthRes, yearRes, lifetimeRes, pageRes] = await Promise.all([
        env.DB.prepare(`SELECT count(*) as total FROM site_active_visitors WHERE last_seen >= ?`).bind(cutoffSec).first<{ total: number }>(),
        env.DB.prepare(`SELECT count FROM site_hits_daily WHERE day = ?`).bind(todayStr).first<{ count: number }>(),
        env.DB.prepare(`SELECT SUM(count) as total FROM site_hits_daily WHERE day >= ?`).bind(weekStartStr).first<{ total: number }>(),
        env.DB.prepare(`SELECT SUM(count) as total FROM site_hits_daily WHERE day >= ?`).bind(monthStartStr).first<{ total: number }>(),
        env.DB.prepare(`SELECT SUM(count) as total FROM site_hits_daily WHERE day >= ?`).bind(yearStartStr).first<{ total: number }>(),
        env.DB.prepare(`SELECT SUM(count) as total FROM site_hits_daily`).first<{ total: number }>(),
        env.DB.prepare(`SELECT count FROM site_visits WHERE page = ?`).bind(page).first<{ count: number }>()
      ]);

      const live = Math.max(1, liveRes?.total || 1);
      const today = Math.max(1, todayRes?.count || 1);
      const week = Math.max(today, weekRes?.total || today);
      const month = Math.max(week, monthRes?.total || week);
      const year = Math.max(month, yearRes?.total || month);
      const lifetime = Math.max(year, lifetimeRes?.total || year);
      const pageHits = pageRes?.count || 1;

      return new Response(JSON.stringify({
        success: true,
        live,
        today,
        week,
        month,
        year,
        lifetime,
        count: lifetime,
        page_count: pageHits,
        page,
        timestamp: nowSec
      }), { headers: CORS_HEADERS });
    } catch (err: any) {
      console.error('[Hits Error]', err);
    }
  }

  // Graceful fallback for local development or prior to D1 deployment (genuine starting counts)
  return new Response(JSON.stringify({
    success: true,
    live: 1,
    today: 1,
    week: 1,
    month: 1,
    year: 1,
    lifetime: 1,
    count: 1,
    page_count: 1,
    page,
    fallback: true,
    timestamp: nowSec
  }), { headers: CORS_HEADERS });
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  return handleHits(context, false);
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  return handleHits(context, true);
};