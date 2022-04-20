import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3> MOHAMMAD AZHARI </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> mazharioffical@gmail.com </h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3> +249 92 873 7001 </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
