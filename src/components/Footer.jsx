import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Spur.fit. All rights reserved.</p>
        <div className="mt-4">
          <a href="/#" className="mx-2">Privacy Policy</a>
          <a href="/#" className="mx-2">Terms of Service</a>
          <a href="/#" className="mx-2">Contact</a>
        </div>
        <div className="mt-4">
          <a href="/#" className="mx-2">Facebook</a>
          <a href="/#" className="mx-2">Twitter</a>
          <a href="/#" className="mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
