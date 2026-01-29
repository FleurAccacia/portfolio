import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "fr" | "en";

interface Translations {
  // Navigation
  home: string;
  about: string;
  certifications: string;
  projects: string;
  speaking: string;
  engagements: string;
  contact: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;

  // About Section
  aboutTitle: string;
  aboutMe: string;
  aboutDescription1: string;
  aboutDescription2: string;
  frontendDev: string;
  backendDev: string;
  mobileDev: string;
  webTech: string;
  frontendDesc: string;
  backendDesc: string;
  mobileDesc: string;
  webTechDesc: string;

  // Projects Section
  projectsTitle: string;
  viewCode: string;
  viewDemo: string;

  // Certifications Section
  certificationsTitle: string;
  verify: string;

  // Services Section
  servicesTitle: string;
  webDevelopment: string;
  mobileDevelopment: string;
  moderatorSpeaker: string;
  socialMediaManager: string;
  trainingMentoring: string;
  webDevDesc: string;
  mobileDevDesc: string;
  moderatorDesc: string;
  socialMediaDesc: string;
  trainingDesc: string;

  // Speaking Section
  speakingTitle: string;
  slides: string;
  video: string;

  // Engagements Section
  engagementsTitle: string;
  impact: string;
  learnMore: string;

  // Contact Section
  contactTitle: string;
  email: string;
  phone: string;
  location: string;
  followMe: string;
  name: string;
  subject: string;
  message: string;
  sendMessage: string;
  messageSent: string;
}

const translations: Record<Language, Translations> = {
  fr: {
    // Navigation
    home: "Home",
    about: "About",
    certifications: "Certifications",
    projects: "Projects",
    speaking: "Speaking",
    engagements: "Engagements",
    contact: "Contact",

    // Hero Section
    heroTitle: "Bonjour, je suis Gracia GOKAR ",
    heroSubtitle: "Tech and Innovation Women",
    heroDescription:
      "J'utilise les dernières technologies pour donner vie à vos idées.\n\n\"Tout ce que ta main trouve à faire avec ta force, fais-le car tout travail procure l'abondance, mais les paroles en l'air ne mènent qu'à la disette\"",

    // About Section
    aboutTitle: "À propos de moi",
    aboutMe: "À propos de moi",
    aboutDescription1:
      "Je suis une women in tech diplômée d'une licence en génie logiciel, passionnée par la création de solutions numériques utiles et accessibles. À la croisée de la tech, de la communication et de l'impact social, je m'intéresse à la manière dont la technologie peut répondre à des besoins réels, notamment autour de l'éducation, de la mobilité et de l'emploi des jeunes.",
    aboutDescription2:
      "En parallèle du développement, j'interviens comme speaker, modératrice et community manager sur des projets et événements tech. Curieuse, orientée terrain et portée par l'impact, je conçois et accompagne des initiatives qui font le lien entre idées, communautés et solutions concrètes.",
    frontendDev: "Frontend Development",
    backendDev: "Backend Development",
    mobileDev: "Mobile Development",
    webTech: "Web Technologies",
    frontendDesc: "React, TypeScript, HTML5, CSS3, Tailwind CSS",
    backendDesc: "Node.js, Express, Python, PostgreSQL, MongoDB",
    mobileDesc: "React Native, Flutter, Progressive Web Apps",
    webTechDesc: "RESTful APIs, GraphQL, WebSockets, AWS, Docker",

    // Projects Section
    projectsTitle: "Mes Projets",
    viewCode: "Code",
    viewDemo: "Demo",

    // Certifications Section
    certificationsTitle: "Certifications",
    verify: "Vérifier",

    // Services Section
    servicesTitle: "Mes Services",
    webDevelopment: "Développement Web",
    mobileDevelopment: "Développement Mobile",
    moderatorSpeaker: "Modératrice & Speaker",
    socialMediaManager: "Social Media Manager",
    trainingMentoring: "Formatrice & Mentoring",
    webDevDesc:
      "Création d'applications web modernes et responsives utilisant les dernières technologies comme React, TypeScript .",
    mobileDevDesc:
      "Développement d'applications mobiles natives et cross-platform pour iOS et Android avec React Native et Flutter.",
    moderatorDesc:
      "Animation d'événements tech, conférences et ateliers. Interventions sur les thèmes de la technologie, diversité et innovation.",
    socialMediaDesc:
      "Gestion stratégique de la présence sur les réseaux sociaux, création de contenu, développement de communautés et campagnes marketing digitales.",
    trainingDesc:
      "Programmes de formation technique, ateliers et mentoring individuel pour les jeunes femmes entrant dans le secteur tech.",

    // Speaking Section
    speakingTitle: "Speaking",
    slides: "Slides",
    video: "Video",

    // Engagements Section
    engagementsTitle: "Engagements",
    impact: "Impact",
    learnMore: "En savoir plus",

    // Contact Section
    contactTitle: "Contact",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    followMe: "Suivez-moi",
    name: "Nom",
    subject: "Sujet",
    message: "Message",
    sendMessage: "Envoyer le message",
    messageSent: "Message envoyé ! Merci pour votre contact.",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    certifications: "Certifications",
    projects: "Projects",
    speaking: "Speaking",
    engagements: "Engagements",
    contact: "Contact",

    // Hero Section
    heroTitle: "Hello, I'm Gracia GOKAR",
    heroSubtitle: "Tech and Innovation Women",
    heroDescription:
      'I use the latest technologies to bring your ideas to life.\n\n"Whatever your hand finds to do, do it with all your might because all hard work brings profit, but mere talk leads only to poverty \"',

    // About Section
    aboutTitle: "About Me",
    aboutMe: "About Me",
    aboutDescription1:
      "I am a woman in tech with a degree in software engineering, passionate about creating useful and accessible digital solutions. At the intersection of tech, communication, and social impact, I am interested in how technology can meet real needs, particularly around education, mobility, and youth employment.",
    aboutDescription2:
      "Alongside development, I work as a speaker, moderator, and community manager on tech projects and events. Curious, field-oriented, and driven by impact, I design and support initiatives that bridge ideas, communities, and concrete solutions.",
    frontendDev: "Frontend Development",
    backendDev: "Backend Development",
    mobileDev: "Mobile Development",
    webTech: "Web Technologies",
    frontendDesc: "React, TypeScript, HTML5, CSS3, Tailwind CSS",
    backendDesc: "Node.js, Express, Python, PostgreSQL, MongoDB",
    mobileDesc: "React Native, Flutter, Progressive Web Apps",
    webTechDesc: "RESTful APIs, GraphQL, WebSockets, AWS, Docker",

    // Projects Section
    projectsTitle: "My Projects",
    viewCode: "Code",
    viewDemo: "Demo",

    // Certifications Section
    certificationsTitle: "Certifications",
    verify: "Verify",

    // Services Section
    servicesTitle: "My Services",
    webDevelopment: "Web Development",
    mobileDevelopment: "Mobile Development",
    moderatorSpeaker: "Moderator & Speaker",
    socialMediaManager: "Social Media Manager",
    trainingMentoring: "Training & Mentoring",
    webDevDesc:
      "Creation of modern and responsive web applications using the latest technologies like React, TypeScript.",
    mobileDevDesc:
      "Development of native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    moderatorDesc:
      "Moderation of tech events, conferences and workshops. Speaking engagements on technology, diversity, and innovation topics.",
    socialMediaDesc:
      "Strategic management of social media presence, content creation, community building, and digital marketing campaigns.",
    trainingDesc:
      "Technical training programs, workshops, and one-on-one mentoring for young women entering the tech industry.",

    // Speaking Section
    speakingTitle: "Speaking",
    slides: "Slides",
    video: "Video",

    // Engagements Section
    engagementsTitle: "Engagements",
    impact: "Impact",
    learnMore: "Learn More",

    // Contact Section
    contactTitle: "Contact",
    email: "Email",
    phone: "Phone",
    location: "Location",
    followMe: "Follow Me",
    name: "Name",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    messageSent: "Message sent! Thank you for contacting me.",
  },
};

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    const browserLanguage = navigator.language.startsWith("fr") ? "fr" : "en";

    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    } else {
      setLanguage(browserLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage: Language = language === "fr" ? "en" : "fr";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: translations[language],
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
