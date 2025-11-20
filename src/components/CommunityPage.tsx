import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { 
  ArrowLeft, 
  MessageCircle, 
  ChevronUp, 
  ChevronDown, 
  Plus,
  CheckCircle,
  Clock
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { UserSession } from "@/hooks/useSession";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { useCommunityPosts } from "@/hooks/useCommunityPosts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface CommunityPageProps {
  onNavigate: (view: string) => void;
  userSession: UserSession;
}

export function CommunityPage({ onNavigate, userSession }: CommunityPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "testimony" | "question">("all");
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostType, setNewPostType] = useState<'testimony' | 'question' | 'general'>('general');
  const [newPostUniversity, setNewPostUniversity] = useState("");
  const [newPostCareer, setNewPostCareer] = useState("");
  
  const { toast } = useToast();
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  
  const { posts, isLoading, createPost, votePost } = useCommunityPosts(
    selectedFilter === 'all' ? undefined : selectedFilter
  );

  const handleNewPost = async () => {
    if (userSession.isGuest) {
      toast({
        title: t.community.restrictedAccess,
        description: t.community.guestsCannotPost,
        variant: "destructive",
      });
      return;
    }

    if (!newPostContent.trim() || !newPostUniversity.trim() || !newPostCareer.trim()) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    const result = await createPost({
      university_name: newPostUniversity,
      career: newPostCareer,
      content: newPostContent,
      post_type: newPostType
    });

    if (result) {
      setNewPostContent("");
      setNewPostUniversity("");
      setNewPostCareer("");
      setShowNewPost(false);
    }
  };

  const handleVote = (postId: string, voteType: 'up' | 'down') => {
    if (userSession.isGuest) {
      toast({
        title: t.community.restrictedAccess,
        description: t.community.guestsCannotVote,
        variant: "destructive",
      });
      return;
    }
    votePost(postId, voteType);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate("dashboard")}
              aria-label={t.nav.about}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <WiseGoLogo />
          </div>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto p-4 space-y-6">
        {/* Page Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <MessageCircle className="h-8 w-8 text-primary" />
            {t.community.title}
          </h1>
          <p className="text-muted-foreground">Comparte y descubre experiencias universitarias</p>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <Button
            variant={selectedFilter === "all" ? "default" : "outline"}
            onClick={() => setSelectedFilter("all")}
          >
            {t.community.all}
          </Button>
          <Button
            variant={selectedFilter === "testimony" ? "default" : "outline"}
            onClick={() => setSelectedFilter("testimony")}
          >
            {t.community.testimonies}
          </Button>
          <Button
            variant={selectedFilter === "question" ? "default" : "outline"}
            onClick={() => setSelectedFilter("question")}
          >
            {t.community.questions}
          </Button>
        </div>

        {/* New Post Button */}
        {!userSession.isGuest && !showNewPost && (
          <Button onClick={() => setShowNewPost(true)} className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Crear Post
          </Button>
        )}

        {/* New Post Form */}
        {showNewPost && (
          <Card>
            <CardHeader>
              <CardTitle>Nuevo Post</CardTitle>
              <CardDescription>Comparte tu experiencia o haz una pregunta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Universidad</label>
                  <Input
                    value={newPostUniversity}
                    onChange={(e) => setNewPostUniversity(e.target.value)}
                    placeholder="Ej: UNMSM, PUCP..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Carrera</label>
                  <Input
                    value={newPostCareer}
                    onChange={(e) => setNewPostCareer(e.target.value)}
                    placeholder="Ej: Ingeniería..."
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Tipo de Post</label>
                <Select value={newPostType} onValueChange={(v: any) => setNewPostType(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="testimony">Testimonio</SelectItem>
                    <SelectItem value="question">Pregunta</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Tu mensaje</label>
                <Textarea
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="Escribe aquí tu experiencia o pregunta..."
                  rows={5}
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleNewPost}>
                  {t.community.publish}
                </Button>
                <Button variant="outline" onClick={() => setShowNewPost(false)}>
                  {t.community.cancel}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Posts List */}
        {isLoading ? (
          <div className="text-center py-8">Cargando posts...</div>
        ) : posts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Aún no hay posts en esta categoría.</p>
              <p className="text-sm mt-2">¡Sé el primero en compartir!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-200 animate-smooth-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {(post.profiles?.full_name || post.profiles?.username || 'U')[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">
                            {post.profiles?.full_name || post.profiles?.username || 'Usuario'}
                          </span>
                          <Badge variant="secondary">{post.university_name}</Badge>
                          {post.post_type === 'testimony' && (
                            <Badge variant="default" className="gap-1">
                              <CheckCircle className="h-3 w-3" />
                              Testimonio
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{post.career}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {new Date(post.created_at).toLocaleDateString('es-PE')}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{post.content}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote(post.id, 'up')}
                        className={post.user_vote === 'up' ? 'text-primary' : ''}
                      >
                        <ChevronUp className="h-5 w-5" />
                      </Button>
                      <span className="font-semibold">{post.votes_count}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote(post.id, 'down')}
                        className={post.user_vote === 'down' ? 'text-destructive' : ''}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments_count} comentarios
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
