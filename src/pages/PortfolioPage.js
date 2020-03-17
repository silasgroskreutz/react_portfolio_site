import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { SocialIcon } from 'react-social-icons';
import Button from 'react-bootstrap/Button';
import './portfoliopage.css';

import devcon from '../assets/images/devcon.png';
import ninstore from '../assets/images/ninstore.png';
import fdaapi from '../assets/images/fdaapi.png';
import ninquiz from '../assets/images/ninquiz.png';

export default class PortfolioPage extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card border='dark'>
            <Card.Img border='dark' variant='top' src={devcon} />
            <Card.Body>
              <Card.Title>Dev Connector</Card.Title>
              <Card.Text>
                Full Stack App built allowing users to sign in, personalize
                profile, post blogs, comments and share with each other. <br />
                Built using React, React Redux, Node.JS, Express and MongoDB.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardfooter'>
              <SocialIcon
                url='https://github.com/silasgroskreutz/developerconnector'
                bgColor='#000000'
              />
              <Button
                variant='success'
                href='https://polar-island-90326.herokuapp.com/'
              >
                Site Link
              </Button>
            </Card.Footer>
          </Card>
          <Card border='dark'>
            <Card.Img border='dark' variant='top' src={ninstore} />
            <Card.Body>
              <Card.Title>NEStalgia Store</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content. <br />
                Built using React.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardfooter'>
              <SocialIcon
                url='https://github.com/silasgroskreutz/NEStalgia_store'
                bgColor='#000000'
              />
              <Button
                variant='success'
                href='https://boring-saha-f9ef00.netlify.com/'
              >
                Site Link
              </Button>
            </Card.Footer>
          </Card>
          <Card border='dark'>
            <Card.Img variant='top' src={fdaapi} />
            <Card.Body>
              <Card.Title>Pet Med Adverse Reaction Search</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardfooter'>
              <SocialIcon
                url='https://github.com/silasgroskreutz/FDA_pet_med_adverse'
                bgColor='#000000'
              />
              <Button
                variant='success'
                href='https://silasgroskreutz.github.io/FDA_pet_med_adverse/'
              >
                Site Link
              </Button>
            </Card.Footer>
          </Card>
          <Card border='dark'>
            <Card.Img variant='top' src={ninquiz} />
            <Card.Body>
              <Card.Title>Nintendo Quiz</Card.Title>
              <Card.Text>
                A 10 question quiz on Nintendo Trivia. One of my first projects
                built with only HTML, CSS and Javascript.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardfooter'>
              <SocialIcon
                url='https://github.com/silasgroskreutz/quizfinal'
                bgColor='#000000'
              />
              <Button
                variant='success'
                href='https://silasgroskreutz.github.io/quizfinal/'
              >
                Site Link
              </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
