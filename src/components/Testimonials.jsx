import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  const colorStyle = {
    backgroundColor: 'FBED90',
  }
  

  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "As a one-stop solution for my clients. Creating workouts, meal plans, client education, managing payments, custom branded app-it's so easy to use.",
      img: "https://images.unsplash.com/photo-1604480133080-602261a680df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwdHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Jane Smith",
      feedback: "Partnering with Spur.Fit has completely transformed our fitness studio. Their expertise and support have allowed us to elevate our services, enhance our customer satisfaction, and successfully expand our reach.",
      img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Emily Johnson",
      feedback: "Thanks to Spur.Fit, we've been able to revolutionize our fitness business. Their innovative technology and strategic guidance have revolutionized our operations, enhanced client engagement, and positioned us for incredible growth and success.",
      img: "https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.webp?b=1&s=170667a&w=0&k=20&c=f3aNPunkjVO5TVFnti113Jr2pvImq1Qa0dlLRLtxGwo=",
    },
    
  ];

  useEffect(() => {
    const container = testimonialsRef.current;
    const items = Array.from(container.children);
    const itemWidth = items[0].offsetWidth;
    const spacing = 2; // Adjust spacing between items
    const cloneCount = Math.ceil(window.innerWidth / (itemWidth + spacing)) + 1;

    // Clone the items to create an infinite loop
    for (let i = 0; i < cloneCount; i++) {
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
      });
    }

    // Calculate the total width of the items (originals + clones)
    const totalItems = Array.from(container.children);
    const totalWidth = totalItems.length * (itemWidth + spacing);

    // Set initial positions for all items
    gsap.set(totalItems, {
      x: (i) => i * (itemWidth + spacing),
    });

    // Create the infinite loop animation
    gsap.to(totalItems, {
      x: `-=${totalWidth / 2}`,
      duration: totalItems.length * 2, // Adjust duration to control speed
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((value) => parseFloat(value) % totalWidth),
      },
    });
  }, [testimonials.length]);

  return (
    <section className="bg-black" id="testimonials">
      <div className="container mx-auto text-center italic">
        <h2 className="text-3xl font-bold mb-12 py-10 text-white">What Our Users Say</h2>
        <div ref={testimonialsRef} className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial p-8 bg-gray-100 rounded shadow min-w-[300px] mx-0.5" // Reduced mx value
            >
              <img
                src={testimonial.img}
                alt={`${testimonial.name}'s avatar`}
                className="w-25 h-25 rounded-full mx-auto mb-4"
              />
              <p className="mb-4">"{testimonial.feedback}"</p>
              <h4 className="font-bold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
