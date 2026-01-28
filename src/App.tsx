import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CertificationsPage from "./pages/CertificationsPage";
import ProjectsPage from "./pages/ProjectsPage";
import SpeakingPage from "./pages/SpeakingPage";
import EngagementsPage from "./pages/EngagementsPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

const GlobalStyle = createGlobalStyle<{ theme: any }>`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textPrimary};
    transition: background-color 0.3s, color 0.3s;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; /* Account for fixed header */
`;

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <GlobalStyle theme={theme} />
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/speaking" element={<SpeakingPage />} />
            <Route path="/engagements" element={<EngagementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
