import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} subText={props.subText} />

      <Content>
        I am a software developer, specializing in the MERN stack. Please click
        on the portfolio tab to see some of my work. <br /> <br />
        Prior to working on software, I started my technology career as a level
        1 helpdesk technician and worked my way to serving as a Junior System
        Administrator. Being self-motivated and flexible were the greatest
        factors to my success. If you would like someone with those traits on
        your team, or to learn more about me, please feel free to contact me.{' '}
        <br /> <br />
        In my spare time, I am an avid dog walker and video gamer. See the
        "Paw"some pics tab for my walking buddies. If you look at my portfolio,
        you will see some of what I enjoy about gaming.
      </Content>
    </div>
  );
}

export default AboutPage;
