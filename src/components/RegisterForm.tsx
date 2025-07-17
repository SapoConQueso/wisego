import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, User, UserCircle } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";
import { useAuth } from "@/components/AuthProvider";
import { toast } from "sonner";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { signUp } = useAuth();

  // Input sanitization functions
  const sanitizeInput = (input: string) => {
    return input.trim().replace(/[<>\"'&]/g, '');
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    return { hasMinLength, hasUpperCase, hasLowerCase, hasNumbers };
  };

  const validateUsername = (username: string) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
  };

  const handleInputChange = (field: string, value: string) => {
    const sanitized = sanitizeInput(value);
    
    switch (field) {
      case 'email':
        setEmail(sanitized.toLowerCase());
        if (errors.email && validateEmail(sanitized)) {
          setErrors(prev => ({ ...prev, email: '' }));
        }
        break;
      case 'password':
        setPassword(value); // Don't sanitize password
        if (errors.password && validatePassword(value).hasMinLength) {
          setErrors(prev => ({ ...prev, password: '' }));
        }
        break;
      case 'fullName':
        setFullName(sanitized);
        if (errors.fullName && sanitized.length > 0) {
          setErrors(prev => ({ ...prev, fullName: '' }));
        }
        break;
      case 'username':
        setUsername(sanitized.toLowerCase());
        if (errors.username && validateUsername(sanitized)) {
          setErrors(prev => ({ ...prev, username: '' }));
        }
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    const newErrors: {[key: string]: string} = {};
    
    if (!validateEmail(email)) {
      newErrors.email = "Formato de email inválido";
    }
    
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.hasMinLength) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }
    
    if (!fullName.trim()) {
      newErrors.fullName = "El nombre completo es obligatorio";
    }
    
    if (!validateUsername(username)) {
      newErrors.username = "El nombre de usuario debe tener 3-20 caracteres (solo letras, números y _)";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsLoading(true);
    
    try {
      const { error } = await signUp(email, password, fullName, username);
      if (error) {
        toast.error(error);
      } else {
        toast.success("¡Cuenta creada! Revisa tu email para confirmar tu cuenta.");
        // Clear form on success
        setEmail("");
        setPassword("");
        setFullName("");
        setUsername("");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Error al crear la cuenta");
    } finally {
      setIsLoading(false);
    }
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
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`pl-10 bg-white border-0 rounded-full ${errors.email ? 'border-2 border-red-500' : ''}`}
              required
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-xs text-red-200 mt-1 ml-3">{errors.email}</p>
            )}
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="password"
              placeholder="Contraseña (mín. 8 caracteres)"
              value={password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className={`pl-10 bg-white border-0 rounded-full ${errors.password ? 'border-2 border-red-500' : ''}`}
              required
              autoComplete="new-password"
              minLength={8}
            />
            {errors.password && (
              <p className="text-xs text-red-200 mt-1 ml-3">{errors.password}</p>
            )}
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Nombre Completo"
              value={fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`pl-10 bg-white border-0 rounded-full ${errors.fullName ? 'border-2 border-red-500' : ''}`}
              required
              autoComplete="name"
              maxLength={100}
            />
            {errors.fullName && (
              <p className="text-xs text-red-200 mt-1 ml-3">{errors.fullName}</p>
            )}
          </div>

          <div className="relative">
            <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Nombre de Usuario (3-20 caracteres)"
              value={username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className={`pl-10 bg-white border-0 rounded-full ${errors.username ? 'border-2 border-red-500' : ''}`}
              required
              autoComplete="username"
              minLength={3}
              maxLength={20}
              pattern="[a-zA-Z0-9_]+"
            />
            {errors.username && (
              <p className="text-xs text-red-200 mt-1 ml-3">{errors.username}</p>
            )}
          </div>
          
          <Button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold"
          >
            {isLoading ? "Creando cuenta..." : "Registrarse ▶"}
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