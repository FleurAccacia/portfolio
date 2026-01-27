import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Menu, X } from "lucide-react";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1000;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? "#007bff" : "#333")};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Mon Portfolio</Logo>
        <NavLinks>
          <NavLink to="/" $isActive={isActive("/")}>
            Accueil
          </NavLink>
          <NavLink to="/about" $isActive={isActive("/about")}>
            À propos
          </NavLink>
          <NavLink to="/projects" $isActive={isActive("/projects")}>
            Projets
          </NavLink>
          <NavLink to="/contact" $isActive={isActive("/contact")}>
            Contact
          </NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
