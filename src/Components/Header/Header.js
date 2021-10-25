import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <>
        <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link className="text-dark text-decoration-none ms-5 ps-5" to="/home">Home</Link>
      <Link className="text-dark text-decoration-none ms-5 ps-5" to="/add">Add</Link>
      
    </Nav>
    </Container>
  </Navbar>
       </>
    );
};

export default Header;