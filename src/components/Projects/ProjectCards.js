import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';
import { useState } from 'react';
import { useEffect } from 'react';

function ProjectCards(props) {
  const [index, setIndex] = useState(0);
  const { title, imgs, description, live, repo } = props;

  useEffect(() => {
    setTimeout(() => {
      setIndex(index === imgs.length - 1 ? 0 : index + 1);
    }, 7000);
  }, [index]);

  return (
    <Card className='project-card-view'>
      <div
        style={{
          position: 'relative',
        }}
      >
        <div className='project-card-img-btn' style={{ right: 10 }}>
          <span
            onClick={() => setIndex(index === imgs.length - 1 ? 0 : index + 1)}
          >
            {'>'}
          </span>
        </div>
        <div className='project-card-img-btn' style={{ left: 10 }}>
          <span
            onClick={() => setIndex(index === imgs.length - 1 ? 0 : index + 1)}
          >
            {'<'}
          </span>
        </div>
        <div className='project-card-img'>
          <Card.Img variant='top' src={imgs[index]} alt='card-img' />
        </div>
      </div>
      <Card.Body className='project-card-body'>
        <Card.Title>{title}</Card.Title>
        <Card.Text
          className='project-card-text'
          style={{ textAlign: 'justify' }}
        >
          {description}
        </Card.Text>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {repo && (
            <Button
              variant='primary'
              disabled={!repo ? true : false}
              href={repo}
              target='_blank'
            >
              <BiLinkExternal /> &nbsp;
              {'View Repo'}
            </Button>
          )}
          {live && (
            <Button
              variant='primary'
              disabled={!live ? true : false}
              href={live}
              target='_blank'
            >
              <BiLinkExternal /> &nbsp;
              {'Live Demo'}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
