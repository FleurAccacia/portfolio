import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import HeaderControls from "../HeaderControls/HeaderControls";

const HeaderContainer = styled.header<{ theme: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.background}e6;
  backdrop-filter: blur(20px);
  z-index: 1000;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const NavLinks = styled.div<{ $isOpen?: boolean; theme: any }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.background}f7;
    backdrop-filter: blur(20px);
    padding: 2rem;
    border-top: 1px solid ${(props) => props.theme.border};
    box-shadow: ${(props) => props.theme.shadow};
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean; theme: any }>`
  color: ${(props) =>
    props.$isActive ? props.theme.primary : props.theme.textPrimary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const MobileMenuButton = styled.button<{ theme: any }>`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.textPrimary};

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <HeaderContainer theme={theme}>
      <Nav>
        <NavLinksContainer>
          <NavLinks $isOpen={mobileMenuOpen} theme={theme}>
            <NavLink to="/" $isActive={isActive("/")} theme={theme}>
              {t.home}
            </NavLink>
            <NavLink to="/about" $isActive={isActive("/about")} theme={theme}>
              {t.about}
            </NavLink>
            <NavLink
              to="/certifications"
              $isActive={isActive("/certifications")}
              theme={theme}
            >
              {t.certifications}
            </NavLink>
            <NavLink
              to="/projects"
              $isActive={isActive("/projects")}
              theme={theme}
            >
              {t.projects}
            </NavLink>
            <NavLink
              to="/speaking"
              $isActive={isActive("/speaking")}
              theme={theme}
            >
              {t.speaking}
            </NavLink>
            <NavLink
              to="/engagements"
              $isActive={isActive("/engagements")}
              theme={theme}
            >
              {t.engagements}
            </NavLink>
            <NavLink
              to="/contact"
              $isActive={isActive("/contact")}
              theme={theme}
            >
              {t.contact}
            </NavLink>
          </NavLinks>
        </NavLinksContainer>

        <HeaderControls />

        <MobileMenuButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          theme={theme}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
