import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { X, Award, Calendar } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const CertificationsContainer = styled.section<{ theme: any }>`
  padding: 5rem 2rem;
  background: ${(props) => props.theme.backgroundSecondary};
  transition: background-color 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)<{ theme: any }>`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.primary};
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled(motion.div)<{ theme: any }>`
  background: ${(props) => props.theme.cardBackground};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px ${(props) => `${props.theme.primary}15`};
  border: 1px solid ${(props) => props.theme.border};
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px ${(props) => `${props.theme.primary}25`};
  }
`;

const CertificationImage = styled.div<{ theme: any }>`
  width: 100%;
  height: 220px;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.theme.primary}10, ${props.theme.primaryDark}05)`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.border};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  //   /* Placeholder pour les certificats sans image */
  //   &:before {
  //     content: "📜";
  //     font-size: 3rem;
  //     opacity: 0.3;
  //   }
`;

const CertificationContent = styled.div`
  padding: 1.5rem;
`;

const CertificationTitle = styled.h3<{ theme: any }>`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.textPrimary};
  line-height: 1.3;
  min-height: 2.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CertificationIssuer = styled.p<{ theme: any }>`
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ViewButton = styled.button<{ theme: any }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${(props) => props.theme.primary};
  color: white;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => `${props.theme.primary}40`};
  }
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)<{ theme: any }>`
  background: ${(props) => props.theme.cardBackground};
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid ${(props) => props.theme.border};

  @media (max-width: 768px) {
    margin: 1rem;
    max-height: 95vh;
  }
`;

const ModalHeader = styled.div<{ theme: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

const ModalTitle = styled.h3<{ theme: any }>`
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const CloseButton = styled.button<{ theme: any }>`
  background: none;
  border: none;
  color: ${(props) => props.theme.textSecondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.textPrimary};
  }
`;

const ModalBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  max-height: 70vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

const ModalImageSection = styled.div<{ theme: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 24px ${(props) => `${props.theme.primary}20`};
    border: 1px solid ${(props) => props.theme.border};
  }
`;

const ModalTextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CertificationDetails = styled.div<{ theme: any }>`
  p {
    color: ${(props) => props.theme.textSecondary};
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  h4 {
    color: ${(props) => props.theme.textPrimary};
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    margin-top: 1.5rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  ul {
    color: ${(props) => props.theme.textSecondary};
    margin-left: 1.2rem;
    line-height: 1.6;

    li {
      margin-bottom: 0.4rem;

      &::marker {
        color: ${(props) => props.theme.primary};
      }
    }
  }
`;

const CertificationMeta = styled.div<{ theme: any }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.border};
`;

const MetaItem = styled.div<{ theme: any }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${(props) => props.theme.textSecondary};

  .icon {
    color: ${(props) => props.theme.primary};
  }
`;

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  description: string;
  skills: string[];
  achievements: string[];
}

const Certifications: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Community manager",
      issuer: "Joutes Verbales Francophones",
      date: "2025",
      image: "/certificates/jvf-certificate.png",
      description:
        "Cette certification reconnaît mes compétences en gestion de communauté pour l'organisation des Joutes Verbales Francophones, une plateforme dédiée à la promotion de l'art oratoire en francophonie.",
      skills: [
        "Gestion de communauté",
        "Communication digitale",
        "Engagement utilisateur",
        "Stratégie de contenu",
      ],
      achievements: [
        "Animation d'une communauté de plus de 1000 membres",
        "Création de contenu éducatif sur l'art oratoire",
      ],
    },
    {
      id: 2,
      title: "Speaker at Women Cybersecurity Program",
      issuer: "Cyber 221",
      date: "2025",
      image: "/certificates/speaker certificate.png",
      description:
        "Certificat de reconnaissance pour ma participation en tant qu'intervenante au programme Women Cybersecurity, visant à promouvoir la diversité dans le domaine de la cybersécurité.",
      skills: [
        "Cybersécurité",
        "Prise de parole publique",
        "Mentoring",
        "Diversité et inclusion",
      ],
      achievements: [
        "Présentation devant plus de 20 participantes",
        "Sensibilisation aux carrières en cybersécurité",
        "Mentoring de jeunes femmes en technologie",
      ],
    },
    {
      id: 3,
      title: "Campaign digital Cybersafe",
      issuer: "Cyber 221",
      date: "2024",
      image: "/certificates/CDC-cyber221.png",
      description:
        "Participation active à la campagne digitale Cybersafe, une initiative de sensibilisation aux bonnes pratiques de cybersécurité auprès du grand public.",
      skills: [
        "Marketing digital",
        "Cybersécurité",
        "Communication",
        "Sensibilisation",
      ],
      achievements: [
        "Création de contenu viral sur la cybersécurité",
        "Collaboration avec des experts en cybersécurité",
      ],
    },
    {
      id: 4,
      title: "Certificate of Voluntary Service",
      issuer: "Tech Community Day",
      date: "2024",
      image: "/certificates/TCD-certification.png",
      description:
        "Reconnaissance pour mon engagement bénévole lors du Tech Community Day, contribuant à l'organisation et à l'animation d'ateliers technologiques.",
      skills: [
        "Leadership",
        "Gestion d'événements",
        "Accueil des participants",
        "Gestion des imprévus",
      ],
      achievements: [],
    },
    {
      id: 5,
      title: "TCC Communication Lead Certificate",
      issuer: "Tech Community Clubs",
      date: "2024-2025",
      image: "/certificates/TCC completion.png",
      description:
        "Certificat de leadership en communication au sein du Tech Community Clubs de mon établissement, responsable de la stratégie de communication et de l'engagement communautaire.",
      skills: [
        "Leadership",
        "Communication stratégique",
        "Gestion d'équipe",
        "Marketing communautaire",
      ],
      achievements: [
        "Augmentation de l'engagement communautaire ",
        "Communication efficace des événements TCC",
        "Coordination avec les membres de l'équipe",
      ],
    },
    {
      id: 6,
      title: "GDSC Core Team Member Certificate",
      issuer: "Google Developer Student Clubs",
      date: "2023-2024",
      image: "/certificates/gdsc-certificate.jpg",
      description:
        "Membre actif de l'équipe principale du Google Developer Student Club, contribuant à la diffusion des technologies Google et à la formation de la communauté étudiante.",
      skills: [
        "Technologies Google ",
        "Android Development",
        "Web Development",
        "Community Building",
      ],
      achievements: [
        "Organisation de plus de 05 événements techniques",
        "Formation de 200+ étudiants",
      ],
    },
    {
      id: 7,
      title: "Entrepreneurship Certificate",
      issuer: "Linkedin Learning",
      date: "2024",
      image: "/certificates/entreprenariat linkedin.png",
      description:
        "Certification en entrepreneuriat, couvrant les principes de création d'entreprise, la gestion de projet et le développement de stratégies commerciales.",
      skills: ["Entrepreneuriat", "Gestion de projet", "Stratégie commerciale"],
      achievements: ["Acquisition de compétences en gestion et leadership"],
    },
    {
      id: 8,
      title: "Public Speaking Certificate",
      issuer: "Linkedin Learning",
      date: "2024",
      image: "/certificates/prise de parole linkedin.png",
      description:
        "Certification en prise de parole en public, développant des compétences en communication efficace, gestion du stress et engagement de l'audience.",
      skills: [
        "Public Speaking",
        "Communication",
        "Audience Engagement",
        "Stress Management",
      ],
      achievements: [
        "Présentation réussie devant divers publics",
        "Amélioration des compétences en communication verbale et non-verbale",
      ],
    },
    {
      id: 9,
      title: "Community Management Certificate",
      issuer: "Linkedin Learning",
      date: "2024",
      image: "/certificates/CM linkedin.jpeg",
      description:
        "Certification en gestion de communauté couvrant la modération, l'engagement des membres et la stratégie de contenu.",
      skills: ["Content Strategy", "Member Engagement"],
      achievements: [
        "Croissance et engagement accrus de la communauté",
        "Mise en place de stratégies de contenu efficaces",
      ],
    },
    //mettre nanatech et didifemmes
    {
      id: 10,
      title: "NanaTech Certificate",
      issuer: "NanaTech",
      date: "2024",
      image: "/certificates/nanatech attestation.png",
      description:
        "Programme de formation technologique organisé par le ministère de l'économie et de la transformation digital au travers de NanaTech , axé sur le digital, l'entrepreneuriat, la programmation, la cybersécurité et les compétences numériques pour les jeunes femmes.",
      skills: [
        "Entrepreneuriat numérique",
        "Programmation No-Code/ Low-Code",
        "Design Numérique",
        "Outils de gestion de projet",
        "Blockchain / Cryptomonnaies",
      ],
      achievements: [
        "Lancement réussi d'un projet entrepreneurial",
        "Acquisition de compétences en gestion et leadership",
        "Développement d'un business plan solide",
        "Présentation devant des investisseurs",
        "Création d'un réseau professionnel",
        "Projet final suivi par l'accelérateur DAGBA",
      ],
    },
    //digifemmes
    {
      id: 11,
      title: "DigiFemmes Learn Certificate",
      issuer: "DigiFemmes Academy",
      date: "2024",
      image: "/certificates/Certificat d'excellence.jpg",
      description:
        "DigiFemmes Learn Certificate focusing on digital project management skills .",
      skills: ["Gestion de projets"],
      achievements: ["Competences en gestion de projets numériques acquises"],
    },
    {
      id: 12,
      title: "Data Science Certificate",
      issuer: "Data Afrique Hub",
      date: "2024",
      image: "/certificates/data-certification.png",
      description:
        "Certification en sciences des données couvrant l'analyse statistique, l'apprentissage automatique et la visualisation de données.",
      skills: ["Python", "Data Visualization", "Statistical Analysis"],
      achievements: ["Réalisation de projets d'analyse de données"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleViewCertification = (certification: Certification) => {
    setSelectedCertification(certification);
  };

  const closeModal = () => {
    setSelectedCertification(null);
  };

  return (
    <>
      <CertificationsContainer theme={theme}>
        <Container>
          <SectionTitle
            theme={theme}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.certificationsTitle || "Certifications"}
          </SectionTitle>

          <CertificationsGrid>
            {certifications.map((certification, index) => (
              <CertificationCard
                key={certification.id}
                theme={theme}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CertificationImage theme={theme}>
                  {certification.image ? (
                    <img src={certification.image} alt={certification.title} />
                  ) : null}
                </CertificationImage>

                <CertificationContent>
                  <CertificationTitle theme={theme}>
                    {certification.title}
                  </CertificationTitle>

                  <CertificationIssuer theme={theme}>
                    {certification.issuer}
                  </CertificationIssuer>

                  <ViewButton
                    theme={theme}
                    onClick={() => handleViewCertification(certification)}
                  >
                    Voir
                  </ViewButton>
                </CertificationContent>
              </CertificationCard>
            ))}
          </CertificationsGrid>
        </Container>
      </CertificationsContainer>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertification && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              theme={theme}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader theme={theme}>
                <ModalTitle theme={theme}>
                  {selectedCertification.title}
                </ModalTitle>
                <CloseButton theme={theme} onClick={closeModal}>
                  <X size={24} />
                </CloseButton>
              </ModalHeader>

              <ModalBody>
                <ModalImageSection theme={theme}>
                  {selectedCertification.image && (
                    <img
                      src={selectedCertification.image}
                      alt={selectedCertification.title}
                    />
                  )}
                </ModalImageSection>

                <ModalTextSection>
                  <CertificationMeta theme={theme}>
                    <MetaItem theme={theme}>
                      <Award className="icon" size={20} />
                      <span>
                        <strong>Délivré par:</strong>{" "}
                        {selectedCertification.issuer}
                      </span>
                    </MetaItem>
                    {selectedCertification.date && (
                      <MetaItem theme={theme}>
                        <Calendar className="icon" size={20} />
                        <span>
                          <strong>Date:</strong> {selectedCertification.date}
                        </span>
                      </MetaItem>
                    )}
                  </CertificationMeta>

                  <CertificationDetails theme={theme}>
                    <h4>Description</h4>
                    <p>{selectedCertification.description}</p>

                    <h4>Compétences acquises</h4>
                    <ul>
                      {selectedCertification.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>

                    <h4>Réalisations</h4>
                    <ul>
                      {selectedCertification.achievements.map(
                        (achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ),
                      )}
                    </ul>
                  </CertificationDetails>
                </ModalTextSection>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;
