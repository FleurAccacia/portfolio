import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Code, Smartphone, Mic, Share2, Users } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const ServicesContainer = styled.section<{ theme: any }>`
  padding: 5rem 2rem;
  background: ${(props) => props.theme.background};
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)<{ theme: any }>`
  background: ${(props) => props.theme.cardBackground};
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 32px ${(props) => `${props.theme.primary}15`};
  border: 1px solid ${(props) => props.theme.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px ${(props) => `${props.theme.primary}25`};
  }
`;

const ServiceIcon = styled.div<{ theme: any }>`
  color: ${(props) => props.theme.primary};
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  border: 2px solid ${(props) => `${props.theme.primary}20`};
`;

const ServiceTitle = styled.h3<{ theme: any }>`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textPrimary};
`;

const ServiceDescription = styled.p<{ theme: any }>`
  color: ${(props) => props.theme.textSecondary};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Services: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code size={40} />,
      title: t.webDevelopment,
      description: t.webDevDesc,
    },
    {
      icon: <Smartphone size={40} />,
      title: t.mobileDevelopment,
      description: t.mobileDevDesc,
    },
    {
      icon: <Mic size={40} />,
      title: t.moderatorSpeaker,
      description: t.moderatorDesc,
    },
    {
      icon: <Share2 size={40} />,
      title: t.socialMediaManager,
      description: t.socialMediaDesc,
    },
    {
      icon: <Users size={40} />,
      title: t.trainingMentoring,
      description: t.trainingDesc,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ServicesContainer theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.servicesTitle}
        </SectionTitle>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              theme={theme}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceIcon theme={theme}>{service.icon}</ServiceIcon>
              <ServiceTitle theme={theme}>{service.title}</ServiceTitle>
              <ServiceDescription theme={theme}>
                {service.description}
              </ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesContainer>
  );
};

export default Services;
