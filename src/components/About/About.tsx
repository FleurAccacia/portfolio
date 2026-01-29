import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
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
    `linear-gradient(135deg, ${props.theme.primary}10, ${props.theme.primaryDark}05)`};
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.border};

  img {
    width: 100%;
    height: auto;
    max-width: 400px;
    border-radius: 8px;
    object-fit: cover;
  }

//   /* Placeholder pour l'image */
//   &:before {
//     content: "👩‍💻";
//     font-size: 4rem;
//     opacity: 0.7;
//   }
`;

const About: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

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
           
            <img src="/me.jpeg" alt="Gracia GOKAR" />
          </ImageContainer>
        </Content>
      </Container>
    </AboutContainer>
  );
};

export default About;
