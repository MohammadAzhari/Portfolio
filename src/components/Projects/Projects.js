import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="home-about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Realtime ChatApp (Demo)"
              description="Runtime Chat Application made by Express js , Node js , MongoDB , SocketIO ."
              link="https://mazhari-chat.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="QuizApp"
              description="Quiz web application , created by Node.js , MongoDB , ExpressJS . Creating and taking Quiz with diffrent types of results and show statistics of any question."
              link="ma-quiz.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Online Store"
              description="Online store with shopping-cart , try sign in as admin (admin@admin.com - 2875)"
              link="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
