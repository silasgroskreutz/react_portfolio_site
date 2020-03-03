import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
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
        title: 'Forward',
        subTitle: 'What can we build together?',
        subText: 'See my projects below'
      },
      about: {
        title: 'About Me',
        subTitle: 'This is About subtitle',
        subText: 'About Subtext'
      },
      portfolio: { title: 'My portfolio' },
      dogs: { title: 'My support crew' },
      contact: {
        title: 'Contact Title',
        subtitle: 'This is Contact subtitle',
        subText: 'Contact Subtext'
      }
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
                  Pawsome Pics
                </Link>
                <Link className='nav-link' to='/contact'>
                  Contact
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
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                subText={this.state.home.subText}
              />
            )}
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
          <Route
            path='/contact'
            render={() => (
              <ContactPage
                title={this.state.home.title}
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
