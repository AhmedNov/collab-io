import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.svg'
import "../styles/StyleNavbar.css"
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import SignIn from './page/SignIn';
import { Sling as Hamburger } from 'hamburger-react'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

    


function BasicExample() {
  return (
    // <Navbar  expand="lg">
    //   <Container data-aos="zoom-in">
    //     <LinkContainer to='/'>
    //     <Navbar.Brand href="#home"><img className='logo-nav' src={logo} alt="" /></Navbar.Brand></LinkContainer>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse  id="basic-navbar-nav">
    //       <Nav className=" justify-content-center me-auto">
    //         <Nav.Link className='nav-links' href="#features">Features</Nav.Link>
            
    //         <Nav.Link className='nav-links'  href="#about">About</Nav.Link>
    //         <Nav.Link className='nav-links' href="#blog">Blog</Nav.Link>
    //         <Nav.Link className='nav-links' href="#pricing">Pricing</Nav.Link>
    //         <Nav.Link className='nav-links' href="#contact">Contact</Nav.Link>
            
            
    //       </Nav>
    //       <div className=" " >
    //           <LinkContainer to='/signin'>
    //           <button  className="bat  " type="submit">
    //              <span>Sign up for Beta</span> 
    //           </button>
    //           </LinkContainer>
              
    //         </div>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
    <nav class="navbar navbar-expand-lg navbar-light container">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className='logo-nav' src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class=""><Hamburger/></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
      <div>
        <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link nav-links " aria-current="page" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-links" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-links" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-links" href="#" >Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-links " aria-current="page" href="#">Contact</a>
        </li>
        
      </ul>
      </div>
      
      <div className=" " >
              <LinkContainer to='/signin'>
               <button  className="bat  " type="submit">
                 <span>Sign up for Beta</span> 
              </button>
              </LinkContainer>
              
            </div>
    </div>
    
  </div>
</nav>
    </>
   
  );
}

export default BasicExample;
