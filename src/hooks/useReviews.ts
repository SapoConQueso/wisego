import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface Review {
  id: string;
  user_id: string;
  university_name: string;
  rating: number;
  comment: string;
  category: 'academic' | 'facilities' | 'support' | 'career';
  is_verified: boolean;
  helpful_count: number;
  created_at: string;
  profiles?: {
    username: string | null;
    full_name: string | null;
  };
}

export interface ReviewStats {
  average_rating: number;
  total_reviews: number;
  rating_distribution: { [key: number]: number };
}

export function useReviews(universityName?: string) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState<ReviewStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userVotes, setUserVotes] = useState<Set<string>>(new Set());

  const fetchReviews = async () => {
    if (!universityName) return;

    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('university_reviews')
        .select('*')
        .eq('university_name', universityName)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Fetch profiles separately
      if (data && data.length > 0) {
        const userIds = [...new Set(data.map(r => r.user_id))];
        const { data: profilesData } = await supabase
          .from('profiles')
          .select('user_id, username, full_name')
          .in('user_id', userIds);

        const profilesMap = new Map(
          profilesData?.map(p => [p.user_id, p]) || []
        );

        const reviewsWithProfiles = data.map(review => ({
          ...review,
          profiles: profilesMap.get(review.user_id) || null
        }));

        setReviews(reviewsWithProfiles as Review[]);
      } else {
        setReviews([]);
      }

      // Calculate stats
      if (data && data.length > 0) {
        const total = data.length;
        const sum = data.reduce((acc, r) => acc + r.rating, 0);
        const distribution: { [key: number]: number } = {};
        
        for (let i = 1; i <= 5; i++) {
          distribution[i] = data.filter(r => r.rating === i).length;
        }

        setStats({
          average_rating: sum / total,
          total_reviews: total,
          rating_distribution: distribution
        });
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      toast.error('Error al cargar las reseñas');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserVotes = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('review_votes')
        .select('review_id')
        .eq('user_id', user.id);

      if (error) throw error;
      setUserVotes(new Set(data?.map(v => v.review_id) || []));
    } catch (error) {
      console.error('Error fetching user votes:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
    fetchUserVotes();
  }, [universityName]);

  const createReview = async (reviewData: {
    university_name: string;
    rating: number;
    comment: string;
    category: string;
  }) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('Debes iniciar sesión para dejar una reseña');
        return null;
      }

      const { data, error } = await supabase
        .from('university_reviews')
        .insert([{
          user_id: user.id,
          ...reviewData
        }])
        .select()
        .single();

      if (error) throw error;
      
      toast.success('Reseña publicada exitosamente');
      fetchReviews();
      return data;
    } catch (error: any) {
      console.error('Error creating review:', error);
      toast.error('Error al publicar la reseña');
      return null;
    }
  };

  const toggleHelpful = async (reviewId: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('Debes iniciar sesión para votar');
        return;
      }

      const hasVoted = userVotes.has(reviewId);

      if (hasVoted) {
        const { error } = await supabase
          .from('review_votes')
          .delete()
          .eq('review_id', reviewId)
          .eq('user_id', user.id);

        if (error) throw error;
        setUserVotes(prev => {
          const newSet = new Set(prev);
          newSet.delete(reviewId);
          return newSet;
        });
      } else {
        const { error } = await supabase
          .from('review_votes')
          .insert([{ review_id: reviewId, user_id: user.id }]);

        if (error) throw error;
        setUserVotes(prev => new Set(prev).add(reviewId));
      }

      fetchReviews();
    } catch (error) {
      console.error('Error toggling helpful:', error);
      toast.error('Error al registrar tu voto');
    }
  };

  return {
    reviews,
    stats,
    isLoading,
    userVotes,
    createReview,
    toggleHelpful,
    refetch: fetchReviews
  };
}
