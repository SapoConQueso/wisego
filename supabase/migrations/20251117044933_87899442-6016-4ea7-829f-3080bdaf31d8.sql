-- Tabla para comentarios y reseñas de universidades
CREATE TABLE public.university_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  university_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('academic', 'facilities', 'support', 'career')),
  is_verified BOOLEAN DEFAULT false,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Índices para mejorar rendimiento
CREATE INDEX idx_university_reviews_university ON public.university_reviews(university_name);
CREATE INDEX idx_university_reviews_user ON public.university_reviews(user_id);
CREATE INDEX idx_university_reviews_rating ON public.university_reviews(rating);
CREATE INDEX idx_university_reviews_created ON public.university_reviews(created_at DESC);

-- Tabla para votos de utilidad en reseñas
CREATE TABLE public.review_votes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  review_id UUID NOT NULL REFERENCES public.university_reviews(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(review_id, user_id)
);

-- Tabla para tours virtuales
CREATE TABLE public.virtual_tours (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  university_name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  duration_minutes INTEGER,
  view_count INTEGER DEFAULT 0,
  category TEXT NOT NULL CHECK (category IN ('campus', 'facilities', 'library', 'dorms', 'sports', 'events')),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Índices para tours virtuales
CREATE INDEX idx_virtual_tours_university ON public.virtual_tours(university_name);
CREATE INDEX idx_virtual_tours_featured ON public.virtual_tours(is_featured) WHERE is_featured = true;
CREATE INDEX idx_virtual_tours_category ON public.virtual_tours(category);

-- Habilitar RLS
ALTER TABLE public.university_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.review_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.virtual_tours ENABLE ROW LEVEL SECURITY;

-- Políticas para university_reviews
CREATE POLICY "Todos pueden ver reseñas" 
ON public.university_reviews 
FOR SELECT 
USING (true);

CREATE POLICY "Usuarios autenticados pueden crear reseñas" 
ON public.university_reviews 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuarios pueden actualizar sus propias reseñas" 
ON public.university_reviews 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Usuarios pueden eliminar sus propias reseñas" 
ON public.university_reviews 
FOR DELETE 
USING (auth.uid() = user_id);

-- Políticas para review_votes
CREATE POLICY "Todos pueden ver votos" 
ON public.review_votes 
FOR SELECT 
USING (true);

CREATE POLICY "Usuarios autenticados pueden votar" 
ON public.review_votes 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuarios pueden eliminar sus propios votos" 
ON public.review_votes 
FOR DELETE 
USING (auth.uid() = user_id);

-- Políticas para virtual_tours
CREATE POLICY "Todos pueden ver tours virtuales" 
ON public.virtual_tours 
FOR SELECT 
USING (true);

-- Trigger para actualizar updated_at en university_reviews
CREATE TRIGGER update_university_reviews_updated_at
BEFORE UPDATE ON public.university_reviews
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger para actualizar updated_at en virtual_tours
CREATE TRIGGER update_virtual_tours_updated_at
BEFORE UPDATE ON public.virtual_tours
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Función para actualizar helpful_count cuando se añade/elimina un voto
CREATE OR REPLACE FUNCTION public.update_review_helpful_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.university_reviews
    SET helpful_count = helpful_count + 1
    WHERE id = NEW.review_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.university_reviews
    SET helpful_count = GREATEST(0, helpful_count - 1)
    WHERE id = OLD.review_id;
    RETURN OLD;
  END IF;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger para actualizar helpful_count
CREATE TRIGGER update_helpful_count_on_vote
AFTER INSERT OR DELETE ON public.review_votes
FOR EACH ROW
EXECUTE FUNCTION public.update_review_helpful_count();