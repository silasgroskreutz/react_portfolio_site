import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
//import ContactPage from './pages/ContactPage';
import DogsPage from './pages/DogsPage';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Silas Groskreutz',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Paw-some Pics', path: '/dogs' },
        { title: 'Contact', path: '/contact' }
      ],

      home: {
        title: 'Full Stack Web Developer',
        subTitle:
          'HTML/CSS | JavaScript | jQuery | React | Node JS | Express | Mongo DB',
        subText: 'What can we build together?'
      },
      about: {
        title: 'A little bit about me',
        subText: 'Okay, very little...'
      },
      portfolio: { title: 'My portfolio' },
      dogs: { title: 'Click to learn more' },
      contact: { subTitle: 'Reach out to me' }
    };
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Silas Groskreutz</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
                <Link className='nav-link' to='/portfolio'>
                  Portfolio
                </Link>
                <Link className='nav-link' to='/dogs'>
                  "Paw"some Pics
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path='/'
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                subText={this.state.home.subText}
              />
            )}
          />
          <Route
            path='/about'
            render={() => (
              <AboutPage
                title={this.state.about.title}
                subTitle={this.state.about.subTitle}
                subText={this.state.about.subText}
              />
            )}
          />
          <Route
            path='/portfolio'
            render={() => <PortfolioPage title={this.state.dogs.title} />}
          />
          <Route
            path='/dogs'
            render={() => (
              <DogsPage
                title={this.state.dogs.title}
                subTitle={this.state.home.subTitle}
                subText={this.state.home.subText}
              />
            )}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
