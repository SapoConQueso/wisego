import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, Bell, Sparkles, X } from "lucide-react";

export function NewFeatureDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen this announcement
    const hasSeenAnnouncement = localStorage.getItem('wisego-feature-v2');
    if (!hasSeenAnnouncement) {
      // Show after a brief delay
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('wisego-feature-v2', 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <Sparkles className="h-12 w-12 text-primary relative animate-bounce" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            ¡Novedad! 🎉
          </DialogTitle>
          <DialogDescription className="text-center space-y-4 pt-4">
            <p className="text-base">
              Hemos agregado nuevas funcionalidades para mejorar tu experiencia:
            </p>
            
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                <Heart className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Sistema de Favoritos</h4>
                  <p className="text-sm text-muted-foreground">
                    Guarda las universidades que más te interesan y accede a ellas fácilmente
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                <Bell className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Notificaciones Personalizadas</h4>
                  <p className="text-sm text-muted-foreground">
                    Recibe alertas sobre becas, ferias y fechas de admisión importantes
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground pt-2">
              ¡Inicia sesión para empezar a usar estas funciones!
            </p>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center pt-2">
          <Button onClick={handleClose} className="w-full">
            ¡Entendido!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
