-- Actualizar política de eliminación para permitir que admins borren cualquier post
DROP POLICY IF EXISTS "Users can delete their own posts" ON public.community_posts;

CREATE POLICY "Users can delete their own posts or admins can delete any post"
ON public.community_posts
FOR DELETE
USING (
  auth.uid() = user_id 
  OR 
  public.has_role(auth.uid(), 'admin')
);