import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/components/AuthProvider';
import { toast } from 'sonner';

export interface Favorite {
  id: string;
  university_name: string;
  university_data: any;
  created_at: string;
}

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchFavorites();
    } else {
      setFavorites([]);
      setLoading(false);
    }
  }, [user]);

  const fetchFavorites = async () => {
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFavorites(data || []);
    } catch (error) {
      console.error('Error fetching favorites:', error);
      toast.error('Error al cargar favoritos');
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = async (universityName: string, universityData?: any) => {
    if (!user) {
      toast.error('Debes iniciar sesión para guardar favoritos');
      return false;
    }

    try {
      const { error } = await supabase
        .from('favorites')
        .insert({
          user_id: user.id,
          university_name: universityName,
          university_data: universityData
        });

      if (error) throw error;
      
      await fetchFavorites();
      toast.success('Universidad agregada a favoritos');
      return true;
    } catch (error: any) {
      if (error.code === '23505') {
        toast.error('Esta universidad ya está en tus favoritos');
      } else {
        toast.error('Error al agregar favorito');
      }
      return false;
    }
  };

  const removeFavorite = async (universityName: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('university_name', universityName);

      if (error) throw error;
      
      await fetchFavorites();
      toast.success('Universidad eliminada de favoritos');
      return true;
    } catch (error) {
      toast.error('Error al eliminar favorito');
      return false;
    }
  };

  const isFavorite = (universityName: string) => {
    return favorites.some(fav => fav.university_name === universityName);
  };

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    isFavorite,
    refetch: fetchFavorites
  };
}
