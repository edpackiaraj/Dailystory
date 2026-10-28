// Cloudflare Pages Function: User Story Submission Endpoint

interface Env {
  DB: D1Database;
  TURNSTILE_SECRET_KEY?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body = await request.json() as any;

    // 1. Anti-Bot Honeypot Check
    if (body.website_hp) {
      return new Response(JSON.stringify({ error: "Spam detected." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const {
      title,
      author_name,
      author_location,
      author_email,
      language = 'en',
      genre = 'Folktales',
      story_text,
      moral,
      consent_agreed,
      originality_declared
    } = body;

    // 2. Input Validation
    if (!title || !author_name || !story_text || !author_email) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 3. Child Safety Keyword Filter (Server-side defense against inappropriate submissions)
    const prohibitedPatterns = [
      /\b(kill|murder|gore|blood|weapon|terror|nightmare|horror)\b/i,
      /\b(curse|hex|demon|worship|ritual)\b/i
    ];

    const contentToCheck = `${title} ${story_text} ${moral}`;
    for (const pattern of prohibitedPatterns) {
      if (pattern.test(contentToCheck)) {
        return new Response(JSON.stringify({
          error: "Story contains sensitive terms not suitable for our family-safe library guidelines."
        }), {
          status: 422,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // 4. Insert into Cloudflare D1 Database (Parameterized query against SQL injection)
    const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    if (env.DB) {
      await env.DB.prepare(
        `INSERT INTO submissions (id, title, author_name, author_location, author_email, language, genre, story_text, moral, consent_agreed, originality_declared, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`
      )
      .bind(
        submissionId,
        title.trim(),
        author_name.trim(),
        author_location?.trim() || 'Global',
        author_email.trim().toLowerCase(),
        language,
        genre,
        story_text.trim(),
        moral?.trim() || '',
        consent_agreed ? 1 : 0,
        originality_declared ? 1 : 0
      )
      .run();
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Submission received. Pending editorial review.",
      id: submissionId
    }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
