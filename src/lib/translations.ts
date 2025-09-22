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

  // Nueva funcionalidades
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
    selectMode: string;
    universityMode: string;
    universityModeDesc: string;
    vocationalMode: string;
    vocationalModeDesc: string;
    universitySubtitle: string;
    vocationalSubtitle: string;
    universityQuestion1: string;
    universityQuestion2: string;
    universityQuestion3: string;
    universityQuestion4: string;
    universityQuestion5: string;
    universityQuestion6: string;
    universityQuestion7: string;
    universityQuestion8: string;
    vocationalQuestion1: string;
    vocationalQuestion2: string;
    vocationalQuestion3: string;
    vocationalQuestion4: string;
    vocationalQuestion5: string;
    vocationalQuestion6: string;
    vocationalQuestion7: string;
    vocationalQuestion8: string;
    competitive: string;
    collaborative: string;
    clubs: string;
    studyOnly: string;
    largeCampus: string;
    smallCampus: string;
    diversity: string;
    tradition: string;
    urbanCampus: string;
    suburbanCampus: string;
    smallClasses: string;
    largeClasses: string;
    researchFocus: string;
    practicalFocus: string;
    activeSocial: string;
    quietStudy: string;
    teamWork: string;
    independentWork: string;
    analyticalThinking: string;
    creativeThinking: string;
    peopleOriented: string;
    taskOriented: string;
    handsOn: string;
    theoretical: string;
    officeBased: string;
    fieldBased: string;
    structuredHours: string;
    flexibleHours: string;
    leadershipRole: string;
    specialistRole: string;
    socialImpact: string;
    economicImpact: string;
    results: string;
    compatibility: string;
    universityCompatibility: string;
    careerCompatibility: string;
    careerMatch: string;
    topMatches: string;
    topUniversities: string;
    topCareers: string;
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
      demoPremium: 'Demo Premium',
      user: 'Usuario',
      guestDescription: 'Acceso completo de demostración • Todas las funciones disponibles',
      recent: 'Reciente',
      verificationSuccess: '¡Cuenta verificada exitosamente!',
      verificationSuccessDescription: 'Ahora tienes acceso completo a todas las funciones de WiseGO',
      languageChangeNote: 'Los cambios se aplicarán automáticamente',
      invalidDNI: 'Por favor ingresa un DNI peruano válido de 8 dígitos',
      nameUpdated: 'Nombre actualizado',
      nameUpdatedDesc: 'Tu nombre ha sido actualizado correctamente'
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
    },
    scholarshipGuide: {
        title: 'Guía de Postulación',
        subtitle: 'Pasos simples para aplicar a becas exitosamente',
        steps: 'Pasos del Proceso',
        documents: 'Documentos Requeridos',
        requirements: 'Requisitos',
        dates: 'Fechas Importantes',
        checklist: 'Lista de Verificación',
        step1Title: '1. Investigación',
        step1Desc: 'Identifica las becas disponibles que se alineen con tu perfil académico',
        step2Title: '2. Preparación',
        step2Desc: 'Reúne todos los documentos requeridos con anticipación',
        step3Title: '3. Aplicación',
        step3Desc: 'Completa la solicitud siguiendo todas las instrucciones',
        step4Title: '4. Seguimiento',
        step4Desc: 'Mantente atento a las fechas de respuesta y resultados',
        documentsNeeded: 'Documentos Necesarios',
        academicRecord: 'Certificado de estudios',
        identityDoc: 'Documento de identidad',
        incomeProof: 'Declaración de ingresos familiares',
        personalStatement: 'Carta de motivación',
        recommendationLetters: 'Cartas de recomendación',
        deadlines: 'Fechas Límite',
        nationalScholarships: 'Becas Nacionales: Marzo - Mayo',
        privateScholarships: 'Becas Privadas: Durante todo el año',
        universityScholarships: 'Becas Universitarias: Febrero - Abril'
      },

      mentorMatch: {
        title: 'Mentor Match',
        subtitle: 'Conecta con estudiantes y egresados de universidades',
        findMentor: 'Encontrar Mentor',
        mentorDirectory: 'Directorio de Mentores',
        requestSession: 'Solicitar Sesión',
        videoCall: 'Videollamada',
        chat: 'Chat',
        matchmaking: 'Matching Automático',
        points: 'Puntos',
        verified: 'Verificado',
        available: 'Disponible',
        career: 'Carrera',
        university: 'Universidad',
        experience: 'Experiencia',
        rating: 'Calificación',
        selectMentor: 'Seleccionar Mentor',
        sessionTypes: 'Tipos de Sesión',
        quickChat: 'Chat Rápido (15 min)',
        videoSession: 'Sesión de Video (30 min)',
        noMentors: 'No hay mentores disponibles para esta búsqueda'
      },

      costSimulator: {
        title: 'Simulador de Costos',
        subtitle: 'Calcula el costo total de tu carrera universitaria',
        selectUniversity: 'Selecciona Universidad',
        selectCareer: 'Selecciona Carrera',
        duration: 'Duración de estudios',
        calculate: 'Calcular',
        results: 'Resultados',
        tuition: 'Matrícula',
        monthly: 'Mensualidad',
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
        selectMode: 'Elige el tipo de análisis que prefieres:',
        universityMode: 'Análisis Universitario',
        universityModeDesc: 'Encuentra las universidades que mejor se adapten a tu personalidad y estilo de vida',
        vocationalMode: 'Análisis Vocacional',
        vocationalModeDesc: 'Descubre las carreras profesionales más alineadas con tu forma de ser y trabajar',
        universitySubtitle: 'Descubre qué universidades se alinean mejor con tu personalidad',
        vocationalSubtitle: 'Encuentra las carreras que mejor se adapten a tu personalidad profesional',
        universityQuestion1: '¿Qué tipo de ambiente académico prefieres?',
        universityQuestion2: '¿Cómo te gusta pasar tu tiempo libre en la universidad?',
        universityQuestion3: '¿Qué tamaño de campus prefieres?',
        universityQuestion4: '¿Qué valoras más en una institución?',
        universityQuestion5: '¿Dónde prefieres que esté ubicado tu campus?',
        universityQuestion6: '¿Qué tamaño de clases prefieres?',
        universityQuestion7: '¿Qué enfoque académico te atrae más?',
        universityQuestion8: '¿Cómo te gusta que sea la vida social universitaria?',
        vocationalQuestion1: '¿Cómo prefieres trabajar?',
        vocationalQuestion2: '¿Cómo abordas los problemas?',
        vocationalQuestion3: '¿Qué te motiva más en el trabajo?',
        vocationalQuestion4: '¿Cuál es tu estilo de aprendizaje preferido?',
        vocationalQuestion5: '¿En qué tipo de ambiente te sientes más cómodo?',
        vocationalQuestion6: '¿Qué tipo de horario prefieres?',
        vocationalQuestion7: '¿Hacia dónde te ves creciendo profesionalmente?',
        vocationalQuestion8: '¿Qué tipo de impacto quieres generar?',
        competitive: 'Ambiente competitivo',
        collaborative: 'Ambiente colaborativo',
        clubs: 'Participar en clubs y actividades',
        studyOnly: 'Enfocarme solo en estudiar',
        largeCampus: 'Campus grandes y diversos',
        smallCampus: 'Campus pequeños e íntimos',
        diversity: 'Diversidad cultural',
        tradition: 'Tradición académica',
        urbanCampus: 'Campus urbano céntrico',
        suburbanCampus: 'Campus suburbano tranquilo',
        smallClasses: 'Clases pequeñas (hasta 25 personas)',
        largeClasses: 'Clases grandes (más de 25 personas)',
        researchFocus: 'Enfoque en investigación',
        practicalFocus: 'Enfoque práctico',
        activeSocial: 'Vida social activa y eventos',
        quietStudy: 'Ambiente tranquilo para estudiar',
        teamWork: 'Trabajo en equipo',
        independentWork: 'Trabajo independiente',
        analyticalThinking: 'Pensamiento analítico',
        creativeThinking: 'Pensamiento creativo',
        peopleOriented: 'Orientado a las personas',
        taskOriented: 'Orientado a las tareas',
        handsOn: 'Aprendizaje práctico',
        theoretical: 'Aprendizaje teórico',
        officeBased: 'Ambiente de oficina',
        fieldBased: 'Trabajo de campo',
        structuredHours: 'Horarios estructurados',
        flexibleHours: 'Horarios flexibles',
        leadershipRole: 'Roles de liderazgo',
        specialistRole: 'Roles especializados',
        socialImpact: 'Impacto social',
        economicImpact: 'Impacto económico',
        results: '¡Resultados!',
        compatibility: 'Compatibilidad cultural',
        universityCompatibility: 'Compatibilidad universitaria',
        careerCompatibility: 'Compatibilidad vocacional',
        careerMatch: 'Match vocacional',
        topMatches: 'Tus mejores matches:',
        topUniversities: 'Universidades recomendadas:',
        topCareers: 'Carreras recomendadas:',
        retakeTest: 'Volver a hacer el test'
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
      // Carreras
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
      missionText: 'Empower students with intelligent and personalized tools that allow them to make informed decisions about their higher education. We use artificial intelligence in an ethical and responsible manner to analyze aptitudes, interests and objectives, offering precise and updated recommendations about careers and universities that align with each user\'s unique profile.',
      vision: 'Our Vision',
      visionText: 'To be the leading platform in educational guidance powered by artificial intelligence, revolutionizing the way students discover their potential and make decisions about their academic and professional future. We aspire to create a world where every person can find their ideal path to success, eliminating information barriers and facilitating access to quality educational opportunities.',
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
      demoPremium: 'Demo Premium',
      user: 'User',
      guestDescription: 'Full demo access • All features available',
      recent: 'Recent',
      verificationSuccess: 'Account verified successfully!',
      verificationSuccessDescription: 'You now have full access to all WiseGO features',
      languageChangeNote: 'Changes will be applied automatically',
      invalidDNI: 'Please enter a valid 8-digit Peruvian ID',
      nameUpdated: 'Name updated',
      nameUpdatedDesc: 'Your name has been updated successfully'
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
    },

    scholarshipGuide: {
      title: 'Application Guide',
      subtitle: 'Simple steps to apply for scholarships successfully',
      steps: 'Process Steps',
      documents: 'Required Documents',
      requirements: 'Requirements',
      dates: 'Important Dates',
      checklist: 'Checklist',
      step1Title: '1. Research',
      step1Desc: 'Identify available scholarships that align with your academic profile',
      step2Title: '2. Preparation',
      step2Desc: 'Gather all required documents in advance',
      step3Title: '3. Application',
      step3Desc: 'Complete the application following all instructions',
      step4Title: '4. Follow-up',
      step4Desc: 'Stay alert for response dates and results',
      documentsNeeded: 'Required Documents',
      academicRecord: 'Academic transcripts',
      identityDoc: 'Identity document',
      incomeProof: 'Family income statement',
      personalStatement: 'Motivation letter',
      recommendationLetters: 'Recommendation letters',
      deadlines: 'Deadlines',
      nationalScholarships: 'National Scholarships: March - May',
      privateScholarships: 'Private Scholarships: Year-round',
      universityScholarships: 'University Scholarships: February - April'
    },

    mentorMatch: {
      title: 'Mentor Match',
      subtitle: 'Connect with current students and university graduates',
      findMentor: 'Find Mentor',
      mentorDirectory: 'Mentor Directory',
      requestSession: 'Request Session',
      videoCall: 'Video Call',
      chat: 'Chat',
      matchmaking: 'Automatic Matching',
      points: 'Points',
      verified: 'Verified',
      available: 'Available',
      career: 'Career',
      university: 'University',
      experience: 'Experience',
      rating: 'Rating',
      selectMentor: 'Select Mentor',
      sessionTypes: 'Session Types',
      quickChat: 'Quick Chat (15 min)',
      videoSession: 'Video Session (30 min)',
      noMentors: 'No mentors available for this search'
    },

    costSimulator: {
      title: 'Cost Simulator',
      subtitle: 'Calculate the total cost of your university career',
      selectUniversity: 'Select University',
      selectCareer: 'Select Career',
      duration: 'Study duration',
      calculate: 'Calculate',
      results: 'Results',
      tuition: 'Tuition',
      monthly: 'Monthly fee',
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
      selectMode: 'Choose the type of analysis you prefer:',
      universityMode: 'University Analysis',
      universityModeDesc: 'Find universities that best match your personality and lifestyle',
      vocationalMode: 'Vocational Analysis',
      vocationalModeDesc: 'Discover professional careers most aligned with your way of being and working',
      universitySubtitle: 'Discover which universities align best with your personality',
      vocationalSubtitle: 'Find careers that best match your professional personality',
      universityQuestion1: 'What type of academic environment do you prefer?',
      universityQuestion2: 'How do you like to spend your free time at university?',
      universityQuestion3: 'What campus size do you prefer?',
      universityQuestion4: 'What do you value most in an institution?',
      universityQuestion5: 'Where do you prefer your campus to be located?',
      universityQuestion6: 'What class size do you prefer?',
      universityQuestion7: 'What academic approach attracts you most?',
      universityQuestion8: 'How do you like university social life to be?',
      vocationalQuestion1: 'How do you prefer to work?',
      vocationalQuestion2: 'How do you approach problems?',
      vocationalQuestion3: 'What motivates you most at work?',
      vocationalQuestion4: 'What is your preferred learning style?',
      vocationalQuestion5: 'What type of environment makes you feel most comfortable?',
      vocationalQuestion6: 'What type of schedule do you prefer?',
      vocationalQuestion7: 'Where do you see yourself growing professionally?',
      vocationalQuestion8: 'What type of impact do you want to generate?',
      competitive: 'Competitive environment',
      collaborative: 'Collaborative environment',
      clubs: 'Participate in clubs and activities',
      studyOnly: 'Focus only on studying',
      largeCampus: 'Large and diverse campuses',
      smallCampus: 'Small and intimate campuses',
      diversity: 'Cultural diversity',
      tradition: 'Academic tradition',
      urbanCampus: 'Urban downtown campus',
      suburbanCampus: 'Quiet suburban campus',
      smallClasses: 'Small classes (up to 25 people)',
      largeClasses: 'Large classes (more than 25 people)',
      researchFocus: 'Research focus',
      practicalFocus: 'Practical focus',
      activeSocial: 'Active social life and events',
      quietStudy: 'Quiet environment for studying',
      teamWork: 'Team work',
      independentWork: 'Independent work',
      analyticalThinking: 'Analytical thinking',
      creativeThinking: 'Creative thinking',
      peopleOriented: 'People oriented',
      taskOriented: 'Task oriented',
      handsOn: 'Hands-on learning',
      theoretical: 'Theoretical learning',
      officeBased: 'Office environment',
      fieldBased: 'Field work',
      structuredHours: 'Structured hours',
      flexibleHours: 'Flexible hours',
      leadershipRole: 'Leadership roles',
      specialistRole: 'Specialist roles',
      socialImpact: 'Social impact',
      economicImpact: 'Economic impact',
      results: 'Results!',
      compatibility: 'Cultural compatibility',
      universityCompatibility: 'University compatibility',
      careerCompatibility: 'Vocational compatibility',
      careerMatch: 'Vocational match',
      topMatches: 'Your best matches:',
      topUniversities: 'Recommended universities:',
      topCareers: 'Recommended careers:',
      retakeTest: 'Retake the test'
    }
  },
  qu: {
    nav: {
      about: 'Ñuqayku',
      compare: 'Tupay',
      map: 'Mapa',
      chatbots: 'Rimanakuq',
      community: 'Ayllu',
      scholarshipGuide: 'Becakuna Pusaq',
      mentorMatch: 'Yachachiq Tariy',
      costSimulator: 'Chanin Yupay',
      cultureFit: 'Kawsay Tupay',
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
      premiumTitle: '¡Tukuy allin ruwaykunata kicharinapaq!',
      premiumDescription: 'Allin ñankunaman, ñawpaq tupachaykunaman hinaspa aswan willanaman haykuy',
      premiumButton: 'Premium tarinapaq',
      subscribe: 'Qullqichay',
      premiumFeature: 'Premium Ruway',
      premiumMessage: 'Premium ruwaqkunapaqlla kanqa. ¡S/25 killapi qullqichay!',
      mapTitle: 'Qayllaykipi Yachaywasikunata Maskay',
      mapSubtitle: 'Llaqtaykipi aswan allin yachana akllaykunata tarinayki',
      universityLocations: 'Yachaywasikunap Maypi Kanana',
      findLocation: 'Sapa yachaywasikunaq chiqaq maypi kasqanta Google Maps nisqapi tarinayki',
      typeLabel: 'Rikch\'ay',
      districtLabel: 'Distrito',
      // Carreras
      engineering: 'Ingeniería',
      administration: 'Kamachikuy',
      communications: 'Willakuykuna',
      psychology: 'Yuyay yachay',
      medicine: 'Hampiy yachay',
      law: 'Kamachiy',
      sciences: 'Yachaykunata',
      economics: 'Qullqi yachay',
      art: 'Ruraskaq',
      industrialEngineering: 'Ruray Ingeniería',
      veterinary: 'Uywa hampikuy',
      nursing: 'Cuiday'
    },
    about: {
      title: 'Ñuqayku',
      mission: 'Ñuqanchik Munay',
      missionText: 'Yachaqkunata yuyaysapa hinaspa sapanchasqa yanapakuykunawan kallpanchanapaq aswan allin yachayninkumanta tantiaspa akllaykunata ruwanankupaq. Inteligencia artificial nisqata allinta hinaspa responsable nisqapi llamkachispa atiyninkunata, munayninkunata hinaspa metakunata t\'aqwinapaq, sapa ruwaqpa sapanchasqa perfilninwan tupaq karrera hinaspa yachaywasikunamanta chiqap hinaspa kunan kaq yuyaychaykunata qospa.',
      vision: 'Ñuqanchik Qhaway',
      visionText: 'Inteligencia artificial kallpachakuq yachana pusaq plataforma ñawpaq kananpaq, yachaqkuna atiyninkuta tariqmanta hinaspa yachayninku hinaspa llamkayninku hamuq pachanka akllaykunamanta tikraykuspa. Munayku sapa runaq atiy ñanninman tupayninta ruwana, willay harkaykunata pichana hinaspa allin yachay oportunidadkunaman haykuyta yanapanapaq.',
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
      demoPremium: 'Demo Premium',
      user: 'Runa',
      guestDescription: 'Llapan demo yaykuy • Llapa ruwaykunas kachkan',
      recent: 'Ñaqha',
      verificationSuccess: '¡Cuenta allinmanta takyachasqa!',
      verificationSuccessDescription: 'Kunanqa llapa WiseGO ruwaykunaman hunt\'asqa yaykuyniyki kan',
      languageChangeNote: 'Tikrakuykunas kikinmanta ruwakamunqa',
      invalidDNI: 'Ama hina kay, allin 8 yupana Peru DNI-ta churay',
      nameUpdated: 'Suti tikrakusqa',
      nameUpdatedDesc: 'Sutiyki allinmanta tikrakusqa karqan'
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
    },

    scholarshipGuide: {
      title: 'Postulakuy Pusana',
      subtitle: 'Facil kaq ruraykunaq beca-kuna postulakuypaq',
      steps: 'Ruray Ruraykunas',
      documents: 'Munasqa Qillqakunas',
      requirements: 'Requisito-kuna',
      dates: 'Hatun P\'unchaykunas',
      checklist: 'Qhaway Lista',
      step1Title: '1. Maskay',
      step1Desc: 'Beca-kuna kaqkunata riqsiy yachana perfil-niki hina kasqanta',
      step2Title: '2. Wakichay',
      step2Desc: 'Tukuy munasqa qillqakunata ñawpaqmanta huñuy',
      step3Title: '3. Postulakuy',
      step3Desc: 'Postulakuyta hunt\'ay llapan yachachiykunata qatispa',
      step4Title: '4. Qatiy',
      step4Desc: 'Kutichiy p\'unchaykunamanq hinaspa ruwaykunamanqa rikchay',
      documentsNeeded: 'Munasqa Qillqakunas',
      academicRecord: 'Yachana certificado',
      identityDoc: 'Riqsichiy qillqa',
      incomeProof: 'Ayllu qullqinkunap declaración',
      personalStatement: 'Munay qillqa',
      recommendationLetters: 'Pusaq qillqakunas',
      deadlines: 'Tukuy P\'unchaykuna',
      nationalScholarships: 'Llaqta Beca-kuna: Marzo - Mayo',
      privateScholarships: 'Sapaq Beca-kuna: Tukuy wata',
      universityScholarships: 'Yachawasi Beca-kuna: Febrero - Abril'
    },

    mentorMatch: {
      title: 'Mentor Tupay',
      subtitle: 'Kunan yachakuqkunawan hinaspa yachawasi tukusqakunawan huñunakuy',
      findMentor: 'Mentor Tarinapaq',
      mentorDirectory: 'Mentor Suyu',
      requestSession: 'Sesión Mañakuy',
      videoCall: 'Video Waqyay',
      chat: 'Rimanakuy',
      matchmaking: 'Kikin Tupay',
      points: 'Puntokunata',
      verified: 'Takyachasqa',
      available: 'Kachkan',
      career: 'Llamkay',
      university: 'Yachawasi',
      experience: 'Yachay',
      rating: 'Chanichay',
      selectMentor: 'Mentor Akllay',
      sessionTypes: 'Sesión Laya',
      quickChat: 'Utqay Rimanakuy (15 min)',
      videoSession: 'Video Sesión (30 min)',
      noMentors: 'Manam mentor kanchu kay maskaymanqa'
    },

    costSimulator: {
      title: 'Qullqi Yupaycha',
      subtitle: 'Yachanayki tukuy qullqinta yupay',
      selectUniversity: 'Yachawasi Akllay',
      selectCareer: 'Llamkay Akllay',
      duration: 'Yachana pachaw',
      calculate: 'Yupay',
      results: 'Ruwaykunas',
      tuition: 'Qullqichay',
      monthly: 'Killay',
      totalCost: 'Tukuy Qullqi',
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
      selectMode: 'Akllasqa tukukay hap\'iykunata munasqayki:',
      universityMode: 'Yachaywasikunamanta T\'aqwirisqa',
      universityModeDesc: 'Yachaywasikunata tariway sunquykunawan kasqayta',
      vocationalMode: 'Llamkanamanta T\'aqwirisqa',
      vocationalModeDesc: 'Llamkaykunata tariway sunquykunawan kasqayta',
      universitySubtitle: 'Tariway mayqin yachaywasikunas aswan allinta tupanki',
      vocationalSubtitle: 'Tariway mayqin llamkanakuna aswan allinta tupanki',
      universityQuestion1: '¿Ima laya yachay pachama munanki?',
      universityQuestion2: '¿Imaynatan mana yachay pachapi kankuna?',
      universityQuestion3: '¿Ima sayayniyuq campus munanki?',
      universityQuestion4: '¿Imata aswan chaninchanki?',
      universityQuestion5: '¿Maypitak campus kananpaq munanki?',
      universityQuestion6: '¿Ima sayayniyuq yachaywasikuna munanki?',
      universityQuestion7: '¿Ima laya yachay munanki?',
      universityQuestion8: '¿Imaynatan yachaywasipi wiñarina munanki?',
      vocationalQuestion1: '¿Imaynatan llamkay munanki?',
      vocationalQuestion2: '¿Imaynatan sasachakuykunata t\'aqwinki?',
      vocationalQuestion3: '¿Imatak aswan kallpachasunki llamkaypi?',
      vocationalQuestion4: '¿Ima yachana kamachiyta munanki?',
      vocationalQuestion5: '¿Ima pachapi aswan allinta tarishanki?',
      vocationalQuestion6: '¿Ima laya pachapi llamkay munanki?',
      vocationalQuestion7: '¿Maymantak wiñaspa rinakusaq nispa qhawarishanki?',
      vocationalQuestion8: '¿Ima laya ruwaykunata ruray munanki?',
      competitive: 'Atipanakuy pacha',
      collaborative: 'Yanapanakuy pacha',
      clubs: 'Club-kunapiwan llamkayta',
      studyOnly: 'Yachayllata ruray',
      largeCampus: 'Hatun campus-kuna',
      smallCampus: 'Huch\'uy campus-kuna',
      diversity: 'Cultura kunayman kay',
      tradition: 'Yachana tradición',
      urbanCampus: 'Llaqta ukhupi campus',
      suburbanCampus: 'Thak llaqi campus',
      smallClasses: 'Huch\'uy yachaywasiykuna',
      largeClasses: 'Hatun yachaywasiykuna',
      researchFocus: 'Maskaykuna ruray',
      practicalFocus: 'Ruwaykunapi yachay',
      activeSocial: 'Kuskaylla wiñarina',
      quietStudy: 'Ch\'in yachana',
      teamWork: 'T\'aqakunawan llamkay',
      independentWork: 'Sapalla llamkay',
      analyticalThinking: 'Yuyaykunata t\'aqwiy',
      creativeThinking: 'Kamana yuyay',
      peopleOriented: 'Runaman qhawasqa',
      taskOriented: 'Ruwaykunaman qhawasqa',
      handsOn: 'Maki ruwaywan yachay',
      theoretical: 'Yachay simi',
      officeBased: 'Oficinapi llamkay',
      fieldBased: 'Chakrapi llamkay',
      structuredHours: 'Kamachisqa pachakuna',
      flexibleHours: 'Muyupayachiy pachakuna',
      leadershipRole: 'Pusaq kaypi kana',
      specialistRole: 'Yachaq kaypi kana',
      socialImpact: 'Runakunaman yanapay',
      economicImpact: 'Qullqi pachapi yanapay',
      results: 'Tukuykuna!',
      compatibility: 'Cultura tupay',
      universityCompatibility: 'Yachaywasi tupay',
      careerCompatibility: 'Llamkana tupay',
      careerMatch: 'Llamkana tupay',
      topMatches: 'Aswan allinta tupaqkuna:',
      topUniversities: 'Yuyaysapa yachaywasiykuna:',
      topCareers: 'Yuyaysapa llamkaykuna:',
      retakeTest: 'Hukmanta ruwana pruebaykita'
    }
  },
  ay: {
    nav: {
      about: 'Jiwasanxa',
  ay: {
    nav: {
      about: 'Jiwasanaka',
      compare: 'Uñtaña',
      map: 'Mapa',
      chatbots: 'Aruskipayiri',
      community: 'Marka',
      scholarshipGuide: 'Becanakas Irpiri',
      mentorMatch: 'Yatiñir Jikisiña',
      costSimulator: 'Chanin Jakhuña',
      cultureFit: 'Jakañas Uñjäwi',
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
      premiumTitle: '¡Taqi allin lurawinaka jist\'antaña!',
      premiumDescription: 'Allin thakhinakaru, nayra uñtayirinakaru ukhamarak juk\'a yatiyawinakaru mantañäni',
      premiumButton: 'Premium churaña',
      subscribe: 'Phusiri',
      premiumFeature: 'Premium Luraña',
      premiumMessage: 'Premium apnaqirinakatakiw utji. ¡S/25 phaxsipi phusiri!',
      mapTitle: 'Jakañ chiqanxi Yatiñ Utanakxa Thaqhaña',
      mapSubtitle: 'Jak suma yatiña ajllayawinaka kunjamsa jikxataña',
      universityLocations: 'Yatiñ Utanakan Kuna Chiqani',
      findLocation: 'Sapa yatiñ utanakan chiqapa kuna chiqansa Google Maps uka tuqina jikxataña',
      typeLabel: 'Kuna laya',
      districtLabel: 'Distrito',
      // Carreras
      engineering: 'Ingeniería',
      administration: 'Administración',
      communications: 'Aruskipawi',
      psychology: 'Psicología',
      medicine: 'Medicina',
      law: 'Kamachi',
      sciences: 'Yatiqañanaka',
      economics: 'Economía',
      art: 'Arte',
      industrialEngineering: 'Industrial Ingeniería',
      veterinary: 'Uywaña usunaka',
      nursing: 'Cuidaña'
    },
    about: {
      title: 'Jiwasanaka',
      mission: 'Jiwasan Munaña',
      missionText: 'Yatiqirinakaru yanapay yatiyiri ukhamarak sapäw yanapayirinakampi suma amtawinaka lurañ munañapataki ukhamarak jach\'a yatiñanakapat suma amtawinaka lurañataki. Inteligencia artificial ukamp suminak ukhamarak ukch\'ak amuyumpi sum lurañapataki yatiqirinakan atiyawinanakapataki, munayawinakapataki ukhamarak amtawinakapataki t\'aqañapataki, sapa apnaqirin sapäw perfilnakamp tuqt\'aya irnaqawinanak ukhamarak yatiñ utanak chiqap ukhamarak machaq iwxt\'awinaka churañapataki.',
      vision: 'Jiwasan Uñjaña',
      visionText: 'Inteligencia artificial ukampi yanapata yatiñ irptayiri plataforma nayriri ukhamaña, yatiqirinakan atiyanaka jikxataña ukhamarak yatiñanakapataki ukhamarak irnaqañanakapataki jutir pachanakapataki amtawinaka lurañapataki mayjt\'ayaña. Munayäni sapa jaqi atiyi thakhinaru tupañaña lurayaña, yatiyawinak jark\'ayawinaka chhaqhayaña ukhamarak allin yatiñ lurañanak juttañataki yanapay.',
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
      demoPremium: 'Demo Premium',
      user: 'Jaqi',
      guestDescription: 'Taqi demo mantañani • Taqi lurawinak utji',
      recent: 'Jichhacha',
      verificationSuccess: '¡Cuenta suma yaqhata!',
      verificationSuccessDescription: 'Jichhax taqi WiseGO lurawinaruw hunt\'asaña mantañama',
      languageChangeNote: 'Mayjt\'awinaks kikipa lurasiñani',
      invalidDNI: 'Mä suma 8 jakhu Peru DNI uñacht\'ayañam',
      nameUpdated: 'Suti mayjt\'ata',
      nameUpdatedDesc: 'Sutimax suma mayjt\'atawa'
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
    },

    scholarshipGuide: {
      title: 'Postulañ Irptaña',
      subtitle: 'Facil lurañanaka beca-kuna postulañataki',
      steps: 'Luraña Lurañanaks',
      documents: 'Munat Qillqanaks',
      requirements: 'Requisitunaks',
      dates: 'Jach\'a Urunakas',
      checklist: 'Uñjañ Lista',
      step1Title: '1. Thaqhaña',
      step1Desc: 'Beca-kuna jilanaka yatiñ perfil-nikiamp katxaruxa riqsiña',
      step2Title: '2. Wakichañ',
      step2Desc: 'Taqi munat qillqakunata nayrat huñuña',
      step3Title: '3. Postulañ',
      step3Desc: 'Postulañaxa taqi yatichäwinaka arkaspa hunt\'aña',
      step4Title: '4. Arktañ',
      step4Desc: 'Kutichañ urunakapataki ukhamarak lurañanakapataki uñjañäni',
      documentsNeeded: 'Munat Qillqanaks',
      academicRecord: 'Yatiñ certificado',
      identityDoc: 'Riqsichañ qillqa',
      incomeProof: 'Familiat qullqi declaración',
      personalStatement: 'Munañ qillqa',
      recommendationLetters: 'Irptayañ qillqanaks',
      deadlines: 'Tukuñ P\'unchaykunas',
      nationalScholarships: 'Jacha Beca-naka: Marzo - Mayo',
      privateScholarships: 'Sapäw Beca-naka: Taqi mara',
      universityScholarships: 'Yatiñ uta Beca-naka: Febrero - Abril'
    },

    mentorMatch: {
      title: 'Mentor Katxaña',
      subtitle: 'Jichha yatiqirinakampi ukhamarak yatiñ uta tukuyatasinakamp chikancht\'asiña',
      findMentor: 'Mentor Thaqhañataki',
      mentorDirectory: 'Mentor Suyu',
      requestSession: 'Sesión Mayiña',
      videoCall: 'Video Jawsaña',
      chat: 'Aruskipaña',
      matchmaking: 'Kikipa Katxaña',
      points: 'Puntunakas',
      verified: 'Yaqhata',
      available: 'Utji',
      career: 'Luräwi',
      university: 'Yatiñ uta',
      experience: 'Yatiña',
      rating: 'Chanichäña',
      selectMentor: 'Mentor Ajlliña',
      sessionTypes: 'Sesión Layanaks',
      quickChat: 'Jank\'aki Aruskipaña (15 min)',
      videoSession: 'Video Sesión (30 min)',
      noMentors: 'Janiwa mentor utjkiti aka thaqhañaru'
    },

    costSimulator: {
      title: 'Qullqi Jakthapiri',
      subtitle: 'Yatiñaman taqi qullqi jakthäpiña',
      selectUniversity: 'Yatiñ uta Ajlliña',
      selectCareer: 'Luräwi Ajlliña',
      duration: 'Yatiñ pachaw',
      calculate: 'Jakthäpiña',
      results: 'Lurañanaks',
      tuition: 'Qullqichañ',
      monthly: 'Phaxsi',
      totalCost: 'Taqi Qullqi',
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
      selectMode: 'Ajllita kunas uñjañäni munasmawa:',
      universityMode: 'Yatiñ Utanakar Uñjäwi',
      universityModeDesc: 'Yatiñ utanaka thaqhaña suma katxañataki',
      vocationalMode: 'Irnaqäwi Uñjäwi',
      vocationalModeDesc: 'Irnaqäwinaka thaqhaña suma katxañataki',
      universitySubtitle: 'Thaqhaña kuna yatiñ utanaka aswan suma katxañaxa',
      vocationalSubtitle: 'Thaqhaña kuna irnaqäwinaka aswan suma katxañaxa',
      universityQuestion1: '¿Kuna layar yatiñ pacha muniri?',
      universityQuestion2: '¿Kunjamasa ch\'amäwi pachara muniri?',
      universityQuestion3: '¿Kuna saya campus-kunas muniri?',
      universityQuestion4: '¿Kunas aswan phuqhantatäta?',
      universityQuestion5: '¿Kawkinsa campus utjaña muniri?',
      universityQuestion6: '¿Kuna saya yatiña utanaka muniri?',
      universityQuestion7: '¿Kuna laya yatiña muniri?',
      universityQuestion8: '¿Kunjamasa yatiñ utan jilañä muniri?',
      vocationalQuestion1: '¿Kunjamasa irnaqañä muniri?',
      vocationalQuestion2: '¿Kunjamasa jan walt\'äwinaka askichaña?',
      vocationalQuestion3: '¿Kunas aswan ch\'amanchiri irnaqañanxa?',
      vocationalQuestion4: '¿Kuna yatiña thakhi muniri?',
      vocationalQuestion5: '¿Kuna pachansa aswan suma jikxatäsmawa?',
      vocationalQuestion6: '¿Kuna laya pacha irnaqaña muniri?',
      vocationalQuestion7: '¿Kawkinsa jilañaxa luririna sañämawa?',
      vocationalQuestion8: '¿Kuna laya lurawinaka luraña muniri?',
      competitive: 'Atipañakuña pacha',
      collaborative: 'Yanapañakuña pacha',
      clubs: 'Club-nakanwa irnaqaña',
      studyOnly: 'Yatiñakiwa luraña',
      largeCampus: 'Jach\'a campus-naka',
      smallCampus: 'Jisk\'a campus-naka',
      diversity: 'Cultura kunaymankäwi',
      tradition: 'Yatiña aruskipäwi',
      urbanCampus: 'Marka taypinxa campus',
      suburbanCampus: 'Jank\'aki campus',
      smallClasses: 'Jisk\'a yatiña utanaka',
      largeClasses: 'Jach\'a yatiña utanaka',
      researchFocus: 'Thaqhañanaka luraña',
      practicalFocus: 'Lurawinakanxa yatiña',
      activeSocial: 'Kusisita jilañä',
      quietStudy: 'Iyaw\'asiña yatiña',
      teamWork: 'T\'aqanakampi irnaqaña',
      independentWork: 'Mayja irnaqaña',
      analyticalThinking: 'Amuyt\'awinaka ch\'iqaña',
      creativeThinking: 'Amuyt\'äwi lurañä',
      peopleOriented: 'Jaqinakarhu uñt\'ata',
      taskOriented: 'Luräwinarhu uñt\'ata',
      handsOn: 'Amparamp yatiña',
      theoretical: 'Yatiña arunaka',
      officeBased: 'Oficinapi irnaqaña',
      fieldBased: 'Aynoqanxa irnaqaña',
      structuredHours: 'Wakichata pachanaka',
      flexibleHours: 'Muyurayaña pachanaka',
      leadershipRole: 'Irpiri kajäwi',
      specialistRole: 'Yatiri kajäwi',
      socialImpact: 'Jaqinakarhu yanapäwi',
      economicImpact: 'Qullqi pacharu yanapäwi',
      results: 'Tukuyäwi!',
      compatibility: 'Cultura katxäwi',
      universityCompatibility: 'Yatiñ uta katxäwi',
      careerCompatibility: 'Irnaqäwi katxäwi',
      careerMatch: 'Irnaqäwi katxäwi',
      topMatches: 'Aswan suma katxäwinaka:',
      topUniversities: 'Yuyaysapa yatiñ utanaka:',
      topCareers: 'Yuyaysapa irnaqäwinaka:',
      retakeTest: 'Wasitat luraña pruebata'
    }
  }
};

export const getTranslation = (lang: Language): Translations => {
  return translations[lang] || translations.es;
};