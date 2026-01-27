import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Code, Database, Smartphone, Globe } from "lucide-react";

const AboutContainer = styled.section`
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

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2rem;
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

const SkillCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  color: #007bff;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const SkillTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const SkillDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code size={40} />,
      title: "Frontend Development",
      description: "React, TypeScript, HTML5, CSS3, Tailwind CSS",
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development",
      description: "Node.js, Express, Python, PostgreSQL, MongoDB",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      description: "React Native, Flutter, Progressive Web Apps",
    },
    {
      icon: <Globe size={40} />,
      title: "Web Technologies",
      description: "RESTful APIs, GraphQL, WebSockets, AWS, Docker",
    },
  ];

  return (
    <AboutContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          À propos de moi
        </SectionTitle>

        <Content>
          <TextContent
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Description>
              Développeur passionné avec plus de 3 ans d'expérience dans la
              création d'applications web modernes. J'aime résoudre des
              problèmes complexes et créer des interfaces utilisateur
              intuitives.
            </Description>
            <Description>
              Mon approche combine créativité et expertise technique pour livrer
              des solutions qui dépassent les attentes. Je reste constamment à
              jour avec les dernières technologies et meilleures pratiques du
              développement web.
            </Description>
          </TextContent>

          <ImageContainer
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </Container>
    </AboutContainer>
  );
};

export default About;
