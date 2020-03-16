import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2
      }}
    />
  );
  return (
    <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
      <Container fluid={true}>
        <Row className='justify-content-center'>
          <Col md={8}>
            {props.title && <h1 className='display-2'>{props.title}</h1>}
            <ColoredLine color='black' />
            {props.subTitle && (
              <h3 className='display-4 font-weight-light'>{props.subTitle}</h3>
            )}
            {props.subText && (
              <h3 className='lead font-weight-heavy'>{props.subText}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
