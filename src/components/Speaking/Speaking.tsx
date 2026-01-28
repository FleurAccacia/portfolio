import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Mic, Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const SpeakingContainer = styled.section<{ theme: any }>`
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

const SpeakingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SpeakingCard = styled(motion.div)<{ theme: any }>`
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

const SpeakingImage = styled.div<{ theme: any }>`
  width: 100%;
  height: 220px;
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

  // /* Placeholder pour les événements sans image */
  // &:before {
  //   content: "🎤";
  //   font-size: 3rem;
  //   opacity: 0.3;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   z-index: 1;
  // }
`;

const SpeakingContent = styled.div`
  padding: 2rem;
`;

const SpeakingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SpeakingIcon = styled.div<{ theme: any }>`
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.backgroundSecondary};
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpeakingInfo = styled.div`
  flex: 1;
`;

const SpeakingTitle = styled.h3<{ theme: any }>`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.textPrimary};
`;

const EventName = styled.p<{ theme: any }>`
  color: ${(props) => props.theme.primary};
  font-weight: 600;
`;

const SpeakingDescription = styled.p<{ theme: any }>`
  color: ${(props) => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SpeakingMeta = styled.div`
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

const SpeakingLinks = styled.div<{ theme: any }>`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.border};
`;

const SpeakingLink = styled.a<{ theme: any }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.primaryDark};
  }
`;

interface SpeakingEngagement {
  id: number;
  title: string;
  event: string;
  description: string;
  date: string;
  location: string;
  audience: string;
  slidesLink?: string;
  videoLink?: string;
  linkedinLink?: string;
  image?: string;
}

const Speaking: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const speakingEngagements: SpeakingEngagement[] = [
    {
      id: 1,
      title: "Cyber éthique et Responsabilités des jeunes",
      event: "WICE Program 2025",
      description:
        "Atelier interactif visant à sensibiliser les jeunes filles aux enjeux de la cybersécurité, à l'éthique en ligne et à leur rôle en tant qu'actrices du changement dans le domaine technologique.",
      date: "21 Juin 2025",
      location: "Lomé, Togo",
      audience: "20+ Jeunes filles",
      slidesLink:
        "https://docs.google.com/presentation/d/1WsReeFEjUCeV7zlj_d-1xx091JqtM7QkTKqwb7o2UIk/edit?slide=id.p1#slide=id.p1",
      image: "/speaking/wice speaker.png",
    },
    {
      id: 2,
      title: "Pitching Session",
      event: "International Women's Day 2025",
      description:
        "Session de pitch où j'ai présenté un projet innovant visant à faciliter la recherche et l'employabilité des jeunes ",
      date: "26 Avril 2025",
      location: "Lomé, Togo",
      audience: "300+ participants",
      slidesLink:
        "https://docs.google.com/presentation/d/1SRbL7BhGB93HptrBI8KiHue34Ai9JSbpizaKwzk1GEI/edit?slide=id.p37#slide=id.p37",
      linkedinLink:
        "https://www.linkedin.com/posts/gracia-gokar_inspiration-lomaez-iwd2025-activity-7328854750584565762-BXgb?utm_source=share&utm_medium=member_android&rcm=ACoAAEioKlgBIY25EZZ33ql0JxKmajsELNlyeI8",
      image: "/speaking/wtm.jpg",
    },
    {
      id: 3,
      title: "Femmes et Talk : Des communautés pour exister et briller",
      event: "Tech Talk",
      description:
        "Table ronde mettant en lumière l'importance des communautés technologiques pour les femmes, partageant des expériences et des stratégies pour renforcer la présence féminine dans le secteur tech.",
      date: "11 Août 2025",
      location: "Lomé, Togo",
      audience: "30+ participants",
      videoLink: "https://www.youtube.com/live/sF0ZawyDhoY?si=kP732fQX_eli1-yV",
      image: "/speaking/Tech Talk.jpg",
    },
    {
      id: 4,
      title: "Partage d'expérience et restitution",
      event: "Session de restitution avec Amazing Girls In Tech",
      description:
        "Session de restitution où j'ai partagé mon expérience et les leçons apprises lors de mon voyage d'immersion.",
      date: "08 janvier 2025",
      location: "Lomé, Togo",
      audience: "10+ participants",
      linkedinLink:
        "https://www.linkedin.com/posts/gracia-gokar_techpastor-amazinggirlsintech-immersionghana-activity-7296986894930747392-tPgU?utm_source=share&utm_medium=member_android&rcm=ACoAAEioKlgBIY25EZZ33ql0JxKmajsELNlyeI8",
      image: "/speaking/restitution.jpeg",
    },
    {
      id: 5,
      title: "Moderation Fireside Chat",
      event: "Day to raise awareness among young girls about STEM careers",
      description:
        "Discussion informelle avec des professionnelles STEM pour inspirer et guider les jeunes filles vers des carrières dans les sciences, la technologie, l'ingénierie et les mathématiques.",
      date: "12 Octobre 2024",
      location: "Lomé, Togo",
      audience: "100+ jeunes filles",
      linkedinLink:
        "https://www.linkedin.com/posts/gracia-gokar_wtm-stim-sea-activity-7257502766015651841-ga1p?utm_source=share&utm_medium=member_android",
      image: "/speaking/moderetor.jpeg",
    },
  ];

  // Trier par date (le plus récent en premier)
  const sortedEngagements = speakingEngagements.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SpeakingContainer theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.speakingTitle || "Speaking"}
        </SectionTitle>

        <SpeakingGrid>
          {sortedEngagements.map((speaking, index) => (
            <SpeakingCard
              key={speaking.id}
              theme={theme}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpeakingImage theme={theme}>
                {speaking.image && (
                  <img src={speaking.image} alt={speaking.title} />
                )}
              </SpeakingImage>

              <SpeakingContent>
                <SpeakingHeader>
                  <SpeakingIcon theme={theme}>
                    <Mic size={24} />
                  </SpeakingIcon>
                  <SpeakingInfo>
                    <SpeakingTitle theme={theme}>
                      {speaking.title}
                    </SpeakingTitle>
                    <EventName theme={theme}>{speaking.event}</EventName>
                  </SpeakingInfo>
                </SpeakingHeader>

                <SpeakingDescription theme={theme}>
                  {speaking.description}
                </SpeakingDescription>

                <SpeakingMeta>
                  <MetaItem theme={theme}>
                    <Calendar size={16} />
                    {speaking.date}
                  </MetaItem>
                  <MetaItem theme={theme}>
                    <MapPin size={16} />
                    {speaking.location}
                  </MetaItem>
                  <MetaItem theme={theme}>
                    <Users size={16} />
                    {speaking.audience}
                  </MetaItem>
                </SpeakingMeta>

                <SpeakingLinks theme={theme}>
                  {speaking.slidesLink && (
                    <SpeakingLink
                      theme={theme}
                      href={speaking.slidesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      {t.slides || "Slides"}
                    </SpeakingLink>
                  )}
                  {speaking.videoLink && (
                    <SpeakingLink
                      theme={theme}
                      href={speaking.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      {t.video || "Vidéo"}
                    </SpeakingLink>
                  )}
                  {speaking.linkedinLink && (
                    <SpeakingLink
                      theme={theme}
                      href={speaking.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      LinkedIn
                    </SpeakingLink>
                  )}
                </SpeakingLinks>
              </SpeakingContent>
            </SpeakingCard>
          ))}
        </SpeakingGrid>
      </Container>
    </SpeakingContainer>
  );
};

export default Speaking;
