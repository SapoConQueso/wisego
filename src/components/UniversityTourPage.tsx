import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Eye, Route, Building2, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface UniversityTourPageProps {
  onNavigate: (view: string) => void;
}

export function UniversityTourPage({ onNavigate }: UniversityTourPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-4 flex items-center justify-between animate-fade-in">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onNavigate("map")}
            className="text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <WiseGoLogo size="sm" />
          <span className="text-xl font-title font-bold gradient-text">Tours Universitarios</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="p-4 space-y-6">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center space-y-4 mb-8 animate-fade-in">
            <h1 className="text-4xl font-title font-bold gradient-text">
              Explora Universidades en Detalle
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Descubre cada campus como si estuvieras ahí. Próximamente: tours virtuales 3D y recorridos interactivos.
            </p>
          </div>

          {/* Features Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-title">Tours Virtuales 3D</CardTitle>
                    <CardDescription>Explora cada aula, laboratorio y espacio</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Recorre virtualmente las instalaciones universitarias con tecnología de realidad virtual de última generación.
                </p>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Función en desarrollo</p>
                  <p className="text-xs text-muted-foreground mt-1">Disponible próximamente</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Route className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-title">Recorridos Interactivos</CardTitle>
                    <CardDescription>Rutas personalizadas por intereses</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Crea rutas personalizadas basadas en tus carreras de interés y descubre los espacios más relevantes.
                </p>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Función en desarrollo</p>
                  <p className="text-xs text-muted-foreground mt-1">Disponible próximamente</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Section */}
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-title font-bold mb-4">
                ¡Estamos trabajando en algo increíble!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestro equipo está desarrollando una experiencia de tours universitarios completamente inmersiva. 
                Podrás explorar cada universidad como si estuvieras caminando por sus pasillos.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={() => onNavigate("map")}
                  className="bg-primary hover:bg-primary/90"
                >
                  Volver al Mapa
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onNavigate("profile")}
                >
                  Ver Perfil
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}