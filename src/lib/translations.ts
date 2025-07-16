import { Language } from '@/hooks/useLanguage';

export interface Translations {
  // Navigation
  nav: {
    about: string;
    compare: string;
    map: string;
    chatbots: string;
    community: string;
    profile: string;
    login: string;
    register: string;
    logout: string;
    guest: string;
  };
  
  // Main Dashboard
  dashboard: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    quickActions: string;
    announcement: string;
    announcementButton: string;
    moreInfo: string;
    welcomeDemo: string;
    fullAccess: string;
    demoDescription: string;
  };
  
  // Map Page
  map: {
    title: string;
    interactiveMap: string;
    universitiesFound: string;
    results: string;
    searchPlaceholder: string;
    allTypes: string;
    public: string;
    private: string;
    allDistricts: string;
    careers: string;
    rating: string;
    contact: string;
    howToGet: string;
    viewDetails: string;
    viewInside: string;
    virtualTour: string;
    premiumTitle: string;
    premiumDescription: string;
    subscribe: string;
    premiumFeature: string;
    premiumMessage: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    close: string;
    cancel: string;
    confirm: string;
    save: string;
    back: string;
    next: string;
    search: string;
    filter: string;
  };
  
  // Language selector
  language: {
    select: string;
    current: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      about: 'Conócenos',
      compare: 'Comparar',
      map: 'Mapa',
      chatbots: 'Chatbots',
      community: 'Comunidad',
      profile: 'Perfil',
      login: 'Iniciar Sesión',
      register: 'Registrarse',
      logout: 'Cerrar Sesión',
      guest: 'Invitado'
    },
    dashboard: {
      title: 'WiseGO!',
      subtitle: 'Tu compañero inteligente para elegir la carrera perfecta',
      searchPlaceholder: 'Buscar carreras, universidades, funciones...',
      quickActions: 'Accesos Rápidos',
      announcement: '¡Ya están abiertas las inscripciones para el Open ULima!',
      announcementButton: '¡Inscripciones aquí!',
      moreInfo: 'Más información',
      welcomeDemo: '¡Bienvenido al Modo Demo!',
      fullAccess: 'Acceso Completo',
      demoDescription: 'Estás usando WiseGO en modo demostración con acceso completo a todas las funciones premium. ¡Explora libremente todos los chatbots y herramientas!'
    },
    map: {
      title: 'Explorar Universidades',
      interactiveMap: 'Mapa Interactivo de Universidades',
      universitiesFound: 'Universidades Encontradas',
      results: 'resultados',
      searchPlaceholder: 'Buscar universidades, carreras, distritos...',
      allTypes: 'Todas',
      public: 'Públicas',
      private: 'Privadas',
      allDistricts: 'Todos los distritos',
      careers: 'Carreras disponibles:',
      rating: 'Calificación:',
      contact: 'Contacto:',
      howToGet: 'Cómo llegar',
      viewDetails: 'Ver detalles',
      viewInside: 'Ver por dentro',
      virtualTour: 'Tour virtual',
      premiumTitle: '¡Desbloquea Funciones Premium!',
      premiumDescription: 'Tours virtuales 3D y mapas interactivos por S/25/mes',
      subscribe: 'Suscribirse',
      premiumFeature: 'Funcionalidad Premium',
      premiumMessage: 'está disponible solo para usuarios Premium. ¡Suscríbete por S/25 al mes!'
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      close: 'Cerrar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      save: 'Guardar',
      back: 'Atrás',
      next: 'Siguiente',
      search: 'Buscar',
      filter: 'Filtrar'
    },
    language: {
      select: 'Seleccionar idioma',
      current: 'Idioma actual'
    }
  },
  en: {
    nav: {
      about: 'About Us',
      compare: 'Compare',
      map: 'Map',
      chatbots: 'Chatbots',
      community: 'Community',
      profile: 'Profile',
      login: 'Sign In',
      register: 'Sign Up',
      logout: 'Sign Out',
      guest: 'Guest'
    },
    dashboard: {
      title: 'WiseGO!',
      subtitle: 'Your smart companion to choose the perfect career',
      searchPlaceholder: 'Search careers, universities, features...',
      quickActions: 'Quick Actions',
      announcement: 'ULima Open registrations are now open!',
      announcementButton: 'Register here!',
      moreInfo: 'More information',
      welcomeDemo: 'Welcome to Demo Mode!',
      fullAccess: 'Full Access',
      demoDescription: 'You are using WiseGO in demo mode with full access to all premium features. Explore all chatbots and tools freely!'
    },
    map: {
      title: 'Explore Universities',
      interactiveMap: 'Interactive University Map',
      universitiesFound: 'Universities Found',
      results: 'results',
      searchPlaceholder: 'Search universities, careers, districts...',
      allTypes: 'All',
      public: 'Public',
      private: 'Private',
      allDistricts: 'All districts',
      careers: 'Available careers:',
      rating: 'Rating:',
      contact: 'Contact:',
      howToGet: 'How to get there',
      viewDetails: 'View details',
      viewInside: 'View inside',
      virtualTour: 'Virtual tour',
      premiumTitle: 'Unlock Premium Features!',
      premiumDescription: '3D virtual tours and interactive maps for S/25/month',
      subscribe: 'Subscribe',
      premiumFeature: 'Premium Feature',
      premiumMessage: 'is available only for Premium users. Subscribe for S/25 per month!'
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      close: 'Close',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save',
      back: 'Back',
      next: 'Next',
      search: 'Search',
      filter: 'Filter'
    },
    language: {
      select: 'Select language',
      current: 'Current language'
    }
  },
  qu: {
    nav: {
      about: 'Ñuqayku',
      compare: 'Tupay',
      map: 'Mapa',
      chatbots: 'Rimanakuq',
      community: 'Ayllu',
      profile: 'Perfil',
      login: 'Yaykuy',
      register: 'Qillqakuy',
      logout: 'Lluqsiy',
      guest: 'Watukuq'
    },
    dashboard: {
      title: 'WiseGO!',
      subtitle: 'Yachana puriyta akllanapaq yanapaykuq',
      searchPlaceholder: 'Maskay llamkaykuna, yachaywasikuna...',
      quickActions: 'Utqay Ruway',
      announcement: '¡Kunan ULima kichay qillqakuy kichakun!',
      announcementButton: '¡Kaypi qillqakuy!',
      moreInfo: 'Aswan willakuy',
      welcomeDemo: '¡Demo nisqaman allin hamusqayki!',
      fullAccess: 'Llapan Yaykuy',
      demoDescription: 'WiseGO nisqapi demo nisqapi kasanki llapan premium ruwaykunaman yaykuywan. ¡Llapan rimanakuqkunata hinaspa yanapakuykunata purichiy!'
    },
    map: {
      title: 'Yachaywasikunata Maskay',
      interactiveMap: 'Yachaywasikunaq Purichiy Mapan',
      universitiesFound: 'Yachaywasikunata Tarisqa',
      results: 'tarisqa',
      searchPlaceholder: 'Yachaywasikunata, llamkaykunata maskay...',
      allTypes: 'Llapa',
      public: 'Llaqtap',
      private: 'Sapankay',
      allDistricts: 'Llapa suyukuna',
      careers: 'Llamkaykuna:',
      rating: 'Chanichay:',
      contact: 'Rimanakuy:',
      howToGet: 'Imayna chayayta',
      viewDetails: 'Willaykunata qaway',
      viewInside: 'Ukhupi qaway',
      virtualTour: 'Virtual puriy',
      premiumTitle: '¡Premium ruwaykunata kichay!',
      premiumDescription: '3D virtual puriy hinaspa purichiy mapakuna S/25/killapi',
      subscribe: 'Qullqichay',
      premiumFeature: 'Premium Ruway',
      premiumMessage: 'Premium ruwaqkunapaqlla kanqa. ¡S/25 killapi qullqichay!'
    },
    common: {
      loading: 'Cargaspa...',
      error: 'Pantay',
      close: 'Wichqay',
      cancel: 'Saqiy',
      confirm: 'Takyachiy',
      save: 'Waqaychay',
      back: 'Qhipaman',
      next: 'Qatiq',
      search: 'Maskay',
      filter: 'Llalliy'
    },
    language: {
      select: 'Simi akllay',
      current: 'Kunan simi'
    }
  },
  ay: {
    nav: {
      about: 'Jiwasanaka',
      compare: 'Uñtaña',
      map: 'Mapa',
      chatbots: 'Aruskipayiri',
      community: 'Marka',
      profile: 'Perfil',
      login: 'Mantañani',
      register: 'Qillqantañani',
      logout: 'Mistuñani',
      guest: 'Visitante'
    },
    dashboard: {
      title: 'WiseGO!',
      subtitle: 'Suma luraña ajlliñataki yanaptiri',
      searchPlaceholder: 'Thaqaña lurawinaka, yatiñ utanaka...',
      quickActions: 'Jankaki Lurawinaka',
      announcement: '¡Jichha ULima jistantañ qillqantasiñanakax jistata!',
      announcementButton: '¡Akanx qillqantasim!',
      moreInfo: 'Jukamp yatiyawinaka',
      welcomeDemo: '¡Demo ukarux suma jutawim!',
      fullAccess: 'Taqi Mantañani',
      demoDescription: 'WiseGO demo ukanx taqi premium lurawinakarux mantañanitawa. ¡Taqi aruskipayirinaka ukhamarak yanapirinakarux kumara apnaqam!'
    },
    map: {
      title: 'Yatiñ Utanaka Thaqaña',
      interactiveMap: 'Yatiñ Utanakan Uñtayiri Mapapa',
      universitiesFound: 'Yatiñ Utanaka Jikxataskata',
      results: 'jikxatata',
      searchPlaceholder: 'Yatiñ utanaka, lurawinaka thaqaña...',
      allTypes: 'Taqi',
      public: 'Markachiri',
      private: 'Jumax',
      allDistricts: 'Taqi suyunaka',
      careers: 'Lurawinaka:',
      rating: 'Uñjaña:',
      contact: 'Aruskipaña:',
      howToGet: 'Kunjamsa purinixa',
      viewDetails: 'Yatiyawinaka uñjaña',
      viewInside: 'Manqhankiri uñjaña',
      virtualTour: 'Virtual sarnaqaña',
      premiumTitle: '¡Premium lurawinaka jistantaña!',
      premiumDescription: '3D virtual sarnaqañanaka ukhamarak uñtayiri mapanaka S/25/phaxsipi',
      subscribe: 'Phusiri',
      premiumFeature: 'Premium Luraña',
      premiumMessage: 'Premium apnaqirinakatakiw utji. ¡S/25 phaxsipi phusiri!'
    },
    common: {
      loading: 'Apsusp...',
      error: 'Pantjata',
      close: 'Jistantaña',
      cancel: 'Saraña',
      confirm: 'Yaqhanaña',
      save: 'Imaña',
      back: 'Qhiparu',
      next: 'Arkiri',
      search: 'Thaqaña',
      filter: 'Churiña'
    },
    language: {
      select: 'Aru ajlliña',
      current: 'Jichha aru'
    }
  }
};

export const getTranslation = (lang: Language): Translations => {
  return translations[lang] || translations.es;
};