import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Mic, Calendar, MapPin, Users, ExternalLink } from "lucide-react";

const SpeakingContainer = styled.section`
  padding: 5rem 2rem;
  background: white;
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

const SpeakingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
`;

const SpeakingCard = styled(motion.div)`
  background: #f8f9fa;
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

const SpeakingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SpeakingIcon = styled.div`
  color: #007bff;
  background: #e7f3ff;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpeakingInfo = styled.div`
  flex: 1;
`;

const SpeakingTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const EventName = styled.p`
  color: #007bff;
  font-weight: 600;
`;

const SpeakingDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SpeakingMeta = styled.div`
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

const SpeakingLinks = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`;

const SpeakingLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #0056b3;
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
}

const Speaking: React.FC = () => {
  const speakingEngagements: SpeakingEngagement[] = [
    {
      id: 1,
      title: "Modern React Development with TypeScript",
      event: "React Conference 2023",
      description:
        "Présentation des meilleures pratiques pour développer des applications React modernes avec TypeScript, incluant les hooks avancés et la gestion d'état.",
      date: "Mars 2023",
      location: "Paris, France",
      audience: "200+ développeurs",
      slidesLink: "https://slides.com/presentation1",
      videoLink: "https://youtube.com/watch?v=example1",
    },
    {
      id: 2,
      title: "Building Scalable Web Applications",
      event: "Web Dev Summit",
      description:
        "Architecture et stratégies pour construire des applications web évolutives, de l'optimisation des performances à la gestion de la charge.",
      date: "Juin 2023",
      location: "Lyon, France",
      audience: "150+ développeurs",
      slidesLink: "https://slides.com/presentation2",
    },
    {
      id: 3,
      title: "The Future of Frontend Development",
      event: "Tech Meetup Paris",
      description:
        "Exploration des tendances émergentes en développement frontend et des technologies qui façonneront l'avenir du web.",
      date: "Septembre 2023",
      location: "Paris, France",
      audience: "80+ développeurs",
      videoLink: "https://youtube.com/watch?v=example3",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SpeakingContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Speaking
        </SectionTitle>

        <SpeakingGrid>
          {speakingEngagements.map((speaking, index) => (
            <SpeakingCard
              key={speaking.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpeakingHeader>
                <SpeakingIcon>
                  <Mic size={24} />
                </SpeakingIcon>
                <SpeakingInfo>
                  <SpeakingTitle>{speaking.title}</SpeakingTitle>
                  <EventName>{speaking.event}</EventName>
                </SpeakingInfo>
              </SpeakingHeader>

              <SpeakingDescription>{speaking.description}</SpeakingDescription>

              <SpeakingMeta>
                <MetaItem>
                  <Calendar size={16} />
                  {speaking.date}
                </MetaItem>
                <MetaItem>
                  <MapPin size={16} />
                  {speaking.location}
                </MetaItem>
                <MetaItem>
                  <Users size={16} />
                  {speaking.audience}
                </MetaItem>
              </SpeakingMeta>

              <SpeakingLinks>
                {speaking.slidesLink && (
                  <SpeakingLink
                    href={speaking.slidesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Slides
                  </SpeakingLink>
                )}
                {speaking.videoLink && (
                  <SpeakingLink
                    href={speaking.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Video
                  </SpeakingLink>
                )}
              </SpeakingLinks>
            </SpeakingCard>
          ))}
        </SpeakingGrid>
      </Container>
    </SpeakingContainer>
  );
};

export default Speaking;
