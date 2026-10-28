// Cloudflare Pages Function: Feedback, Reactions & Problem Reports

interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body = await request.json() as any;

    const {
      story_id = null,
      feedback_type = 'reaction',
      rating = null,
      category = null,
      message = null,
      sender_name = null,
      sender_email = null
    } = body;

    const feedbackId = `fb_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    if (env.DB) {
      await env.DB.prepare(
        `INSERT INTO feedback (id, story_id, feedback_type, rating, category, message, sender_name, sender_email)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        feedbackId,
        story_id,
        feedback_type,
        rating,
        category,
        message,
        sender_name,
        sender_email
      )
      .run();

      // If it's a reaction like 'loved' or 'happy', increment anonymous story_metrics
      if (story_id && (rating === 'loved' || rating === 'happy')) {
        await env.DB.prepare(
          `INSERT INTO story_metrics (story_id, language, likes_count, last_active)
           VALUES (?, 'en', 1, CURRENT_TIMESTAMP)
           ON CONFLICT(story_id, language) DO UPDATE SET
           likes_count = likes_count + 1,
           last_active = CURRENT_TIMESTAMP`
        )
        .bind(story_id)
        .run();
      }
    }

    return new Response(JSON.stringify({ success: true, id: feedbackId }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || "Feedback error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
