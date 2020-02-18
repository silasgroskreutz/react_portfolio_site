import React, { Component } from 'react';
import Card from './Card';

import dog1 from '../assets/images/dog1.jpg';
import dog2 from '../assets/images/dog1.jpg';
import park from '../assets/images/park.jpg';

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Title 0',
          subTitle: 'subTitle0',
          imgSrc: 'dog1',
          link: 'https://www.google.com',
          selected: false
        },
        {
          id: 1,
          title: 'Title 1',
          subTitle: 'subTitle1',
          imgSrc: 'dog2',
          link: 'https://www.Nintendo.com',
          selected: false
        },
        {
          id: 2,
          title: 'Title 2',
          subTitle: 'subTitle2',
          imgSrc: 'park',
          link: 'https://www.msn.com',
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
          onClick={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return <div>Carousel works</div>;
  }
}

export default Carousel;
