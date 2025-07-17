import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, User, Shield, Globe, Settings, CreditCard, Bell, Check, Edit, Crown, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/AuthProvider";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface ProfilePageProps {
  onNavigate: (view: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const { user, session, isSubscribed, createCheckout, signOut, openCustomerPortal, isGuest } = useAuth();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const [isVerified, setIsVerified] = useState(false);
  const [dniValue, setDniValue] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(user?.user_metadata?.full_name || "");
  const [fontSize, setFontSize] = useState("normal");
  const [contrast, setContrast] = useState("normal");
  const { toast } = useToast();
  const t = getTranslation(currentLanguage);

  // Apply theme changes based on settings
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Apply font size changes
  useEffect(() => {
    const root = document.documentElement;
    switch(fontSize) {
      case "small":
        root.style.fontSize = "14px";
        break;
      case "large":
        root.style.fontSize = "18px";
        break;
      default:
        root.style.fontSize = "16px";
    }
  }, [fontSize]);

  // Apply contrast changes
  useEffect(() => {
    const root = document.documentElement;
    if (contrast === "high") {
      root.style.filter = "contrast(1.5)";
    } else {
      root.style.filter = "none";
    }
  }, [contrast]);

  const handleVerifyDNI = () => {
    if (dniValue.length === 8 && /^\d+$/.test(dniValue)) {
      setIsVerified(true);
      toast({
        title: t.profile.verificationSuccess,
        description: t.profile.verificationSuccess,
      });
    } else {
      toast({
        title: t.common.error,
        description: t.profile.invalidDNI,
        variant: "destructive",
      });
    }
  };

  const handleSaveName = () => {
    if (tempName.trim()) {
      setIsEditingName(false);
      toast({
        title: t.profile.nameUpdated,
        description: t.profile.nameUpdatedDesc,
      });
    }
  };

  const handleSubscribe = async () => {
    try {
      await createCheckout();
      toast({
        title: "Redirigiendo a Stripe",
        description: "Te redirigiremos a la página de pago segura.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo iniciar el proceso de suscripción.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteAccount = async () => {
    if (confirm("¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.")) {
      try {
        await signOut();
        toast({
          title: "Cuenta eliminada",
          description: "Tu cuenta ha sido eliminada exitosamente.",
        });
        onNavigate("login");
      } catch (error) {
        toast({
          title: "Error",
          description: "No se pudo eliminar la cuenta.",
          variant: "destructive",
        });
      }
    }
  };


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
          <span className="text-xl font-bold">{t.profile.myProfile}</span>
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
                        <CardTitle className="text-2xl">
                          {isGuest ? t.profile.guestUser : (user?.user_metadata?.full_name || user?.email || t.profile.user)}
                        </CardTitle>
                        {!isGuest && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsEditingName(true)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        )}
                      </>
                    )}
                 </div>
                  <CardDescription>
                    {isGuest ? t.profile.guestDescription : `${t.profile.student} • ${t.profile.registration}: ${user?.created_at ? new Date(user.created_at).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long' }) : t.profile.recent}`}
                  </CardDescription>
                <div className="flex items-center space-x-2 mt-2">
                  {isGuest ? (
                    <Badge className="bg-wisego-orange text-white">
                      <Crown className="h-3 w-3 mr-1" />
                      {t.profile.demoPremium}
                    </Badge>
                  ) : isVerified ? (
                    <Badge className="bg-green-100 text-green-800 border-green-300">
                      <Check className="h-3 w-3 mr-1" />
                      {t.profile.verified}
                    </Badge>
                  ) : (
                    <Badge variant="outline">{t.profile.unverified}</Badge>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Account Verification */}
        {user && !isGuest && (
          <Card>
            <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>{t.profile.accountVerification}</span>
                </CardTitle>
              <CardDescription>
                  {t.profile.verifyIdentity}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isVerified ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="dni">{t.profile.document}</Label>
                    <Input
                      id="dni"
                      type="text"
                      placeholder={t.profile.documentPlaceholder}
                      value={dniValue}
                      onChange={(e) => setDniValue(e.target.value.replace(/\D/g, '').slice(0, 8))}
                      className="mt-1"
                      maxLength={8}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {t.profile.documentHelp}
                    </p>
                  </div>
                  <Button onClick={handleVerifyDNI} className="w-full">
                    {t.profile.verifyDNI}
                  </Button>
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-green-600 font-medium">{t.profile.verificationSuccess}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.profile.verificationSuccessDescription}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Language Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>{t.profile.language}</span>
            </CardTitle>
            <CardDescription>
              {t.profile.selectLanguage}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="language">{t.profile.interfaceLanguage}</Label>
                <Select value={currentLanguage} onValueChange={changeLanguage}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {supportedLanguages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.nativeName}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <p className="text-xs text-muted-foreground">
                {t.profile.languageChangeNote}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>{t.profile.accessibility}</span>
            </CardTitle>
            <CardDescription>
              {t.profile.customizeExperience}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications">{t.profile.notifications}</Label>
                <p className="text-sm text-muted-foreground">
                  {t.profile.notificationsDesc}
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
                <Label htmlFor="dark-mode">{t.profile.darkMode}</Label>
                <p className="text-sm text-muted-foreground">
                  {t.profile.darkModeDesc}
                </p>
              </div>
              <Switch 
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>

            <div className="space-y-2">
              <Label>{t.profile.textSize}</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button 
                  variant={fontSize === "small" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setFontSize("small")}
                >
                  {t.profile.small}
                </Button>
                <Button 
                  variant={fontSize === "normal" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setFontSize("normal")}
                >
                  {t.profile.normal}
                </Button>
                <Button 
                  variant={fontSize === "large" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setFontSize("large")}
                >
                  {t.profile.large}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>{t.profile.contrast}</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant={contrast === "normal" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setContrast("normal")}
                >
                  {t.profile.normal}
                </Button>
                <Button 
                  variant={contrast === "high" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setContrast("high")}
                >
                  {t.profile.high}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premium Subscription */}
        {(user || isGuest) && (
          <Card className={isSubscribed ? "border-wisego-orange bg-gradient-to-r from-wisego-orange/5 to-primary/5" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-wisego-orange" />
                  <span>Suscripción Premium</span>
                </div>
                {isSubscribed && (
                  <Badge className="bg-wisego-orange text-white">
                    <Crown className="h-3 w-3 mr-1" />
                    Premium
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>
                {isGuest 
                  ? "Modo demostración: Acceso completo a todas las funciones premium"
                  : isSubscribed 
                    ? "Tienes acceso completo a Test Vocacional IA y Chat IA General"
                    : "Accede a Test Vocacional IA y Chat IA General por S/25 al mes"
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isGuest ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-wisego-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-8 w-8 text-wisego-orange" />
                  </div>
                  <p className="text-wisego-orange font-medium">¡Modo Demo Premium Activo!</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tienes acceso completo a todas las funciones para la demostración
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      toast({
                        title: "Función de demostración",
                        description: "Regístrate para acceder a suscripciones reales.",
                      });
                    }}
                  >
                    Crear Cuenta Real
                  </Button>
                </div>
              ) : !isSubscribed ? (
                <>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Beneficios Premium:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Test Vocacional IA especializado</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Chat IA General para consultas académicas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Recomendaciones personalizadas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Soporte prioritario</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Precio mensual:</span>
                      <span className="text-2xl font-bold text-wisego-orange">S/25</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-wisego-orange hover:bg-wisego-orange/90 text-white"
                      onClick={handleSubscribe}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Suscribirse a Premium
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Puedes cancelar en cualquier momento. Se renovará automáticamente cada mes.
                    </p>
                  </div>
                </>
              ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-wisego-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-wisego-orange" />
                </div>
                <p className="text-wisego-orange font-medium">¡Eres usuario Premium!</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Disfruta de todos los beneficios exclusivos
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => openCustomerPortal()}
                >
                  Gestionar Suscripción
                </Button>
              </div>
            )}
          </CardContent>
          </Card>
        )}

        {/* Account Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Gestión de Cuenta</span>
            </CardTitle>
            <CardDescription>
              Opciones para gestionar tu cuenta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setIsEditingName(true)}
            >
              <Edit className="h-4 w-4 mr-2" />
              Cambiar Nombre
            </Button>
            <Button 
              variant="destructive" 
              className="w-full"
              onClick={handleDeleteAccount}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Eliminar Cuenta
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}