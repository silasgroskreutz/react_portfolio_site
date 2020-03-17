import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Hero from '../components/Hero';
import './homepage.css';

function HomePage(props) {
  return (
    <div>
      <Hero
        title={props.title}
        subTitle={props.subTitle}
        subText={props.subText}
      />
      <div class='socialmedia'>
        <SocialIcon
          url='https://www.linkedin.com/in/silas-groskreutz-a68830191/'
          bgColor='#ffffff'
        />
        <SocialIcon
          url='https://github.com/silasgroskreutz'
          bgColor='#ffffff'
        />
        <SocialIcon
          url='mailto:silas.groskreutz@gmail.com'
          network='email'
          bgColor='#ffffff'
        />
      </div>
    </div>
  );
}

export default HomePage;
