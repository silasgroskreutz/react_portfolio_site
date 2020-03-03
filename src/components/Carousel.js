import React, { Component } from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import dog1 from '../assets/images/dog1.jpg';
import dog2 from '../assets/images/dog2.jpg';
import both1 from '../assets/images/both1.jpg';
import park from '../assets/images/park.jpg';

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: '"The Princess"',
          subTitle: 'Resting on "her" bed',
          imgSrc: dog1,
          selected: false
        },
        {
          id: 1,
          title: '"Baby Bear"',
          subTitle: 'Always Happy',
          imgSrc: dog2,
          selected: false
        },
        {
          id: 2,
          title: 'On Watch',
          subTitle: 'Backyard secured',
          imgSrc: both1,
          selected: false
        },
        {
          id: 3,
          title: 'Out together',
          subTitle: 'Great way to start',
          imgSrc: park,
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
