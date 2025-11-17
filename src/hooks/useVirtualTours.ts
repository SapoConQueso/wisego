import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface VirtualTour {
  id: string;
  university_name: string;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  duration_minutes: number | null;
  view_count: number;
  category: 'campus' | 'facilities' | 'library' | 'dorms' | 'sports' | 'events';
  is_featured: boolean;
  created_at: string;
}

export function useVirtualTours(universityName?: string, featured?: boolean) {
  const [tours, setTours] = useState<VirtualTour[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    try {
      setIsLoading(true);
      let query = supabase
        .from('virtual_tours')
        .select('*')
        .order('created_at', { ascending: false });

      if (universityName) {
        query = query.eq('university_name', universityName);
      }

      if (featured !== undefined) {
        query = query.eq('is_featured', featured);
      }

      const { data, error } = await query;

      if (error) throw error;
      setTours((data as VirtualTour[]) || []);
    } catch (error) {
      console.error('Error fetching tours:', error);
      toast.error('Error al cargar los tours virtuales');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, [universityName, featured]);

  const incrementViewCount = async (tourId: string) => {
    try {
      // Increment view count manually
      const tour = tours.find(t => t.id === tourId);
      if (!tour) return;

      const { error } = await supabase
        .from('virtual_tours')
        .update({ view_count: tour.view_count + 1 })
        .eq('id', tourId);

      if (error) throw error;
      fetchTours();
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  };

  return {
    tours,
    isLoading,
    incrementViewCount,
    refetch: fetchTours
  };
}
