import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.svg'
import "../styles/StyleNavbar.css"

import { LinkContainer } from 'react-router-bootstrap'

    


function BasicExample() {
  return (
    <Navbar  expand="lg">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand href="#home"><img className='logo-nav' src={logo} alt="" /></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className=" justify-content-center me-auto">
            <Nav.Link className='nav-links' href="#features">Features</Nav.Link>
            <Nav.Link className='nav-links' href="#about">About</Nav.Link>
            <Nav.Link className='nav-links' href="#blog">Blog</Nav.Link>
            <Nav.Link className='nav-links' href="#pricing">Pricing</Nav.Link>
            <Nav.Link className='nav-links' href="#contact">Contact</Nav.Link>
            
            
          </Nav>
          <div className=" searchButton" >
              <LinkContainer to='/signin'>
              <button className="btn btn-outline-primary " type="submit">
                Sign up for Beta
              </button>
              </LinkContainer>
              
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
