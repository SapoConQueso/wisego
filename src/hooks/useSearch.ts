import { useState, useMemo } from "react";

interface SearchItem {
  id: string;
  title: string;
  description: string;
  type: "page" | "feature" | "university" | "career";
  action: () => void;
  keywords: string[];
}

export function useSearch(onNavigate: (view: string) => void) {
  const [searchQuery, setSearchQuery] = useState("");

  const searchItems: SearchItem[] = useMemo(() => [
    {
      id: "about",
      title: "Conócenos",
      description: "Información sobre WiseGO y nuestro equipo",
      type: "page",
      action: () => onNavigate("about"),
      keywords: ["conocenos", "about", "informacion", "equipo", "nosotros"]
    },
    {
      id: "chatbots",
      title: "Chatbots IA",
      description: "Asistentes virtuales especializados",
      type: "feature",
      action: () => onNavigate("chatbots"),
      keywords: ["chatbots", "ia", "asistente", "virtual", "chat"]
    },
    {
      id: "vocational-test",
      title: "Test Vocacional",
      description: "Descubre tu carrera ideal",
      type: "feature",
      action: () => onNavigate("vocational-test"),
      keywords: ["test", "vocacional", "carrera", "orientacion", "profesional"]
    },
    {
      id: "compare",
      title: "Comparar Carreras",
      description: "Análisis comparativo de carreras universitarias",
      type: "feature",
      action: () => onNavigate("compare"),
      keywords: ["comparar", "carreras", "universidades", "analisis"]
    },
    {
      id: "map",
      title: "Mapa Interactivo",
      description: "Explora universidades en el mapa",
      type: "feature",
      action: () => onNavigate("map"),
      keywords: ["mapa", "universidades", "ubicacion", "explorar"]
    },
    {
      id: "community",
      title: "Comunidad",
      description: "Conecta con otros estudiantes",
      type: "feature",
      action: () => onNavigate("community"),
      keywords: ["comunidad", "estudiantes", "conectar", "foro"]
    },
    {
      id: "profile",
      title: "Mi Perfil",
      description: "Gestiona tu cuenta y preferencias",
      type: "page",
      action: () => onNavigate("profile"),
      keywords: ["perfil", "cuenta", "configuracion", "usuario"]
    }
  ], [onNavigate]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return searchItems.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.includes(query))
    ).slice(0, 5); // Limit to 5 results
  }, [searchQuery, searchItems]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    hasResults: searchResults.length > 0
  };
}