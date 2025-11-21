import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface CommunityPost {
  id: string;
  user_id: string;
  university_name: string;
  career: string;
  content: string;
  post_type: 'testimony' | 'question' | 'general';
  votes_count: number;
  comments_count: number;
  created_at: string;
  profiles?: {
    username: string | null;
    full_name: string | null;
  };
  user_vote?: 'up' | 'down' | null;
}

export interface PostComment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  votes_count: number;
  created_at: string;
  profiles?: {
    username: string | null;
    full_name: string | null;
  };
}

export function useCommunityPosts(filterType?: 'testimony' | 'question' | 'all') {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      let query = supabase
        .from('community_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (filterType && filterType !== 'all') {
        query = query.eq('post_type', filterType);
      }

      const { data, error } = await query;
      if (error) throw error;

      // Fetch profiles and user votes
      if (data && data.length > 0) {
        const userIds = [...new Set(data.map(p => p.user_id))];
        const { data: profilesData } = await supabase
          .from('profiles')
          .select('user_id, username, full_name')
          .in('user_id', userIds);

        const profilesMap = new Map(
          profilesData?.map(p => [p.user_id, p]) || []
        );

        // Get current user's votes
        const { data: { user } } = await supabase.auth.getUser();
        let votesMap = new Map();
        
        if (user) {
          const { data: votesData } = await supabase
            .from('post_votes')
            .select('post_id, vote_type')
            .eq('user_id', user.id);
          
          votesMap = new Map(
            votesData?.map(v => [v.post_id, v.vote_type]) || []
          );
        }

        const postsWithProfiles = data.map(post => ({
          ...post,
          profiles: profilesMap.get(post.user_id) || null,
          user_vote: votesMap.get(post.id) || null
        }));

        setPosts(postsWithProfiles as CommunityPost[]);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error('Error al cargar los posts');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [filterType]);

  const createPost = async (postData: {
    university_name: string;
    career: string;
    content: string;
    post_type: 'testimony' | 'question' | 'general';
  }) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('Debes iniciar sesión para crear un post');
        return null;
      }

      const { data, error } = await supabase
        .from('community_posts')
        .insert([{ user_id: user.id, ...postData }])
        .select()
        .single();

      if (error) throw error;
      
      toast.success('Post publicado exitosamente');
      fetchPosts();
      return data;
    } catch (error: any) {
      console.error('Error creating post:', error);
      toast.error('Error al publicar el post');
      return null;
    }
  };

  const votePost = async (postId: string, voteType: 'up' | 'down') => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('Debes iniciar sesión para votar');
        return;
      }

      const post = posts.find(p => p.id === postId);
      const currentVote = post?.user_vote;

      if (currentVote === voteType) {
        // Remove vote
        const { error } = await supabase
          .from('post_votes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', user.id);

        if (error) throw error;
      } else if (currentVote) {
        // Change vote
        const { error } = await supabase
          .from('post_votes')
          .update({ vote_type: voteType })
          .eq('post_id', postId)
          .eq('user_id', user.id);

        if (error) throw error;
      } else {
        // New vote
        const { error } = await supabase
          .from('post_votes')
          .insert([{ post_id: postId, user_id: user.id, vote_type: voteType }]);

        if (error) throw error;
      }

      fetchPosts();
    } catch (error) {
      console.error('Error voting post:', error);
      toast.error('Error al votar');
    }
  };

  const deletePost = async (postId: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('Debes iniciar sesión');
        return false;
      }

      const { error } = await supabase
        .from('community_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      toast.success('Post eliminado exitosamente');
      fetchPosts();
      return true;
    } catch (error: any) {
      console.error('Error deleting post:', error);
      toast.error('Error al eliminar el post');
      return false;
    }
  };

  return {
    posts,
    isLoading,
    createPost,
    votePost,
    deletePost,
    refetch: fetchPosts
  };
}

export function usePostComments(postId: string) {
  const [comments, setComments] = useState<PostComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('post_comments')
        .select('*')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

      if (error) throw error;

      if (data && data.length > 0) {
        const userIds = [...new Set(data.map(c => c.user_id))];
        const { data: profilesData } = await supabase
          .from('profiles')
          .select('user_id, username, full_name')
          .in('user_id', userIds);

        const profilesMap = new Map(
          profilesData?.map(p => [p.user_id, p]) || []
        );

        const commentsWithProfiles = data.map(comment => ({
          ...comment,
          profiles: profilesMap.get(comment.user_id) || null
        }));

        setComments(commentsWithProfiles as PostComment[]);
      } else {
        setComments([]);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const addComment = async (content: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('Debes iniciar sesión para comentar');
        return null;
      }

      const { data, error } = await supabase
        .from('post_comments')
        .insert([{ post_id: postId, user_id: user.id, content }])
        .select()
        .single();

      if (error) throw error;
      
      fetchComments();
      return data;
    } catch (error: any) {
      console.error('Error adding comment:', error);
      toast.error('Error al publicar comentario');
      return null;
    }
  };

  return {
    comments,
    isLoading,
    addComment,
    refetch: fetchComments
  };
}
