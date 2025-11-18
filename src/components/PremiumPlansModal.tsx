import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Star } from "lucide-react";
import { useSubscription } from "@/hooks/useSubscription";
import { toast } from "sonner";

interface PremiumPlansModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const plans = [
  {
    name: 'Básico',
    price: 'S/ 19.90',
    period: '/mes',
    type: 'basic' as const,
    icon: Zap,
    color: 'text-blue-500',
    features: [
      'Tours virtuales ilimitados',
      'Hasta 50 universidades favoritas',
      'Sin anuncios',
      'Acceso a comunidad premium'
    ]
  },
  {
    name: 'Premium',
    price: 'S/ 39.90',
    period: '/mes',
    type: 'premium' as const,
    icon: Crown,
    color: 'text-yellow-500',
    popular: true,
    features: [
      'Todo lo del plan Básico',
      'Búsqueda avanzada con IA',
      'Favoritos ilimitados',
      'Soporte prioritario 24/7',
      'Alertas personalizadas de becas',
      'Comparaciones ilimitadas'
    ]
  }
];

export function PremiumPlansModal({ isOpen, onClose }: PremiumPlansModalProps) {
  const { subscription } = useSubscription();

  const handleSelectPlan = (planType: 'basic' | 'premium') => {
    toast.info('Funcionalidad de pago en desarrollo', {
      description: 'Próximamente podrás suscribirte a planes premium con Stripe'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-500" />
            Planes Premium
          </DialogTitle>
          <DialogDescription>
            Desbloquea funciones exclusivas para potenciar tu búsqueda universitaria
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {plans.map((plan) => (
            <Card 
              key={plan.type}
              className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Más Popular
                </Badge>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <plan.icon className={`h-6 w-6 ${plan.color}`} />
                  <CardTitle>{plan.name}</CardTitle>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription>
                  {plan.type === 'basic' 
                    ? 'Perfecto para estudiantes que buscan más opciones'
                    : 'La mejor experiencia con todas las funciones'}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleSelectPlan(plan.type)}
                  disabled={subscription?.plan_type === plan.type}
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {subscription?.plan_type === plan.type 
                    ? 'Plan Actual' 
                    : 'Seleccionar Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-center text-muted-foreground">
            🔒 Pago seguro procesado por Stripe. Cancela cuando quieras.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
