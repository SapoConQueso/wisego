import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";
import { toast } from "sonner";

interface UserProfile {
  id: string;
  user_id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, session } = useAuth();

  // Fetch user profile
  const fetchProfile = async () => {
    if (!user || !session) {
      setProfile(null);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
        setError(error.message);
        return;
      }

      setProfile(data);
    } catch (err) {
      console.error('Profile fetch error:', err);
      setError('Error loading profile');
    } finally {
      setIsLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (updates: Partial<Pick<UserProfile, 'username' | 'full_name' | 'avatar_url'>>) => {
    if (!user || !session) {
      throw new Error('User not authenticated');
    }

    try {
      // Input validation and sanitization
      const sanitizedUpdates: any = {};
      
      if (updates.username !== undefined) {
        const username = updates.username?.trim().toLowerCase();
        if (username && !/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
          throw new Error('Username must be 3-20 characters (letters, numbers, underscore only)');
        }
        sanitizedUpdates.username = username;
      }

      if (updates.full_name !== undefined) {
        const fullName = updates.full_name?.trim();
        if (fullName && (fullName.length < 1 || fullName.length > 100)) {
          throw new Error('Full name must be 1-100 characters');
        }
        sanitizedUpdates.full_name = fullName;
      }

      if (updates.avatar_url !== undefined) {
        const avatarUrl = updates.avatar_url?.trim();
        if (avatarUrl && !avatarUrl.startsWith('https://')) {
          throw new Error('Avatar URL must be a valid HTTPS URL');
        }
        sanitizedUpdates.avatar_url = avatarUrl;
      }

      const { data, error } = await supabase
        .from('profiles')
        .update(sanitizedUpdates)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating profile:', error);
        throw new Error(error.message);
      }

      setProfile(data);
      toast.success('Profile updated successfully');
      return data;
    } catch (err: any) {
      console.error('Profile update error:', err);
      toast.error(err.message || 'Error updating profile');
      throw err;
    }
  };

  // Create user profile (fallback if not auto-created)
  const createProfile = async (userData: { username: string; full_name: string }) => {
    if (!user || !session) {
      throw new Error('User not authenticated');
    }

    try {
      // Input validation and sanitization
      const username = userData.username.trim().toLowerCase();
      const fullName = userData.full_name.trim();

      if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
        throw new Error('Username must be 3-20 characters (letters, numbers, underscore only)');
      }

      if (fullName.length < 1 || fullName.length > 100) {
        throw new Error('Full name must be 1-100 characters');
      }

      const { data, error } = await supabase
        .from('profiles')
        .insert([{
          user_id: user.id,
          username,
          full_name: fullName,
        }])
        .select()
        .single();

      if (error) {
        console.error('Error creating profile:', error);
        throw new Error(error.message);
      }

      setProfile(data);
      toast.success('Profile created successfully');
      return data;
    } catch (err: any) {
      console.error('Profile creation error:', err);
      toast.error(err.message || 'Error creating profile');
      throw err;
    }
  };

  // Check username availability
  const checkUsernameAvailability = async (username: string): Promise<boolean> => {
    if (!username || !/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
      return false;
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', username.toLowerCase())
        .maybeSingle();

      if (error) {
        console.error('Error checking username:', error);
        return false;
      }

      return !data; // Available if no data found
    } catch (err) {
      console.error('Username check error:', err);
      return false;
    }
  };

  // Fetch profile when user changes
  useEffect(() => {
    fetchProfile();
  }, [user, session]);

  return {
    profile,
    isLoading,
    error,
    updateProfile,
    createProfile,
    checkUsernameAvailability,
    refetch: fetchProfile,
  };
}