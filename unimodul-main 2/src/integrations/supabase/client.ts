import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ttfsngdhnbqixuoknyhn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0ZnNuZ2RobmJxaXh1b2tueWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1OTEyNjUsImV4cCI6MjA1MjE2NzI2NX0.laBJQcWhznzhkN8JH8RLQcQGk82_26a4cVeml5Ypkoc";

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);