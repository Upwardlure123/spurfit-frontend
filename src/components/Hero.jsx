import React from 'react';

const Hero = ({ backgroundImage }) => {

  const sectionStyle ={
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '600px',
  }


  return (
    <section style={sectionStyle}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl text-white font-bold mb-4">Welcome to Spur.fit</h1>
        <p className="mb-8 text-white">Your AI copilot for fitness training</p>
        <div className="flex justify-center items-center">
          <input type="email" className="w-80 h-12 border border-black-300 rounded-md p-2 mr-2" placeholder="Enter your email" />
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-sans font-bold py-2 px-4 rounded">
            Try for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
