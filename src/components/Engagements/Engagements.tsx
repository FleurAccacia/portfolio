import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Heart, Users, Calendar, MapPin, ExternalLink } from "lucide-react";

const EngagementsContainer = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const EngagementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
`;

const EngagementCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const EngagementHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const EngagementIcon = styled.div`
  color: #007bff;
  background: #e7f3ff;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EngagementInfo = styled.div`
  flex: 1;
`;

const EngagementTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const OrganizationName = styled.p`
  color: #007bff;
  font-weight: 600;
`;

const EngagementDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const EngagementMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
`;

const EngagementLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;

  &:hover {
    color: #0056b3;
  }
`;

const ImpactSection = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const ImpactTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ImpactText = styled.p`
  color: #666;
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
}

const Engagements: React.FC = () => {
  const engagements: Engagement[] = [
    {
      id: 1,
      title: "Mentor Bénévole",
      organization: "42 School",
      description:
        "Accompagnement de jeunes développeurs dans leur apprentissage de la programmation, révision de code et conseils carrière.",
      period: "2022 - Présent",
      location: "Paris, France",
      impact: "25+ étudiants accompagnés, 90% de réussite aux projets",
      link: "https://42.fr/",
    },
    {
      id: 2,
      title: "Organisateur Communauté",
      organization: "React Paris Meetup",
      description:
        "Organisation d'événements mensuels, recherche de speakers, gestion de la logistique et animation de la communauté React parisienne.",
      period: "2021 - Présent",
      location: "Paris, France",
      impact: "500+ membres actifs, 24 événements organisés",
      link: "https://www.meetup.com/fr-FR/ReactJS-Paris/",
    },
    {
      id: 3,
      title: "Contributeur Open Source",
      organization: "Projets GitHub",
      description:
        "Contributions régulières à des projets open source, correction de bugs, ajout de fonctionnalités et amélioration de la documentation.",
      period: "2020 - Présent",
      location: "Remote",
      impact: "100+ PRs mergées, 15 projets contributés",
      link: "https://github.com/FleurAccacia",
    },
    {
      id: 4,
      title: "Jury Technique",
      organization: "École Web Developer",
      description:
        "Évaluation de projets étudiants, entretiens techniques et conseil pédagogique pour l'amélioration des cursus de formation.",
      period: "2023 - Présent",
      location: "Paris, France",
      impact: "50+ projets évalués, amélioration du cursus React",
      link: "https://ecole-web-developer.com/",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <EngagementsContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Engagements
        </SectionTitle>

        <EngagementsGrid>
          {engagements.map((engagement, index) => (
            <EngagementCard
              key={engagement.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <EngagementHeader>
                <EngagementIcon>
                  <Heart size={24} />
                </EngagementIcon>
                <EngagementInfo>
                  <EngagementTitle>{engagement.title}</EngagementTitle>
                  <OrganizationName>{engagement.organization}</OrganizationName>
                </EngagementInfo>
              </EngagementHeader>

              <EngagementDescription>
                {engagement.description}
              </EngagementDescription>

              <EngagementMeta>
                <MetaItem>
                  <Calendar size={16} />
                  {engagement.period}
                </MetaItem>
                <MetaItem>
                  <MapPin size={16} />
                  {engagement.location}
                </MetaItem>
              </EngagementMeta>

              <ImpactSection>
                <ImpactTitle>Impact</ImpactTitle>
                <ImpactText>{engagement.impact}</ImpactText>
              </ImpactSection>

              {engagement.link && (
                <EngagementLink
                  href={engagement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  En savoir plus
                </EngagementLink>
              )}
            </EngagementCard>
          ))}
        </EngagementsGrid>
      </Container>
    </EngagementsContainer>
  );
};

export default Engagements;
