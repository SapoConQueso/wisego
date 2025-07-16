import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { 
  ArrowLeft, 
  Heart, 
  MessageCircle, 
  Share, 
  ChevronUp, 
  ChevronDown, 
  Plus, 
  Send,
  Star,
  CheckCircle,
  UserCheck,
  Clock,
  Reply
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { UserSession } from "@/hooks/useSession";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface CommunityPageProps {
  onNavigate: (view: string) => void;
  userSession: UserSession;
}

interface Post {
  id: number;
  author: string;
  authorType: "student" | "alumni" | "verified";
  university: string;
  career: string;
  content: string;
  timestamp: Date;
  votes: number;
  comments: Comment[];
  isTestimony?: boolean;
  tags: string[];
  hasVoted?: "up" | "down" | null;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: Date;
  votes: number;
}

export function CommunityPage({ onNavigate, userSession }: CommunityPageProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "testimonies" | "questions">("all");
  const [showNewPost, setShowNewPost] = useState(false);
  const [commentText, setCommentText] = useState<{ [key: number]: string }>({});
  const { toast } = useToast();
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  // Sample posts data
  useEffect(() => {
    const samplePosts: Post[] = [
      {
        id: 1,
        author: "María González",
        authorType: "alumni",
        university: "UNMSM",
        career: "Ingeniería de Sistemas",
        content: "¡Hola a todos! Soy egresada de Ingeniería de Sistemas de San Marcos. La carrera me ha abierto muchas puertas en el mundo tech. El plan de estudios es muy completo y los profesores son excelentes. Si tienen dudas sobre la carrera, pueden preguntarme.",
        timestamp: new Date("2024-01-15T10:30:00"),
        votes: 24,
        comments: [
          {
            id: 1,
            author: "Carlos López",
            content: "¿Qué tan difíciles son los primeros ciclos?",
            timestamp: new Date("2024-01-15T11:00:00"),
            votes: 5
          }
        ],
        isTestimony: true,
        tags: ["UNMSM", "Ingeniería", "Sistemas"],
        hasVoted: null
      },
      {
        id: 2,
        author: "Diego Fernández",
        authorType: "student",
        university: "UNI",
        career: "Ingeniería Civil",
        content: "¿Alguien sabe cuándo abren las inscripciones para el próximo semestre en UNI? No encuentro información actualizada en la página web.",
        timestamp: new Date("2024-01-14T15:45:00"),
        votes: 8,
        comments: [],
        isTestimony: false,
        tags: ["UNI", "Inscripciones"],
        hasVoted: null
      },
      {
        id: 3,
        author: "Ana Rodríguez",
        authorType: "verified",
        university: "PUCP",
        career: "Psicología",
        content: "Como egresada de Psicología de la PUCP, puedo decir que la carrera te prepara muy bien para el mundo laboral. Tenemos convenios internacionales y la metodología es muy práctica. Los laboratorios están bien equipados.",
        timestamp: new Date("2024-01-13T09:20:00"),
        votes: 32,
        comments: [
          {
            id: 2,
            author: "Lucía Morales",
            content: "¿Hay oportunidades de intercambio estudiantil?",
            timestamp: new Date("2024-01-13T10:15:00"),
            votes: 3
          }
        ],
        isTestimony: true,
        tags: ["PUCP", "Psicología", "Testimonio"],
        hasVoted: null
      }
    ];
    setPosts(samplePosts);
  }, []);

  const handleVote = (postId: number, voteType: "up" | "down") => {
    if (userSession.isGuest) {
      toast({
        title: t.community.restrictedAccess,
        description: t.community.guestsCannotVote,
        variant: "destructive",
      });
      return;
    }

    setPosts(posts.map(post => {
      if (post.id === postId) {
        let newVotes = post.votes;
        let newHasVoted = voteType;

        // Si ya votó, quitar el voto anterior
        if (post.hasVoted === "up") newVotes -= 1;
        if (post.hasVoted === "down") newVotes += 1;

        // Aplicar nuevo voto
        if (voteType === "up") newVotes += 1;
        if (voteType === "down") newVotes -= 1;

        // Si vota lo mismo que ya había votado, quitar el voto
        if (post.hasVoted === voteType) {
          if (voteType === "up") newVotes -= 1;
          if (voteType === "down") newVotes += 1;
          newHasVoted = null;
        }

        return { ...post, votes: newVotes, hasVoted: newHasVoted };
      }
      return post;
    }));
  };

  const handleNewPost = () => {
    if (userSession.isGuest) {
      toast({
        title: t.community.restrictedAccess,
        description: t.community.guestsCannotPost,
        variant: "destructive",
      });
      return;
    }

    if (!newPostContent.trim()) return;

    const newPost: Post = {
      id: posts.length + 1,
      author: userSession.username,
      authorType: "student",
      university: "Universidad",
      career: "Mi carrera",
      content: newPostContent,
      timestamp: new Date(),
      votes: 0,
      comments: [],
      isTestimony: false,
      tags: ["Nuevo"],
      hasVoted: null
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setShowNewPost(false);
    
    toast({
      title: t.community.publicationCreated,
      description: t.community.publicationCreatedDesc,
    });
  };

  const handleComment = (postId: number) => {
    if (userSession.isGuest) {
      toast({
        title: t.community.restrictedAccess,
        description: t.community.guestsCannotComment,
        variant: "destructive",
      });
      return;
    }

    const comment = commentText[postId];
    if (!comment?.trim()) return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newComment: Comment = {
          id: post.comments.length + 1,
          author: userSession.username,
          content: comment,
          timestamp: new Date(),
          votes: 0
        };
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    }));

    setCommentText({ ...commentText, [postId]: "" });
    
    toast({
      title: t.community.commentAdded,
      description: t.community.commentAddedDesc,
    });
  };

  const filteredPosts = posts.filter(post => {
    if (selectedFilter === "testimonies") return post.isTestimony;
    if (selectedFilter === "questions") return !post.isTestimony;
    return true;
  });

  const getAuthorIcon = (authorType: string) => {
    switch (authorType) {
      case "alumni":
        return <UserCheck className="h-4 w-4 text-blue-500" />;
      case "verified":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Star className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getAuthorBadge = (authorType: string) => {
    switch (authorType) {
      case "alumni":
        return <Badge variant="secondary" className="text-xs">{t.community.graduate}</Badge>;
      case "verified":
        return <Badge className="text-xs bg-green-100 text-green-800">{t.community.verified}</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">{t.community.student}</Badge>;
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
          <span className="text-xl font-bold">{t.community.title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </header>

      <main className="p-4 space-y-6 max-w-4xl mx-auto">
        {/* Header Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">{t.community.communityWiseGO}</CardTitle>
            <CardDescription className="text-center">
              {t.community.communityDescription}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Filters and New Post */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2">
            <Button 
              variant={selectedFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("all")}
            >
              {t.community.all}
            </Button>
            <Button 
              variant={selectedFilter === "testimonies" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("testimonies")}
            >
              {t.community.testimonies}
            </Button>
            <Button 
              variant={selectedFilter === "questions" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("questions")}
            >
              {t.community.questions}
            </Button>
          </div>
          
          <Button 
            onClick={() => setShowNewPost(!showNewPost)}
            className="flex items-center space-x-2"
            disabled={userSession.isGuest}
          >
            <Plus className="h-4 w-4" />
            <span>{t.community.newPublication}</span>
          </Button>
        </div>

        {/* New Post Form */}
        {showNewPost && (
          <Card>
            <CardHeader>
              <CardTitle>{t.community.newPost}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder={t.community.shareWithCommunity}
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                rows={4}
              />
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowNewPost(false)}>
                  {t.community.cancel}
                </Button>
                <Button onClick={handleNewPost}>
                  <Send className="h-4 w-4 mr-2" />
                  {t.community.publish}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Posts */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className={post.isTestimony ? "border-blue-200 bg-blue-50/50" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-sm">{post.author}</h3>
                        {getAuthorIcon(post.authorType)}
                        {getAuthorBadge(post.authorType)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {post.university} • {post.career}
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{post.timestamp.toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                  </div>
                  {post.isTestimony && (
                    <Badge className="bg-blue-100 text-blue-800">
                      {t.community.testimony}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm">{post.content}</p>
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote(post.id, "up")}
                        className={`h-8 px-2 ${post.hasVoted === "up" ? "text-green-600" : ""}`}
                      >
                        <ChevronUp className="h-4 w-4" />
                      </Button>
                      <span className="text-sm font-medium">{post.votes}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote(post.id, "down")}
                        className={`h-8 px-2 ${post.hasVoted === "down" ? "text-red-600" : ""}`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">{post.comments.length}</span>
                    </Button>
                    
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Share className="h-4 w-4 mr-1" />
                      <span className="text-sm">{t.community.sharePost}</span>
                    </Button>
                  </div>
                </div>

                {/* Comments */}
                {post.comments.length > 0 && (
                  <div className="space-y-3 pl-4 border-l-2 border-muted">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="space-y-1">
                        <div className="flex items-start space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {comment.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">{comment.author}</span>
                              <span className="text-xs text-muted-foreground">
                                {comment.timestamp.toLocaleDateString('es-ES')}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{comment.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Comment Input */}
                <div className="flex space-x-2">
                  <Input
                    placeholder={userSession.isGuest ? t.community.loginToComment : t.community.writeComment}
                    value={commentText[post.id] || ""}
                    onChange={(e) => setCommentText({ ...commentText, [post.id]: e.target.value })}
                    disabled={userSession.isGuest}
                    onKeyPress={(e) => e.key === 'Enter' && handleComment(post.id)}
                  />
                  <Button 
                    size="sm" 
                    onClick={() => handleComment(post.id)}
                    disabled={userSession.isGuest || !commentText[post.id]?.trim()}
                  >
                    <Reply className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">{t.community.noPublications}</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}