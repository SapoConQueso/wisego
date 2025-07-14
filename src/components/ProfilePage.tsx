import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, User, Shield, Globe, Settings, CreditCard, Bell, Check, Edit } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/hooks/useUser";

interface ProfilePageProps {
  onNavigate: (view: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const { user, updateUser } = useUser();
  const [isVerified, setIsVerified] = useState(user.isVerified);
  const [dniValue, setDniValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(user.name);
  const { toast } = useToast();

  const handleVerifyDNI = () => {
    if (dniValue.length === 8 && /^\d+$/.test(dniValue)) {
      setIsVerified(true);
      updateUser({ isVerified: true });
      toast({
        title: "Verificación exitosa",
        description: "Tu cuenta ha sido verificada correctamente.",
      });
    } else {
      toast({
        title: "DNI inválido",
        description: "Por favor ingresa un DNI peruano válido de 8 dígitos.",
        variant: "destructive",
      });
    }
  };

  const handleSaveName = () => {
    if (tempName.trim()) {
      updateUser({ name: tempName.trim() });
      setIsEditingName(false);
      toast({
        title: "Nombre actualizado",
        description: "Tu nombre ha sido actualizado correctamente.",
      });
    }
  };

  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
    { code: "qu", name: "Quechua" },
    { code: "ay", name: "Aymara" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onNavigate("dashboard")}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <WiseGoLogo size="sm" />
          <span className="text-xl font-bold">Mi Perfil</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="p-4 space-y-6 max-w-4xl mx-auto">
        {/* Profile Header */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  {isEditingName ? (
                    <div className="flex items-center space-x-2">
                      <Input
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="text-xl font-semibold"
                        onKeyPress={(e) => e.key === 'Enter' && handleSaveName()}
                      />
                      <Button size="sm" onClick={handleSaveName}>
                        <Check className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <CardTitle className="text-2xl">{user.name}</CardTitle>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setIsEditingName(true)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
                <CardDescription>
                  Estudiante • Registro: {user.registrationDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}
                </CardDescription>
                <div className="flex items-center space-x-2 mt-2">
                  {isVerified ? (
                    <Badge className="bg-green-100 text-green-800 border-green-300">
                      <Check className="h-3 w-3 mr-1" />
                      Verificado
                    </Badge>
                  ) : (
                    <Badge variant="outline">Sin verificar</Badge>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Account Verification */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Verificación de Cuenta</span>
            </CardTitle>
            <CardDescription>
              Verifica tu identidad con tu DNI peruano para acceder a todas las funciones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isVerified ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="dni">Documento Nacional de Identidad (DNI)</Label>
                  <Input
                    id="dni"
                    type="text"
                    placeholder="12345678"
                    value={dniValue}
                    onChange={(e) => setDniValue(e.target.value.replace(/\D/g, '').slice(0, 8))}
                    className="mt-1"
                    maxLength={8}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Ingresa tu DNI de 8 dígitos sin espacios ni guiones
                  </p>
                </div>
                <Button onClick={handleVerifyDNI} className="w-full">
                  Verificar DNI
                </Button>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-green-600 font-medium">¡Cuenta verificada exitosamente!</p>
                <p className="text-sm text-muted-foreground">
                  Ahora tienes acceso completo a todas las funciones de WiseGO
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Language Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Idioma</span>
            </CardTitle>
            <CardDescription>
              Selecciona tu idioma preferido para la interfaz
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="language">Idioma de la interfaz</Label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <p className="text-xs text-muted-foreground">
                Los cambios se aplicarán automáticamente
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Accesibilidad</span>
            </CardTitle>
            <CardDescription>
              Personaliza la experiencia según tus necesidades
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications">Notificaciones</Label>
                <p className="text-sm text-muted-foreground">
                  Recibe alertas sobre eventos y actualizaciones
                </p>
              </div>
              <Switch 
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="dark-mode">Modo oscuro</Label>
                <p className="text-sm text-muted-foreground">
                  Interfaz con colores más suaves para los ojos
                </p>
              </div>
              <Switch 
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>

            <div className="space-y-2">
              <Label>Tamaño de texto</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm">Pequeño</Button>
                <Button variant="default" size="sm">Normal</Button>
                <Button variant="outline" size="sm">Grande</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Contraste</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="default" size="sm">Normal</Button>
                <Button variant="outline" size="sm">Alto</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Gestión de Cuenta</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Bell className="h-4 w-4 mr-2" />
              Preferencias de notificación
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Shield className="h-4 w-4 mr-2" />
              Privacidad y seguridad
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <User className="h-4 w-4 mr-2" />
              Editar información personal
            </Button>
            <Button variant="destructive" className="w-full justify-start mt-4">
              Cerrar sesión
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}