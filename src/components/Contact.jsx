// Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <section className='bg-black' id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold py-10 text-white">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
