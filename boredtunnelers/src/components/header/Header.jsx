import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logos from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="myLogo"
            src={logos}
            alt="logo"
            width="80"
            height="80"
          />
          <span className="logo-header">Bored Tunnelers</span>
        </Navbar.Brand>
        
        <div className={`mobile-nav ${showDrawer ? "open" : ""}`}>
          <Nav className="mobile-nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#our-story">Our Story</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
            <Nav.Link href="#partners">Partners</Nav.Link>
            <Nav.Link href="#technology">Technology</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
          </Nav>
        </div>
        <button className="drawer-toggle" onClick={toggleDrawer}>
          ☰
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;