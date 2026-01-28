import React from "react";
import styled from "styled-components";
import { Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ToggleButton = styled.button<{ theme: any }>`
  background: ${(props) => props.theme.surface};
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background: ${(props) => props.theme.primary};
    color: white;
    transform: scale(1.1);
  }
`;

const LanguageButton = styled.button<{ theme: any }>`
  background: ${(props) => props.theme.surface};
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  transition: all 0.3s;
  color: ${(props) => props.theme.textPrimary};
  font-size: 0.8rem;
  font-weight: 600;

  &:hover {
    background: ${(props) => props.theme.primary};
    color: white;
    transform: scale(1.05);
  }
`;

const HeaderControls: React.FC = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <ControlsContainer>
      <ToggleButton
        theme={theme}
        onClick={toggleTheme}
        title={isDarkMode ? "Mode clair" : "Mode sombre"}
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </ToggleButton>

      <LanguageButton
        theme={theme}
        onClick={toggleLanguage}
        title="Changer de langue"
      >
        <Globe size={14} />
        {language.toUpperCase()}
      </LanguageButton>
    </ControlsContainer>
  );
};

export default HeaderControls;
