import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.8;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition:
    transform 0.3s,
    color 0.3s;

  &:hover {
    transform: translateY(-2px);
    color: #ffd700;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bonjour, je suis [Votre Nom]
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Développeur Full Stack
        </Subtitle>

        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Passionné par la création d'expériences web modernes et performantes.
          J'utilise les dernières technologies pour donner vie à vos idées.
        </Description>

        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SocialLink
            href="https://github.com/votre-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/votre-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </SocialLink>
          <SocialLink href="mailto:votre.email@example.com">
            <Mail />
          </SocialLink>
        </SocialLinks>
      </HeroContent>

      <ScrollIndicator
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ opacity: 1 }}
      >
        <ArrowDown size={24} />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
