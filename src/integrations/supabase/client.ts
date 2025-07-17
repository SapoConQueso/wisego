import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://zasqtknfduuxtywtsdnz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphc3F0a25mZHV1eHR5d3RzZG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2Mzc3MjEsImV4cCI6MjA2ODIxMzcyMX0.lefj-e8cTLNG766nIuede7n-PgPGbdkv-mkIVVgetSE";

// Configure client with security best practices
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce', // Use PKCE flow for better security
  },
  realtime: {
    params: {
      eventsPerSecond: 10, // Rate limit realtime events
    },
  },
  global: {
    headers: {
      'X-Client-Info': 'wisego-app',
    },
  },
});