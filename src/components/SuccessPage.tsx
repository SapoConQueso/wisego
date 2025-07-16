import { useEffect } from "react";
import { useAuth } from "@/components/AuthProvider";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SuccessPage() {
  const { checkSubscription } = useAuth();

  useEffect(() => {
    // Check subscription status after successful payment
    setTimeout(() => {
      checkSubscription();
    }, 2000);
  }, [checkSubscription]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="text-3xl font-bold text-primary">¡Pago Exitoso!</h1>
        <p className="text-muted-foreground">
          Tu suscripción ha sido activada. Ya puedes acceder a los asistentes IA.
        </p>
        <Button onClick={() => window.location.href = "/"}>
          Volver al Dashboard
        </Button>
      </div>
    </div>
  );
}