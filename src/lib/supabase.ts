import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://cgorbzmwsualnhqhftnv.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnb3Jiem13c3VhbG5ocWhmdG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5ODAzNzQsImV4cCI6MjEwMDU1NjM3NH0.ZDBOt-ymdsyB8GSxHgemSrCm89FN-p1sesSqtMvReEM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
