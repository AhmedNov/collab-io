import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.svg'
import "../styles/StyleNavbar.css"
import { Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import SignIn from './page/SignIn';
import { Sling as Hamburger } from 'hamburger-react'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

    


function BasicExample() {
  return (
    // <Navbar  expand="lg">
    //   <Container data-aos="zoom-in">
    //     <LinkContainer to='/'>
    //     <Navbar.Brand href="#home"><img classNameName='logo-nav' src={logo} alt="" /></Navbar.Brand></LinkContainer>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse  id="basic-navbar-nav">
    //       <Nav classNameName=" justify-content-center me-auto">
    //         <Nav.Link classNameName='nav-links' href="#features">Features</Nav.Link>
            
    //         <Nav.Link classNameName='nav-links'  href="#about">About</Nav.Link>
    //         <Nav.Link classNameName='nav-links' href="#blog">Blog</Nav.Link>
    //         <Nav.Link classNameName='nav-links' href="#pricing">Pricing</Nav.Link>
    //         <Nav.Link classNameName='nav-links' href="#contact">Contact</Nav.Link>
            
            
    //       </Nav>
    //       <div classNameName=" " >
    //           <LinkContainer to='/signin'>
    //           <button  classNameName="bat  " type="submit">
    //              <span>Sign up for Beta</span> 
    //           </button>
    //           </LinkContainer>
              
    //         </div>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    
    <> 
   
    <nav className="navbar navbar-expand-lg navbar-light container"data-aos="zoom-in">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img className='logo-nav' src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""><Hamburger/></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link nav-links " aria-current="page" href="#">Features</a>
        </li>
       <li className="nav-item">
          <Link to="/about"className="nav-link nav-links" > About</Link>
        </li>
        <li className="nav-item">
         <Link to="/blog"className="nav-link nav-links">  Blog</Link> 
        </li>
        <li className="nav-item">
          <a className="nav-link nav-links" href="#" >Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-links " aria-current="page" href="#">Contact</a>
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
