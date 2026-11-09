-- D1 Database Schema for Dhinam Oru Kathai (Cloudflare SQLite)

-- 1. Submissions Table (User submitted stories)
CREATE TABLE IF NOT EXISTS submissions (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_location TEXT,
  author_email TEXT,
  language TEXT NOT NULL DEFAULT 'en',
  genre TEXT DEFAULT 'Folktales',
  age_group TEXT DEFAULT 'All',
  story_text TEXT NOT NULL,
  moral TEXT,
  consent_agreed INTEGER NOT NULL DEFAULT 1,
  originality_declared INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'pending', -- pending, approved, rejected
  reviewer_notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  reviewed_at DATETIME
);

-- Index for moderating submissions
CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status);
CREATE INDEX IF NOT EXISTS idx_submissions_language ON submissions(language);

-- 2. Subscribers Table (Adult-only double opt-in)
CREATE TABLE IF NOT EXISTS subscribers (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  token TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending_verification', -- pending_verification, active, unsubscribed
  preferred_language TEXT NOT NULL DEFAULT 'en',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  confirmed_at DATETIME,
  unsubscribed_at DATETIME
);

CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_status ON subscribers(status);

-- 3. Feedback and Content Reports
CREATE TABLE IF NOT EXISTS feedback (
  id TEXT PRIMARY KEY,
  story_id TEXT,
  feedback_type TEXT NOT NULL, -- 'report_problem', 'reaction', 'contact', 'translation_issue'
  rating TEXT, -- 'loved', 'happy', 'neutral'
  category TEXT, -- 'typo', 'content_concern', 'audio_issue', 'suggestion'
  message TEXT,
  sender_name TEXT,
  sender_email TEXT,
  status TEXT NOT NULL DEFAULT 'open', -- 'open', 'resolved', 'dismissed'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_feedback_story ON feedback(story_id);
CREATE INDEX IF NOT EXISTS idx_feedback_type ON feedback(feedback_type);

-- 4. Daily Story Scheduling Archive
CREATE TABLE IF NOT EXISTS daily_schedule (
  id TEXT PRIMARY KEY,
  calendar_date TEXT UNIQUE NOT NULL, -- YYYY-MM-DD
  story_id TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_daily_date ON daily_schedule(calendar_date);

-- 5. Privacy-Safe Aggregated Story Metrics (Zero personal child tracking)
CREATE TABLE IF NOT EXISTS story_metrics (
  story_id TEXT NOT NULL,
  language TEXT NOT NULL,
  reads_count INTEGER DEFAULT 0,
  listens_count INTEGER DEFAULT 0,
  completions_count INTEGER DEFAULT 0,
  quiz_attempts INTEGER DEFAULT 0,
  quiz_passed INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  last_active DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (story_id, language)
);

-- 6. Admin Audit Log (Behind Cloudflare Access)
CREATE TABLE IF NOT EXISTS admin_audit_log (
  id TEXT PRIMARY KEY,
  admin_email TEXT NOT NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  details TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 7. Site Visits & Real-time Hit Counter
CREATE TABLE IF NOT EXISTS site_visits (
  page TEXT PRIMARY KEY,
  count INTEGER DEFAULT 0,
  last_visit DATETIME DEFAULT CURRENT_TIMESTAMP
);
