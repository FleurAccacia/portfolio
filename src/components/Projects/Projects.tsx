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
  overflow: hidden;
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

const ProjectImage = styled.div<{ theme: any }>`
  width: 100%;
  height: 250px;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.theme.primary}10, ${props.theme.primaryDark}05)`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
    background: ${(props) => props.theme.backgroundSecondary};
  }

  &:hover img {
    transform: scale(1.02);
  }

  //   /* Placeholder pour les projets sans image */
  //   &:before {
  //     content: "🚀";
  //     font-size: 3rem;
  //     opacity: 0.3;
  //     position: absolute;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     z-index: 1;
  //   }
`;

const ProjectContent = styled.div`
  padding: 2rem;
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
  image?: string;
}

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: "My portfolio",
      description:
        "Mon portfolio personnel développé avec React et TypeScript, incluant un système de thème dynamique et multilingue.",
      techStack: ["React", "TypeScript"],
      githubLink: "https://github.com/FleurAccacia/portfolio",
      liveLink: "",
      image: "/projects/portfolio.png",
    },
    {
      id: 2,
      title: "Vodoo Host App",
      description:
        "Application mobile de gestion d'hébergement avec un accent sur la culture vodou creer pour aider les utilisateurs a trouver des hebergements et vivre une immersion totale lors des Vodun Days",
      techStack: ["Flutter", "Dart", " Firebase", "Nest.js", "PostgreSQL"],
      githubLink: "",
      liveLink: "",
      image: "/projects/vodoo host app.png",
    },
    {
      id: 3,
      title: "Application de Gestion de Mémoire",
      description:
        "Application web pour la gestion de mémoires académiques, permettant aux étudiants de soumettre, suivre et collaborer sur leurs projets de recherche.",
      techStack: ["React js", "TypeScript", "Spring Boot", "API REST", "MySQL"],
      githubLink: "https://github.com/FleurAccacia/gestion_memoires",
      liveLink: "",
      image: "/projects/gestion-memoire.png",
    },
    {
      id: 4,
      title: "Site Web Christ Carter Studio",
      description:
        "Site vitrine pour Christ Carter Studio, mettant en avant leurs services .",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/FleurAccacia/christCarter-website",
      liveLink: "",
      image: "/projects/christ studio site.png",
    },
    {
      id: 5,
      title: "Application de Gestion de Recettes",
      description:
        "Application web permettant aux utilisateurs de créer, organiser et partager leurs recettes culinaires préférées.",
      techStack: ["React js", "TypeScript", "Spring Boot", "API REST","Docker", "MySQL"],
      githubLink: "https://github.com/FleurAccacia/GestionRecettes",
      liveLink: "",
      image: "/projects/gestion-recette.png",
    },
    // {
    //   id: 6,
    //   title: "Blog CMS",
    //   description:
    //     "Un système de gestion de contenu pour blog avec éditeur Markdown, gestion des utilisateurs, et SEO optimisé.",
    //   techStack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "Tailwind"],
    //   githubLink: "https://github.com/votre-username/blog-cms",
    //   liveLink: "https://votre-blog.vercel.app",
    //   image: "/projects/blog-cms.jpg",
    // },
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
              <ProjectImage theme={theme}>
                {project.image && (
                  <img src={project.image} alt={project.title} />
                )}
              </ProjectImage>

              <ProjectContent>
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
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
