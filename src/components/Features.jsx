import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Features = ({backgroundImage}) => {
  const features = [
    { title: 'Personalized Workouts', description: 'Get custom workout routines', icon: '🏋️' },
    { title: 'Progress Tracking', description: 'Track your progress with ease', icon: '📈' },
    { title: 'Engagement', description: 'Stay engaged with your clients', icon: '💬' },
    { title: 'Efficient Training', description: 'Achieve results faster than ever', icon: '⚡' },
  ];

  const featureRefs = useRef([]);

  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '800px',
  }


  useEffect(() => {
    featureRefs.current.forEach((el, index) => {
      gsap.to(el, {
        scale: 1.1, // Scale up to 110%
        duration: 1,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: index * 0.2, // Stagger the start of each box's animation
      });
    });
  }, []);

  return (
    <section style={sectionStyle} id="features" className="py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-20 mt-4 ">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="p-8 bg-white rounded shadow flex justify-center items-center"
              style={{
                width: '200px',
                height: '200px',
                margin: '0 auto', // Center the box within the grid cell
                borderRadius: '50px', // Semi-rounded corners
              }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 font-mono">{feature.title}</h3>
                <p className='font-sans'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
