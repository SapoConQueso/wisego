-- Create profiles table for user data with proper security
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT valid_username CHECK (username ~ '^[a-zA-Z0-9_]{3,20}$'),
  CONSTRAINT valid_full_name CHECK (length(full_name) >= 1 AND length(full_name) <= 100)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own profile" 
ON public.profiles 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to automatically create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (user_id, username, full_name)
  VALUES (
    NEW.id, 
    NEW.raw_user_meta_data ->> 'username',
    NEW.raw_user_meta_data ->> 'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile record
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update existing subscribers table to improve security
ALTER TABLE public.subscribers ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id);

-- Update RLS policies for subscribers table to be more restrictive
DROP POLICY IF EXISTS "select_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "update_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "insert_subscription" ON public.subscribers;

CREATE POLICY "Users can view their own subscription" 
ON public.subscribers 
FOR SELECT 
USING (user_id = auth.uid());

CREATE POLICY "Service role can manage subscriptions" 
ON public.subscribers 
FOR ALL 
USING (auth.role() = 'service_role');

-- Create audit log table for security monitoring
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL,
  table_name TEXT NOT NULL,
  record_id UUID,
  old_values JSONB,
  new_values JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for audit logs
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Only allow service role to manage audit logs
CREATE POLICY "Service role can manage audit logs" 
ON public.audit_logs 
FOR ALL 
USING (auth.role() = 'service_role');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON public.profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_profiles_username ON public.profiles(username);
CREATE INDEX IF NOT EXISTS idx_subscribers_user_id ON public.subscribers(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON public.audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON public.audit_logs(created_at);

-- Add rate limiting table for login attempts
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  identifier TEXT NOT NULL, -- email or IP address
  action TEXT NOT NULL, -- 'login', 'signup', etc.
  attempts INTEGER NOT NULL DEFAULT 1,
  last_attempt TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  blocked_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(identifier, action)
);

-- Enable RLS for rate limits
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Only allow service role to manage rate limits
CREATE POLICY "Service role can manage rate limits" 
ON public.rate_limits 
FOR ALL 
USING (auth.role() = 'service_role');

-- Create function to clean up old rate limit records
CREATE OR REPLACE FUNCTION public.cleanup_rate_limits()
RETURNS void AS $$
BEGIN
  DELETE FROM public.rate_limits 
  WHERE last_attempt < now() - INTERVAL '1 hour'
    AND (blocked_until IS NULL OR blocked_until < now());
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create index for rate limits
CREATE INDEX IF NOT EXISTS idx_rate_limits_identifier_action ON public.rate_limits(identifier, action);
CREATE INDEX IF NOT EXISTS idx_rate_limits_last_attempt ON public.rate_limits(last_attempt);