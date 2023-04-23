import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import "./NavBar.css";

export function NavBar (){
  return (
    <>
      <Navbar collapseOnSelect expand="md"
        fixed="top"
        className="animate-navbar nav-theme justify-content-between"
        variant="light">
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
         
              <Nav.Link href="#">/Portfolio</Nav.Link>
              <Nav.Link href="#about">/About</Nav.Link>
              <Nav.Link href="#skills">/Skills</Nav.Link>
              <Nav.Link href="#projects">/Projects</Nav.Link>
              <Nav.Link href="#contact">/Contact</Nav.Link>
              {/* <Nav.Link href="https://github.com/Krishiv98">/ Github</Nav.Link> */}
           
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

