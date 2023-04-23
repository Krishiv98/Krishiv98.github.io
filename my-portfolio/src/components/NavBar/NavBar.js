import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar 
        sticky="top"
       >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
          <Nav className="ml-auto">
            <Container> 
            <Nav.Link href="#home">/ Portfolio</Nav.Link>
            <Nav.Link href="#about">/ About</Nav.Link>
            <Nav.Link href="#skills">/ Skills</Nav.Link>
            <Nav.Link href="#projects">/ Projects</Nav.Link>
            <Nav.Link href="#contact">/ Contact</Nav.Link>
            {/* <Nav.Link href="https://github.com/Krishiv98">/ Github</Nav.Link> */}
            </Container>
          </Nav>
        
      </Navbar>
    </>
  )
}

export default NavBar