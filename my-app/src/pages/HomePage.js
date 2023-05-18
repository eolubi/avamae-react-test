
import React from 'react';
import Carousel from '../components/Carousel';
import ContentSectionTwo from '../components/ContentSectionTwo';
import ContentSectionThree from '../components/ContentSectionThree';
import ContentSectionFour from '../components/ContentSectionFour';
import 'swiper/swiper.css';

function HomePage() {
  return (
    <div>
      <Carousel />
      <ContentSectionTwo />
      <ContentSectionThree />
      <ContentSectionFour /> 
    </div>
  );
}

export default HomePage;
