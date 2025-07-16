import { useState, useEffect, createContext, useContext } from "react";
import { createClient, User, Session } from "@supabase/supabase-js";

const supabaseUrl = "https://zasqtknfduuxtywtsdnz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphc3F0a25mZHV1eHR5d3RzZG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2Mzc3MjEsImV4cCI6MjA2ODIxMzcyMX0.lefj-e8cTLNG766nIuede7n-PgPGbdkv-mkIVVgetSE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UserSession {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isSubscribed: boolean;
  subscriptionTier: string | null;
  subscriptionEnd: string | null;
  isGuest: boolean;
}

export interface AuthContextType extends UserSession {
  signUp: (email: string, password: string, fullName: string, username: string) => Promise<{ error?: string }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  signInAsGuest: () => void;
  checkSubscription: () => Promise<void>;
  createCheckout: () => Promise<void>;
  openCustomerPortal: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useSupabaseAuth(): AuthContextType {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionTier, setSubscriptionTier] = useState<string | null>(null);
  const [subscriptionEnd, setSubscriptionEnd] = useState<string | null>(null);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
      
      // Check subscription if user is logged in
      if (session?.user) {
        checkSubscription();
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
        
        if (event === 'SIGNED_IN' && session?.user) {
          await checkSubscription();
        } else if (event === 'SIGNED_OUT') {
          setIsSubscribed(false);
          setSubscriptionTier(null);
          setSubscriptionEnd(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName: string, username: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            username: username
          }
        }
      });
      
      if (error) return { error: error.message };
      return {};
    } catch (error) {
      return { error: "Error al registrarse" };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) return { error: error.message };
      return {};
    } catch (error) {
      return { error: "Error al iniciar sesión" };
    }
  };

  const signOut = async () => {
    setIsGuest(false);
    await supabase.auth.signOut();
  };

  const signInAsGuest = () => {
    setIsGuest(true);
    setUser(null);
    setSession(null);
    setIsSubscribed(true); // Guest has full access
    setSubscriptionTier("Premium");
    setIsLoading(false);
  };

  const checkSubscription = async () => {
    try {
      if (!session) return;
      
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      setIsSubscribed(data.subscribed || false);
      setSubscriptionTier(data.subscription_tier || null);
      setSubscriptionEnd(data.subscription_end || null);
    } catch (error) {
      console.error('Error checking subscription:', error);
    }
  };

  const createCheckout = async () => {
    try {
      if (isGuest) {
        throw new Error('Los invitados no pueden realizar compras. Regístrate para acceder a suscripciones.');
      }
      if (!session) throw new Error('No hay sesión activa');
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      // Open Stripe checkout in a new tab
      window.open(data.url, '_blank');
    } catch (error) {
      console.error('Error creating checkout:', error);
      throw error;
    }
  };

  const openCustomerPortal = async () => {
    try {
      if (isGuest) {
        throw new Error('Los invitados no pueden acceder al portal. Regístrate para gestionar tu suscripción.');
      }
      if (!session) throw new Error('No hay sesión activa');
      
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      // Open customer portal in a new tab
      window.open(data.url, '_blank');
    } catch (error) {
      console.error('Error opening customer portal:', error);
      throw error;
    }
  };

  return {
    user,
    session,
    isLoading,
    isSubscribed,
    subscriptionTier,
    subscriptionEnd,
    isGuest,
    signUp,
    signIn,
    signOut,
    signInAsGuest,
    checkSubscription,
    createCheckout,
    openCustomerPortal
  };
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};