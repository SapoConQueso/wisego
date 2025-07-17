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
      // Input validation and sanitization
      const sanitizedEmail = email.trim().toLowerCase();
      const sanitizedFullName = fullName.trim();
      const sanitizedUsername = username.trim().toLowerCase();
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedEmail)) {
        return { error: "Formato de email inválido" };
      }
      
      // Validate password strength
      if (password.length < 8) {
        return { error: "La contraseña debe tener al menos 8 caracteres" };
      }
      
      // Validate required fields
      if (!sanitizedFullName || !sanitizedUsername) {
        return { error: "Todos los campos son obligatorios" };
      }
      
      // Validate username format (alphanumeric and underscores only)
      const usernameRegex = /^[a-zA-Z0-9_]+$/;
      if (!usernameRegex.test(sanitizedUsername)) {
        return { error: "El nombre de usuario solo puede contener letras, números y guiones bajos" };
      }
      
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: sanitizedEmail,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: sanitizedFullName,
            username: sanitizedUsername
          }
        }
      });
      
      if (error) return { error: error.message };
      return {};
    } catch (error) {
      console.error('SignUp error:', error);
      return { error: "Error al registrarse" };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Input validation and sanitization
      const sanitizedEmail = email.trim().toLowerCase();
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedEmail)) {
        return { error: "Formato de email inválido" };
      }
      
      // Validate password is not empty
      if (!password || password.length === 0) {
        return { error: "La contraseña es obligatoria" };
      }
      
      const { error } = await supabase.auth.signInWithPassword({
        email: sanitizedEmail,
        password
      });
      
      if (error) {
        // Sanitize error messages to prevent information disclosure
        if (error.message.includes('Invalid login credentials')) {
          return { error: "Credenciales inválidas" };
        }
        return { error: error.message };
      }
      return {};
    } catch (error) {
      console.error('SignIn error:', error);
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
      if (!session || !session.access_token) {
        console.warn('No valid session for subscription check');
        return;
      }
      
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error('Subscription check error:', error);
        return;
      }

      // Validate response data structure
      if (data && typeof data === 'object') {
        setIsSubscribed(Boolean(data.subscribed));
        setSubscriptionTier(data.subscription_tier || null);
        setSubscriptionEnd(data.subscription_end || null);
      }
    } catch (error) {
      console.error('Error checking subscription:', error);
      // Reset subscription state on error for security
      setIsSubscribed(false);
      setSubscriptionTier(null);
      setSubscriptionEnd(null);
    }
  };

  const createCheckout = async () => {
    try {
      if (isGuest) {
        throw new Error('Los invitados no pueden realizar compras. Regístrate para acceder a suscripciones.');
      }
      if (!session || !session.access_token) {
        throw new Error('No hay sesión activa válida');
      }
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error('Checkout creation error:', error);
        throw new Error('Error al crear sesión de pago');
      }

      // Validate URL before opening
      if (data && data.url && data.url.startsWith('https://')) {
        window.open(data.url, '_blank', 'noopener,noreferrer');
      } else {
        throw new Error('URL de pago inválida');
      }
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
      if (!session || !session.access_token) {
        throw new Error('No hay sesión activa válida');
      }
      
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error('Customer portal error:', error);
        throw new Error('Error al acceder al portal de cliente');
      }

      // Validate URL before opening
      if (data && data.url && data.url.startsWith('https://')) {
        window.open(data.url, '_blank', 'noopener,noreferrer');
      } else {
        throw new Error('URL del portal inválida');
      }
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