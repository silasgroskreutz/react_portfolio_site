import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>Hey I need to write up stuff about me here....</Content>
    </div>
  );
}

export default AboutPage;
