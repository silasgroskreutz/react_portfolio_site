import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        I am a software developer specializing in the MERN stack. Please click
        on the portfolio tab in the upper right so see some of my work. <br />{' '}
        <br />
        Prior to working on software, started my IT career as a level 1 helpdesk
        technician and worked my way to serving as a Junior System
        Administrator. Being self-motivated and flexible were the keys to
        success while working my way up. If you would like someone with those
        traits on your team, please feel free to contact me.
      </Content>
    </div>
  );
}

export default AboutPage;
