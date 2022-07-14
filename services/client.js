export const client = supabase.createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
