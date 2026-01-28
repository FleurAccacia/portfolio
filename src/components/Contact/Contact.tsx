import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  ExternalLink,
  Globe,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const ContactContainer = styled.section<{ theme: any }>`
  padding: 5rem 2rem;
  background: ${(props) => props.theme.backgroundSecondary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)<{ theme: any }>`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.primary};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)``;

const ContactItem = styled.div<{ theme: any }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 20px ${(props) => `${props.theme.primary}20`};
  border: 1px solid ${(props) => props.theme.border};
  transition:
    transform 0.3s,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ContactIcon = styled.div<{ theme: any }>`
  color: ${(props) => props.theme.primary};
  padding: 1rem;
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h3<{ theme: any }>`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.textPrimary};
`;

const ContactValue = styled.p<{ theme: any }>`
  color: ${(props) => props.theme.textSecondary};
  font-size: 1rem;
`;

// Contact Form Styles
const ContactForm = styled(motion.form)<{ theme: any }>`
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${(props) => `${props.theme.primary}20`};
  border: 1px solid ${(props) => props.theme.border};
`;

const FormTitle = styled.h3<{ theme: any }>`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.textPrimary};
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label<{ theme: any }>`
  display: block;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.textPrimary};
  font-weight: 500;
`;

const FormInput = styled.input<{ theme: any }>`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.textPrimary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 0 3px ${(props) => `${props.theme.primary}20`};
  }

  &::placeholder {
    color: ${(props) => props.theme.textSecondary};
  }
`;

const FormTextarea = styled.textarea<{ theme: any }>`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.textPrimary};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 0 3px ${(props) => `${props.theme.primary}20`};
  }

  &::placeholder {
    color: ${(props) => props.theme.textSecondary};
  }
`;

const SubmitButton = styled.button<{ theme: any }>`
  width: 100%;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.primaryDark};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// Social Media Styles
const SocialSection = styled(motion.div)<{ theme: any }>`
  margin-top: 3rem;
  text-align: center;
`;

const SocialTitle = styled.h3<{ theme: any }>`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.textPrimary};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SocialLink = styled.a<{ theme: any }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.textPrimary};
  text-decoration: none;
  border-radius: 25px;
  border: 1px solid ${(props) => props.theme.border};
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => `${props.theme.primary}30`};
    border-color: ${(props) => props.theme.primary};
  }

  .icon {
    color: ${(props) => props.theme.primary};
  }
`;

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Ici vous pourrez intégrer votre service d'envoi d'email
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Vous pouvez ajouter une notification de succès ici
    alert("Message envoyé avec succès!");
  };

  return (
    <ContactContainer theme={theme}>
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.contactTitle}
        </SectionTitle>

        <ContentGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactItem theme={theme}>
              <ContactIcon theme={theme}>
                <Mail size={24} />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel theme={theme}>{t.email}</ContactLabel>
                <ContactValue theme={theme}><a href="mailto:graciagokar@gmail.com" style={{ color: theme.primary, textDecoration: "none" }}>graciagokar@gmail.com</a></ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem theme={theme}>
              <ContactIcon theme={theme}>
                <Phone size={24} />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel theme={theme}>{t.phone}</ContactLabel>
                <ContactValue theme={theme}><a href="tel:+33783181636" style={{ color: theme.primary, textDecoration: "none" }}>+33 7 83 18 16 36</a></ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem theme={theme}>
              <ContactIcon theme={theme}>
                <MapPin size={24} />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel theme={theme}>{t.location}</ContactLabel>
                <ContactValue theme={theme}>Grenoble, France</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem theme={theme}>
              <ContactIcon theme={theme}>
                <Linkedin size={24} />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel theme={theme}>LinkedIn</ContactLabel>
                <ContactValue theme={theme}>
                  <a
                    href="https://linkedin.com/in/gracia-gokar"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.primary, textDecoration: "none" }}
                  >
                    Gracia GOKAR
                  </a>
                </ContactValue>
              </ContactDetails>
            </ContactItem>
          </ContactInfo>

          <ContactForm
            theme={theme}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormTitle theme={theme}>Envoyez-moi un message</FormTitle>

            <FormGroup>
              <FormLabel theme={theme}>Nom complet</FormLabel>
              <FormInput
                theme={theme}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Votre nom"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel theme={theme}>Email</FormLabel>
              <FormInput
                theme={theme}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="votre.email@exemple.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel theme={theme}>Sujet</FormLabel>
              <FormInput
                theme={theme}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Sujet de votre message"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel theme={theme}>Message</FormLabel>
              <FormTextarea
                theme={theme}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Écrivez votre message ici..."
                required
              />
            </FormGroup>

            <SubmitButton theme={theme} type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                "Envoi en cours..."
              ) : (
                <>
                  <Send size={18} />
                  Envoyer le message
                </>
              )}
            </SubmitButton>
          </ContactForm>
        </ContentGrid>

        <SocialSection
          theme={theme}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SocialTitle theme={theme}>Follow me</SocialTitle>
          <SocialLinks>
            <SocialLink
              theme={theme}
              href="https://linktr.ee/fleur_accacia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="icon" size={20} />
              Linktree
              <ExternalLink size={16} />
            </SocialLink>

            <SocialLink
              theme={theme}
              href="https://linkedin.com/in/gracia-gokar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="icon" size={20} />
              LinkedIn
              <ExternalLink size={16} />
            </SocialLink>

            <SocialLink
              theme={theme}
              href="https://github.com/FleurAccacia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="icon" size={20} />
              GitHub
              <ExternalLink size={16} />
            </SocialLink>
          </SocialLinks>
        </SocialSection>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
