-- =====================================================
-- Supabase SQL Schema for HiddenGemsPH
-- =====================================================
-- Run this in your Supabase SQL Editor:
-- 1. Go to supabase.com/dashboard
-- 2. Select your project
-- 3. Click "SQL Editor" in the sidebar
-- 4. Paste this entire file and click "Run"
-- =====================================================

-- Create the places table
CREATE TABLE IF NOT EXISTS places (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  subtitle TEXT,
  thumbnail TEXT,
  location_link TEXT,
  hashtags TEXT[],
  categories TEXT[],
  description TEXT,
  images TEXT[],
  youtube_embed TEXT,
  accordions JSONB,
  restaurants JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (required for Supabase)
ALTER TABLE places ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anyone can view places)
CREATE POLICY "Allow public read access" ON places
  FOR SELECT
  USING (true);

-- Allow authenticated inserts (for sync script)
-- Note: The anon key can insert if this policy is set
CREATE POLICY "Allow insert for sync" ON places
  FOR INSERT
  WITH CHECK (true);

-- Allow delete for sync (to clear and re-insert)
CREATE POLICY "Allow delete for sync" ON places
  FOR DELETE
  USING (true);

-- =====================================================
-- DONE! Your table is ready.
-- Now run: npm run sync
-- =====================================================
