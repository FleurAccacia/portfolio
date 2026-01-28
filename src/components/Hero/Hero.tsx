import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const HeroContainer = styled.section<{ theme: any }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary} 0%,
    #4338ca 100%
  );
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const ProfileImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 2rem auto;
  background: linear-gradient(135deg, #ffffff20, #ffffff10);
  border: 4px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const ProfilePlaceholder = styled.div`
  width: 80%;
  height: 80%;
  background: linear-gradient(135deg, #ffffff30, #ffffff15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  font-weight: bold;
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
  const { theme } = useTheme();
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroContainer theme={theme}>
      <HeroContent>
        <ProfileImage
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
        >
          {/* Remplacez le src ci-dessous par le chemin vers votre photo */}
          <img src="/profile.jpg" alt="Gracia Gokar" />

          {/* Placeholder temporaire - retirez quand vous ajoutez votre photo */}
          {/* <ProfilePlaceholder>GG</ProfilePlaceholder> */}
        </ProfileImage>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t.heroTitle}
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t.heroSubtitle}
        </Subtitle>

        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {t.heroDescription}
        </Description>

        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <SocialLink
            href="https://github.com/FleurAccacia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/gracia-gokar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </SocialLink>
          <SocialLink href="mailto:graciagokar@example.com">
            <Mail />
          </SocialLink>
        </SocialLinks>
      </HeroContent>

      <ScrollIndicator
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ opacity: 1 }}
      >
        <ArrowDown size={24} />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
