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
    whyChoose: string;
    whyChooseText: string;
    keyPartners: string;
    ourVision: string;
    ourMission: string;
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
    vocationalTest: string;
    generalChat: string;
    intelligentAssistants: string;
    chooseBot: string;
    discoverCareer: string;
    personalizedAnalysis: string;
    naturalConversation: string;
    profileRecommendations: string;
    startVocationalTest: string;
    requiresPremium: string;
    conversationAssistant: string;
    conversationDescription: string;
    instantResponses: string;
    homeworkHelp: string;
    academicOrientation: string;
    startConversation: string;
    tips: string;
    tipsTitle: string;
    tip1: string;
    tip2: string;
    tip3: string;
    tip4: string;
    unlockSpecializedBots: string;
    specializedUniversityBots: string;
    subscribe: string;
  };

  // Profile Page
  profile: {
    title: string;
    personalInfo: string;
    preferences: string;
    subscription: string;
    settings: string;
    logout: string;
    myProfile: string;
    accountVerification: string;
    verifyIdentity: string;
    document: string;
    documentPlaceholder: string;
    documentHelp: string;
    verifyDNI: string;
    accountVerified: string;
    fullAccess: string;
    language: string;
    selectLanguage: string;
    interfaceLanguage: string;
    changesApply: string;
    accessibility: string;
    customizeExperience: string;
    notifications: string;
    notificationsDesc: string;
    darkMode: string;
    darkModeDesc: string;
    textSize: string;
    small: string;
    normal: string;
    large: string;
    contrast: string;
    high: string;
    premiumSubscription: string;
    demoMode: string;
    fullAccessDemo: string;
    premiumBenefits: string;
    specializedTest: string;
    generalChatIA: string;
    personalizedRecommendations: string;
    prioritySupport: string;
    monthlyPrice: string;
    subscribeNow: string;
    manageSubscription: string;
    dangerZone: string;
    deleteAccount: string;
    deleteAccountDesc: string;
    deleteAccountButton: string;
    createRealAccount: string;
    guestUser: string;
    student: string;
    registration: string;
    verified: string;
    unverified: string;
    demoPremium: string;
  };

  // Community Page
  community: {
    title: string;
    discussions: string;
    groups: string;
    events: string;
    share: string;
    join: string;
    communityWiseGO: string;
    communityDescription: string;
    all: string;
    testimonies: string;
    questions: string;
    newPublication: string;
    newPost: string;
    shareWithCommunity: string;
    cancel: string;
    publish: string;
    graduate: string;
    verified: string;
    student: string;
    testimony: string;
    comments: string;
    sharePost: string;
    loginToComment: string;
    writeComment: string;
    noPublications: string;
    restrictedAccess: string;
    guestsCannotVote: string;
    guestsCannotPost: string;
    guestsCannotComment: string;
    publicationCreated: string;
    publicationCreatedDesc: string;
    commentAdded: string;
    commentAddedDesc: string;
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
  
  // Compare Page
  compare: {
    title: string;
    searchPlaceholder: string;
    exploreAllCareers: string;
    duration: string;
    salary: string;
    location: string;
    prestige: string;
    balance: string;
    alreadyAdded: string;
    maxCareers: string;
    addToComparison: string;
  };

  // Chat functionality
  chat: {
    welcomeMessage: string;
    startConversation: string;
    typing: string;
    placeholder: string;
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
      subtitle: 'Hazlo claro. Hazlo sabio. Hazlo Wise.',
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
      contact: 'Contacto',
      whyChoose: '¿Por qué elegir WiseGo?',
      whyChooseText: 'WiseGo te ayuda a encontrar tu carrera y universidad ideal utilizando inteligencia artificial de manera responsable.',
      keyPartners: 'NUESTROS SOCIOS CLAVE',
      ourVision: 'NUESTRA VISIÓN',
      ourMission: 'NUESTRA MISIÓN'
    },
    chatbots: {
      title: 'Asistentes IA',
      subtitle: 'Chatea con nuestros especialistas virtuales',
      aiAssistant: 'Asistente General',
      careerAdvisor: 'Consejero Vocacional',
      universityGuide: 'Guía Universitaria',
      testPrep: 'Preparación de Exámenes',
      premiumAccess: 'Acceso Premium',
      startChat: 'Iniciar Chat',
      vocationalTest: 'Test Vocacional IA',
      generalChat: 'Chat IA General',
      intelligentAssistants: 'Asistentes Inteligentes',
      chooseBot: 'Elige el chatbot que mejor se adapte a tus necesidades',
      discoverCareer: 'Descubre tu carrera ideal con nuestro asistente especializado',
      personalizedAnalysis: 'Análisis personalizado de aptitudes',
      naturalConversation: 'Conversación natural e intuitiva',
      profileRecommendations: 'Recomendaciones basadas en tu perfil',
      startVocationalTest: 'Iniciar Test Vocacional',
      requiresPremium: 'Requiere Premium',
      conversationAssistant: 'Conversa con nuestro asistente sobre cualquier tema educativo',
      conversationDescription: 'Conversa con nuestro asistente sobre cualquier tema educativo',
      instantResponses: 'Respuestas instantáneas y precisas',
      homeworkHelp: 'Ayuda con tareas y consultas',
      academicOrientation: 'Orientación académica personalizada',
      startConversation: 'Iniciar Conversación',
      tips: 'Consejos para usar los chatbots',
      tipsTitle: '💡 Consejos para usar los chatbots',
      tip1: 'Sé específico en tus preguntas para obtener mejores respuestas',
      tip2: 'El test vocacional funciona mejor cuando respondes con honestidad',
      tip3: 'Puedes hacer preguntas de seguimiento para profundizar en los temas',
      tip4: 'Los chatbots aprenden de la conversación para mejorar sus respuestas',
      unlockSpecializedBots: '¡Accede a Chatbots Especializados!',
      specializedUniversityBots: 'Chatbots universitarios y especializados por S/25/mes',
      subscribe: 'Suscribirse'
    },
    profile: {
      title: 'Mi Perfil',
      personalInfo: 'Información Personal',
      preferences: 'Preferencias',
      subscription: 'Suscripción',
      settings: 'Configuración',
      logout: 'Cerrar Sesión',
      myProfile: 'Mi Perfil',
      accountVerification: 'Verificación de Cuenta',
      verifyIdentity: 'Verifica tu identidad con tu DNI peruano para acceder a todas las funciones',
      document: 'Documento Nacional de Identidad (DNI)',
      documentPlaceholder: '12345678',
      documentHelp: 'Ingresa tu DNI de 8 dígitos sin espacios ni guiones',
      verifyDNI: 'Verificar DNI',
      accountVerified: '¡Cuenta verificada exitosamente!',
      fullAccess: 'Ahora tienes acceso completo a todas las funciones de WiseGO',
      language: 'Idioma',
      selectLanguage: 'Selecciona tu idioma preferido para la interfaz',
      interfaceLanguage: 'Idioma de la interfaz',
      changesApply: 'Los cambios se aplicarán automáticamente',
      accessibility: 'Accesibilidad',
      customizeExperience: 'Personaliza la experiencia según tus necesidades',
      notifications: 'Notificaciones',
      notificationsDesc: 'Recibe alertas sobre eventos y actualizaciones',
      darkMode: 'Modo oscuro',
      darkModeDesc: 'Interfaz con colores más suaves para los ojos',
      textSize: 'Tamaño de texto',
      small: 'Pequeño',
      normal: 'Normal',
      large: 'Grande',
      contrast: 'Contraste',
      high: 'Alto',
      premiumSubscription: 'Suscripción Premium',
      demoMode: 'Modo demostración: Acceso completo a todas las funciones premium',
      fullAccessDemo: 'Tienes acceso completo a Test Vocacional IA y Chat IA General',
      premiumBenefits: 'Beneficios Premium:',
      specializedTest: 'Test Vocacional IA especializado',
      generalChatIA: 'Chat IA General para consultas académicas',
      personalizedRecommendations: 'Recomendaciones personalizadas',
      prioritySupport: 'Soporte prioritario',
      monthlyPrice: 'Solo S/25 al mes',
      subscribeNow: 'Suscribirse Ahora',
      manageSubscription: 'Gestionar Suscripción',
      dangerZone: 'Zona de Peligro',
      deleteAccount: 'Eliminar Cuenta',
      deleteAccountDesc: 'Esta acción eliminará permanentemente tu cuenta y todos los datos asociados. No se puede deshacer.',
      deleteAccountButton: 'Eliminar mi cuenta',
      createRealAccount: 'Crear Cuenta Real',
      guestUser: 'Usuario Invitado (Demo)',
      student: 'Estudiante',
      registration: 'Registro:',
      verified: 'Verificado',
      unverified: 'Sin verificar',
      demoPremium: 'Demo Premium'
    },
    community: {
      title: 'Comunidad',
      discussions: 'Discusiones',
      groups: 'Grupos',
      events: 'Eventos',
      share: 'Compartir',
      join: 'Unirse',
      communityWiseGO: 'Comunidad WiseGO',
      communityDescription: 'Conecta con estudiantes y egresados. Comparte experiencias, haz preguntas y obtén testimonios verificados.',
      all: 'Todos',
      testimonies: 'Testimonios',
      questions: 'Preguntas',
      newPublication: 'Nueva Publicación',
      newPost: 'Nueva Publicación',
      shareWithCommunity: '¿Qué quieres compartir con la comunidad?',
      cancel: 'Cancelar',
      publish: 'Publicar',
      graduate: 'Egresado',
      verified: 'Verificado',
      student: 'Estudiante',
      testimony: 'Testimonio',
      comments: 'comentarios',
      sharePost: 'Compartir',
      loginToComment: 'Inicia sesión para comentar',
      writeComment: 'Escribir un comentario...',
      noPublications: 'No hay publicaciones para mostrar en esta categoría.',
      restrictedAccess: 'Acceso restringido',
      guestsCannotVote: 'Los invitados no pueden votar. Crea una cuenta para participar.',
      guestsCannotPost: 'Los invitados no pueden crear publicaciones. Crea una cuenta para participar.',
      guestsCannotComment: 'Los invitados no pueden comentar. Crea una cuenta para participar.',
      publicationCreated: 'Publicación creada',
      publicationCreatedDesc: 'Tu publicación ha sido añadida a la comunidad.',
      commentAdded: 'Comentario añadido',
      commentAddedDesc: 'Tu comentario ha sido publicado.'
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
    compare: {
      title: 'Comparación Inteligente',
      searchPlaceholder: 'Buscar carreras, universidades, especialidades...',
      exploreAllCareers: 'Explora Todas las Carreras',
      duration: 'Duración:',
      salary: 'Salario:',
      location: 'Ubicación:',
      prestige: 'Prestigio',
      balance: 'Balance',
      alreadyAdded: 'Ya agregada',
      maxCareers: 'Máximo 5 carreras',
      addToComparison: 'Agregar a comparación'
    },
    chat: {
      welcomeMessage: '¡Hola! Soy tu asistente de orientación educativa. ¿En qué puedo ayudarte hoy?',
      startConversation: '¡Comienza la conversación escribiendo un mensaje!',
      typing: 'Escribiendo...',
      placeholder: 'Escribe tu mensaje...'
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
      subtitle: 'Make it clear. Make it Wise. Make it go.',
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
      contact: 'Contact',
      whyChoose: 'Why choose WiseGo?',
      whyChooseText: 'WiseGo helps you find your ideal career and university using artificial intelligence responsibly.',
      keyPartners: 'OUR KEY PARTNERS',
      ourVision: 'OUR VISION',
      ourMission: 'OUR MISSION'
    },
    chatbots: {
      title: 'AI Assistants',
      subtitle: 'Chat with our virtual specialists',
      aiAssistant: 'General Assistant',
      careerAdvisor: 'Career Counselor',
      universityGuide: 'University Guide',
      testPrep: 'Test Preparation',
      premiumAccess: 'Premium Access',
      startChat: 'Start Chat',
      vocationalTest: 'AI Vocational Test',
      generalChat: 'General AI Chat',
      intelligentAssistants: 'Intelligent Assistants',
      chooseBot: 'Choose the chatbot that best fits your needs',
      discoverCareer: 'Discover your ideal career with our specialized assistant',
      personalizedAnalysis: 'Personalized aptitude analysis',
      naturalConversation: 'Natural and intuitive conversation',
      profileRecommendations: 'Recommendations based on your profile',
      startVocationalTest: 'Start Vocational Test',
      requiresPremium: 'Requires Premium',
      conversationAssistant: 'Conversation Assistant',
      conversationDescription: 'Chat with our assistant about any educational topic',
      instantResponses: 'Instant and accurate responses',
      homeworkHelp: 'Help with homework and queries',
      academicOrientation: 'Personalized academic guidance',
      startConversation: 'Start Conversation',
      tips: 'Tips for using chatbots',
      tipsTitle: '💡 Tips for using chatbots',
      tip1: 'Be specific in your questions to get better answers',
      tip2: 'The vocational test works better when you answer honestly',
      tip3: 'You can ask follow-up questions to delve deeper into topics',
      tip4: 'Chatbots learn from conversation to improve their responses',
      unlockSpecializedBots: 'Access Specialized Chatbots!',
      specializedUniversityBots: 'University and specialized chatbots for S/25/month',
      subscribe: 'Subscribe'
    },
    profile: {
      title: 'My Profile',
      personalInfo: 'Personal Information',
      preferences: 'Preferences',
      subscription: 'Subscription',
      settings: 'Settings',
      logout: 'Sign Out',
      myProfile: 'My Profile',
      accountVerification: 'Account Verification',
      verifyIdentity: 'Verify your identity with your Peruvian ID to access all features',
      document: 'National Identity Document (DNI)',
      documentPlaceholder: '12345678',
      documentHelp: 'Enter your 8-digit ID without spaces or dashes',
      verifyDNI: 'Verify DNI',
      accountVerified: 'Account verified successfully!',
      fullAccess: 'You now have full access to all WiseGO features',
      language: 'Language',
      selectLanguage: 'Select your preferred language for the interface',
      interfaceLanguage: 'Interface language',
      changesApply: 'Changes will be applied automatically',
      accessibility: 'Accessibility',
      customizeExperience: 'Customize the experience according to your needs',
      notifications: 'Notifications',
      notificationsDesc: 'Receive alerts about events and updates',
      darkMode: 'Dark mode',
      darkModeDesc: 'Interface with softer colors for the eyes',
      textSize: 'Text size',
      small: 'Small',
      normal: 'Normal',
      large: 'Large',
      contrast: 'Contrast',
      high: 'High',
      premiumSubscription: 'Premium Subscription',
      demoMode: 'Demo mode: Full access to all premium features',
      fullAccessDemo: 'You have full access to AI Vocational Test and General AI Chat',
      premiumBenefits: 'Premium Benefits:',
      specializedTest: 'Specialized AI Vocational Test',
      generalChatIA: 'General AI Chat for academic queries',
      personalizedRecommendations: 'Personalized recommendations',
      prioritySupport: 'Priority support',
      monthlyPrice: 'Only S/25 per month',
      subscribeNow: 'Subscribe Now',
      manageSubscription: 'Manage Subscription',
      dangerZone: 'Danger Zone',
      deleteAccount: 'Delete Account',
      deleteAccountDesc: 'This action will permanently delete your account and all associated data. It cannot be undone.',
      deleteAccountButton: 'Delete my account',
      createRealAccount: 'Create Real Account',
      guestUser: 'Guest User (Demo)',
      student: 'Student',
      registration: 'Registration:',
      verified: 'Verified',
      unverified: 'Unverified',
      demoPremium: 'Demo Premium'
    },
    community: {
      title: 'Community',
      discussions: 'Discussions',
      groups: 'Groups',
      events: 'Events',
      share: 'Share',
      join: 'Join',
      communityWiseGO: 'WiseGO Community',
      communityDescription: 'Connect with students and graduates. Share experiences, ask questions and get verified testimonials.',
      all: 'All',
      testimonies: 'Testimonials',
      questions: 'Questions',
      newPublication: 'New Post',
      newPost: 'New Post',
      shareWithCommunity: 'What would you like to share with the community?',
      cancel: 'Cancel',
      publish: 'Publish',
      graduate: 'Graduate',
      verified: 'Verified',
      student: 'Student',
      testimony: 'Testimonial',
      comments: 'comments',
      sharePost: 'Share',
      loginToComment: 'Sign in to comment',
      writeComment: 'Write a comment...',
      noPublications: 'No posts to show in this category.',
      restrictedAccess: 'Restricted access',
      guestsCannotVote: 'Guests cannot vote. Create an account to participate.',
      guestsCannotPost: 'Guests cannot create posts. Create an account to participate.',
      guestsCannotComment: 'Guests cannot comment. Create an account to participate.',
      publicationCreated: 'Post created',
      publicationCreatedDesc: 'Your post has been added to the community.',
      commentAdded: 'Comment added',
      commentAddedDesc: 'Your comment has been posted.'
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
    compare: {
      title: 'Smart Comparison',
      searchPlaceholder: 'Search careers, universities, specialties...',
      exploreAllCareers: 'Explore All Careers',
      duration: 'Duration:',
      salary: 'Salary:',
      location: 'Location:',
      prestige: 'Prestige',
      balance: 'Balance',
      alreadyAdded: 'Already added',
      maxCareers: 'Maximum 5 careers',
      addToComparison: 'Add to comparison'
    },
    chat: {
      welcomeMessage: 'Hello! I am your educational guidance assistant. How can I help you today?',
      startConversation: 'Start the conversation by writing a message!',
      typing: 'Typing...',
      placeholder: 'Type your message...'
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
      subtitle: 'Sutita ruray. Yuyaysapa ruray. Wise ruray.',
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
      contact: 'Rimanakuy',
      whyChoose: '¿Imarayku WiseGo-ta akllay?',
      whyChooseText: 'WiseGo yanapasunki munasqayki llamkayta hinaspa yachaywasiykita tarinaykipaq inteligencia artificial-wan.',
      keyPartners: 'ÑUQANCHIK HATUN YANAPAKUQKUNA',
      ourVision: 'ÑUQANCHIK QHAWAY',
      ourMission: 'ÑUQANCHIK MUNAY'
    },
    chatbots: {
      title: 'IA Yanapakunas',
      subtitle: 'Especialista virtual nisqakunawan rimanakuy',
      aiAssistant: 'Tukuy Yanapaq',
      careerAdvisor: 'Llamkay Yachachiq',
      universityGuide: 'Yachawasi Pusaq',
      testPrep: 'Prueba Wakichiy',
      premiumAccess: 'Premium Yaykuy',
      startChat: 'Rimanakuy Qallariy',
      vocationalTest: 'IA Llamkay Prueba',
      generalChat: 'IA Tukuy Rimanakuy',
      intelligentAssistants: 'Yuyaysapa Yanapakunas',
      chooseBot: 'Akllay chatbot munasqaykiman hina kasqanta',
      discoverCareer: 'Tariway munasqayki llamkayta ñuqanchik especialista yanapaqwan',
      personalizedAnalysis: 'Sapanchasqa atiy t\'aqwiy',
      naturalConversation: 'Natural hinaspa allin rimanakuy',
      profileRecommendations: 'Yuyaychaykunas perfilniykiman hina',
      startVocationalTest: 'Llamkay Pruebaykita Qallariy',
      requiresPremium: 'Premium nisqata muna',
      conversationAssistant: 'Rimanakuy Yanapaq',
      conversationDescription: 'Ñuqanchik yanapaqwan ima yachana tema-piwanpas rimanakuy',
      instantResponses: 'Chaylla hinaspa chiqan kutichiykunas',
      homeworkHelp: 'Tareaykikunapi hinaspa tapuykunapi yanapay',
      academicOrientation: 'Sapanchasqa yachana pusay',
      startConversation: 'Rimanakuyta Qallariy',
      tips: 'Yuyaykunas chatbot-kunata llamk\'anaykipaq',
      tipsTitle: '💡 Yuyaykunas chatbot-kunata llamk\'anaykipaq',
      tip1: 'Sut\'i kay tapuyniykikunapi aswan allin kutichiykunata chaskikunaykipaq',
      tip2: 'Llamkay prueba aswan allin llamkan cheqaq-hinachu kutichispa',
      tip3: 'Qatiq tapuykunata ruwankiman aswan ukhuman yaykukunaykipaq',
      tip4: 'Chatbot-kuna rimanakuypi yachanku aswan allin kutichiyta',
      unlockSpecializedBots: '¡Especialista Chatbot-kunaman yaykuy!',
      specializedUniversityBots: 'Yachawasi hinaspa especialista chatbot-kuna S/25/killapi',
      subscribe: 'Qullqichay'
    },
    profile: {
      title: 'Ñuqapa Perfil',
      personalInfo: 'Sapay Willakuy',
      preferences: 'Munasqakuna',
      subscription: 'Qullqichay',
      settings: 'Ruruchiy',
      logout: 'Lluqsiy',
      myProfile: 'Ñuqapa Perfil',
      accountVerification: 'Cuenta Takyachiy',
      verifyIdentity: 'Peruano DNI-ykiwan takyachiy llapa ruraykunaman yaykukunaykipaq',
      document: 'Runa Riqsichiy Qillqa (DNI)',
      documentPlaceholder: '12345678',
      documentHelp: 'DNI 8 yupayniykita yaykuchiy mana k\'itikunawan mana guionkunawanpas',
      verifyDNI: 'DNI Takyachiy',
      accountVerified: '¡Cuenta allinmanta takyachasqa!',
      fullAccess: 'Kunanqa llapa WiseGO ruwaykunaman hunt\'asqa yaykuyniyki kan',
      language: 'Simi',
      selectLanguage: 'Munasqayki simita akllay interfaz nisqapaq',
      interfaceLanguage: 'Interfaz simi',
      changesApply: 'Tikrakuykunas kikinmanta ruwakamunqa',
      accessibility: 'Aypaykuy',
      customizeExperience: 'Necesidadniykiman hina experienciata ruray',
      notifications: 'Willaykuna',
      notificationsDesc: 'Ruwaykunamanta hinaspa musuqyachiykunamanta willayta chaskiy',
      darkMode: 'Tutayaq modo',
      darkModeDesc: 'Interfaz llamp\'u llimpiwan ñawikunapaq',
      textSize: 'Qillqa hatun kay',
      small: 'Huch\'uy',
      normal: 'Normal',
      large: 'Hatun',
      contrast: 'Contraste',
      high: 'Hatun',
      premiumSubscription: 'Premium Qullqichay',
      demoMode: 'Demo modo: Llapa premium ruwaykunaman hunt\'asqa yaykuy',
      fullAccessDemo: 'IA Llamkay Prueba hinaspa IA Tukuy Rimanakuymanmi hunt\'asqa yaykuyniyki kan',
      premiumBenefits: 'Premium Allinkunas:',
      specializedTest: 'Especialista IA Llamkay Prueba',
      generalChatIA: 'IA Tukuy Rimanakuy yachana tapuykunapaq',
      personalizedRecommendations: 'Sapanchasqa yuyaychaykunas',
      prioritySupport: 'Ñawpaq yanapay',
      monthlyPrice: 'S/25-lla sapa killapi',
      subscribeNow: 'Kunan Qullqichay',
      manageSubscription: 'Qullqichayta Kamachiy',
      dangerZone: 'Peligro Zona',
      deleteAccount: 'Cuentata Chinkachiy',
      deleteAccountDesc: 'Kay ruway cuentaykita hinaspa llapa willaykunataqa wiñaypaq chinkachinqa. Manam kutichiyta atikunchu.',
      deleteAccountButton: 'Cuentayta chinkachiy',
      createRealAccount: 'Cheqaq Cuentata Ruray',
      guestUser: 'Watukuq Llamk\'aq (Demo)',
      student: 'Yachakuq',
      registration: 'Qillqakuy:',
      verified: 'Takyachasqa',
      unverified: 'Mana takyachasqa',
      demoPremium: 'Demo Premium'
    },
    community: {
      title: 'Ayllu',
      discussions: 'Rimanakuykuna',
      groups: 'Huñukunas',
      events: 'Ruwaykunas',
      share: 'Rakiy',
      join: 'Huñukuy',
      communityWiseGO: 'WiseGO Ayllu',
      communityDescription: 'Yachakuqkunawan hinaspa tukusqakunawan huñunakuy. Experienciakunata rakiy, tapukuy hinaspa takyachasqa testimonio-kunata chaskiy.',
      all: 'Llapa',
      testimonies: 'Testimonio-kuna',
      questions: 'Tapukuykuna',
      newPublication: 'Musuq Uyarichiy',
      newPost: 'Musuq Uyarichiy',
      shareWithCommunity: '¿Imataq aylluwan rakinki?',
      cancel: 'Saqiy',
      publish: 'Uyarichiy',
      graduate: 'Tukusqa',
      verified: 'Takyachasqa',
      student: 'Yachakuq',
      testimony: 'Testimonio',
      comments: 'rimaykuna',
      sharePost: 'Rakiy',
      loginToComment: 'Yaykuy comentariokunata ruwanaykipaq',
      writeComment: 'Comentario-ta qillqay...',
      noPublications: 'Mana uyarichiykunachu kay categoría-pi rikuchinapaq.',
      restrictedAccess: 'Hark\'asqa yaykuy',
      guestsCannotVote: 'Watukuqkunaqa manam akllankuchu. Cuentata ruray participanaykipaq.',
      guestsCannotPost: 'Watukuqkunaqa manam uyarichiykunata rurawankuchu. Cuentata ruray participanaykipaq.',
      guestsCannotComment: 'Watukuqkunaqa manam comentario-ta ruwawankuchu. Cuentata ruray participanaykipaq.',
      publicationCreated: 'Uyarichiy ruwasqa',
      publicationCreatedDesc: 'Uyarichiyniyki ayllu-man yapasqa karqan.',
      commentAdded: 'Comentario yapasqa',
      commentAddedDesc: 'Comentario-niki uyarichasqa karqan.'
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
    compare: {
      title: 'Allqa Tupay',
      searchPlaceholder: 'Llamkaykuna, yachaywasikuna, especializacionkuna maskay...',
      exploreAllCareers: 'Llapan Llamkaykunata Qhaway',
      duration: 'Tiempo:',
      salary: 'Qullqi:',
      location: 'Maypi:',
      prestige: 'Allin Kay',
      balance: 'Equilibrio',
      alreadyAdded: 'Ñañachu yapasqa',
      maxCareers: 'Pichqa llamkaykama',
      addToComparison: 'Tupaymanmi yapay'
    },
    chat: {
      welcomeMessage: '¡Napaykullayki! Yachana pusaq yanasqayki kani. ¿Imapichus yanapasayki kunan punchaw?',
      startConversation: '¡Huk willaywan qillqaspa rimanakuyta qallariy!',
      typing: 'Qillqaspa...',
      placeholder: 'Willayniykita qillqay...'
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
      contact: 'Aruskipaña',
      whyChoose: '¿Kunjamatsa WiseGo ajlliñax?',
      whyChooseText: 'WiseGo yanapita munat irnaqañama ukhamarak yatiñ utama jikxatañataki inteligencia artificial ukampi.',
      keyPartners: 'JIWASAN JACH\'A YANAPIRINAKAS',
      ourVision: 'JIWASAN UÑJAÑA',
      ourMission: 'JIWASAN MUNAÑA'
    },
    chatbots: {
      title: 'IA Yanaptirinakas',
      subtitle: 'Especialista virtuales nakamatxa aruskipam',
      aiAssistant: 'Taqi Yanaptiri',
      careerAdvisor: 'Irnaqañ Yatichiri',
      universityGuide: 'Yatiñ uta Irnaqiri',
      testPrep: 'Prueba Wakichawi',
      premiumAccess: 'Premium Mantañani',
      startChat: 'Aruskipaña Qalltaña',
      vocationalTest: 'IA Irnaqañ Prueba',
      generalChat: 'IA Taqi Aruskipaña',
      intelligentAssistants: 'Amuyt\'ayiri Yanaptirinakas',
      chooseBot: 'Ajllim chatbot munatamaru katxaruwa',
      discoverCareer: 'Munat irnaqañama jikxatam jiwasan especialista yanapirinamamp',
      personalizedAnalysis: 'Sapäw lurawi yant\'aña',
      naturalConversation: 'Natural ukhamarak suma aruskipaña',
      profileRecommendations: 'Iwxt\'awinaks perfilamamamp hiña',
      startVocationalTest: 'Irnaqañ Pruebamax Qalltaña',
      requiresPremium: 'Premium munti',
      conversationAssistant: 'Aruskipaña Yanaptiri',
      conversationDescription: 'Jiwasan yanaptirinamamp kuna yatiñ tema ukanakatsa aruskipam',
      instantResponses: 'Jank\'aki ukhamarak chiqapa jaysawinaks',
      homeworkHelp: 'Lurawinakan ukhamarak jiskt\'awinakan yanapäwi',
      academicOrientation: 'Sapäw yatiñ irptaña',
      startConversation: 'Aruskipaña Qalltaña',
      tips: 'Yant\'awinaks chatbot-nak apnaqañataki',
      tipsTitle: '💡 Yant\'awinaks chatbot-nak apnaqañataki',
      tip1: 'Jiskt\'äwinakamax qhana uñacht\'aña juk\'amp suma jaysäwinak katxatañataki',
      tip2: 'Irnaqañ pruebax juk\'amp suma irnaqani chiqapa jaysasax',
      tip3: 'Arkiri jiskt\'awinaks lurasispa juk\'amp manqhanar mantañama',
      tip4: 'Chatbot-naks aruskipawi yatiqapxi juk\'amp suma jaysañataki',
      unlockSpecializedBots: '¡Especialista Chatbot-nakar mantañam!',
      specializedUniversityBots: 'Yatiñ uta ukhamarak especialista chatbot-naks S/25/phaxsinx',
      subscribe: 'Phusiri'
    },
    profile: {
      title: 'Nayan Perfil',
      personalInfo: 'Jaqina Yatiyawipa',
      preferences: 'Munataninkas',
      subscription: 'Phusiri',
      settings: 'Wakichawi',
      logout: 'Mistuñani',
      myProfile: 'Nayan Perfil',
      accountVerification: 'Cuenta Yaqhäña',
      verifyIdentity: 'Peruano DNI ukampi yaqhäña taqi lurawinakaru mantañama',
      document: 'Jaq\'i Uñt\'ayiri Qillqata (DNI)',
      documentPlaceholder: '12345678',
      documentHelp: 'DNI 8 jakhunakama uchaña jan k\'uchunakampi jan guionnakampi',
      verifyDNI: 'DNI Yaqhäña',
      accountVerified: '¡Cuenta suma yaqhata!',
      fullAccess: 'Jichhax taqi WiseGO lurawinaruw hunt\'asaña mantañama',
      language: 'Aru',
      selectLanguage: 'Munat arumar ajllim interfaz arutaki',
      interfaceLanguage: 'Interfaz aru',
      changesApply: 'Mayjt\'awinaks kikipa lurasiñani',
      accessibility: 'Juttañani',
      customizeExperience: 'Munatamaru hiña experiencia wakichaña',
      notifications: 'Yatiyawinaks',
      notificationsDesc: 'Lurawimanta ukhamarak machaqachawinakan yatiyäwi katxaña',
      darkMode: 'Ch\'amak modo',
      darkModeDesc: 'Interfaz llamp\'u llimpinakampi nayranakataki',
      textSize: 'Qillqat jach\'äwipa',
      small: 'Jisk\'a',
      normal: 'Normal',
      large: 'Jach\'a',
      contrast: 'Contraste',
      high: 'Jach\'a',
      premiumSubscription: 'Premium Phusiri',
      demoMode: 'Demo modo: Taqi premium lurawinaruw hunt\'asaña mantañani',
      fullAccessDemo: 'IA Irnaqañ Prueba ukhamarak IA Taqi Aruskipañaruw hunt\'asaña mantañanitawa',
      premiumBenefits: 'Premium Aski lurawis:',
      specializedTest: 'Especialista IA Irnaqañ Prueba',
      generalChatIA: 'IA Taqi Aruskipaña yatiñ jiskt\'awinakataki',
      personalizedRecommendations: 'Sapäw iwxt\'awinaks',
      prioritySupport: 'Nayrïr yanapäwi',
      monthlyPrice: 'S/25-ki sapa phaxsinx',
      subscribeNow: 'Jichhax Phusiri',
      manageSubscription: 'Phusiri Apnaqaña',
      dangerZone: 'Peligro Chiqanx',
      deleteAccount: 'Cuenta Chhaqtayaña',
      deleteAccountDesc: 'Aka lurawixa cuenta ukhamarak taqi yatiyawinakar wiñaytakiw chhaqtayani. Janiw kutt\'ayañajamäkiti.',
      deleteAccountButton: 'Cuentaja chhaqtayaña',
      createRealAccount: 'Chiqap Cuenta Luraña',
      guestUser: 'Visitante Apnaqiri (Demo)',
      student: 'Yatiqiri',
      registration: 'Qillqantaña:',
      verified: 'Yaqhata',
      unverified: 'Jan yaqhata',
      demoPremium: 'Demo Premium'
    },
    community: {
      title: 'Marka',
      discussions: 'Aruskipañanaks',
      groups: 'Tantachawinaks',
      events: 'Lurawinaks',
      share: 'Churarañani',
      join: 'Chikachasiñani',
      communityWiseGO: 'WiseGO Marka',
      communityDescription: 'Yatiqirinakamp ukhamarak tukuyatasinakamp chikancht\'asiñani. Experiencianak churarañani, jiskt\'añani ukhamarak yaqhat testimonionak katxaña.',
      all: 'Taqi',
      testimonies: 'Testimonionak',
      questions: 'Jiskt\'awinaks',
      newPublication: 'Machaq Yatiyäwi',
      newPost: 'Machaq Yatiyäwi',
      shareWithCommunity: '¿Kunas markanakamp churarañäni?',
      cancel: 'Sarayaña',
      publish: 'Yatiyaña',
      graduate: 'Tukuyata',
      verified: 'Yaqhata',
      student: 'Yatiqiri',
      testimony: 'Testimonio',
      comments: 'aruskipawinaks',
      sharePost: 'Churarañani',
      loginToComment: 'Mantaña comentariounakataki',
      writeComment: 'Comentario qillqantaña...',
      noPublications: 'Janiwa aka categorían uñacht\'añ yatiyäwinaksa jikxataskiti.',
      restrictedAccess: 'Jark\'at mantaña',
      guestsCannotVote: 'Visitantenakax janiw chhijllañkaspati. Cuenta lurayaña chikancht\'asiñataki.',
      guestsCannotPost: 'Visitantenakax janiw yatiyäwinak lurañkaspati. Cuenta lurayaña chikancht\'asiñataki.',
      guestsCannotComment: 'Visitantenakax janiw comentario lurañkaspati. Cuenta lurayaña chikancht\'asiñataki.',
      publicationCreated: 'Yatiyäwi lurasi',
      publicationCreatedDesc: 'Yatiyäwimaxa markanakaru yapasiwayi.',
      commentAdded: 'Comentario yapasiwayi',
      commentAddedDesc: 'Comentariomaxa yatiyatawayi.'
    },
    common: {
      loading: 'Apsusp...',
      error: 'Pantjata',
      close: 'Jistantaña',
      cancel: 'Sarayaña',
      confirm: 'Yaqhanaña',
      save: 'Imaña',
      back: 'Qhiparu',
      next: 'Arkiri',
      search: 'Thaqaña',
      filter: 'Churiña',
      welcome: 'Suma jutawi',
      getStarted: 'Qalltaña'
    },
    compare: {
      title: 'Yäqha Uñacht\'aña',
      searchPlaceholder: 'Lurañanak, yatiñütan, especializacionanak thaqhaña...',
      exploreAllCareers: 'Taqi Lurañanak Uñjañäni',
      duration: 'Tiempo:',
      salary: 'Qullqi:',
      location: 'Kawki:',
      prestige: 'Suma Kay',
      balance: 'Equilibrio',
      alreadyAdded: 'Uka yapata',
      maxCareers: 'Phisqa luräwinakamaki',
      addToComparison: 'Uñacht\'añaru yapäña'
    },
    chat: {
      welcomeMessage: '¡Suma jutawi! Yatiñ irptayiri yanapirimaawa. ¿Kunjamatsa yanapäta jichha uruwi?',
      startConversation: '¡Aruskipaña qalltañataki maya yatiyäwi qillqam!',
      typing: 'Qillqaskiwa...',
      placeholder: 'Yatiyäwima qillqantam...'
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