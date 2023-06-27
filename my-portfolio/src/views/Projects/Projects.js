import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  createTheme,
  themes,
} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import ProjectCarousel from "./ProjectCarousel";
//Css file
import "./project.css";

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
import L_FIREBASE from "../../assets/img/skills/firebase-icon.svg";
import I_Node from "../../assets/img/skills/nodejs.svg";
import I_NEO4J from "../../assets/img/skills/Neo4j.svg";

// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "#ec4b4f",
  },
  marker: {
    borderColor: "#070d59",
  },
  timelineTrack: {
    backgroundColor: "#ec4b4f",
  },
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <div className="d-flex justify-content-between flex-column mt-2">
        <h1 className="pt-3 text-center  pb-3">PROJECTS</h1>

        <div>
          <CardGroup>
            <Card>
              <Card.Header className="custom-card-header">
                3D Room desigining and object placement Web App
              </Card.Header>
              <ProjectCarousel />
              <Card.Body>
                <strong>Description:</strong> This a web app that I made as an
                part of my project classes for a client.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>
                    A web app to create your dream room and visualize cabinets
                    in it
                  </li>
                  <li>
                    Create a Square, Rectangle or a Draw a layout yourself!
                  </li>
                  <li>Simple mouse controls to navigate in the 3D space</li>
                </ul>
                <hr />
                <strong>Tech used:</strong>
                <ul>
                  <li>
                    <span className="p-2">
                      <Image
                        src={
                          "data:image/png;base64,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"
                        }
                        alt="Swift"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      three js
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd11v8R8n0r9ISHSv-CNmOkY9gGpCrYg8Q3Q&usqp=CAU"
                          }
                        alt="Swift"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      Chakra UI
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_REACT}
                        alt="Swift"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      React
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={I_Node}
                        alt="Swift"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      Node js
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={I_NEO4J}
                        alt="Swift"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      Neo4j
                    </span>
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <Button
                    href="https://tldexpress.azurewebsites.net/"
                    target="_blank"
                    variant="primary"
                  >
                    SEE LIVE
                  </Button>
                  <Button
                    href="https://github.com/Krishiv98/TLDExpress-3D-Room-Designing-Website"
                    target="_blank"
                    variant="secondary"
                  >
                    SOURCE CODE
                  </Button>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header className="custom-card-header">Console-Based BlackJack</Card.Header>
              <Card.Img variant="top" src={BlackJack} />
              <Card.Body>
                <strong>Description:</strong> This is a console based Black Jack
                where a player plays against a dealer and bet money.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>
                    Play a fun and competetive game against an Dealer whos is a
                    program
                  </li>
                  <li>Powered by Pure Swift</li>
                  <li>
                    Respoisive Game where a player can play untill there money
                    hits Zero
                  </li>
                </ul>
                <hr />
                <strong>Tech used:</strong>
                <ul>
                  <li>
                    <span className="p-2">
                      <Image
                        src={
                          "https://developer.apple.com/swift/images/swift-og.png"
                        }
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
          </CardGroup>
          {/* ---------------------------------------- */}

          {/* ------------------------------ */}
          {/*---------------------------------------------------  */}
          <CardGroup>
            <Card>
              <Card.Header className="custom-card-header">Automated Car Race</Card.Header>
              <Card.Img variant="top" src={CarRace} />
              <Card.Body>
                <strong>Description:</strong> This is an Automated Car Racing
                game which runs an automated car race and records the Statatics.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>
                    2D Car racing game where you take a guess on which car is
                    going to Win next!
                  </li>
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
              <Card.Header className="custom-card-header">WackAMole Game</Card.Header>
              <Card.Img variant="top" src={WackAMole} />
              <Card.Body>
                <strong>Description:</strong> This is a fun WackAMole Game where
                you smack some mole to relieve stress! but with a twist!.
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
  );
};

export default ProjectTimeline;
