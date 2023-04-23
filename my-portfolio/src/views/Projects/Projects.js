import React from "react";
import { Timeline, Events, UrlButton, ImageEvent, createTheme, themes } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from "react-bootstrap/Button";
//Css file
import './project.css'

//Projects 
import BlackJack from "../../assets/img/projects/BlackJack.png";
import CarRace from "../../assets/img/projects/AutomatedCarRacing.png";
import WackAMole from "../../assets/img/projects/WackAMole.png";


//Skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_FIREBASE from "../../assets/img/skills/firebase-icon.svg"


// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: '#ec4b4f',
  },
  marker: {
    borderColor: '#070d59',
  },
  timelineTrack: {
    backgroundColor: '#ec4b4f',
  },
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
     
      <div className="d-flex justify-content-between flex-column mt-6">
       
      <h1 className="pt-3 text-center  pb-3">PROJECTS</h1>
     
        <div>
          <CardGroup>
            <Card>
              <Card.Header>Console-Based BlackJack</Card.Header>
              <Card.Img variant="top" src={BlackJack} />
              <Card.Body>
                <strong>Description:</strong> This is a console based Black Jack where a player plays against a dealer and bet money.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>Play a fun and competetive game against an Dealer whos is a program</li>
                  <li>Powered by Pure Swift</li>
                  <li>Respoisive Game where a player can play untill there money hits Zero</li>
                </ul>
                <hr />
                <strong>Tech used:</strong>
                <ul>
                  <li>
                    <span className="p-2">
                      <Image
                        src={"https://developer.apple.com/swift/images/swift-og.png"}
                        alt="Swift"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      Swift
                    </span>
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <Button
                    href="https://replit.com/@krishivsoni/BlackJack?v=1"
                    target="_blank"
                    variant="primary"                  
                  >
                    SEE LIVE
                  </Button>
                  <Button
                    href="https://github.com/Krishiv98/Console-based-BlackJack-Swift"
                    target="_blank"
                    variant="secondary"
                  >
                    SOURCE CODE
                  </Button>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header>Automated Car Race</Card.Header>
              <Card.Img variant="top" src={CarRace} />
              <Card.Body>
                <strong>Description:</strong> This is an Automated Car Racing game which runs an automated car race and records the Statatics.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>2D Car racing game where you take a guess on which car is going to Win next!</li>
                  <li>Powered by Pure JavaScript and CSS</li>
                  <li>Respoisive Design</li>
                </ul>
                <hr />
                <strong>Tech used:</strong>
                <ul>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_HTML5}
                        alt="HTML 5"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      HTML5
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_CSS3}
                        alt="CSS 3"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      CSS3
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_JAVASCRIPT}
                        alt="JavaScript"
                        rounded
                        className="image-style1 m-1"
                      ></Image>{" "}
                      JavaScript
                    </span>
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <Button
                    href="https://krishiv98.github.io/2DCarRace-Javascript/"
                    target="_blank"
                    variant="primary"
                  >
                    SEE LIVE
                  </Button>
                  <Button
                    href="https://github.com/Krishiv98/2DCarRace-Javascript"
                    target="_blank"
                    variant="secondary"
                  >
                    SOURCE CODE
                  </Button>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header>WackAMole Game</Card.Header>
              <Card.Img variant="top" src={WackAMole} />
              <Card.Body>
                <strong>Description:</strong> This is a fun WackAMole Game where you smack some mole to relieve stress! but with a twist!.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>Provide fun stress relieving game.</li>
                  <li>Powered by Pure JavaScript and CSS</li>
                  <li>Wack some mole!</li>
                </ul>
                <hr />
                <strong>Tech used:</strong>
                <ul>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_HTML5}
                        alt="HTML 5"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      HTML5
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_CSS3}
                        alt="CSS 3"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      CSS3
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_JAVASCRIPT}
                        alt="JavaScript"
                        rounded
                        className="image-style1 m-1"
                      ></Image>{" "}
                      JavaScript
                    </span>
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <Button
                    href="https://krishiv98.github.io/Whack-A-Mole/"
                    target="_blank"
                    variant="primary"

                  >
                    SEE LIVE
                  </Button>
                  <Button
                    href="https://github.com/Krishiv98/Whack-A-Mole"
                    target="_blank"
                    variant="secondary"
                  >
                    SOURCE CODE
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>

      {/* </ImageEvent> */}
      {/* </Events>
      </Timeline> */}
    </div>
  )
}


export default ProjectTimeline