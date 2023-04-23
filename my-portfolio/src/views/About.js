import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
// import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center pb-2">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile " roundedCircle src={"../../profilePhoto.jpg"} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                <br />Aspiring Full-Stack Developer and Devops Engineer with expertise in React.js, Vue.js, Microsoft Azure, Three js, Scripting languages like Bash, Powershell and Perl. Currently learning React Native for Mobile Application.
                <br /><br/>
                I am a passionate programmer and a learner,
                 born and brought up in India. Currently,
                  I am enrolled in Computer systems Technology at Saskatchewan Polytechnic, Saskatoon.
                <br />
                <br />
                Along with that, I an International Student Recuirment Assistant at Saskatchewan Polytechnic and a freelancer Excel Automation specialist. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.                
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1RtzuBCwsBE3zgwz-q7B8PsSXFrLkkzbJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.fiverr.com/thrive_90" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-secondary">
                        Freelance
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Krishiv98" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/krishiv-soni-286594201/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;