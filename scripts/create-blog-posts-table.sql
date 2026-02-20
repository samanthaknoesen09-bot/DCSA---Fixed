-- Create blog_posts table for Supabase
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  category TEXT DEFAULT 'General',
  author TEXT DEFAULT 'DCSA Team',
  featured_image TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  scheduled_for TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  published_at TIMESTAMPTZ,
  created_by TEXT,
  CONSTRAINT slug_format CHECK (slug ~ '^[a-z0-9-]+$')
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can read published posts
CREATE POLICY "Public can read published posts"
  ON blog_posts
  FOR SELECT
  USING (status = 'published' AND (scheduled_for IS NULL OR scheduled_for <= NOW()));

-- Admin emails can do everything (use service role for writes)
CREATE POLICY "Admin can manage all posts"
  ON blog_posts
  FOR ALL
  USING (true)
  WITH CHECK (true);

COMMENT ON TABLE blog_posts IS 'Blog posts storage - replaces Vercel Blob';
COMMENT ON COLUMN blog_posts.featured_image IS 'Path to image in blog-assets bucket or full URL';
