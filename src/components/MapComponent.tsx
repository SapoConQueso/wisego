import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

export function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [accessToken, setAccessToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !accessToken) return;

    // Set Mapbox access token
    mapboxgl.accessToken = accessToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-77.0428, -12.0464], // Lima, Peru
        zoom: 11,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add markers for universities
      universities.forEach(university => {
        const markerColor = university.type === 'Pública' ? '#e74c3c' : '#3498db';
        
        // Create marker
        const marker = new mapboxgl.Marker({ color: markerColor })
          .setLngLat(university.coordinates)
          .addTo(map.current!);

        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-bold text-sm">${university.name}</h3>
              <p class="text-xs text-gray-600">${university.location}</p>
              <p class="text-xs"><span class="font-medium">Tipo:</span> ${university.type}</p>
            </div>
          `);

        marker.setPopup(popup);
      });

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      alert('Error al inicializar el mapa. Verifica tu token de Mapbox.');
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Configurar Mapbox</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Para usar el mapa interactivo, necesitas un token público de Mapbox.
            </p>
            <Input
              type="text"
              placeholder="Ingresa tu token público de Mapbox"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
            />
            <div className="space-y-2">
              <Button 
                onClick={initializeMap} 
                disabled={!accessToken}
                className="w-full"
              >
                Cargar Mapa
              </Button>
              <p className="text-xs text-muted-foreground">
                Obtén tu token en{' '}
                <a 
                  href="https://mapbox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative h-96 w-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      <div className="absolute top-4 left-4 bg-card p-2 rounded shadow-lg">
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Privadas</span>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span>Públicas</span>
        </div>
      </div>
    </div>
  );
}