// Cloudflare Pages Function: Real-Time Translation API for Untranslated Stories

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'public, max-age=86400'
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: CORS_HEADERS });
};

export const onRequestPost: PagesFunction = async (context) => {
  try {
    const { request } = context;
    const body = await request.json() as { text: string; targetLang: string; sourceLang?: string };
    const { text, targetLang, sourceLang = 'en' } = body;

    if (!text || !targetLang) {
      return new Response(JSON.stringify({ error: 'Missing text or targetLang' }), {
        status: 400,
        headers: CORS_HEADERS
      });
    }

    // Language code mapping if needed (e.g., zh -> zh-CN)
    let destLang = targetLang;
    if (targetLang === 'zh') destLang = 'zh-CN';

    // Query free public translation API (MyMemory)
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 500))}&langpair=${sourceLang}|${destLang}`;
    const res = await fetch(apiUrl);
    const data = await res.json() as any;

    if (data && data.responseData && data.responseData.translatedText) {
      return new Response(JSON.stringify({
        success: true,
        translatedText: data.responseData.translatedText,
        targetLang
      }), { headers: CORS_HEADERS });
    }

    return new Response(JSON.stringify({
      success: false,
      translatedText: text,
      fallback: true
    }), { headers: CORS_HEADERS });
  } catch (err: any) {
    return new Response(JSON.stringify({
      success: false,
      error: err.message,
      fallback: true
    }), { status: 500, headers: CORS_HEADERS });
  }
};

export const onRequestGet: PagesFunction = async (context) => {
  const { request } = context;
  const url = new URL(request.url);
  const text = url.searchParams.get('text') || '';
  const targetLang = url.searchParams.get('target') || 'en';
  const sourceLang = url.searchParams.get('source') || 'en';

  if (!text) {
    return new Response(JSON.stringify({ error: 'Missing text' }), { status: 400, headers: CORS_HEADERS });
  }

  let destLang = targetLang === 'zh' ? 'zh-CN' : targetLang;
  const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 500))}&langpair=${sourceLang}|${destLang}`;
  try {
    const res = await fetch(apiUrl);
    const data = await res.json() as any;
    const translatedText = data?.responseData?.translatedText || text;
    return new Response(JSON.stringify({ success: true, translatedText }), { headers: CORS_HEADERS });
  } catch(e: any) {
    return new Response(JSON.stringify({ success: false, translatedText: text, error: e.message }), { headers: CORS_HEADERS });
  }
};
