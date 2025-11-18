import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, X, Megaphone } from "lucide-react";
import { useEducationalAds, EducationalAd } from "@/hooks/useEducationalAds";

export function EducationalAdBanner() {
  const { ads, isLoading, trackImpression, trackClick } = useEducationalAds();
  const [currentAd, setCurrentAd] = useState<EducationalAd | null>(null);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (ads.length > 0 && !isDismissed) {
      // Rotate through ads randomly
      const randomAd = ads[Math.floor(Math.random() * ads.length)];
      setCurrentAd(randomAd);
      trackImpression(randomAd.id);
    }
  }, [ads, isDismissed]);

  const handleClick = () => {
    if (currentAd) {
      trackClick(currentAd.id);
      if (currentAd.link_url) {
        window.open(currentAd.link_url, '_blank');
      }
    }
  };

  const getAdTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      scholarship: 'Beca',
      event: 'Evento',
      openday: 'Open Day',
      course: 'Curso'
    };
    return labels[type] || type;
  };

  const getAdTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      scholarship: 'bg-green-500/10 text-green-500',
      event: 'bg-blue-500/10 text-blue-500',
      openday: 'bg-purple-500/10 text-purple-500',
      course: 'bg-orange-500/10 text-orange-500'
    };
    return colors[type] || 'bg-gray-500/10 text-gray-500';
  };

  if (isLoading || !currentAd || isDismissed) {
    return null;
  }

  return (
    <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10"
        onClick={() => setIsDismissed(true)}
      >
        <X className="h-4 w-4" />
      </Button>

      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Megaphone className="h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className={getAdTypeColor(currentAd.ad_type)}>
                {getAdTypeLabel(currentAd.ad_type)}
              </Badge>
              {currentAd.university_name && (
                <span className="text-sm text-muted-foreground">
                  {currentAd.university_name}
                </span>
              )}
            </div>

            <h3 className="font-semibold text-lg mb-1">{currentAd.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {currentAd.description}
            </p>

            {currentAd.link_url && (
              <Button
                onClick={handleClick}
                variant="default"
                size="sm"
                className="gap-2"
              >
                Más información
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>

          {currentAd.image_url && (
            <div className="hidden md:block flex-shrink-0">
              <img
                src={currentAd.image_url}
                alt={currentAd.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
