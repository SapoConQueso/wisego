import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Play, Eye, Clock, Star } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useVirtualTours } from "@/hooks/useVirtualTours";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface VirtualToursPageProps {
  onNavigate: (view: string) => void;
}

export function VirtualToursPage({ onNavigate }: VirtualToursPageProps) {
  const { tours: featuredTours, isLoading: loadingFeatured } = useVirtualTours(undefined, true);
  const { tours: allTours, isLoading: loadingAll, incrementViewCount } = useVirtualTours();
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'campus', label: 'Campus' },
    { value: 'facilities', label: 'Instalaciones' },
    { value: 'library', label: 'Biblioteca' },
    { value: 'dorms', label: 'Residencias' },
    { value: 'sports', label: 'Deportes' },
    { value: 'events', label: 'Eventos' }
  ];

  const getCategoryLabel = (cat: string) => {
    return categories.find(c => c.value === cat)?.label || cat;
  };

  const handleTourClick = (tour: any) => {
    setSelectedTour(tour);
    incrementViewCount(tour.id);
  };

  const filteredTours = selectedCategory === 'all'
    ? allTours
    : allTours.filter(t => t.category === selectedCategory);

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('dashboard')}
                className="text-primary-foreground hover:text-primary-foreground/80"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <WiseGoLogo />
              <h1 className="text-xl font-bold">Tours Virtuales</h1>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Featured Tours */}
        {!loadingFeatured && featuredTours.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Tours Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTours.map((tour) => (
                <Card
                  key={tour.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleTourClick(tour)}
                >
                  <div className="relative aspect-video bg-muted">
                    {tour.thumbnail_url ? (
                      <img
                        src={tour.thumbnail_url}
                        alt={tour.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{getCategoryLabel(tour.category)}</Badge>
                    <CardTitle className="line-clamp-2">{tour.title}</CardTitle>
                    <CardDescription className="line-clamp-1">
                      {tour.university_name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {tour.duration_minutes && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {tour.duration_minutes} min
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {tour.view_count} vistas
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Tours with Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Explora Tours</h2>
          
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
            <TabsList className="w-full justify-start overflow-x-auto">
              {categories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loadingAll ? (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  Cargando tours...
                </div>
              ) : filteredTours.length === 0 ? (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  No hay tours disponibles en esta categoría.
                </div>
              ) : (
                filteredTours.map((tour) => (
                  <Card
                    key={tour.id}
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handleTourClick(tour)}
                  >
                    <div className="relative aspect-video bg-muted">
                      {tour.thumbnail_url ? (
                        <img
                          src={tour.thumbnail_url}
                          alt={tour.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <Play className="h-12 w-12 text-muted-foreground" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Play className="h-16 w-16 text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2">{getCategoryLabel(tour.category)}</Badge>
                      <CardTitle className="line-clamp-2">{tour.title}</CardTitle>
                      <CardDescription className="line-clamp-1">
                        {tour.university_name}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {tour.duration_minutes && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {tour.duration_minutes} min
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {tour.view_count} vistas
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </Tabs>
        </section>
      </main>

      {/* Video Player Dialog */}
      <Dialog open={!!selectedTour} onOpenChange={() => setSelectedTour(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedTour?.title}</DialogTitle>
            <p className="text-sm text-muted-foreground">{selectedTour?.university_name}</p>
          </DialogHeader>
          {selectedTour && (
            <div className="space-y-4">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={getYouTubeEmbedUrl(selectedTour.video_url)}
                  title={selectedTour.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {selectedTour.description && (
                <p className="text-sm text-muted-foreground">{selectedTour.description}</p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
