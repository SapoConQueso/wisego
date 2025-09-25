import { Language } from '@/contexts/LanguageContext';

export interface Translations {
  // Navigation
  nav: {
    about: string;
    compare: string;
    map: string;
    chatbots: string;
    community: string;
    scholarshipGuide: string;
    mentorMatch: string;
    costSimulator: string;
    cultureFit: string;
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
    premiumButton: string;
    subscribe: string;
    premiumFeature: string;
    premiumMessage: string;
    mapTitle: string;
    mapSubtitle: string;
    universityLocations: string;
    findLocation: string;
    typeLabel: string;
    districtLabel: string;
    // Carreras
    engineering: string;
    administration: string;
    communications: string;
    psychology: string;
    medicine: string;
    law: string;
    sciences: string;
    economics: string;
    art: string;
    industrialEngineering: string;
    veterinary: string;
    nursing: string;
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
    user: string;
    guestDescription: string;
    recent: string;
    verificationSuccess: string;
    verificationSuccessDescription: string;
    languageChangeNote: string;
    invalidDNI: string;
    nameUpdated: string;
    nameUpdatedDesc: string;
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

  // New functionalities
  scholarshipGuide: {
    title: string;
    subtitle: string;
    steps: string;
    documents: string;
    requirements: string;
    dates: string;
    checklist: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    documentsNeeded: string;
    academicRecord: string;
    identityDoc: string;
    incomeProof: string;
    personalStatement: string;
    recommendationLetters: string;
    deadlines: string;
    nationalScholarships: string;
    privateScholarships: string;
    universityScholarships: string;
  };

  mentorMatch: {
    title: string;
    subtitle: string;
    findMentor: string;
    mentorDirectory: string;
    requestSession: string;
    videoCall: string;
    chat: string;
    matchmaking: string;
    points: string;
    verified: string;
    available: string;
    career: string;
    university: string;
    experience: string;
    rating: string;
    selectMentor: string;
    sessionTypes: string;
    quickChat: string;
    videoSession: string;
    noMentors: string;
  };

  costSimulator: {
    title: string;
    subtitle: string;
    selectUniversity: string;
    selectCareer: string;
    duration: string;
    calculate: string;
    results: string;
    tuition: string;
    monthly: string;
    totalCost: string;
    years: string;
    semesters: string;
    estimated: string;
    breakdown: string;
    registration: string;
    materials: string;
    livingCosts: string;
  };

  cultureFit: {
    title: string;
    subtitle: string;
    startTest: string;
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
    question8: string;
    question9: string;
    question10: string;
    // Respuestas para pregunta 1 (ambiente)
    competitive: string;
    collaborative: string;
    balanced: string;
    // Respuestas para pregunta 2 (estilo de estudio)
    groupStudy: string;
    individualStudy: string;
    mixedStudy: string;
    // Respuestas para pregunta 3 (tamaño de campus)
    largeCampus: string;
    mediumCampus: string;
    smallCampus: string;
    // Respuestas para pregunta 4 (actividades)
    manyActivities: string;
    fewActivities: string;
    academicFocus: string;
    // Respuestas para pregunta 5 (diversidad)
    highDiversity: string;
    culturalTradition: string;
    localFocus: string;
    // Respuestas para pregunta 6 (apoyo)
    intensiveSupport: string;
    independentLearning: string;
    peerSupport: string;
    // Respuestas para pregunta 7 (innovación)
    cuttingEdge: string;
    traditional: string;
    adaptable: string;
    // Respuestas para pregunta 8 (social)
    veryActive: string;
    moderate: string;
    studyFocused: string;
    // Respuestas para pregunta 9 (presión)
    highPressure: string;
    relaxed: string;
    structured: string;
    // Respuestas para pregunta 10 (ubicación)
    urbanCenter: string;
    residential: string;
    mixed: string;
    // Resultados
    results: string;
    compatibility: string;
    topMatches: string;
    whyMatch: string;
    retakeTest: string;
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
      scholarshipGuide: 'Guía de Becas',
      mentorMatch: 'Mentor Match',
      costSimulator: 'Simulador de Costos',
      cultureFit: 'Culture Fit',
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
      premiumTitle: '¡Desbloquea todas las funciones premium!',
      premiumDescription: 'Accede a rutas optimizadas, comparaciones avanzadas y más información detallada',
      premiumButton: 'Obtener Premium',
      subscribe: 'Suscribirse',
      premiumFeature: 'Funcionalidad Premium',
      premiumMessage: 'está disponible solo para usuarios Premium. ¡Suscríbete por S/25 al mes!',
      mapTitle: 'Explora Universidades Cerca de Ti',
      mapSubtitle: 'Descubre las mejores opciones académicas en tu zona',
      universityLocations: 'Ubicaciones de Universidades',
      findLocation: 'Encuentra la ubicación exacta de cada universidad en Google Maps',
      typeLabel: 'Tipo',
      districtLabel: 'Distrito',
      // Carreras
      engineering: 'Ingeniería',
      administration: 'Administración',
      communications: 'Comunicaciones',
      psychology: 'Psicología',
      medicine: 'Medicina',
      law: 'Derecho',
      sciences: 'Ciencias',
      economics: 'Economía',
      art: 'Arte',
      industrialEngineering: 'Ingeniería Industrial',
      veterinary: 'Veterinaria',
      nursing: 'Enfermería'
    },
    about: {
      title: 'Conócenos',
      mission: 'Nuestra Misión',
      missionText: 'Empoderar a los estudiantes con herramientas inteligentes y personalizadas que les permitan tomar decisiones informadas sobre su educación superior. Utilizamos la inteligencia artificial de manera ética y responsable para analizar aptitudes, intereses y objetivos, ofreciendo recomendaciones precisas y actualizadas sobre carreras y universidades que se alineen con el perfil único de cada usuario.',
      vision: 'Nuestra Visión',
      visionText: 'Ser la plataforma líder en orientación educativa impulsada por inteligencia artificial, revolucionando la forma en que los estudiantes descubren su potencial y toman decisiones sobre su futuro académico y profesional. Aspiramos a crear un mundo donde cada persona pueda encontrar su camino ideal hacia el éxito, eliminando las barreras de información y facilitando el acceso a oportunidades educativas de calidad.',
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
      tips: 'Consejos para usar nuestros chatbots',
      tipsTitle: 'Maximiza tu experiencia',
      tip1: '🎯 Sé específico en tus preguntas para obtener respuestas más precisas',
      tip2: '📝 Comparte tu perfil académico para recomendaciones personalizadas',
      tip3: '🔄 Prueba diferentes chatbots según tus necesidades específicas',
      tip4: '💡 Usa el chat general para consultas rápidas y exploratorias',
      unlockSpecializedBots: 'Desbloquea chatbots especializados',
      specializedUniversityBots: 'Accede a chatbots específicos de universidades top',
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
      verifyIdentity: 'Verificar Identidad',
      document: 'Documento',
      documentPlaceholder: 'Número de DNI',
      documentHelp: 'Ingresa tu número de DNI para verificar tu identidad',
      verifyDNI: 'Verificar DNI',
      accountVerified: 'Cuenta Verificada',
      fullAccess: 'Acceso Completo',
      language: 'Idioma',
      selectLanguage: 'Seleccionar idioma',
      interfaceLanguage: 'Idioma de la interfaz',
      changesApply: 'Los cambios se aplicarán inmediatamente',
      accessibility: 'Accesibilidad',
      customizeExperience: 'Personaliza tu experiencia',
      notifications: 'Notificaciones',
      notificationsDesc: 'Recibir alertas y actualizaciones',
      darkMode: 'Modo Oscuro',
      darkModeDesc: 'Alternar entre tema claro y oscuro',
      textSize: 'Tamaño de texto',
      small: 'Pequeño',
      normal: 'Normal',
      large: 'Grande',
      contrast: 'Contraste',
      high: 'Alto',
      premiumSubscription: 'Suscripción Premium',
      demoMode: 'Modo Demo',
      fullAccessDemo: 'Acceso completo a todas las funciones',
      premiumBenefits: 'Beneficios Premium',
      specializedTest: 'Test vocacional especializado',
      generalChatIA: 'Chat IA general ilimitado',
      personalizedRecommendations: 'Recomendaciones personalizadas',
      prioritySupport: 'Soporte prioritario',
      monthlyPrice: 'S/25/mes',
      subscribeNow: 'Suscribirse ahora',
      manageSubscription: 'Gestionar suscripción',
      dangerZone: 'Zona de Peligro',
      deleteAccount: 'Eliminar cuenta',
      deleteAccountDesc: 'Esta acción no se puede deshacer',
      deleteAccountButton: 'Eliminar mi cuenta',
      createRealAccount: 'Crear cuenta real',
      guestUser: 'Usuario Invitado',
      student: 'Estudiante',
      registration: 'Registro',
      verified: 'Verificado',
      unverified: 'No verificado',
      demoPremium: 'Demo Premium',
      user: 'Usuario',
      guestDescription: 'Modo invitado con acceso completo temporal',
      recent: 'Reciente',
      verificationSuccess: 'Verificación exitosa',
      verificationSuccessDescription: 'Tu cuenta ha sido verificada correctamente',
      languageChangeNote: 'El idioma se cambiará automáticamente',
      invalidDNI: 'DNI inválido',
      nameUpdated: 'Nombre actualizado',
      nameUpdatedDesc: 'Tu nombre ha sido actualizado exitosamente'
    },
    community: {
      title: 'Comunidad WiseGO',
      discussions: 'Discusiones',
      groups: 'Grupos',
      events: 'Eventos',
      share: 'Compartir',
      join: 'Unirse',
      communityWiseGO: 'Comunidad WiseGO',
      communityDescription: 'Conecta con otros estudiantes, comparte experiencias y recibe consejos de la comunidad',
      all: 'Todas',
      testimonies: 'Testimonios',
      questions: 'Preguntas',
      newPublication: 'Nueva Publicación',
      newPost: 'Nuevo Post',
      shareWithCommunity: 'Comparte con la comunidad',
      cancel: 'Cancelar',
      publish: 'Publicar',
      graduate: 'Egresado',
      verified: 'Verificado',
      student: 'Estudiante',
      testimony: 'Testimonio',
      comments: 'comentarios',
      sharePost: 'Compartir publicación',
      loginToComment: 'Inicia sesión para comentar',
      writeComment: 'Escribe un comentario...',
      noPublications: 'No hay publicaciones disponibles',
      restrictedAccess: 'Acceso restringido para usuarios invitados',
      guestsCannotVote: 'Los usuarios invitados no pueden votar',
      guestsCannotPost: 'Los usuarios invitados no pueden crear publicaciones',
      guestsCannotComment: 'Los usuarios invitados no pueden comentar',
      publicationCreated: 'Publicación creada',
      publicationCreatedDesc: 'Tu publicación ha sido compartida con la comunidad',
      commentAdded: 'Comentario agregado',
      commentAddedDesc: 'Tu comentario ha sido publicado'
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
      title: 'Comparar Carreras',
      searchPlaceholder: 'Buscar carreras para comparar...',
      exploreAllCareers: 'Explorar todas las carreras',
      duration: 'Duración',
      salary: 'Salario promedio',
      location: 'Ubicación',
      prestige: 'Prestigio',
      balance: 'Balance vida-trabajo',
      alreadyAdded: 'Ya agregada a comparación',
      maxCareers: 'Máximo 3 carreras para comparar',
      addToComparison: 'Agregar a comparación'
    },
    chat: {
      welcomeMessage: '¡Hola! ¿En qué puedo ayudarte hoy?',
      startConversation: 'Iniciar conversación',
      typing: 'Escribiendo...',
      placeholder: 'Escribe tu mensaje aquí...'
    },
    language: {
      select: 'Seleccionar idioma',
      current: 'Idioma actual'
    },
    theme: {
      light: 'Claro',
      dark: 'Oscuro',
      toggle: 'Cambiar tema'
    },
    scholarshipGuide: {
      title: 'Guía de Becas',
      subtitle: 'Tu camino hacia la educación superior financiada',
      steps: 'Pasos para aplicar',
      documents: 'Documentos necesarios',
      requirements: 'Requisitos',
      dates: 'Fechas importantes',
      checklist: 'Lista de verificación',
      step1Title: 'Investigar oportunidades',
      step1Desc: 'Explora becas disponibles en tu área de interés',
      step2Title: 'Preparar documentos',
      step2Desc: 'Reúne toda la documentación requerida',
      step3Title: 'Completar aplicaciones',
      step3Desc: 'Llena los formularios con información precisa',
      step4Title: 'Seguimiento',
      step4Desc: 'Mantente al tanto del proceso de selección',
      documentsNeeded: 'Documentos necesarios',
      academicRecord: 'Expediente académico',
      identityDoc: 'Documento de identidad',
      incomeProof: 'Comprobante de ingresos',
      personalStatement: 'Carta de motivación',
      recommendationLetters: 'Cartas de recomendación',
      deadlines: 'Fechas límite importantes',
      nationalScholarships: 'Becas nacionales',
      privateScholarships: 'Becas privadas',
      universityScholarships: 'Becas universitarias'
    },
    mentorMatch: {
      title: 'Mentor Match',
      subtitle: 'Conecta con mentores expertos en tu área de interés',
      findMentor: 'Encontrar Mentor',
      mentorDirectory: 'Directorio de Mentores',
      requestSession: 'Solicitar Sesión',
      videoCall: 'Videollamada',
      chat: 'Chat',
      matchmaking: 'Emparejamiento inteligente',
      points: 'Puntos',
      verified: 'Verificado',
      available: 'Disponible',
      career: 'Carrera',
      university: 'Universidad',
      experience: 'Experiencia',
      rating: 'Calificación',
      selectMentor: 'Seleccionar Mentor',
      sessionTypes: 'Tipos de sesión',
      quickChat: 'Chat rápido (15 min)',
      videoSession: 'Sesión de video (45 min)',
      noMentors: 'No se encontraron mentores'
    },
    costSimulator: {
      title: 'Simulador de Costos',
      subtitle: 'Calcula el costo total de tu carrera universitaria',
      selectUniversity: 'Seleccionar Universidad',
      selectCareer: 'Seleccionar Carrera',
      duration: 'Duración',
      calculate: 'Calcular',
      results: 'Resultados',
      tuition: 'Matrícula',
      monthly: 'Mensual',
      totalCost: 'Costo Total',
      years: 'años',
      semesters: 'semestres',
      estimated: 'Estimación',
      breakdown: 'Desglose de Costos',
      registration: 'Matrícula anual',
      materials: 'Materiales y libros',
      livingCosts: 'Gastos de vida (opcional)'
    },
    cultureFit: {
      title: 'Culture Fit Check',
      subtitle: 'Descubre qué universidades se alinean mejor con tu personalidad',
      startTest: 'Iniciar Test',
      question1: '¿Qué tipo de ambiente prefieres?',
      question2: '¿Cómo prefieres estudiar?',
      question3: '¿Qué tamaño de campus te atrae más?',
      question4: '¿Qué nivel de actividades extracurriculares buscas?',
      question5: '¿Qué tipo de diversidad valoras más?',
      question6: '¿Qué nivel de apoyo académico prefieres?',
      question7: '¿Qué enfoque educativo te motiva más?',
      question8: '¿Qué tan activo quieres ser socialmente?',
      question9: '¿Qué nivel de presión académica manejas mejor?',
      question10: '¿Qué tipo de ubicación prefieres?',
      // Respuestas pregunta 1
      competitive: 'Competitivo y desafiante',
      collaborative: 'Colaborativo y cooperativo',
      balanced: 'Equilibrado entre ambos',
      // Respuestas pregunta 2
      groupStudy: 'En grupos de estudio',
      individualStudy: 'De forma individual',
      mixedStudy: 'Combinando ambos métodos',
      // Respuestas pregunta 3
      largeCampus: 'Campus grandes con muchas facilidades',
      mediumCampus: 'Campus medianos y manejables',
      smallCampus: 'Campus pequeños e íntimos',
      // Respuestas pregunta 4
      manyActivities: 'Muchas actividades y clubs',
      fewActivities: 'Pocas pero de calidad',
      academicFocus: 'Enfoque principalmente académico',
      // Respuestas pregunta 5
      highDiversity: 'Alta diversidad cultural',
      culturalTradition: 'Tradición cultural específica',
      localFocus: 'Enfoque local y regional',
      // Respuestas pregunta 6
      intensiveSupport: 'Apoyo intensivo y seguimiento',
      independentLearning: 'Aprendizaje independiente',
      peerSupport: 'Apoyo entre compañeros',
      // Respuestas pregunta 7
      cuttingEdge: 'Vanguardia e innovación',
      traditional: 'Métodos tradicionales probados',
      adaptable: 'Adaptable a nuevas tendencias',
      // Respuestas pregunta 8
      veryActive: 'Muy activo en eventos sociales',
      moderate: 'Moderadamente social',
      studyFocused: 'Enfocado en los estudios',
      // Respuestas pregunta 9
      highPressure: 'Alta presión y exigencia',
      relaxed: 'Ambiente relajado y flexible',
      structured: 'Estructura clara y organizada',
      // Respuestas pregunta 10
      urbanCenter: 'Centro urbano dinámico',
      residential: 'Zona residencial tranquila',
      mixed: 'Mixto entre ambos',
      // Resultados
      results: 'Resultados',
      compatibility: 'Compatibilidad Cultural',
      topMatches: 'Top 5 Universidades Compatibles',
      whyMatch: '¿Por qué es compatible?',
      retakeTest: 'Repetir Test'
    }
  },
  en: {
    nav: {
      about: 'About Us',
      compare: 'Compare',
      map: 'Map',
      chatbots: 'Chatbots',
      community: 'Community',
      scholarshipGuide: 'Scholarship Guide',
      mentorMatch: 'Mentor Match',
      costSimulator: 'Cost Simulator',
      cultureFit: 'Culture Fit',
      profile: 'Profile',
      login: 'Login',
      register: 'Register',
      logout: 'Logout',
      guest: 'Guest'
    },
    dashboard: {
      title: 'WiseGO!',
      subtitle: 'Make it clear. Make it wise. Make it Wise.',
      searchPlaceholder: 'Search careers, universities, functions...',
      quickActions: 'Quick Actions',
      announcement: 'Open ULima registrations are now open!',
      announcementButton: 'Register here!',
      moreInfo: 'More information',
      welcomeDemo: 'Welcome to Demo Mode!',
      fullAccess: 'Full Access',
      demoDescription: 'You are using WiseGO in demonstration mode with full access to all premium features. Freely explore all chatbots and tools!'
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
      premiumTitle: 'Unlock all premium features!',
      premiumDescription: 'Access optimized routes, advanced comparisons and more detailed information',
      premiumButton: 'Get Premium',
      subscribe: 'Subscribe',
      premiumFeature: 'Premium Feature',
      premiumMessage: 'is available only for Premium users. Subscribe for S/25 per month!',
      mapTitle: 'Explore Universities Near You',
      mapSubtitle: 'Discover the best academic options in your area',
      universityLocations: 'University Locations',
      findLocation: 'Find the exact location of each university on Google Maps',
      typeLabel: 'Type',
      districtLabel: 'District',
      // Careers
      engineering: 'Engineering',
      administration: 'Administration',
      communications: 'Communications',
      psychology: 'Psychology',
      medicine: 'Medicine',
      law: 'Law',
      sciences: 'Sciences',
      economics: 'Economics',
      art: 'Art',
      industrialEngineering: 'Industrial Engineering',
      veterinary: 'Veterinary',
      nursing: 'Nursing'
    },
    about: {
      title: 'About Us',
      mission: 'Our Mission',
      missionText: 'Empower students with intelligent and personalized tools that allow them to make informed decisions about their higher education. We use artificial intelligence ethically and responsibly to analyze skills, interests and goals, offering accurate and updated recommendations about careers and universities that align with each user\'s unique profile.',
      vision: 'Our Vision',
      visionText: 'To be the leading platform in artificial intelligence-driven educational guidance, revolutionizing the way students discover their potential and make decisions about their academic and professional future. We aspire to create a world where every person can find their ideal path to success, eliminating information barriers and facilitating access to quality educational opportunities.',
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
      chooseBot: 'Choose the chatbot that best suits your needs',
      discoverCareer: 'Discover your ideal career with our specialized assistant',
      personalizedAnalysis: 'Personalized skills analysis',
      naturalConversation: 'Natural and intuitive conversation',
      profileRecommendations: 'Recommendations based on your profile',
      startVocationalTest: 'Start Vocational Test',
      requiresPremium: 'Requires Premium',
      conversationAssistant: 'Chat with our assistant about any educational topic',
      conversationDescription: 'Chat with our assistant about any educational topic',
      instantResponses: 'Instant and accurate responses',
      homeworkHelp: 'Help with homework and queries',
      academicOrientation: 'Personalized academic guidance',
      startConversation: 'Start Conversation',
      tips: 'Tips for using our chatbots',
      tipsTitle: 'Maximize your experience',
      tip1: '🎯 Be specific in your questions to get more accurate answers',
      tip2: '📝 Share your academic profile for personalized recommendations',
      tip3: '🔄 Try different chatbots according to your specific needs',
      tip4: '💡 Use general chat for quick and exploratory queries',
      unlockSpecializedBots: 'Unlock specialized chatbots',
      specializedUniversityBots: 'Access specific chatbots from top universities',
      subscribe: 'Subscribe'
    },
    profile: {
      title: 'My Profile',
      personalInfo: 'Personal Information',
      preferences: 'Preferences',
      subscription: 'Subscription',
      settings: 'Settings',
      logout: 'Logout',
      myProfile: 'My Profile',
      accountVerification: 'Account Verification',
      verifyIdentity: 'Verify Identity',
      document: 'Document',
      documentPlaceholder: 'ID number',
      documentHelp: 'Enter your ID number to verify your identity',
      verifyDNI: 'Verify ID',
      accountVerified: 'Verified Account',
      fullAccess: 'Full Access',
      language: 'Language',
      selectLanguage: 'Select language',
      interfaceLanguage: 'Interface language',
      changesApply: 'Changes will apply immediately',
      accessibility: 'Accessibility',
      customizeExperience: 'Customize your experience',
      notifications: 'Notifications',
      notificationsDesc: 'Receive alerts and updates',
      darkMode: 'Dark Mode',
      darkModeDesc: 'Toggle between light and dark theme',
      textSize: 'Text size',
      small: 'Small',
      normal: 'Normal',
      large: 'Large',
      contrast: 'Contrast',
      high: 'High',
      premiumSubscription: 'Premium Subscription',
      demoMode: 'Demo Mode',
      fullAccessDemo: 'Full access to all features',
      premiumBenefits: 'Premium Benefits',
      specializedTest: 'Specialized vocational test',
      generalChatIA: 'Unlimited general AI chat',
      personalizedRecommendations: 'Personalized recommendations',
      prioritySupport: 'Priority support',
      monthlyPrice: 'S/25/month',
      subscribeNow: 'Subscribe now',
      manageSubscription: 'Manage subscription',
      dangerZone: 'Danger Zone',
      deleteAccount: 'Delete account',
      deleteAccountDesc: 'This action cannot be undone',
      deleteAccountButton: 'Delete my account',
      createRealAccount: 'Create real account',
      guestUser: 'Guest User',
      student: 'Student',
      registration: 'Registration',
      verified: 'Verified',
      unverified: 'Unverified',
      demoPremium: 'Demo Premium',
      user: 'User',
      guestDescription: 'Guest mode with temporary full access',
      recent: 'Recent',
      verificationSuccess: 'Verification successful',
      verificationSuccessDescription: 'Your account has been verified correctly',
      languageChangeNote: 'Language will change automatically',
      invalidDNI: 'Invalid ID',
      nameUpdated: 'Name updated',
      nameUpdatedDesc: 'Your name has been updated successfully'
    },
    community: {
      title: 'WiseGO Community',
      discussions: 'Discussions',
      groups: 'Groups',
      events: 'Events',
      share: 'Share',
      join: 'Join',
      communityWiseGO: 'WiseGO Community',
      communityDescription: 'Connect with other students, share experiences and receive advice from the community',
      all: 'All',
      testimonies: 'Testimonials',
      questions: 'Questions',
      newPublication: 'New Publication',
      newPost: 'New Post',
      shareWithCommunity: 'Share with the community',
      cancel: 'Cancel',
      publish: 'Publish',
      graduate: 'Graduate',
      verified: 'Verified',
      student: 'Student',
      testimony: 'Testimonial',
      comments: 'comments',
      sharePost: 'Share post',
      loginToComment: 'Login to comment',
      writeComment: 'Write a comment...',
      noPublications: 'No publications available',
      restrictedAccess: 'Restricted access for guest users',
      guestsCannotVote: 'Guest users cannot vote',
      guestsCannotPost: 'Guest users cannot create publications',
      guestsCannotComment: 'Guest users cannot comment',
      publicationCreated: 'Publication created',
      publicationCreatedDesc: 'Your publication has been shared with the community',
      commentAdded: 'Comment added',
      commentAddedDesc: 'Your comment has been posted'
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
      title: 'Compare Careers',
      searchPlaceholder: 'Search careers to compare...',
      exploreAllCareers: 'Explore all careers',
      duration: 'Duration',
      salary: 'Average salary',
      location: 'Location',
      prestige: 'Prestige',
      balance: 'Work-life balance',
      alreadyAdded: 'Already added to comparison',
      maxCareers: 'Maximum 3 careers to compare',
      addToComparison: 'Add to comparison'
    },
    chat: {
      welcomeMessage: 'Hello! How can I help you today?',
      startConversation: 'Start conversation',
      typing: 'Typing...',
      placeholder: 'Type your message here...'
    },
    language: {
      select: 'Select language',
      current: 'Current language'
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      toggle: 'Toggle theme'
    },
    scholarshipGuide: {
      title: 'Scholarship Guide',
      subtitle: 'Your path to funded higher education',
      steps: 'Application steps',
      documents: 'Required documents',
      requirements: 'Requirements',
      dates: 'Important dates',
      checklist: 'Checklist',
      step1Title: 'Research opportunities',
      step1Desc: 'Explore available scholarships in your area of interest',
      step2Title: 'Prepare documents',
      step2Desc: 'Gather all required documentation',
      step3Title: 'Complete applications',
      step3Desc: 'Fill out forms with accurate information',
      step4Title: 'Follow up',
      step4Desc: 'Stay informed about the selection process',
      documentsNeeded: 'Required documents',
      academicRecord: 'Academic record',
      identityDoc: 'Identity document',
      incomeProof: 'Income proof',
      personalStatement: 'Personal statement',
      recommendationLetters: 'Recommendation letters',
      deadlines: 'Important deadlines',
      nationalScholarships: 'National scholarships',
      privateScholarships: 'Private scholarships',
      universityScholarships: 'University scholarships'
    },
    mentorMatch: {
      title: 'Mentor Match',
      subtitle: 'Connect with expert mentors in your area of interest',
      findMentor: 'Find Mentor',
      mentorDirectory: 'Mentor Directory',
      requestSession: 'Request Session',
      videoCall: 'Video Call',
      chat: 'Chat',
      matchmaking: 'Smart matching',
      points: 'Points',
      verified: 'Verified',
      available: 'Available',
      career: 'Career',
      university: 'University',
      experience: 'Experience',
      rating: 'Rating',
      selectMentor: 'Select Mentor',
      sessionTypes: 'Session types',
      quickChat: 'Quick chat (15 min)',
      videoSession: 'Video session (45 min)',
      noMentors: 'No mentors found'
    },
    costSimulator: {
      title: 'Cost Simulator',
      subtitle: 'Calculate the total cost of your university career',
      selectUniversity: 'Select University',
      selectCareer: 'Select Career',
      duration: 'Duration',
      calculate: 'Calculate',
      results: 'Results',
      tuition: 'Tuition',
      monthly: 'Monthly',
      totalCost: 'Total Cost',
      years: 'years',
      semesters: 'semesters',
      estimated: 'Estimate',
      breakdown: 'Cost Breakdown',
      registration: 'Annual tuition',
      materials: 'Materials and books',
      livingCosts: 'Living expenses (optional)'
    },
    cultureFit: {
      title: 'Culture Fit Check',
      subtitle: 'Discover which universities best align with your personality',
      startTest: 'Start Test',
      question1: 'What type of environment do you prefer?',
      question2: 'How do you prefer to study?',
      question3: 'What campus size appeals to you most?',
      question4: 'What level of extracurricular activities do you seek?',
      question5: 'What type of diversity do you value most?',
      question6: 'What level of academic support do you prefer?',
      question7: 'What educational approach motivates you most?',
      question8: 'How socially active do you want to be?',
      question9: 'What level of academic pressure do you handle best?',
      question10: 'What type of location do you prefer?',
      // Answers question 1
      competitive: 'Competitive and challenging',
      collaborative: 'Collaborative and cooperative',
      balanced: 'Balanced between both',
      // Answers question 2
      groupStudy: 'In study groups',
      individualStudy: 'Individually',
      mixedStudy: 'Combining both methods',
      // Answers question 3
      largeCampus: 'Large campuses with many facilities',
      mediumCampus: 'Medium and manageable campuses',
      smallCampus: 'Small and intimate campuses',
      // Answers question 4
      manyActivities: 'Many activities and clubs',
      fewActivities: 'Few but quality ones',
      academicFocus: 'Primarily academic focus',
      // Answers question 5
      highDiversity: 'High cultural diversity',
      culturalTradition: 'Specific cultural tradition',
      localFocus: 'Local and regional focus',
      // Answers question 6
      intensiveSupport: 'Intensive support and monitoring',
      independentLearning: 'Independent learning',
      peerSupport: 'Peer support',
      // Answers question 7
      cuttingEdge: 'Cutting-edge innovation',
      traditional: 'Proven traditional methods',
      adaptable: 'Adaptable to new trends',
      // Answers question 8
      veryActive: 'Very active in social events',
      moderate: 'Moderately social',
      studyFocused: 'Study-focused',
      // Answers question 9
      highPressure: 'High pressure and demands',
      relaxed: 'Relaxed and flexible environment',
      structured: 'Clear and organized structure',
      // Answers question 10
      urbanCenter: 'Dynamic urban center',
      residential: 'Quiet residential area',
      mixed: 'Mix of both',
      // Results
      results: 'Results',
      compatibility: 'Cultural Compatibility',
      topMatches: 'Top 5 Compatible Universities',
      whyMatch: 'Why is it compatible?',
      retakeTest: 'Retake Test'
    }
  },
  qu: {
    nav: {
      about: 'Ñuqaykumanta',
      compare: 'Tupachiy',
      map: 'Mapa',
      chatbots: 'Rimanakuqkuna',
      community: 'Ayllu',
      scholarshipGuide: 'Yachaywasi Yanapay',
      mentorMatch: 'Yachachiq Tariy',
      costSimulator: 'Chanin Yupay',
      cultureFit: 'Cultura Tupay',
      profile: 'Perfil',
      login: 'Yaykuy',
      register: 'Qillqakuy',
      logout: 'Lluqsiy',
      guest: 'Watukuq'
    },
    dashboard: {
      title: 'WiseGO!',
      subtitle: 'Sut\'ita ruway. Yachayniyuqta ruway. Wise ruway.',
      searchPlaceholder: 'Llamk\'anakunata, yachaywasikunata maskay...',
      quickActions: 'Utqaylla Ruraykunata',
      announcement: '¡ULima kichayninña kichakun!',
      announcementButton: '¡Kaypi qillqakuy!',
      moreInfo: 'Aswan willakuy',
      welcomeDemo: '¡Rikuchiy Modalman allin hamusqa!',
      fullAccess: 'Tukuy Yaykuy',
      demoDescription: 'WiseGOta rikuchiy modalpi llamk\'achkanki tukuy premium ruraykunamanmi yaykuyta quspayki. ¡Munasqaykita tukuy chatbot nisqakunata yanapakuykunatapas puriyachay!'
    },
    map: {
      title: 'Yachaywasikunata Qhaway',
      interactiveMap: 'Yachaywasikunamanta Rikuy Mapa',
      universitiesFound: 'Yachaywasikunata Tarisqa',
      results: 'ruwaykunata',
      searchPlaceholder: 'Yachaywasikunata, llamk\'anakunata, suyukunata maskay...',
      allTypes: 'Tukuy',
      public: 'Runakunapaq',
      private: 'Sapan',
      allDistricts: 'Tukuy suyukunata',
      careers: 'Llamk\'anakunata:',
      rating: 'Chanichay:',
      contact: 'Rimanakuy:',
      howToGet: 'Imaynata chayanapaq',
      viewDetails: 'Willakuykunata qhaway',
      viewInside: 'Ukhupi qhaway',
      virtualTour: 'Virtual puriy',
      premiumTitle: '¡Tukuy premium ruraykunakunata kichay!',
      premiumDescription: 'Allin puririykunaman, ñawpaq tupachiykunaman aswan detallesninkunaman yaykuy',
      premiumButton: 'Premium chaskiy',
      subscribe: 'Qillqakuy',
      premiumFeature: 'Premium Ruray',
      premiumMessage: 'premium runakunallaman kachkan. ¡S/25 killapi qillqakuy!',
      mapTitle: 'Qanman Asul Yachaywasikunata Qhaway',
      mapSubtitle: 'Zona nisqaykipi aswan allin yachana akllanakunata tariy',
      universityLocations: 'Yachaywasikunamanta Kiti',
      findLocation: 'Sapa yachaywasikunamanta chiqap kitinta Google Mapapi tariy',
      typeLabel: 'Laya',
      districtLabel: 'Suyu',
      // Carreras
      engineering: 'Ingeniería',
      administration: 'Administración',
      communications: 'Willakuykunata',
      psychology: 'Psicología',
      medicine: 'Hampiykuna',
      law: 'Kamachikuykunata',
      sciences: 'Yachaykunata',
      economics: 'Economía',
      art: 'Arte',
      industrialEngineering: 'Ingeniería Industrial',
      veterinary: 'Uywakunata hampiykuna',
      nursing: 'Enfermería'
    },
    about: {
      title: 'Ñuqaykumanta',
      mission: 'Ñuqayku Misión',
      missionText: 'Yachakuqkunata kallpachay yuyaysapa hinaspa sapanchasqa yanapakuykunawan hatun yachayninku yachachinapaq allin akllaykunata ruwayta atinkumanpaq. Inteligencia artificial nisqawan sumaq sonqowan hinaspa allin ruwaywan llamk\'achkayku yachaykunata, munaykunata hinaspa metakunata qhawanapaq, chiqaq hinaspa musuqyachisqa yuyachiykuna quy llamk\'anakunamanta hinaspa yachaywasikunamanta sapa runa sapaq perfilninwan tupaq.',
      vision: 'Ñuqayku Rikuy',
      visionText: 'Inteligencia artificial purichisqa yachachiy pusaypi ñawpaq plataforma kay, yachakuqkuna atiyninku tarikuynin hinaspa yachay hinaspa profesional hamuq pacha akllaykunata ruwaynin tikraykuspa. Munayku sapa runa ayqikunaman allin ñanta tariyta atinanpaq pachata paqarichiyta, willakuy harkaykunata qichuspa hinaspa allin yachay oportunidadkunaman yaykuyta yanapaspa.',
      values: 'Ñuqayku Chanin',
      valuesText: 'Musuqyachiy, yaykuypaq kay, imaymana kay hinaspa yachay churaykuna.',
      team: 'Ñuqayku Equipo',
      contact: 'Rimanakuy',
      whyChoose: '¿Imarayku WiseGo akllana?',
      whyChooseText: 'WiseGo munasqayki llamk\'anayki hinaspa yachaywasiyki tariyta yanapan inteligencia artificial responsablemente llamk\'achispa.',
      keyPartners: 'ÑUQAYKU HATUN YANAQEKUNA',
      ourVision: 'ÑUQAYKU RIKUY',
      ourMission: 'ÑUQAYKU MISIÓN'
    },
    chatbots: {
      title: 'IA Yanapaqkuna',
      subtitle: 'Yachay especialistayku virtualkuna kaqwan rimanakuy',
      aiAssistant: 'General Yanapaq',
      careerAdvisor: 'Llamk\'ana Yachachiq',
      universityGuide: 'Yachaywasi Pusaq',
      testPrep: 'Pruebakunata Wakichiy',
      premiumAccess: 'Premium Yaykuy',
      startChat: 'Rimanakata Qallariy',
      vocationalTest: 'IA Vocacional Prueba',
      generalChat: 'General IA Rimanakuy',
      intelligentAssistants: 'Yuyaysapa Yanapaqkuna',
      chooseBot: 'Necesidadniykiman aswan allin chatbot akllana',
      discoverCareer: 'Especializado yanapaqniykuwan munasqayki llamk\'anayki tariy',
      personalizedAnalysis: 'Yachaykunata sapanchasqa qhaway',
      naturalConversation: 'Natural hinaspa sut\'i rimanakuy',
      profileRecommendations: 'Perfilniykipi sayasqa yuyachiykunata',
      startVocationalTest: 'Vocacional Pruebaykita Qallariy',
      requiresPremium: 'Premium Necesitan',
      conversationAssistant: 'Yanapaqniykuwan ima yachay temamantapas rimanakuy',
      conversationDescription: 'Yanapaqniykuwan ima yachay temamantapas rimanakuy',
      instantResponses: 'Chaylla hinaspa chiqaq kutichiykuna',
      homeworkHelp: 'Tareakunawan hinaspa tapuykunawan yanapay',
      academicOrientation: 'Sapanchasqa yachay pusay',
      startConversation: 'Rimanakata Qallariy',
      tips: 'Chatbotkunata llamk\'anapaq yuyaychaykunata',
      tipsTitle: 'Experienciaykita aswan hatunchay',
      tip1: '🎯 Tapuyniykikunapi sut\'i kay aswan chiqaq kutichiykuna chaskikunaykipaq',
      tip2: '📝 Yachay perfilniykita qoy sapanchasqa yuyachiykunata',
      tip3: '🔄 Hukniray chatbotkunata llaqtapi necesidadniykiman hina prueban',
      tip4: '💡 General rimanakuyta usay utqaylla hinaspa qhawariy tapuykunapaq',
      unlockSpecializedBots: 'Especializado chatbotkunata kichay',
      specializedUniversityBots: 'Hatun yachaywasikunamanta chatbot específicokunaman yaykuy',
      subscribe: 'Qillqakuy'
    },
    profile: {
      title: 'Perfil',
      personalInfo: 'Sapan Willakuy',
      preferences: 'Munaykuna',
      subscription: 'Qillqakuy',
      settings: 'Churakuykunata',
      logout: 'Lluqsiy',
      myProfile: 'Perfiley',
      accountVerification: 'Cuenta Takyachiy',
      verifyIdentity: 'Identidad Takyachiy',
      document: 'Documento',
      documentPlaceholder: 'DNI yupaynin',
      documentHelp: 'DNI yupayniykita churay identidadniykita takyachinapaq',
      verifyDNI: 'DNI Takyachiy',
      accountVerified: 'Cuenta Takyachisqa',
      fullAccess: 'Tukuy Yaykuy',
      language: 'Rimay',
      selectLanguage: 'Rimayta akllana',
      interfaceLanguage: 'Interface rimaynin',
      changesApply: 'Tikraykunata chaylla churakunku',
      accessibility: 'Yaykuypaq kay',
      customizeExperience: 'Experienciaykita sapanchay',
      notifications: 'Willakuykunata',
      notificationsDesc: 'Alertakunata hinaspa musuqyachiykunata chaskiy',
      darkMode: 'Tutayaq Modo',
      darkModeDesc: 'K\'anchay hinaspa tutayaq tema chimpapuy',
      textSize: 'Qillqamanta hatunchay',
      small: 'Huch\'uy',
      normal: 'Normal',
      large: 'Hatun',
      contrast: 'Contraste',
      high: 'Hatun',
      premiumSubscription: 'Premium Qillqakuy',
      demoMode: 'Demo Modo',
      fullAccessDemo: 'Tukuy ruraykunaman hunt\'ay yaykuy',
      premiumBenefits: 'Premium Allinkunata',
      specializedTest: 'Especializado vocacional prueba',
      generalChatIA: 'Mana tukupaq general IA rimanakuy',
      personalizedRecommendations: 'Sapanchasqa yuyachiykunata',
      prioritySupport: 'Ñawpaq yanapay',
      monthlyPrice: 'S/25/killa',
      subscribeNow: 'Kunan qillqakuy',
      manageSubscription: 'Qillqakata kamachiy',
      dangerZone: 'Zona Peligrosa',
      deleteAccount: 'Cuenta qichuy',
      deleteAccountDesc: 'Kay rurayqa manam kutichiychu',
      deleteAccountButton: 'Cuentayta qichuy',
      createRealAccount: 'Chiqaq cuenta ruway',
      guestUser: 'Watukuq Runa',
      student: 'Yachakuq',
      registration: 'Qillqay',
      verified: 'Takyachisqa',
      unverified: 'Mana takyachisqa',
      demoPremium: 'Demo Premium',
      user: 'Runa',
      guestDescription: 'Watukuq modo mana wiñaypaq hunt\'ay yaykuy',
      recent: 'Ñaqha',
      verificationSuccess: 'Takyachiy allin',
      verificationSuccessDescription: 'Cuentayki allinta takyachisqa kachkan',
      languageChangeNote: 'Rimayqa kikinmanta tikrakun',
      invalidDNI: 'Mana allin DNI',
      nameUpdated: 'Suti musuqyachisqa',
      nameUpdatedDesc: 'Sutiyki allinta musuqyachisqa karqan'
    },
    community: {
      title: 'WiseGO Ayllu',
      discussions: 'Rimanakuykunata',
      groups: 'Huñukunata',
      events: 'Ruraykunata',
      share: 'Qoy',
      join: 'Chaqruy',
      communityWiseGO: 'WiseGO Ayllu',
      communityDescription: 'Huk yachakuqkunawan tinkinakuy, experienciakunata qoy hinaspa ayllumanta yuyaychiyta chaskiy',
      all: 'Tukuy',
      testimonies: 'Testimoniokuna',
      questions: 'Tapuykunata',
      newPublication: 'Musuq Ruray',
      newPost: 'Musuq Post',
      shareWithCommunity: 'Ayllunawan qoy',
      cancel: 'Hichay',
      publish: 'Ruray',
      graduate: 'Phuqhasqa',
      verified: 'Takyachisqa',
      student: 'Yachakuq',
      testimony: 'Testimonio',
      comments: 'rimaykuna',
      sharePost: 'Rurhayta qoy',
      loginToComment: 'Yaykuy rimaykunaypaq',
      writeComment: 'Huk rimaykunata qillqay...',
      noPublications: 'Mana ruraykunata kachkanchu',
      restrictedAccess: 'Watukuq runakunapaq harkasqa yaykuy',
      guestsCannotVote: 'Watukuq runakuna manam akllaykunatachu ruwayta atinkumanchu',
      guestsCannotPost: 'Watukuq runakuna manam ruraykunatachu ruwayta atinkumanchu',
      guestsCannotComment: 'Watukuq runakuna manam rimaykunatachu ruwayta atinkumanchu',
      publicationCreated: 'Ruray ruwasqa',
      publicationCreatedDesc: 'Rurayniyki ayllunawan qusqa karqan',
      commentAdded: 'Rimay yapasqa',
      commentAddedDesc: 'Rimayniyki rurasqa karqan'
    },
    common: {
      loading: 'Kargachkaspa...',
      error: 'Pantay',
      close: 'Wichqay',
      cancel: 'Hichay',
      confirm: 'Takyachiy',
      save: 'Waqaychay',
      back: 'Kutiy',
      next: 'Qatiq',
      search: 'Maskay',
      filter: 'Ch\'ullchuy',
      welcome: 'Allin hamusqa',
      getStarted: 'Qallariy'
    },
    compare: {
      title: 'Llamk\'anakunata Tupachiy',
      searchPlaceholder: 'Tupachiy llamk\'anakunata maskay...',
      exploreAllCareers: 'Tukuy llamk\'anakunata qhawariy',
      duration: 'Unay kay',
      salary: 'Chawpi sueldo',
      location: 'Kiti',
      prestige: 'Sumaq kay',
      balance: 'Llamk\'ay-kawsay kuskay',
      alreadyAdded: 'Tupachiymanña yapasqa',
      maxCareers: 'Pisqa 3 llamk\'anat tupachiy',
      addToComparison: 'Tupachiymanqa yapay'
    },
    chat: {
      welcomeMessage: '¡Napaykuy! ¿Imapitak kunan punchaw yanapaykkiman?',
      startConversation: 'Rimanakata qallariy',
      typing: 'Qillqachkaspa...',
      placeholder: 'Willakuyniykita kaypi qillqay...'
    },
    language: {
      select: 'Rimayta akllana',
      current: 'Kunan rimay'
    },
    theme: {
      light: 'K\'anchayasqa',
      dark: 'Tutayaq',
      toggle: 'Temata tikray'
    },
    scholarshipGuide: {
      title: 'Yachaywasi Yanapay Pusay',
      subtitle: 'Qullqisapa hatun yachayman ñanyki',
      steps: 'Ruraykunapaq hatukuna',
      documents: 'Necesario documentokuna',
      requirements: 'Maskaykunata',
      dates: 'Importante p\'unchaykunata',
      checklist: 'Qhawariy lista',
      step1Title: 'Oportunidadkunata maskay',
      step1Desc: 'Munayniyki aymupi becakunata maskay',
      step2Title: 'Documentokunata wakichiy',
      step2Desc: 'Tukuy maskaypaq documentokunata huñuy',
      step3Title: 'Formulariokunata hunt\'achiy',
      step3Desc: 'Chiqaq willakuykunawan formulariokunata hunt\'achiy',
      step4Title: 'Qatipay',
      step4Desc: 'Akllana ruwaykunamanta willakuypi kachkay',
      documentsNeeded: 'Necesario documentokuna',
      academicRecord: 'Yachay qillqa',
      identityDoc: 'Identidad documento',
      incomeProof: 'Qullqi hamuymanta prueba',
      personalStatement: 'Sonqomanta qillqa',
      recommendationLetters: 'Yuyaychana qillqakuna',
      deadlines: 'Importante tukuy p\'unchaykunata',
      nationalScholarships: 'Mama llaqta becakuna',
      privateScholarships: 'Privado becakuna',
      universityScholarships: 'Yachaywasi becakuna'
    },
    mentorMatch: {
      title: 'Yachachiq Tupanakuy',
      subtitle: 'Munayniyki aymupi especialista yachachiqkunawan tinkiy',
      findMentor: 'Yachachiqta Tariy',
      mentorDirectory: 'Yachachiqkunamanta Directorio',
      requestSession: 'Sesión Mañay',
      videoCall: 'Video Waqyay',
      chat: 'Rimanakuy',
      matchmaking: 'Yuyaysapa tupachiy',
      points: 'Puntokuna',
      verified: 'Takyachisqa',
      available: 'Libre',
      career: 'Llamk\'ana',
      university: 'Yachaywasi',
      experience: 'Experiencia',
      rating: 'Chanichay',
      selectMentor: 'Yachachiqta Akllana',
      sessionTypes: 'Sesión layaykuna',
      quickChat: 'Utqay rimanakuy (15 min)',
      videoSession: 'Video sesión (45 min)',
      noMentors: 'Mana yachachiqkunata tarisqachu'
    },
    costSimulator: {
      title: 'Chanin Yupay',
      subtitle: 'Yachaywasi llamk\'anaykimanta tukuy chaninta yupay',
      selectUniversity: 'Yachaywasiyta Akllana',
      selectCareer: 'Llamk\'anayta Akllana',
      duration: 'Unay kay',
      calculate: 'Yupay',
      results: 'Ruwaykunata',
      tuition: 'Matrícula',
      monthly: 'Killapi',
      totalCost: 'Tukuy Chanin',
      years: 'watakunas',
      semesters: 'semestre-kuna',
      estimated: 'Yupasqa',
      breakdown: 'Qullqi T\'aqay',
      registration: 'Wata matrícula',
      materials: 'Materialkunata hinaspa liwru-kuna',
      livingCosts: 'Kawsana gastokunas (akllana)'
    },
    cultureFit: {
      title: 'Cultura Tupay Qhaway',
      subtitle: 'Tariway mayqin yachaywasikunas aswan allinta tupanki',
      startTest: 'Pruebaykita Qallariy',
      question1: '¿Ima laya pachama munanki?',
      question2: '¿Imaynataq yachayta munanki?',
      question3: '¿Ima hatunchay campus musuqsunki?',
      question4: '¿Ima nivel extracurricular ruwaykunata maskani?',
      question5: '¿Ima laya imaymana kayta chaninchanki?',
      question6: '¿Ima nivel yachana yanapaykunata munanki?',
      question7: '¿Ima yachachiy enfoque kallpachaykunki?',
      question8: '¿Hayk\'a ruway social kanki munanki?',
      question9: '¿Ima nivel yachana ñit\'iykunata allinta ruwanki?',
      question10: '¿Ima laya kitita munanki?',
      // Kutichiykunata 1
      competitive: 'Atipanakuy hinaspa sasachakuy',
      collaborative: 'Yanapanakuy hinaspa yanapanakuy',
      balanced: 'Iskayninpa chawpinpi kuskay',
      // Kutichiykunata 2
      groupStudy: 'Huñu yachaykunapi',
      individualStudy: 'Sapallay',
      mixedStudy: 'Iskay métodokunatapas huñuspa',
      // Kutichiykunata 3
      largeCampus: 'Hatun campuskunata ashka facilidadkunawan',
      mediumCampus: 'Chawpi hinaspa kamachiy atiy campuskuna',
      smallCampus: 'Huch\'uy hinaspa sumay campuskuna',
      // Kutichiykunata 4
      manyActivities: 'Ashka ruwaykunata hinaspa clubkuna',
      fewActivities: 'Pisi ichaqa allin',
      academicFocus: 'Aswanta yachana rikch\'ay',
      // Kutichiykunata 5
      highDiversity: 'Hatun cultura imaymana kay',
      culturalTradition: 'Sapaq cultura tradición',
      localFocus: 'Llaqta hinaspa suyu rikch\'ay',
      // Kutichiykunata 6
      intensiveSupport: 'Sinchi yanapay hinaspa qhaway',
      independentLearning: 'Independiente yachay',
      peerSupport: 'Compañerokunapa yanapay',
      // Kutichiykunata 7
      cuttingEdge: 'Ñawpaq hinaspa musuqyachiy',
      traditional: 'Tradicional ruwaykuna probadokuna',
      adaptable: 'Musuq tendenciakunaman adaptakuy',
      // Kutichiykunata 8
      veryActive: 'Ancha ruway social eventokunapiqa',
      moderate: 'Chawpimanta social',
      studyFocused: 'Yachaykunapi rikch\'asqa',
      // Kutichiykunata 9
      highPressure: 'Hatun ñit\'iy hinaspa exigencia',
      relaxed: 'Samay hinaspa flexible pacha',
      structured: 'Sut\'i hinaspa organizasqa estructura',
      // Kutichiykunata 10
      urbanCenter: 'Dinámico llaqta chawpi',
      residential: 'Ch\'uyanchaq residential área',
      mixed: 'Iskayninmanta chaqrusqa',
      // Ruwaykunata
      results: 'Ruwaykunata',
      compatibility: 'Cultura Tupay',
      topMatches: 'Pichqa Aswan Allin Yachaywasikunata',
      whyMatch: '¿Imarayku allin tupay?',
      retakeTest: 'Wakmanta ruray pruebaykita'
    }
  },
  ay: {
    nav: {
      about: 'Jiwasanakamanta',
      compare: 'Chikata uñanchañäni',
      map: 'Mapa',
      chatbots: 'Aruskipiririnaka',
      community: 'Markanakasa',
      scholarshipGuide: 'Yatiñ Uta Yanapa Irpiri',
      mentorMatch: 'Yachachiri Jikxatañäni',
      costSimulator: 'Chanin Jakthapiri',
      cultureFit: 'Cultura Katjañäni',
      profile: 'Perfil',
      login: 'Mantañäni',
      register: 'Qillqantañäni',
      logout: 'Mistuñäni',
      guest: 'Wätkiri'
    },
    dashboard: {
      title: 'WiseGO!',
      subtitle: 'Qhanañchañäni. Yatiñani luraña. Wise luraña.',
      searchPlaceholder: 'Irnaqäwinaka, yatiñ utanaka, lurañanakampixa thaqhañäni...',
      quickActions: 'Jayyäñäña Lurañanaka',
      announcement: '¡ULima jist\'arañawa wakisiri kichasiña!',
      announcementButton: '¡Akana qillqantañäni!',
      moreInfo: 'Juk\'ampi yatiñanaka',
      welcomeDemo: '¡Rikuchäñ modalaru suma jutiri!',
      fullAccess: 'Taqi mantañäña',
      demoDescription: 'WiseGO rikuchäñ modampixa apnaqtanwa, taqi premium lurañanaka mantañaña qusañapataki. ¡Munañama taqiniwa chatbot ukhamaraki yanapañanakata puriyañäni!'
    },
    map: {
      title: 'Yatiñ Utanaka Uñjañäni',
      interactiveMap: 'Yatiñ Utanakamanta Uñañchäñ Mapa',
      universitiesFound: 'Yatiñ Utanaka Jikxatasiri',
      results: 'lurañanaka',
      searchPlaceholder: 'Yatiñ utanaka, irnaqäwinaka, suyunakata thaqhañäni...',
      allTypes: 'Taqinisa',
      public: 'Jaqi taypirjama',
      private: 'Chika qhithinaka',
      allDistricts: 'Taqi suyunakasa',
      careers: 'Irnaqäwinaka utjañäniwa:',
      rating: 'Uñjañäni:',
      contact: 'Aruskipañäni:',
      howToGet: 'Kunjamsa purini',
      viewDetails: 'Yätiñanaka uñjañäni',
      viewInside: 'Manqhanxi uñjañäni',
      virtualTour: 'Virtual sarnaqañäni',
      premiumTitle: '¡Taqi premium lurañanaka jist\'arañäni!',
      premiumDescription: 'Suma thakhinakaru mantañäni, nayraqata chikatanaka ukhamaraki juk\'ampi yätiñanakampi',
      premiumButton: 'Premium chaskiyañäni',
      subscribe: 'Qillqantañäni',
      premiumFeature: 'Premium Luraña',
      premiumMessage: 'premium runakunakillawa utji. ¡S/25 phaxsinxa qillqantañäni!',
      mapTitle: 'Juma jakanxa yatiñ utanaka uñjañäni',
      mapSubtitle: 'Uma chiqanxa aswan suma yatiña chhijllañanaka jikxatañäni',
      universityLocations: 'Yatiñ Utanakana Utjawinakapa',
      findLocation: 'Sapa yatiñ utanaka chiqapa utjawinakapataki Google Mapampixa jikxatañäni',
      typeLabel: 'Luraña',
      districtLabel: 'Suyu',
      // Carreras
      engineering: 'Ingeniería',
      administration: 'Administración',
      communications: 'Yatiyäwinanaka',
      psychology: 'Psicología',
      medicine: 'Qullananaka',
      law: 'Kamachinakasa',
      sciences: 'Yatiñanakasa',
      economics: 'Economía',
      art: 'Arte',
      industrialEngineering: 'Ingeniería Industrial',
      veterinary: 'Uyñanakapa qullananaka',
      nursing: 'Enfermería'
    },
    about: {
      title: 'Jiwasanakamanta',
      mission: 'Jiwasana Misión',
      missionText: 'Yatiqirinaka ch\'amanaka yuyasäñ ukhamaraki sapan chika yanapañanakapataki jach\'a yatiñanaka thaqhañapataki suma amtaña lurañapataki. Inteligencia artificial ukampi suma chuymampi ukhamaraki sum luratampi irnaqapxañäni yatiñanaka, munañanaka ukhamaraki amtanaka uñjañapataki, chiqapa ukhamaraki machaq amtäñanaka churaña irnaqäwinanaka ukhamaraki yatiñ utanakamanta sapa jaqina sapaq perfilpampi chikanakampi.',
      vision: 'Jiwasana Amtawi',
      visionText: 'Inteligencia artificial irpata yatichiñ irpiri nayrar plataforma ukhaña, yatiqirinakaxa atiyninaka jikxatañapa ukhamaraki yatiña ukhamaraki profesional jutir pacha amtäñanaka lurañapa mayjt\'ayañapataki. Munañäni sapa jaqi ayqirunakata allin thaki jikxatañataki pachata utjayañapataki, yätiñ jark\'äwinaka apsuñapataki ukhamaraki suma yatiñ chhijllañanakaru mantañapataki yanapañapataki.',
      values: 'Jiwasana Chanini',
      valuesText: 'Machaq luraña, mantañapataki utjaña, kunayman ukhamaraki yatiñ ch\'amañchañanaka.',
      team: 'Jiwasana Tantachawi',
      contact: 'Aruskipañäni',
      whyChoose: '¿Kunarayku WiseGo chhijllañäni?',
      whyChooseText: 'WiseGo munasqama irnaqäwima ukhamaraki yatiñ utama jikxatañapataki yanapaniwa inteligencia artificial sumampi apnaqasa.',
      keyPartners: 'JIWASANA JACH\'A YANAQERINAKA',
      ourVision: 'JIWASANA AMTAWI',
      ourMission: 'JIWASANA MISIÓN'
    },
    chatbots: {
      title: 'IA Yanapiriinaka',
      subtitle: 'Yatiña especialistanakasa virtualnakampi aruskipañäni',
      aiAssistant: 'Taqi Yanapiri',
      careerAdvisor: 'Irnaqawi Yatichiri',
      universityGuide: 'Yatiñ Uta Irpiri',
      testPrep: 'Pruebanakampa Wakichañäni',
      premiumAccess: 'Premium Mantañäni',
      startChat: 'Aruskipäñ qalltañäni',
      vocationalTest: 'IA Vocacional Prueba',
      generalChat: 'Taqi IA Aruskipäñ',
      intelligentAssistants: 'Yuyasäñ Yanapiriinaka',
      chooseBot: 'Munañamaru aswan allin chatbot chhijllañäni',
      discoverCareer: 'Especializado yanapirinjamampi munasqama irnaqäwima jikxatañäni',
      personalizedAnalysis: 'Yatiñanaka sapanchatañäñ uñjañäni',
      naturalConversation: 'Natural ukhamaraki qhana aruskipäñ',
      profileRecommendations: 'Perfilama jakiri amtäñanaka',
      startVocationalTest: 'Vocacional Pruebanxa qalltañäni',
      requiresPremium: 'Premium Muniri',
      conversationAssistant: 'Yanapirinjamampi kuna yatiña temamantasa aruskipañäni',
      conversationDescription: 'Yanapirinjamampi kuna yatiña temamantasa aruskipañäni',
      instantResponses: 'Jichhaxa ukhamaraki chiqapa jaysäñanaka',
      homeworkHelp: 'Irnaqäwinakamaxi ukhamaraki jiskt\'äwinakampixa yanapañäni',
      academicOrientation: 'Sapanchatäñ yatiña irpañäni',
      startConversation: 'Aruskipäñ qalltañäni',
      tips: 'Chatbotnanaka apnaqañapataki yuyachäñanaka',
      tipsTitle: 'Experiencianxa aswan jach\'anchañäni',
      tip1: '🎯 Jiskt\'äwinankanxa qhanañchtañäni aswan chiqapa jaysäñanaka chaskinapataki',
      tip2: '📝 Yatiña perfilnama uñachayañäni sapanchatäñ amtäñanakataki',
      tip3: '🔄 Mayjt\'a chatbotnanaka munañanakamataki chiqaparjamaña yant\'añäni',
      tip4: '💡 Taqi aruskipäñxa jayyäñ ukhamaraki qhawañ jiskt\'äwinakataki apnaqañäni',
      unlockSpecializedBots: 'Especializado chatbotnanaka jist\'arañäni',
      specializedUniversityBots: 'Jach\'a yatiñ utanakamanta chatbot específiconakaru mantañäni',
      subscribe: 'Qillqantañäni'
    },
    profile: {
      title: 'Perfil',
      personalInfo: 'Jaqin Yätiñanakapa',
      preferences: 'Munañanakasa',
      subscription: 'Qillqantäñ',
      settings: 'Wakichäñanaka',
      logout: 'Mistuñäni',
      myProfile: 'Perfil',
      accountVerification: 'Cuenta Chiqanchañäni',
      verifyIdentity: 'Identidad Chiqanchañäni',
      document: 'Documento',
      documentPlaceholder: 'DNI jakhunapataki',
      documentHelp: 'DNI jakhunanma uchatañäni identidama chiqanchañapataki',
      verifyDNI: 'DNI Chiqanchañäni',
      accountVerified: 'Cuenta Chiqanchäñ',
      fullAccess: 'Taqi Mantañäni',
      language: 'Aru',
      selectLanguage: 'Aru chhijllañäni',
      interfaceLanguage: 'Interface arunakapa',
      changesApply: 'Mayjt\'äwinakaxa jichhaxa uchantatäniwa',
      accessibility: 'Mantañapataki utjaña',
      customizeExperience: 'Experiencianxa sapanchañäni',
      notifications: 'Yätiñanaka',
      notificationsDesc: 'Alertanaka ukhamaraki machaq yätiñanaka chaskinañäni',
      darkMode: 'Arumäñ modo',
      darkModeDesc: 'Qhana ukhamaraki arumäñ temata mayjt\'ayañäni',
      textSize: 'Qillqaña jach\'anchaña',
      small: 'Jisk\'a',
      normal: 'Normal',
      large: 'Jach\'a',
      contrast: 'Contraste',
      high: 'Altu',
      premiumSubscription: 'Premium Qillqantäñ',
      demoMode: 'Demo Modo',
      fullAccessDemo: 'Taqi lurañanakaru hunt\'asiri mantäñ',
      premiumBenefits: 'Premium Askinakasa',
      specializedTest: 'Especializado vocacional prueba',
      generalChatIA: 'Janiwa tukuykirä taqi IA aruskipäñ',
      personalizedRecommendations: 'Sapanchatäñ amtäñanaka',
      prioritySupport: 'Nayraqata yanapäñ',
      monthlyPrice: 'S/25/phaxsi',
      subscribeNow: 'Jichhax qillqantañäni',
      manageSubscription: 'Qillqantäñ kamachañäni',
      dangerZone: 'Zona Peligrosa',
      deleteAccount: 'Cuenta chhaqtayañäni',
      deleteAccountDesc: 'Aka lurawixa janiwa kutt\'ayatäkiti',
      deleteAccountButton: 'Cuenta chhaqtayañäni',
      createRealAccount: 'Chiqapa cuenta lurañäni',
      guestUser: 'Wätkiri Jaqi',
      student: 'Yatiqiri',
      registration: 'Qillqaña',
      verified: 'Chiqanchäñ',
      unverified: 'Janiwa chiqanchäñ',
      demoPremium: 'Demo Premium',
      user: 'Jaqi',
      guestDescription: 'Wätkiri modo janiwa wiñayatäkirä hunt\'asiri mantäñ',
      recent: 'Aski timpu',
      verificationSuccess: 'Chiqanchäñ suma',
      verificationSuccessDescription: 'Cuenta chiqapa chiqanchäñata',
      languageChangeNote: 'Aruxa kikipa mayjt\'ayatarakini',
      invalidDNI: 'Janiwa allin DNI',
      nameUpdated: 'Suti machaq lurañäni',
      nameUpdatedDesc: 'Sutima suma machaq lurañäni'
    },
    community: {
      title: 'WiseGO Markanakasa',
      discussions: 'Aruskipäñanaka',
      groups: 'Tantachawinakasa',
      events: 'Lurañanaka',
      share: 'Uñachayañäni',
      join: 'Chikt\'añäni',
      communityWiseGO: 'WiseGO Markanakasa',
      communityDescription: 'Yuki yatiqirinakampi chikt\'ayañäni, experiencianaka uñachayañäni ukhamaraki markanakamanta amtäñanaka chaskinañäni',
      all: 'Taqini',
      testimonies: 'Testimoniokuna',
      questions: 'Jiskt\'äñanaka',
      newPublication: 'Machaq Luraña',
      newPost: 'Machaq Post',
      shareWithCommunity: 'Markanakampixa uñachayañäni',
      cancel: 'Sayt\'ayañäni',
      publish: 'Lurañäni',
      graduate: 'Tukuyäñ',
      verified: 'Chiqanchäñ',
      student: 'Yatiqiri',
      testimony: 'Testimonio',
      comments: 'aruñanaka',
      sharePost: 'Lurawi uñachayañäni',
      loginToComment: 'Mantañäni aruñanakataki',
      writeComment: 'Maya aruñäni qillqañäni...',
      noPublications: 'Janiwa lurañanaka utjkiti',
      restrictedAccess: 'Wätkiri jaqinakataki jark\'aña mantäñ',
      guestsCannotVote: 'Wätkiri jaqinakaxa janiwa chhijllaññanaka lurañjamakiti',
      guestsCannotPost: 'Wätkiri jaqinakaxa janiwa lurañanaka lurañjamakiti',
      guestsCannotComment: 'Wätkiri jaqinakaxa janiwa aruñanaka lurañjamakiti',
      publicationCreated: 'Luraña lurasiña',
      publicationCreatedDesc: 'Lurawima markanakampiraki uñachayata',
      commentAdded: 'Aruña yapäñ',
      commentAddedDesc: 'Aruñama lurasiski'
    },
    common: {
      loading: 'Apayañäsa...',
      error: 'Pantjañäni',
      close: 'Jist\'añäni',
      cancel: 'Sayt\'ayañäni',
      confirm: 'Chiqanchañäni',
      save: 'Imaña',
      back: 'Kutt\'añäni',
      next: 'Arkiri',
      search: 'Thaqhañäni',
      filter: 'Ch\'iqanchañäni',
      welcome: 'Suma jutiri',
      getStarted: 'Qalltañäni'
    },
    compare: {
      title: 'Irnaqäwinaka chikata uñanchañäni',
      searchPlaceholder: 'Chikata uñanchañäni irnaqäwinaka thaqhañäni...',
      exploreAllCareers: 'Taqi irnaqäwinaka uñjañäni',
      duration: 'Jaya timpu',
      salary: 'Taypi sueldo',
      location: 'Utjawi',
      prestige: 'Askin kay',
      balance: 'Irnaqäñ-jakäñ chika',
      alreadyAdded: 'Chikata uñanchañäni yapasiri',
      maxCareers: 'Aynas 3 irnaqäwina chikata uñanchañäni',
      addToComparison: 'Chikata uñanchañäni yapañäni'
    },
    chat: {
      welcomeMessage: '¡Suma urukïpana! ¿Kunjamatï jichha uru yanapañismawa?',
      startConversation: 'Aruskipäñ qalltañäni',
      typing: 'Qillqañäsa...',
      placeholder: 'Yätiñanma akana qillqañäni...'
    },
    language: {
      select: 'Aru chhijllañäni',
      current: 'Jichha aru'
    },
    theme: {
      light: 'Qhananchiri',
      dark: 'Arumäñ',
      toggle: 'Tema mayjt\'ayañäni'
    },
    scholarshipGuide: {
      title: 'Yatiñ Uta Yanapäñ Irpiri',
      subtitle: 'Qullqini jach\'a yatiñaru thakinxa',
      steps: 'Lurañapataki t\'aqäñanaka',
      documents: 'Wakisiri documentonaka',
      requirements: 'Thaqhäñanaka',
      dates: 'Wakisiri urunakataki',
      checklist: 'Uñjañäñ lista',
      step1Title: 'Chhijllañanaka thaqhañäni',
      step1Desc: 'Munañama chiqanxa becanaka thaqhañäni',
      step2Title: 'Documentonaka wakichañäni',
      step2Desc: 'Taqi thaqhasiri documentonaka tantachañäni',
      step3Title: 'Formulariokuna hunt\'achañäni',
      step3Desc: 'Chiqapa yätiñanakampi formulariokuna hunt\'achañäni',
      step4Title: 'Arkañäni',
      step4Desc: 'Chhijllaña lurañanakamanta yätiñankanxa utjañäni',
      documentsNeeded: 'Wakisiri documentonaka',
      academicRecord: 'Yatiña qillqa',
      identityDoc: 'Identidad documento',
      incomeProof: 'Qullqi puriñamanta prueba',
      personalStatement: 'Chuymamanta qillqa',
      recommendationLetters: 'Amtäñ qillqanaka',
      deadlines: 'Wakisiri tukuñ urunakataki',
      nationalScholarships: 'Mama marka becanaka',
      privateScholarships: 'Privado becanaka',
      universityScholarships: 'Yatiñ uta becanaka'
    },
    mentorMatch: {
      title: 'Yatichiri Jikxatañäni',
      subtitle: 'Munañama chiqamxa especialista yatichirinakamate chikt\'añäni',
      findMentor: 'Yatichiri jikxatañäni',
      mentorDirectory: 'Yatichirinakamanta Directorio',
      requestSession: 'Sesión Mayiña',
      videoCall: 'Video Jawsañäni',
      chat: 'Aruskipäñ',
      matchmaking: 'Yuyasäñ chikata jikxatañäni',
      points: 'Chhinunaka',
      verified: 'Chiqanchäñ',
      available: 'Jist\'arakiwa',
      career: 'Irnaqäwi',
      university: 'Yatiñ uta',
      experience: 'Experiencia',
      rating: 'Uñjañäni',
      selectMentor: 'Yatichiri chhijllañäni',
      sessionTypes: 'Sesión layanakanisa',
      quickChat: 'Jayyä aruskipäñ (15 min)',
      videoSession: 'Video sesión (45 min)',
      noMentors: 'Janiwa yatichirinaka jikxatäkiti'
    },
    costSimulator: {
      title: 'Chanin Jakthäpiri',
      subtitle: 'Yatiñ uta irnaqäwimanta taqi chanipata jakthapiaña',
      selectUniversity: 'Yatiñ uta chhijllañäni',
      selectCareer: 'Irnaqäwi chhijllañäni',
      duration: 'Jaya timpu',
      calculate: 'Jakthapiaña',
      results: 'Lurañanaka',
      tuition: 'Matrícula',
      monthly: 'Phaxsiri',
      totalCost: 'Taqi Chanipa',
      years: 'maranaks',
      semesters: 'semestre-naka',
      estimated: 'Jakthäpita',
      breakdown: 'Qullqi Ch\'iqañä',
      registration: 'Mara matrícula',
      materials: 'Materialnaka ukhamarak liwru-naka',
      livingCosts: 'Jakäñ gastukunas (ajlliñäwa)'
    },
    cultureFit: {
      title: 'Cultura Katxaña Uñjañäni',
      subtitle: 'Thaqhaña kuna yatiñ utanaka aswan suma katxañaxa',
      startTest: 'Pruebaxa Qalltañäni',
      question1: '¿Kuna laya pachama munirita?',
      question2: '¿Kunjamasa yatiñaxa munirita?',
      question3: '¿Kuna jach\'anchañ campus-xa aswan musuqsuni?',
      question4: '¿Kuna nivel extracurricular lurañanaka thaqhta?',
      question5: '¿Kuna laya kunayman kayxa aswan chanichañita?',
      question6: '¿Kuna nivel yatiña yanapañanaka munirita?',
      question7: '¿Kuna yatichiña enfoque aswan ch\'amanchañita?',
      question8: '¿Qhawqhasa luriri social uñjañapataki munirita?',
      question9: '¿Kuna nivel yatiña ch\'amakañanaka aswan suma apnaqita?',
      question10: '¿Kuna laya utjañaxa munirita?',
      // Jaysañanaka 1
      competitive: 'Atipañakuña ukhamarak ch\'amak luraña',
      collaborative: 'Yanapañakuña ukhamarak yanapañakuña',
      balanced: 'Panïrinakapa taypipaxa chika',
      // Jaysañanaka 2
      groupStudy: 'Yatiña tantachawinankanxa',
      individualStudy: 'Sapakiwa',
      mixedStudy: 'Panïri métodokuna mayachasa',
      // Jaysañanaka 3
      largeCampus: 'Jach\'a campus-naka walja facilidadanakampixa',
      mediumCampus: 'Taypi ukhamarak apnaqañjama campus-naka',
      smallCampus: 'Jisk\'a ukhamarak suma campus-naka',
      // Jaysañanaka 4
      manyActivities: 'Walja lurañanaka ukhamarak club-naka',
      fewActivities: 'Jisk\'akiwa ukampisa suma',
      academicFocus: 'Aswanxa yatiña uñjañäni',
      // Jaysañanaka 5
      highDiversity: 'Jach\'a cultura kunayman kay',
      culturalTradition: 'Maya cultura tradición',
      localFocus: 'Markasa ukhamarak suyu uñjañäni',
      // Jaysañanaka 6
      intensiveSupport: 'Ch\'ama yanapañäni ukhamarak uñjañäni',
      independentLearning: 'Independiente yatiñäni',
      peerSupport: 'Yäqanakana yanapañäni',
      // Jaysañanaka 7
      cuttingEdge: 'Nayraqata ukhamarak machaq luraña',
      traditional: 'Tradicional lurañanaka yant\'ata',
      adaptable: 'Machaq tendencianakaru uñt\'ayañäni',
      // Jaysañanaka 8
      veryActive: 'Ancha luriri social eventokunanxa',
      moderate: 'Taypi social',
      studyFocused: 'Yatiñankanxa uñjata',
      // Jaysañanaka 9
      highPressure: 'Jach\'a ch\'amakañäni ukhamarak thaqhäñanaka',
      relaxed: 'Samart\'äñ ukhamarak flexible pachasa',
      structured: 'Qhana ukhamarak wakicht\'ata estructura',
      // Jaysañanaka 10
      urbanCenter: 'Dinámico marka chawpi',
      residential: 'Ch\'uxña jakañ chiqasa',
      mixed: 'Panïrinakamanta chaqru',
      // Lurañanaka
      results: 'Lurañanakama',
      compatibility: 'Cultura Katxaña',
      topMatches: 'Pichqa Aswan Suma Yatiñ Utanaks',
      whyMatch: '¿Kunarayku suma katxaña?',
      retakeTest: 'Wasitat luraña pruebata'
    }
  }
};

export const getTranslation = (lang: Language): Translations => {
  return translations[lang] || translations.es;
};