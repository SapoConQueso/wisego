import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, MessageSquare } from "lucide-react";
import { useReviews } from "@/hooks/useReviews";
import { useAuth } from "./AuthProvider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

interface ReviewsSectionProps {
  universityName: string;
}

export function ReviewsSection({ universityName }: ReviewsSectionProps) {
  const { user } = useAuth();
  const { reviews, stats, isLoading, userVotes, createReview, toggleHelpful } = useReviews(universityName);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState<'academic' | 'facilities' | 'support' | 'career'>('academic');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!comment.trim()) return;

    setIsSubmitting(true);
    const result = await createReview({
      university_name: universityName,
      rating,
      comment: comment.trim(),
      category
    });

    if (result) {
      setComment('');
      setRating(5);
      setShowForm(false);
    }
    setIsSubmitting(false);
  };

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      academic: 'Académico',
      facilities: 'Instalaciones',
      support: 'Apoyo Estudiantil',
      career: 'Oportunidades Laborales'
    };
    return labels[cat] || cat;
  };

  if (isLoading) {
    return <div className="text-center py-8">Cargando reseñas...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      {stats && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              Calificación General
            </CardTitle>
            <CardDescription>{stats.total_reviews} reseñas totales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold">{stats.average_rating.toFixed(1)}</div>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= Math.round(stats.average_rating)
                          ? 'fill-yellow-500 text-yellow-500'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-sm w-12">{star} ★</span>
                    <Progress
                      value={(stats.rating_distribution[star] / stats.total_reviews) * 100}
                      className="flex-1"
                    />
                    <span className="text-sm w-8 text-muted-foreground">
                      {stats.rating_distribution[star]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Review Button */}
      {user && !showForm && (
        <Button onClick={() => setShowForm(true)} className="w-full">
          <MessageSquare className="h-4 w-4 mr-2" />
          Escribir una reseña
        </Button>
      )}

      {/* Review Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Nueva Reseña</CardTitle>
            <CardDescription>Comparte tu experiencia con esta universidad</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Calificación</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= rating ? 'fill-yellow-500 text-yellow-500' : 'text-muted'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Categoría</label>
              <Select value={category} onValueChange={(v: any) => setCategory(v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Académico</SelectItem>
                  <SelectItem value="facilities">Instalaciones</SelectItem>
                  <SelectItem value="support">Apoyo Estudiantil</SelectItem>
                  <SelectItem value="career">Oportunidades Laborales</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Tu reseña</label>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Comparte tu experiencia..."
                rows={5}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSubmit} disabled={isSubmitting || !comment.trim()}>
                {isSubmitting ? 'Publicando...' : 'Publicar Reseña'}
              </Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">
                    {review.profiles?.full_name || review.profiles?.username || 'Usuario'}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <Badge variant="secondary">{getCategoryLabel(review.category)}</Badge>
                    {review.is_verified && (
                      <Badge variant="default">Verificado</Badge>
                    )}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(review.created_at).toLocaleDateString('es-PE')}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">{review.comment}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleHelpful(review.id)}
                className={userVotes.has(review.id) ? 'text-primary' : ''}
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                Útil ({review.helpful_count})
              </Button>
            </CardContent>
          </Card>
        ))}

        {reviews.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Aún no hay reseñas para esta universidad.</p>
              <p className="text-sm mt-2">¡Sé el primero en compartir tu experiencia!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
