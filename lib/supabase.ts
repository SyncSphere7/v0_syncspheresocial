import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Replace the placeholder values with the actual Supabase credentials
const supabaseUrl = "https://ronutqzgdqcawheduqxd.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvbnV0cXpnZHFjYXdoZWR1cXhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDc4MTMsImV4cCI6MjA2MjAyMzgxM30.GbWveq5bwSHWKbTmhrS3mYQGPgLm_Ljekn4uW22u7Mw"

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
