import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className='mt-5'>
      <Container fluid={true}>
        <Row className='border-top justify-content-between'>
          <Col className='p-0' md={3} sm={12}>
            Thank you for taking the time to visit!
          </Col>
          <Col className='p-0 d-flex justify-content-end' md={3}>
            This site was made by Silas Groskreutz.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
