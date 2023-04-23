
import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-jumbotron 200vh">
      <h1 className="pt-3 text-center  pb-3">CONTACT ME</h1>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:krishsoni009@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="krishsoni009@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
            <a href="https://www.linkedin.com/in/krishiv-soni-286594201/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
            <a href="https://github.com/Krishiv98" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.fiverr.com/thrive_90" target="_blank" rel="noopener noreferrer">
                <Button id="medium-btn" variant="outline-info" title="Find my freelance portfolio here">
                <i class="fab fa-youtube"></i> Freelance
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://drive.google.com/file/d/1RtzuBCwsBE3zgwz-q7B8PsSXFrLkkzbJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Resume">
                  <i className="fab fa-twitter"></i> My Resume
                </Button>
              </a>
            </div>

          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;