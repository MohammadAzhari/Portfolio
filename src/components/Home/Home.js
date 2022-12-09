import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";

import { Link } from "react-router-dom";

import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mohammad Azhari</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Link className="btn btn-primary mt-5" to="/project">
        <h3>
          <BiLinkExternal /> &nbsp; See My Recent{" "}
          <strong className="purple">Works </strong>
        </h3>
      </Link>
      <Home2 />
    </section>
  );
}

export default Home;
