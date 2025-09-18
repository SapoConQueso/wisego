import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Calendar, FileText, Clock, Award } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface ScholarshipGuidePageProps {
  onNavigate: (view: string) => void;
}

export function ScholarshipGuidePage({ onNavigate }: ScholarshipGuidePageProps) {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm"
                  onClick={() => onNavigate("dashboard")}
                  className="text-primary-foreground hover:bg-primary-foreground/10">
            <ArrowLeft className="h-5 w-5"/>
          </Button>
          <WiseGoLogo size="sm"/>
          <span className="text-xl font-bold">{t.scholarshipGuide.title}</span>
        </div>
        <ThemeToggle/>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">{t.scholarshipGuide.title}</h1>
          <p className="text-xl text-muted-foreground">{t.scholarshipGuide.subtitle}</p>
        </div>

        {/* Pasos del proceso */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary"/>
            {t.scholarshipGuide.steps}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <CardTitle className="text-lg">{t.scholarshipGuide.step1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.scholarshipGuide.step1Desc}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary-foreground font-bold text-lg">2</span>
                </div>
                <CardTitle className="text-lg">{t.scholarshipGuide.step2Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.scholarshipGuide.step2Desc}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-accent-foreground font-bold text-lg">3</span>
                </div>
                <CardTitle className="text-lg">{t.scholarshipGuide.step3Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.scholarshipGuide.step3Desc}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-600 font-bold text-lg">4</span>
                </div>
                <CardTitle className="text-lg">{t.scholarshipGuide.step4Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.scholarshipGuide.step4Desc}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Documentos requeridos */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary"/>
            {t.scholarshipGuide.documentsNeeded}
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>{t.scholarshipGuide.checklist}</CardTitle>
              <CardDescription>
                Asegúrate de tener todos estos documentos preparados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  t.scholarshipGuide.academicRecord,
                  t.scholarshipGuide.identityDoc,
                  t.scholarshipGuide.incomeProof,
                  t.scholarshipGuide.personalStatement,
                  t.scholarshipGuide.recommendationLetters
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500"/>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fechas importantes */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary"/>
            {t.scholarshipGuide.deadlines}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600"/>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">Nacional</Badge>
                </div>
                <CardTitle className="text-blue-800 dark:text-blue-200">{t.scholarshipGuide.nationalScholarships}</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600"/>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">Privada</Badge>
                </div>
                <CardTitle className="text-green-800 dark:text-green-200">{t.scholarshipGuide.privateScholarships}</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-600"/>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">Universitaria</Badge>
                </div>
                <CardTitle className="text-purple-800 dark:text-purple-200">{t.scholarshipGuide.universityScholarships}</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}