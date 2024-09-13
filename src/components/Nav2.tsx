import React, { useState } from 'react';
import munna from '../assets/logo-780c3a48.png';
import { NavLink } from 'react-router-dom';
import { MdDownload } from 'react-icons/md';
import ResumePDF from '../assets/cv.pdf';
import DarkModeToggle from '../DarkModeToggle';

const Component: React.FC = () => {
  // State to manage the menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={munna} className="h-16 rounded-full" alt="Flowbite Logo" />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">Web Developer</span>
        </div>
        <button 
          onClick={toggleMenu} // Toggle menu on click
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-solid-bg" 
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div 
          className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} 
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li className="block text-white py-2 px-3 md:p-0 text-black  rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
              <NavLink 
                to="/" 
                aria-current="page" 
                className={({ isActive }) => 
                  `group text-white transition duration-300 no-underline hover:no-underline ${isActive ? 'text-gray-300' : ''}`
                }
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </NavLink>
            </li>
            <li className="block text-white py-2 px-3 md:p-0 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `group text-white transition duration-300 no-underline hover:no-underline ${isActive ? 'text-gray-300' : ''}`
                }
              >
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </NavLink>
            </li>
            <li className="block text-white py-2 px-3 md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <a 
                href={ResumePDF} 
                download 
                className="flex items-center group text-white transition duration-300 no-underline hover:no-underline"
              >
                Download CV <MdDownload />
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </a>
            </li>
            <li className="block text-white py-2 px-3 md:p-0 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `group text-white transition duration-300 no-underline hover:no-underline ${isActive ? 'text-gray-300' : ''}`
                }
              >
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </NavLink>
            </li>

            <li className="block text-white py-2 px-3 md:p-0 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <DarkModeToggle/>
            </li>
           

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Component;
