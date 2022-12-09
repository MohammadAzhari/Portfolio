import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import SP1 from "../../Assets/Projects/{87CE868C-201C-4B96-BBE2-340CD69CEF86}.png";
import SP2 from "../../Assets/Projects/{AEDD4EBC-6318-4D00-AEEA-36CCAFBF3DEE}.png";
import SP3 from "../../Assets/Projects/{D3159EA1-A35D-49C9-9F2A-8893D34226F2}.png";
import MERN1 from "../../Assets/Projects/2.png";
import MERN2 from "../../Assets/Projects/3.png";
import MERN3 from "../../Assets/Projects/4.png";
import NEWS1 from "../../Assets/Projects/20220729_101548.jpg";
import NEWS2 from "../../Assets/Projects/20220729_101608.jpg";
import NEWS3 from "../../Assets/Projects/20220729_101625.jpg";
import EC1 from "../../Assets/Projects/20220729_101643.jpg";
import EC2 from "../../Assets/Projects/20220729_101703.jpg";
import EC3 from "../../Assets/Projects/20220729_101721.jpg";
import CA1 from "../../Assets/Projects/20220729_101746.jpg";
import CA2 from "../../Assets/Projects/20220729_101827.jpg";
import CA3 from "../../Assets/Projects/20220729_101759.jpg";
import QA1 from "../../Assets/Projects/20220729_101847.jpg";
import QA2 from "../../Assets/Projects/20220729_101901.jpg";
import FTP1 from "../../Assets/Projects/1.png";
import FTP5 from "../../Assets/Projects/5.png";
import FT1 from "../../Assets/Projects/fastype1.png";
import FT2 from "../../Assets/Projects/fastype2.png";
import FT3 from "../../Assets/Projects/fastype3.png";
import FT4 from "../../Assets/Projects/Screenshot 2022-12-09 123807.png";

const projectData = [
  {
    title: "Students Portal",
    imgs: [SP1, SP2, SP3],
    description: `is freelance production project . i developed it from scratch with these features :   - google OAuth , local auth .  - ability to restore the password by email message .  - build for different operating systems.   - good fit on difference screen sizes (responsive ui) .  - live notifications and realtime chats . - ability to upload images and notes.   - user details are encrypted and stored in MongoDB.   - resume maker with 3 templates , with ability to download it as pdf . `,
  },
  {
    title: "MERN Online Game",
    imgs: [MERN1, MERN2, MERN3],
    description: `Renswer is a Full Stack online game. Uses Socket.io for real time play and   stores questions in Mongo DB Database.`,
    repo: "https://github.com/mohammadazhari/mern_game",
    live: "https://renswer.herokuapp.com",
  },
  {
    title: "Real Time Chat App",
    imgs: [CA1, CA2, CA3],
    description: `full chat application with Single chats and Group chats .`,
    repo: "https://github.com/mohammadazhari/chat",
    live: "https://mazhari-chat.herokuapp.com",
  },
  {
    title: "Free To Play",
    imgs: [FTP1, FTP5],
    description:
      "Free-To-Play is an application implements searching and sorting functionality to filter large amount of games .",
    repo: "https://github.com/MohammadAzhari/FreeToPlay",
    live: "https://freetoplay-three.vercel.app/",
  },
  {
    title: "Fastype",
    imgs: [FT1, FT2, FT3, FT4],
    description:
      "Fastype is a typing test implemnts the react componennts life cycle and uses MongoDB to store the users in the database",
    repo: "https://github.com/MohammadAzhari/fastype",
    live: "https://fastype-4wiv.vercel.app/",
  },
  {
    title: "Mobile News App",
    imgs: [NEWS1, NEWS2, NEWS3],
    description: `React-native news application integrated with news api . `,
    repo: "https://github.com/mohammadazhari/news",
    live: "https://expo.dev/@mohammadazhari/news",
  },
  {
    title: "E-Commerce Website",
    imgs: [EC1, EC2, EC3],
    description: `React ecommerce website uses context api for state management .`,
    repo: "https://github.com/mohammadazhari/e-commerce-website",
  },
  {
    title: "Quizzes App",
    imgs: [QA1, QA2],
    description: `Quizzes application with statistics and different types of results`,
    repo: "https://github.com/mohammadazhari/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, i) => (
            <Col md={4} key={i} className="project-card">
              <ProjectCard
                imgs={project.imgs}
                isBlog={false}
                title={project.title}
                description={project.description}
                repo={project.repo}
                live={project.live}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
