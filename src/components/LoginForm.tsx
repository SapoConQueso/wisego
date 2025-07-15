import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, Mail } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onLogin: () => void;
  onGuestAccess: () => void;
}

export function LoginForm({ onSwitchToRegister, onLogin, onGuestAccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center mb-8">
        <WiseGoLogo size="lg" className="mb-4" />
        <h1 className="text-4xl font-bold text-primary">WiseGO!</h1>
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
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold"
          >
            Iniciar Sesión ▶
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
        
        <p className="text-xs text-white/80 text-center">
          ¿Has olvidado tu contraseña?
        </p>
        
        <div className="space-y-2">
          <Button
            variant="ghost" 
            onClick={onSwitchToRegister}
            className="w-full text-white hover:text-white hover:bg-white/10 rounded-full"
          >
            Registrarse
          </Button>
          
          <Button
            variant="outline" 
            onClick={onGuestAccess}
            className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-full"
          >
            Acceder como Invitado
          </Button>
        </div>
      </div>
    </div>
  );
}