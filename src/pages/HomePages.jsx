import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MostPicked from '../components/MostPicked';
import OurMision from '../components/OurMision';
import Join from '../components/Join';
import Footer from '../components/Footer';

export default function HomePages() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MostPicked />
      <OurMision />
      <Join />
      <Footer />
    </>
  );
}
