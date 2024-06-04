import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './index.css'
import bgImage from "./assets/images/image3.jpg"


const App = () => {


  const containerStyle = {
    position: 'relative',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.)', // Adjust the alpha value (0.5 for 50% opacity)
    pointerEvents: 'none', // Allow clicks to pass through the overlay
  };

  return (
    <>
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <Header />
      <Hero />
      <Features />
      </div>
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      </>
    
  );
};
export default App;


