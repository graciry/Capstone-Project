import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#F8F8F8] h-[60px] w-full flex justify-between items-center px-5 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold">
          <span className="text-blue-500 font-bold">Globe</span>Trekker
        </h1>
      </div>

      {/* Menu for larger screens */}
      <nav className="hidden md:flex space-x-5">
        <ul className="flex space-x-5">
          <li>
            <Link to="/" className="text-[16px] font-bold hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/destination" className="text-[16px] font-bold hover:text-blue-500">
              Destination Details
            </Link>
          </li>
          <li>
            <Link to="/itinerary" className="text-[16px] font-bold hover:text-blue-500">
              Itinerary Planner
            </Link>
          </li>
          <li>
            <Link to="/account" className="text-[16px] font-bold hover:text-blue-500">
              Account
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu Icon for small screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-black"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for small screens */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#F8F8F8] shadow-lg z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                className="text-[16px] font-bold hover:text-blue-500"
                onClick={toggleMenu}  // Close the menu when clicked
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                className="text-[16px] font-bold hover:text-blue-500"
                onClick={toggleMenu}
              >
                Destination Details
              </Link>
            </li>
            <li>
              <Link
                to="/itinerary"
                className="text-[16px] font-bold hover:text-blue-500"
                onClick={toggleMenu}
              >
                Itinerary Planner
              </Link>
            </li>
            <li>
              <Link
                to="/account"
                className="text-[16px] font-bold hover:text-blue-500"
                onClick={toggleMenu}
              >
                Account
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
