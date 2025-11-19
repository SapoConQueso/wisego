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
  // Perú - Lima
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
  },
  {
    id: "6",
    name: "Universidad Nacional de Ingeniería",
    location: "Rímac, Lima",
    type: "Pública",
    coordinates: [-77.0489, -12.0219]
  },
  {
    id: "7",
    name: "Universidad Peruana de Ciencias Aplicadas",
    location: "Santiago de Surco, Lima",
    type: "Privada",
    coordinates: [-76.9922, -12.1083]
  },
  {
    id: "8",
    name: "Universidad Nacional Agraria La Molina",
    location: "La Molina, Lima",
    type: "Pública",
    coordinates: [-76.9461, -12.0828]
  },
  // Perú - Provincias
  {
    id: "9",
    name: "Universidad Nacional de Trujillo",
    location: "Trujillo, La Libertad",
    type: "Pública",
    coordinates: [-79.0286, -8.1116]
  },
  {
    id: "10",
    name: "Universidad Nacional San Agustín de Arequipa",
    location: "Arequipa, Arequipa",
    type: "Pública",
    coordinates: [-71.5375, -16.4090]
  },
  {
    id: "11",
    name: "Universidad Nacional del Altiplano",
    location: "Puno, Puno",
    type: "Pública",
    coordinates: [-70.0199, -15.8402]
  },
  {
    id: "12",
    name: "Universidad Nacional San Antonio Abad del Cusco",
    location: "Cusco, Cusco",
    type: "Pública",
    coordinates: [-71.9675, -13.5319]
  },
  // Internacional - Latinoamérica
  {
    id: "13",
    name: "Universidad de Buenos Aires",
    location: "Buenos Aires, Argentina",
    type: "Pública",
    coordinates: [-58.3816, -34.6037]
  },
  {
    id: "14",
    name: "Universidad Nacional Autónoma de México",
    location: "Ciudad de México, México",
    type: "Pública",
    coordinates: [-99.1332, 19.4326]
  },
  {
    id: "15",
    name: "Universidad de São Paulo",
    location: "São Paulo, Brasil",
    type: "Pública",
    coordinates: [-46.6333, -23.5505]
  },
  {
    id: "16",
    name: "Universidad de Chile",
    location: "Santiago, Chile",
    type: "Pública",
    coordinates: [-70.6693, -33.4489]
  },
  {
    id: "17",
    name: "Universidad de Los Andes",
    location: "Bogotá, Colombia",
    type: "Privada",
    coordinates: [-74.0721, 4.7110]
  },
  // Internacional - Europa
  {
    id: "18",
    name: "Universidad de Barcelona",
    location: "Barcelona, España",
    type: "Pública",
    coordinates: [2.1734, 41.3851]
  },
  {
    id: "19",
    name: "Universidad Complutense de Madrid",
    location: "Madrid, España",
    type: "Pública",
    coordinates: [-3.7038, 40.4168]
  },
  {
    id: "20",
    name: "Universidad de Salamanca",
    location: "Salamanca, España",
    type: "Pública",
    coordinates: [-5.6640, 40.9651]
  },
  // Internacional - Norteamérica
  {
    id: "21",
    name: "Harvard University",
    location: "Cambridge, Massachusetts, USA",
    type: "Privada",
    coordinates: [-71.0589, 42.3601]
  },
  {
    id: "22",
    name: "MIT",
    location: "Cambridge, Massachusetts, USA",
    type: "Privada",
    coordinates: [-71.0942, 42.3601]
  },
  {
    id: "23",
    name: "Stanford University",
    location: "Stanford, California, USA",
    type: "Privada",
    coordinates: [-122.1697, 37.4275]
  },
  {
    id: "24",
    name: "University of Toronto",
    location: "Toronto, Ontario, Canadá",
    type: "Pública",
    coordinates: [-79.3832, 43.6532]
  }
];

const openGoogleMaps = (university: University) => {
  const query = encodeURIComponent(`${university.name} ${university.location}`);
  const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
  window.open(url, '_blank');
};

export function MapComponent() {
  return (
    <div className="relative w-full space-y-8">
      {/* University Counter Badge */}
      <div className="flex justify-center mb-4">
        <Badge variant="secondary" className="text-lg px-6 py-2 font-semibold">
          <MapPin className="h-5 w-5 mr-2" />
          {universities.length} Universidades Disponibles
        </Badge>
      </div>

      {/* Animated Location Header */}
      <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 overflow-hidden mb-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-6 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-10 right-14 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-8 left-20 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-6 right-10 w-2.5 h-2.5 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Moving Location Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <MapPin className="h-10 w-10 text-primary animate-bounce" />
              <div className="absolute -inset-3 bg-primary/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center py-4">
          <h3 className="text-2xl font-title font-bold text-primary mb-3">
            Explora Universidades Cerca de Ti
          </h3>
          <p className="text-muted-foreground text-base">
            Descubre las mejores opciones académicas en tu zona
          </p>
        </div>
      </div>

      <Card className="min-h-[400px]">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center space-x-3 text-xl">
            <MapPin className="h-6 w-6" />
            <span>Ubicaciones de Universidades</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-base mb-6">
            Encuentra la ubicación exacta de cada universidad en Google Maps
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {universities.map(university => (
              <Button
                key={university.id}
                variant="outline"
                className="justify-between h-auto p-5 hover:bg-accent transition-all duration-200 hover:shadow-md"
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
          
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground pt-6 border-t mt-6">
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