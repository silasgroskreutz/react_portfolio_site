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
import d3Budget from '../assets/images/d3_budget_tracker.png';

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
                target='_blank'
                rel='noopener noreferrer'
              />
              <Button
                variant='success'
                href='https://polar-island-90326.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
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
                target='_blank'
                rel='noopener noreferrer'
              />
              <Button
                variant='success'
                href='https://boring-saha-f9ef00.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Site Link
              </Button>
            </Card.Footer>
          </Card>
          <Card border='dark'>
            <Card.Img variant='top' src={d3Budget} />
            <Card.Body>
              <Card.Title>Tail-Wagger Tracker (budget app)</Card.Title>
              <Card.Text>
                This is simple budget app build using D3.js and Firebase. Build
                using course instruction listed in readme in repository.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardfooter'>
              <SocialIcon
                url='https://github.com/silasgroskreutz/d3_tailwagger_tracker'
                bgColor='#000000'
                target='_blank'
                rel='noopener noreferrer'
              />
              <Button
                variant='success'
                href='https://silasgroskreutz.github.io/d3_tailwagger_tracker/'
                target='_blank'
                rel='noopener noreferrer'
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
                Project to demonstrate API and FETCH skills. I came up with this
                idea because my wife worked in a Vet clinic and I thought it
                might be useful to search adverse drug reactions for animals.
                Also, I tied in wikipedia search to return some information on
                the drug searched as well.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardfooter'>
              <SocialIcon
                url='https://github.com/silasgroskreutz/FDA_pet_med_adverse'
                bgColor='#000000'
                target='_blank'
                rel='noopener noreferrer'
              />
              <Button
                variant='success'
                href='https://silasgroskreutz.github.io/FDA_pet_med_adverse/'
                target='_blank'
                rel='noopener noreferrer'
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
                target='_blank'
                rel='noopener noreferrer'
              />
              <Button
                variant='success'
                href='https://silasgroskreutz.github.io/quizfinal/'
                target='_blank'
                rel='noopener noreferrer'
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
