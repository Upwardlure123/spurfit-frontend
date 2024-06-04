import React from "react";

const Header = ({ backgroundImage }) => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // height: '800px',
  };

  return (
    <header style={headerStyle}>
      <div className="container mx-auto flex justify-between items-center p-5">
        <a href="/" className="text-white font-bold text-2xl font-sans">
          SpurFit
        </a>
        <nav className="flex flex-grow justify-center items-center space-x-4 text-white text-bold">
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#company">Company</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="flex">
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
         Login
          </button>
          <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
