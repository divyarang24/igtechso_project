import React from 'react';
import Header from '../components/Header';
import CardSlider from '../components/CardSlider';
import FeatureCards from '../components/FeatureCard';
import FAQ from '../components/FAQ';


const Home = () => {
  return (
    <div>
      
      <Header/>
      <CardSlider/>
      <FeatureCards/>
      <FAQ/>
    </div>
  );
};

export default Home;
