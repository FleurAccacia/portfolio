import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Code, Database, Smartphone, Globe } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const AboutContainer = styled.section<{ theme: any }>`
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled(motion.div)``;

const Description = styled.p<{ theme: any }>`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 2rem;
`;

const ImageContainer = styled(motion.div)<{ theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.theme.primary} 0%, ${props.theme.primaryDark} 100%)`};
  border-radius: 12px;
  padding: 3rem;
  color: white;
  font-size: 4rem;
`;

const SkillsContainer = styled.div`
  margin-top: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)<{ theme: any }>`
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition:
    transform 0.3s,
    background-color 0.3s ease;
  border: 1px solid ${(props) => props.theme.border};

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div<{ theme: any }>`
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const SkillTitle = styled.h3<{ theme: any }>`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textPrimary};
`;

const SkillDescription = styled.p<{ theme: any }>`
  color: ${(props) => props.theme.textSecondary};
  line-height: 1.6;
`;

const About: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const skills = [
    {
      icon: <Code size={40} />,
      title: t.frontendDev,
      description: t.frontendDesc,
    },
    {
      icon: <Database size={40} />,
      title: t.backendDev,
      description: t.backendDesc,
    },
    {
      icon: <Smartphone size={40} />,
      title: t.mobileDev,
      description: t.mobileDesc,
    },
    {
      icon: <Globe size={40} />,
      title: t.webTech,
      description: t.webTechDesc,
    },
  ];

  return (
    <AboutContainer theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.aboutMe}
        </SectionTitle>

        <Content>
          <TextContent
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Description theme={theme}>{t.aboutDescription1}</Description>
            <Description theme={theme}>{t.aboutDescription2}</Description>
          </TextContent>

          <ImageContainer
            theme={theme}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            👨‍💻
          </ImageContainer>
        </Content>

        <SkillsContainer>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                theme={theme}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillIcon theme={theme}>{skill.icon}</SkillIcon>
                <SkillTitle theme={theme}>{skill.title}</SkillTitle>
                <SkillDescription theme={theme}>
                  {skill.description}
                </SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </Container>
    </AboutContainer>
  );
};

export default About;
