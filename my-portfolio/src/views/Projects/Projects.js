import React from "react";
import { Timeline, Events, UrlButton, ImageEvent, createTheme, themes } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image";
import CardGroup from 'react-bootstrap/CardGroup';
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
              <Card.Header>PROJECT DETAILS</Card.Header>
              <Card.Img variant="top" src={BlackJack} />
              <Card.Body>
                <strong>Description:</strong> This is an E-Commerce website of savoury foods, which provides user online food shopping experience with various varieties.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>Provide best quality of food in low price rate.</li>
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
                  <UrlButton
                    href="https://adibaabid-team-malamjabba.github.io/BlackJack-Website/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                  <UrlButton
                    href="https://github.com/AdibaAbid-Team-MalamJabba/BlackJack-Website"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header>PROJECT DETAILS</Card.Header>
              <Card.Img variant="top" src={BlackJack} />
              <Card.Body>
                <strong>Description:</strong> This is an E-Commerce website of savoury foods, which provides user online food shopping experience with various varieties.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>Provide best quality of food in low price rate.</li>
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
                  <UrlButton
                    href="https://adibaabid-team-malamjabba.github.io/BlackJack-Website/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                  <UrlButton
                    href="https://github.com/AdibaAbid-Team-MalamJabba/BlackJack-Website"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header>PROJECT DETAILS</Card.Header>
              <Card.Img variant="top" src={BlackJack} />
              <Card.Body>
                <strong>Description:</strong> This is an E-Commerce website of savoury foods, which provides user online food shopping experience with various varieties.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>Provide best quality of food in low price rate.</li>
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
                  <UrlButton
                    href="https://adibaabid-team-malamjabba.github.io/BlackJack-Website/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                  <UrlButton
                    href="https://github.com/AdibaAbid-Team-MalamJabba/BlackJack-Website"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
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