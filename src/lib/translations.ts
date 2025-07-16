import { Language } from '@/contexts/LanguageContext';

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

  // About Page
  about: {
    title: string;
    mission: string;
    missionText: string;
    vision: string;
    visionText: string;
    values: string;
    valuesText: string;
    team: string;
    contact: string;
  };

  // Chatbots Page
  chatbots: {
    title: string;
    subtitle: string;
    aiAssistant: string;
    careerAdvisor: string;
    universityGuide: string;
    testPrep: string;
    premiumAccess: string;
    startChat: string;
  };

  // Profile Page
  profile: {
    title: string;
    personalInfo: string;
    preferences: string;
    subscription: string;
    settings: string;
    logout: string;
  };

  // Community Page  
  community: {
    title: string;
    discussions: string;
    groups: string;
    events: string;
    share: string;
    join: string;
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
    welcome: string;
    getStarted: string;
  };
  
  // Language selector
  language: {
    select: string;
    current: string;
  };

  // Theme
  theme: {
    light: string;
    dark: string;
    toggle: string;
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
    about: {
      title: 'Conócenos',
      mission: 'Nuestra Misión',
      missionText: 'Ayudar a los estudiantes a tomar decisiones informadas sobre su futuro académico y profesional.',
      vision: 'Nuestra Visión',
      visionText: 'Ser la plataforma líder en orientación educativa en Latinoamérica.',
      values: 'Nuestros Valores',
      valuesText: 'Innovación, accesibilidad, diversidad e inclusión educativa.',
      team: 'Nuestro Equipo',
      contact: 'Contacto'
    },
    chatbots: {
      title: 'Asistentes IA',
      subtitle: 'Chatea con nuestros especialistas virtuales',
      aiAssistant: 'Asistente General',
      careerAdvisor: 'Consejero Vocacional',
      universityGuide: 'Guía Universitaria',
      testPrep: 'Preparación de Exámenes',
      premiumAccess: 'Acceso Premium',
      startChat: 'Iniciar Chat'
    },
    profile: {
      title: 'Mi Perfil',
      personalInfo: 'Información Personal',
      preferences: 'Preferencias',
      subscription: 'Suscripción',
      settings: 'Configuración',
      logout: 'Cerrar Sesión'
    },
    community: {
      title: 'Comunidad',
      discussions: 'Discusiones',
      groups: 'Grupos',
      events: 'Eventos',
      share: 'Compartir',
      join: 'Unirse'
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
      filter: 'Filtrar',
      welcome: 'Bienvenido',
      getStarted: 'Comenzar'
    },
    language: {
      select: 'Seleccionar idioma',
      current: 'Idioma actual'
    },
    theme: {
      light: 'Modo Claro',
      dark: 'Modo Oscuro',
      toggle: 'Cambiar Tema'
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
    about: {
      title: 'About Us',
      mission: 'Our Mission',
      missionText: 'Help students make informed decisions about their academic and professional future.',
      vision: 'Our Vision',
      visionText: 'To be the leading educational guidance platform in Latin America.',
      values: 'Our Values',
      valuesText: 'Innovation, accessibility, diversity and educational inclusion.',
      team: 'Our Team',
      contact: 'Contact'
    },
    chatbots: {
      title: 'AI Assistants',
      subtitle: 'Chat with our virtual specialists',
      aiAssistant: 'General Assistant',
      careerAdvisor: 'Career Counselor',
      universityGuide: 'University Guide',
      testPrep: 'Test Preparation',
      premiumAccess: 'Premium Access',
      startChat: 'Start Chat'
    },
    profile: {
      title: 'My Profile',
      personalInfo: 'Personal Information',
      preferences: 'Preferences',
      subscription: 'Subscription',
      settings: 'Settings',
      logout: 'Sign Out'
    },
    community: {
      title: 'Community',
      discussions: 'Discussions',
      groups: 'Groups',
      events: 'Events',
      share: 'Share',
      join: 'Join'
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
      filter: 'Filter',
      welcome: 'Welcome',
      getStarted: 'Get Started'
    },
    language: {
      select: 'Select language',
      current: 'Current language'
    },
    theme: {
      light: 'Light Mode',
      dark: 'Dark Mode',
      toggle: 'Toggle Theme'
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
    about: {
      title: 'Ñuqayku',
      mission: 'Ñuqanchik Munay',
      missionText: 'Yachaqkunata yanapana yachayninpi hinaspa llamkayninpi allin akllaykunata ruwanankupaq.',
      vision: 'Ñuqanchik Qhaway',
      visionText: 'Latinoamérica nisqapi yachana pusaq plataforma kananchis.',
      values: 'Ñuqanchik Chaniykunas',
      valuesText: 'Musuq ruwana, aypaykuy, hukniraykuna hinaspa yachaypi churaychiy.',
      team: 'Ñuqanchik Equipo',
      contact: 'Rimanakuy'
    },
    chatbots: {
      title: 'IA Yanapakunas',
      subtitle: 'Especialista virtual nisqakunawan rimanakuy',
      aiAssistant: 'Tukuy Yanapaq',
      careerAdvisor: 'Llamkay Yachachiq',
      universityGuide: 'Yachawasi Pusaq',
      testPrep: 'Prueba Wakichiy',
      premiumAccess: 'Premium Yaykuy',
      startChat: 'Rimanakuy Qallariy'
    },
    profile: {
      title: 'Ñuqapa Perfil',
      personalInfo: 'Sapay Willakuy',
      preferences: 'Munasqakuna',
      subscription: 'Qullqichay',
      settings: 'Ruruchiy',
      logout: 'Lluqsiy'
    },
    community: {
      title: 'Ayllu',
      discussions: 'Rimanakuykuna',
      groups: 'Huñukunas',
      events: 'Ruwaykunas',
      share: 'Rakiy',
      join: 'Huñukuy'
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
      filter: 'Llalliy',
      welcome: 'Allin hamusqayki',
      getStarted: 'Qallariy'
    },
    language: {
      select: 'Simi akllay',
      current: 'Kunan simi'
    },
    theme: {
      light: 'Kanchay Modo',
      dark: 'Tutayaq Modo',
      toggle: 'Tema Tikray'
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
    about: {
      title: 'Jiwasanaka',
      mission: 'Jiwasan Munaña',
      missionText: 'Yatiqirinakaru yanapaña yatiyawinakataki ukhamarak irnaqañataki suma amtawinaka lurañataki.',
      vision: 'Jiwasan Uñjaña',
      visionText: 'Latinoamérica ukan yatiñ irptayiri plataforma nayriri ukhamaña.',
      values: 'Jiwasan Chaninakas',
      valuesText: 'Machaq luraña, juttari, kunayman ukat yatiñ uchaña.',
      team: 'Jiwasan Equipo',
      contact: 'Aruskipaña'
    },
    chatbots: {
      title: 'IA Yanaptirinakas',
      subtitle: 'Especialista virtuales nakamatxa aruskipam',
      aiAssistant: 'Taqi Yanaptiri',
      careerAdvisor: 'Irnaqañ Yatichiri',
      universityGuide: 'Yatiñ uta Irnaqiri',
      testPrep: 'Prueba Wakichawi',
      premiumAccess: 'Premium Mantañani',
      startChat: 'Aruskipaña Qalltaña'
    },
    profile: {
      title: 'Nayan Perfil',
      personalInfo: 'Jaqina Yatiyawipa',
      preferences: 'Munataninkas',
      subscription: 'Phusiri',
      settings: 'Wakichawi',
      logout: 'Mistuñani'
    },
    community: {
      title: 'Marka',
      discussions: 'Aruskipañanaks',
      groups: 'Tantachawinaks',
      events: 'Lurawinaks',
      share: 'Churarañani',
      join: 'Chikachasiñani'
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
      filter: 'Churiña',
      welcome: 'Suma jutawi',
      getStarted: 'Qalltaña'
    },
    language: {
      select: 'Aru ajlliña',
      current: 'Jichha aru'
    },
    theme: {
      light: 'Qhanañ Modo',
      dark: 'Chʼamak Modo',
      toggle: 'Tema Mayjt\'aña'
    }
  }
};

export const getTranslation = (lang: Language): Translations => {
  return translations[lang] || translations.es;
};