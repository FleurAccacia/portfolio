import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Heart, Users, Calendar, MapPin, ExternalLink } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const EngagementsContainer = styled.section<{ theme: any }>`
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

const EngagementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const EngagementCard = styled(motion.div)<{ theme: any }>`
  background: ${(props) => props.theme.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${(props) => `${props.theme.primary}20`};
  border: 1px solid ${(props) => props.theme.border};
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px ${(props) => `${props.theme.primary}30`};
  }
`;

const EngagementImage = styled.div<{ theme: any }>`
  width: 100%;
  height: 200px;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.theme.primary}10, ${props.theme.primaryDark}05)`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
    background: ${(props) => props.theme.backgroundSecondary};
  }

  &:hover img {
    transform: scale(1.02);
  }

  // /* Placeholder pour les engagements sans image */
  // &:before {
  //   content: "🤝";
  //   font-size: 3rem;
  //   opacity: 0.3;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   z-index: 1;
  // }
`;

const EngagementContent = styled.div`
  padding: 2rem;
`;

const EngagementHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const EngagementIcon = styled.div<{ theme: any }>`
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.backgroundSecondary};
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EngagementInfo = styled.div`
  flex: 1;
`;

const EngagementTitle = styled.h3<{ theme: any }>`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.textPrimary};
`;

const OrganizationName = styled.p<{ theme: any }>`
  color: ${(props) => props.theme.primary};
  font-weight: 600;
`;

const EngagementDescription = styled.p<{ theme: any }>`
  color: ${(props) => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const EngagementMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.div<{ theme: any }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const EngagementLink = styled.a<{ theme: any }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  font-weight: 500;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.border};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.primaryDark};
  }
`;

const ImpactSection = styled.div<{ theme: any }>`
  background: ${(props) => props.theme.backgroundSecondary};
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme.border};
`;

const ImpactTitle = styled.h4<{ theme: any }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 0.5rem;
`;

const ImpactText = styled.p<{ theme: any }>`
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
`;

interface Engagement {
  id: number;
  title: string;
  organization: string;
  description: string;
  period: string;
  location: string;
  impact: string;
  link?: string;
  image?: string;
}

const Engagements: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const engagements: Engagement[] = [
    {
      id: 1,
      title: "Coordinatrice des ambassadeurs du Togo au Sénégal",
      organization: "Cyber 221",
      description:
        " Coordination des activités des ambassadeurs, promotion de la cybersécurité et organisation d'ateliers de sensibilisation au Togo.",
      period: "Octobre 2024 - Présent",
      location: "Lomé, Togo",
      impact: " 50+ participants formés, 2 ateliers organisés",
      link: "https://sites.google.com/view/cyber221hub/activit%C3%A9s-et-ev%C3%A8nements/programmes-cyber/programme-ambassadeur-num%C3%A9rique?authuser=0",
      image: "/engagements/Cyber221.jpg",
    },
    {
      id: 2,
      title: "Social Media Manager et Responsable Amazing Talks",
      organization: "Amazing Girls In Tech",
      description:" Gestion des réseaux sociaux et organisation de sessions de Talks avec des experts pour promouvoir la technologie auprès des jeunes filles en Afrique.",
      period: "2024 - Présent (Pause)",
      location: "Remote",
      impact: "1000+ membres actifs, 07 événements organisés en ligne",
      link: "https://www.linkedin.com/company/amazingtechgirls/?viewAsMember=true",
      image: "/engagements/Designs Amazing Talks .png",
    },
    {
      id: 3,
      title: "Ambassadrice",
      organization: "Miabe Hackathon",
      description:
        "Promotion de l'événement Miabe Hackathon au Togo, sensibilisation des jeunes développeurs et encouragement à la participation.",
      period: "2025 - 2026",
      location: "Lomé, Togo",
      impact: " 200+ inscriptions générées, plus de 10 équipes formées",
      link: "https://www.linkedin.com/posts/gracia-gokar_miabaezhackathon-innovation-tech-activity-7290847074739224602-IpfM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEioKlgBIY25EZZ33ql0JxKmajsELNlyeI8",
      image: "/engagements/MBH.jpg",
    },
    {
      id: 4,
      title: "Ambassadrice",
      organization: "Global Ambassadors Program",
      description:
        " Représentation du Togo dans le programme des ambassadeurs mondiaux , promotion des initiatives technologiques et organisation d'ateliers locaux.",
      period: "2024-2025",
      location: "Lomé, Togo",
      impact: "",
      link: "https://www.facebook.com/share/p/1NSreNaMVG/?mibextid=qi2Omg",
      image: "/engagements/GAP.jpg",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <EngagementsContainer theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.engagementsTitle || "Engagements"}
        </SectionTitle>

        <EngagementsGrid>
          {engagements.map((engagement, index) => (
            <EngagementCard
              key={engagement.id}
              theme={theme}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <EngagementImage theme={theme}>
                {engagement.image && (
                  <img src={engagement.image} alt={engagement.title} />
                )}
              </EngagementImage>

              <EngagementContent>
                <EngagementHeader>
                  <EngagementIcon theme={theme}>
                    <Heart size={24} />
                  </EngagementIcon>
                  <EngagementInfo>
                    <EngagementTitle theme={theme}>
                      {engagement.title}
                    </EngagementTitle>
                    <OrganizationName theme={theme}>
                      {engagement.organization}
                    </OrganizationName>
                  </EngagementInfo>
                </EngagementHeader>

                <EngagementDescription theme={theme}>
                  {engagement.description}
                </EngagementDescription>

                <EngagementMeta>
                  <MetaItem theme={theme}>
                    <Calendar size={16} />
                    {engagement.period}
                  </MetaItem>
                  <MetaItem theme={theme}>
                    <MapPin size={16} />
                    {engagement.location}
                  </MetaItem>
                </EngagementMeta>

                <ImpactSection theme={theme}>
                  <ImpactTitle theme={theme}>
                    {t.impact || "Impact"}
                  </ImpactTitle>
                  <ImpactText theme={theme}>{engagement.impact}</ImpactText>
                </ImpactSection>

                {engagement.link && (
                  <EngagementLink
                    theme={theme}
                    href={engagement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    {t.learnMore || "En savoir plus"}
                  </EngagementLink>
                )}
              </EngagementContent>
            </EngagementCard>
          ))}
        </EngagementsGrid>
      </Container>
    </EngagementsContainer>
  );
};

export default Engagements;
