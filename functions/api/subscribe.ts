// Cloudflare Pages Function: Double Opt-In Email Subscriber Endpoint

interface Env {
  DB: D1Database;
  RESEND_API_KEY?: string;
  SITE_URL?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body = await request.json() as any;

    const { email, preferred_language = 'en' } = body;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: "Valid email address is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const subId = `sub_${Date.now()}`;
    const token = crypto.randomUUID();

    if (env.DB) {
      // Upsert subscriber record
      await env.DB.prepare(
        `INSERT INTO subscribers (id, email, token, status, preferred_language)
         VALUES (?, ?, ?, 'pending_verification', ?)
         ON CONFLICT(email) DO UPDATE SET
         token = excluded.token,
         preferred_language = excluded.preferred_language`
      )
      .bind(subId, email.trim().toLowerCase(), token, preferred_language)
      .run();
    }

    // If Resend API Key is configured, send the double opt-in verification link
    if (env.RESEND_API_KEY) {
      const siteUrl = env.SITE_URL || 'https://dhinamorukathai.pages.dev';
      const verifyUrl = `${siteUrl}/api/subscribe?token=${token}&email=${encodeURIComponent(email)}`;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Dhinam Oru Kathai <stories@dhinamorukathai.com>',
          to: [email],
          subject: 'Confirm your Daily Story Subscription 🦉',
          html: `
            <h2>Welcome to Dhinam Oru Kathai!</h2>
            <p>Please confirm your email address to receive your gentle morning story every day:</p>
            <p><a href="${verifyUrl}" style="background:#f59e0b;color:#fff;padding:12px 20px;border-radius:20px;text-decoration:none;font-weight:bold;">Confirm Subscription</a></p>
            <p>If you did not request this, you can safely ignore this email.</p>
          `
        })
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Verification email queued."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || "Subscription error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

// GET handler to verify double opt-in confirmation link
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  const email = url.searchParams.get('email');

  if (!token || !email || !env.DB) {
    return new Response("Invalid verification link", { status: 400 });
  }

  await env.DB.prepare(
    `UPDATE subscribers SET status = 'active', confirmed_at = CURRENT_TIMESTAMP
     WHERE email = ? AND token = ?`
  )
  .bind(email.toLowerCase(), token)
  .run();

  return new Response(`
    <html>
      <body style="font-family:sans-serif;text-align:center;padding:50px;background:#fffbeb;color:#78350f;">
        <h1>🎉 Subscription Confirmed!</h1>
        <p>Your family will receive a fresh, inspiring story every morning.</p>
        <p><a href="/en/" style="color:#d97706;font-weight:bold;">Return to Story Library</a></p>
      </body>
    </html>
  `, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
};
