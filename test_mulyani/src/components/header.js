import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Rick and Morty</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/characters">Characters</Nav.Link>
        <Nav.Link href="/location">Characters By Location</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;