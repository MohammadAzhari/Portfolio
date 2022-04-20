import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple"> MOHAMMAD AZHARI </span>
            <br />I am a junior NodeJS Developer
            <br />
            <br />A passionate , diligent person who wants to learn continuously
            .
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Node js
            </li>
            <li className="about-activity">
              <ImPointRight /> Express js
            </li>
            <li className="about-activity">
              <ImPointRight /> Mongo DB
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
