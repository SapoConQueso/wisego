import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface Subscription {
  id: string;
  user_id: string;
  plan_type: 'free' | 'basic' | 'premium';
  status: 'active' | 'inactive' | 'cancelled';
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  current_period_start: string | null;
  current_period_end: string | null;
  created_at: string;
  updated_at: string;
}

export function useSubscription() {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSubscription = async () => {
    try {
      setIsLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setSubscription(null);
        return;
      }

      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') throw error;

      // If no subscription exists, create a free one
      if (!data) {
        const { data: newSub, error: createError } = await supabase
          .from('subscriptions')
          .insert([{ 
            user_id: user.id, 
            plan_type: 'free',
            status: 'active'
          }])
          .select()
          .single();

        if (createError) throw createError;
        setSubscription(newSub as Subscription);
      } else {
        setSubscription(data as Subscription);
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
      toast.error('Error al cargar la suscripción');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, []);

  const isPremium = () => {
    return subscription?.plan_type === 'premium' && subscription?.status === 'active';
  };

  const isBasic = () => {
    return subscription?.plan_type === 'basic' && subscription?.status === 'active';
  };

  const hasFeatureAccess = (feature: 'virtual_tours' | 'advanced_search' | 'unlimited_favorites' | 'priority_support') => {
    if (!subscription) return false;
    
    const { plan_type, status } = subscription;
    
    if (status !== 'active') return false;

    switch (feature) {
      case 'virtual_tours':
        return plan_type === 'basic' || plan_type === 'premium';
      case 'advanced_search':
        return plan_type === 'premium';
      case 'unlimited_favorites':
        return plan_type === 'basic' || plan_type === 'premium';
      case 'priority_support':
        return plan_type === 'premium';
      default:
        return false;
    }
  };

  return {
    subscription,
    isLoading,
    isPremium: isPremium(),
    isBasic: isBasic(),
    hasFeatureAccess,
    refetch: fetchSubscription
  };
}
