const SUPABASE_URL = 'https://imxwlxgfzzlmfosvefsz.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteHdseGdmenpsbWZvc3ZlZnN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc4MTc1NzgsImV4cCI6MTk3MzM5MzU3OH0.K3EQSXdVfuCZDo4FKmEZc6vU9VlVk17KSHml4jodW5I';

export const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
