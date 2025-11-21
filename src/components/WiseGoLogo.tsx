import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface WiseGoLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WiseGoLogo({ size = "md", className = "" }: WiseGoLogoProps) {
  const [clickCount, setClickCount] = useState(0);
  const { toast } = useToast();
  
  const dimensions = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  }[size];

  const handleClick = async () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 10) {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Error",
          description: "Debes iniciar sesión primero",
          variant: "destructive",
        });
        setClickCount(0);
        return;
      }

      try {
        // Check if user already has admin role
        const { data: existingRole } = await supabase
          .from('user_roles')
          .select('*')
          .eq('user_id', user.id)
          .eq('role', 'admin')
          .maybeSingle();

        if (existingRole) {
          toast({
            title: "Ya eres admin",
            description: "Ya tienes permisos de administrador",
          });
          setClickCount(0);
          return;
        }

        // Grant admin role using RPC or direct insert
        const { error: insertError } = await supabase
          .from('user_roles')
          .insert({
            user_id: user.id,
            role: 'admin'
          });

        if (insertError) {
          console.error('Error granting admin:', insertError);
          toast({
            title: "Error",
            description: "No se pudo otorgar el rol de admin. Por favor contacta al administrador.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "¡Felicidades! 🎉",
            description: "Ahora eres administrador con acceso premium. Recarga la página para ver los cambios.",
            duration: 5000,
          });
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        toast({
          title: "Error inesperado",
          description: "Ocurrió un error. Por favor intenta de nuevo.",
          variant: "destructive",
        });
      }
      
      setClickCount(0);
    } else if (newCount >= 5) {
      toast({
        title: `${10 - newCount} clicks más...`,
        description: "Sigue haciendo click en el logo",
      });
    }
  };

  return (
    <img 
      src="/lovable-uploads/2ea8f684-4e74-415b-b5d2-9026d653377f.png"
      alt="WiseGO Logo"
      onClick={handleClick}
      className={`${dimensions} ${className} object-contain rounded-full border-2 border-gray-200 shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200`}
    />
  );
}