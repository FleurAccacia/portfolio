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
      "Passionné par la création d'expériences web modernes et performantes. J'utilise les dernières technologies pour donner vie à vos idées.",

    // About Section
    aboutTitle: "À propos de moi",
    aboutMe: "À propos de moi",
    aboutDescription1:
      "Développeur passionné avec plus de 3 ans d'expérience dans la création d'applications web modernes. J'aime résoudre des problèmes complexes et créer des interfaces utilisateur intuitives.",
    aboutDescription2:
      "Mon approche combine créativité et expertise technique pour livrer des solutions qui dépassent les attentes. Je reste constamment à jour avec les dernières technologies et meilleures pratiques du développement web.",
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
      "Passionate about creating modern and performant web experiences. I use the latest technologies to bring your ideas to life.",

    // About Section
    aboutTitle: "About Me",
    aboutMe: "About Me",
    aboutDescription1:
      "Passionate developer with over 3 years of experience in creating modern web applications. I love solving complex problems and creating intuitive user interfaces.",
    aboutDescription2:
      "My approach combines creativity and technical expertise to deliver solutions that exceed expectations. I constantly stay up-to-date with the latest technologies and best practices in web development.",
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
