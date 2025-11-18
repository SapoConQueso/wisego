import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface EducationalAd {
  id: string;
  title: string;
  description: string;
  ad_type: 'scholarship' | 'event' | 'openday' | 'course';
  university_name: string | null;
  image_url: string | null;
  link_url: string | null;
  start_date: string;
  end_date: string;
  is_active: boolean;
  impressions_count: number;
  clicks_count: number;
  created_at: string;
}

export function useEducationalAds() {
  const [ads, setAds] = useState<EducationalAd[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAds = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('educational_ads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      setAds((data || []) as EducationalAd[]);
    } catch (error) {
      console.error('Error fetching ads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const trackImpression = async (adId: string) => {
    try {
      const { data: ad } = await supabase
        .from('educational_ads')
        .select('impressions_count')
        .eq('id', adId)
        .single();

      if (ad) {
        await supabase
          .from('educational_ads')
          .update({ impressions_count: ad.impressions_count + 1 })
          .eq('id', adId);
      }
    } catch (error) {
      console.error('Error tracking impression:', error);
    }
  };

  const trackClick = async (adId: string) => {
    try {
      const { data: ad } = await supabase
        .from('educational_ads')
        .select('clicks_count')
        .eq('id', adId)
        .single();

      if (ad) {
        await supabase
          .from('educational_ads')
          .update({ clicks_count: ad.clicks_count + 1 })
          .eq('id', adId);
      }
    } catch (error) {
      console.error('Error tracking click:', error);
    }
  };

  return {
    ads,
    isLoading,
    trackImpression,
    trackClick,
    refetch: fetchAds
  };
}
