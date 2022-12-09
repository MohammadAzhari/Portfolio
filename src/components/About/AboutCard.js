import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Azhari </span>
            from <span className="purple"> Khartoum, Sudan.</span>
            <br />I am a Web Developer .
            <br />
            <br />
            Worked as freelance at{" "}
            <span className="purple"> Freelancer.com </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Implemented and completed full web applications.
            </li>
            <li className="about-activity">
              <ImPointRight /> Met the clients and optimized their applications.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">M.Azhari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
