import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, User, UserCircle } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
  onSwitchToBirthdate: () => void;
}

export function RegisterForm({ onSwitchToLogin, onSwitchToBirthdate }: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSwitchToBirthdate();
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

          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Nombre Completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="pl-10 bg-white border-0 rounded-full"
              required
            />
          </div>

          <div className="relative">
            <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Nombre de Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 bg-white border-0 rounded-full"
              required
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold"
          >
            Registrarse ▶
          </Button>
        </form>
        
        <Button
          variant="ghost" 
          onClick={onSwitchToLogin}
          className="w-full text-white hover:text-white hover:bg-white/10 rounded-full"
        >
          Iniciar Sesión
        </Button>
      </div>
    </div>
  );
}