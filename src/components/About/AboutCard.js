import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Mohammad Azhari </span>
            from <span className='purple'> Khartoum, Sudan.</span>
            <br />I am a Software Engineer .
            <br />
            <br />
            Worked as Web Developer @ <span className='purple'>
              {' '}
              Lemon{' '}
            </span>{' '}
            (2023/1 - present) <span className='purple'>Full-Time</span>
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> I am responsible for spearheading the
              development, design, maintenance, and refactoring of internal web
              applications within 'Lemon'. Drawing upon my extensive technical
              expertise and deep understanding of web applications, I have
              consistently delivered innovative, robust, and scalable solutions
              that have enhanced the efficiency of the systems.
            </li>
          </ul>

          <p style={{ textAlign: 'justify' }}>
            Worked as Frontend Engineer @{' '}
            <span className='purple'> Layer5 </span> (2023/7 - present)
            <span className='purple'> Part-Time</span>
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Open-Source Contributor.
            </li>
          </ul>

          <p style={{ textAlign: 'justify' }}>
            Worked as Software Engineer @{' '}
            <span className='purple'> Freelancer </span> (2022/3 - present)
            <span className='purple'> Freelance</span>
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Building software applications for customers.
            </li>
            <li className='about-activity'>
              <ImPointRight /> Developed Web applications , RESTful APIs ,
              real-time systems , responsive UIs and worked with databases (SQL
              , NoSQL)..
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className='blockquote-footer'>M.Azhari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
