import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://waqijmayxftfltdmscrj.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhcWlqbWF5eGZ0Zmx0ZG1zY3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3MzA0MTgsImV4cCI6MjA1MzMwNjQxOH0.NRUtkMsZ5nHeqr09OcvU8Ym3A-Ug1h-W2jjEWmz2Mrw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
