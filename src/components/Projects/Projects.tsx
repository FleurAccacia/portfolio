import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const ProjectsContainer = styled.section<{ theme: any }>`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)<{ theme: any }>`
  background: ${(props) => props.theme.cardBackground};
  border-radius: 12px;
  padding: 2rem;
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

const ProjectTitle = styled.h3<{ theme: any }>`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textPrimary};
`;

const ProjectDescription = styled.p<{ theme: any }>`
  color: ${(props) => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span<{ theme: any }>`
  background: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.textSecondary};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.border};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a<{ theme: any }>`
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

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
}

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce React App",
      description:
        "Une application e-commerce complète avec panier d'achat, authentification utilisateur, et intégration de paiement.",
      techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/votre-username/ecommerce-app",
      liveLink: "https://votre-ecommerce.netlify.app",
    },
    {
      id: 2,
      title: "Task Manager",
      description:
        "Une application de gestion de tâches avec drag & drop, notifications en temps réel, et collaboration d'équipe.",
      techStack: ["React", "Redux", "Socket.io", "Express", "PostgreSQL"],
      githubLink: "https://github.com/votre-username/task-manager",
      liveLink: "https://votre-taskmanager.vercel.app",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Un dashboard météo interactif avec graphiques, prévisions, et géolocalisation.",
      techStack: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      githubLink: "https://github.com/votre-username/weather-dashboard",
      liveLink: "https://votre-weather.netlify.app",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ProjectsContainer theme={theme} id="projects">
      <Container>
        <SectionTitle
          theme={theme}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.projectsTitle}
        </SectionTitle>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              theme={theme}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
              <ProjectDescription theme={theme}>
                {project.description}
              </ProjectDescription>

              <TechStack>
                {project.techStack.map((tech, techIndex) => (
                  <TechTag key={techIndex} theme={theme}>
                    {tech}
                  </TechTag>
                ))}
              </TechStack>

              <ProjectLinks>
                <ProjectLink
                  theme={theme}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  {t.viewCode}
                </ProjectLink>
                {project.liveLink && (
                  <ProjectLink
                    theme={theme}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    {t.viewDemo}
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
