import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Lock, Mail, ChevronDown } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";
import { useAuth } from "@/components/AuthProvider";
import { toast } from "sonner";

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onGuestLogin: () => void;
}

export function LoginForm({ onSwitchToRegister, onGuestLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signInAsGuest } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await signIn(email, password);
      if (error) {
        toast.error(error);
      } else {
        toast.success("¡Bienvenido de vuelta!");
      }
    } catch (error) {
      toast.error("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    signInAsGuest();
    onGuestLogin();
    toast.success("¡Bienvenido como invitado! Tienes acceso completo a todas las funciones.");
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center mb-8">
        <WiseGoLogo size="lg" className="mb-4" />
        <h1 className="text-4xl font-bold text-primary">WiseGO!</h1>
        
        {/* Disclaimer Desplegable */}
        <Collapsible className="mt-6 max-w-md">
          <CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
            Aviso Legal
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="p-4 bg-muted/10 border border-muted/20 rounded-lg">
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                La información proporcionada en esta plataforma puede no ser verídica y se presenta únicamente con fines ilustrativos y de demostración. Los usuarios deben verificar independientemente cualquier información antes de tomar decisiones basadas en ella.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      <div className="bg-primary rounded-xl p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-white border-0 rounded-full"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 bg-white border-0 rounded-full"
              required
            />
          </div>
          
          <Button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold"
          >
            {isLoading ? "Iniciando..." : "Iniciar Sesión ▶"}
          </Button>
        </form>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="remember" 
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            className="border-white data-[state=checked]:bg-accent data-[state=checked]:border-accent"
          />
          <label htmlFor="remember" className="text-sm text-white">
            Guardar datos de inicio de sesión
          </label>
        </div>
        
        <Button
          variant="ghost"
          className="text-xs text-white/80 hover:text-white hover:bg-white/10 p-0 h-auto"
          onClick={() => {
            // Simulate forgot password action
            alert("Se ha enviado un enlace de recuperación a tu correo electrónico.");
          }}
        >
          ¿Has olvidado tu contraseña?
        </Button>
        
        <div className="space-y-2">
          <Button
            variant="ghost" 
            onClick={onSwitchToRegister}
            className="w-full text-white hover:text-white hover:bg-white/10 rounded-full"
          >
            Registrarse
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-primary px-2 text-white/60">O</span>
            </div>
          </div>
          
          <Button
            onClick={handleGuestLogin}
            className="w-full bg-wisego-orange hover:bg-wisego-orange/90 text-white rounded-full font-semibold"
          >
            🎯 Acceder como Invitado (Demo Completa)
          </Button>
          
        </div>
      </div>
    </div>
  );
}