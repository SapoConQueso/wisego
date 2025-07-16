import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, MapPin, Navigation } from 'lucide-react';

interface University {
  id: string;
  name: string;
  location: string;
  type: string;
  coordinates: [number, number]; // [longitude, latitude]
}

const universities: University[] = [
  {
    id: "1",
    name: "Universidad de Lima",
    location: "Surco, Lima",
    type: "Privada",
    coordinates: [-76.9719, -12.0856]
  },
  {
    id: "2", 
    name: "Pontificia Universidad Católica del Perú",
    location: "San Miguel, Lima",
    type: "Privada",
    coordinates: [-77.0796, -12.0685]
  },
  {
    id: "3",
    name: "Universidad Nacional Mayor de San Marcos",
    location: "Lima, Lima",
    type: "Pública",
    coordinates: [-77.0428, -12.0464]
  },
  {
    id: "4",
    name: "Universidad del Pacífico",
    location: "Jesús María, Lima",
    type: "Privada",
    coordinates: [-77.0487, -12.0848]
  },
  {
    id: "5",
    name: "Universidad Peruana Cayetano Heredia",
    location: "San Martín de Porres, Lima",
    type: "Privada",
    coordinates: [-77.0703, -12.0256]
  }
];

const openGoogleMaps = (university: University) => {
  const query = encodeURIComponent(`${university.name} ${university.location}`);
  const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
  window.open(url, '_blank');
};

export function MapComponent() {
  return (
    <div className="relative h-96 w-full space-y-6">
      {/* Animated Location Header */}
      <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-8 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-12 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-6 left-16 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-4 right-8 w-2.5 h-2.5 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Moving Location Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <MapPin className="h-8 w-8 text-primary animate-bounce" />
              <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-title font-bold text-primary mb-2">
            Explora Universidades Cerca de Ti
          </h3>
          <p className="text-muted-foreground text-sm">
            Descubre las mejores opciones académicas en tu zona
          </p>
        </div>
      </div>

      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Ubicaciones de Universidades</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Encuentra la ubicación exacta de cada universidad en Google Maps
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {universities.map(university => (
              <Button
                key={university.id}
                variant="outline"
                className="justify-between h-auto p-4 hover:bg-accent"
                onClick={() => openGoogleMaps(university)}
              >
                <div className="text-left">
                  <div className="font-medium text-sm">{university.name}</div>
                  <div className="text-xs text-muted-foreground">{university.location}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${
                    university.type === 'Pública' ? 'bg-red-500' : 'bg-blue-500'
                  }`}></span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </Button>
            ))}
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground pt-4 border-t">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Privadas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Públicas</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}