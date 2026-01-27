import React from "react";
import styled from "styled-components";
import { Github, Linkedin, Mail } from "lucide-react";

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 3rem 2rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }
`;

const FooterText = styled.div``;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #ccc;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: #ccc;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #555;
  color: #ccc;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterText>
            <Title>Mon Portfolio</Title>
            <Description>
              Développeur passionné créant des expériences web exceptionnelles.
            </Description>
          </FooterText>

          <SocialLinks>
            <SocialLink
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/votre-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </SocialLink>
            <SocialLink
              href="mailto:votre.email@example.com"
              aria-label="Email"
            >
              <Mail />
            </SocialLink>
          </SocialLinks>

          <div></div>
        </FooterContent>

        <Copyright>
          © {currentYear} Mon Portfolio. Tous droits réservés.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
