-- Add foreign keys to profiles table for direct messages
ALTER TABLE public.direct_messages
ADD CONSTRAINT direct_messages_sender_id_fkey 
FOREIGN KEY (sender_id) 
REFERENCES auth.users(id) 
ON DELETE CASCADE;

ALTER TABLE public.direct_messages
ADD CONSTRAINT direct_messages_receiver_id_fkey 
FOREIGN KEY (receiver_id) 
REFERENCES auth.users(id) 
ON DELETE CASCADE;