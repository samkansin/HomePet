import React from 'react';
import Hero from '../components/index/Hero';
import LastestPostList from '../components/index/LatestPostList';
import OurSuccess from '../components/index/OurSuccess';
import SectionHeading from '../components/SectionHeading';

const Index = () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        paddingLeft: '50px',
        paddingRight: '50px',
        borderRadius: '20px',
      }}
    >
      <Hero />
      <SectionHeading
        head='Adopt'
        subheadFirst='New Best Friend Wanted:'
        subheadSecond='Adopt Today'
      />
      <LastestPostList />
      <SectionHeading
        head='Our Success'
        subheadFirst='Bringing Pets and People Together:'
        subheadSecond='Our Adoption and Reunification Results'
      />
      <OurSuccess />
    </div>
  );
};

export default Index;
