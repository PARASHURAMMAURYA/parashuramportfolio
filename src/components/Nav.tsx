import React from "react";
import { NavLink } from "react-router-dom";
import { MdDownload } from "react-icons/md";


function Nav() {
  return (
    <div>
      <ul className="flex gap-5 text-white justify-center pt-4 text-lg font-bold">
        <li className="relative group">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `group text-white transition duration-300 ${isActive ? 'text-gray-300' : ''}`
            }
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </NavLink>
        </li>
        <li className="relative group">
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `group text-white transition duration-300 ${isActive ? 'text-gray-300' : ''}`
            }
          >
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </NavLink>
        </li>
        <li className="relative group">
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `group text-white transition duration-300 ${isActive ? 'text-gray-300' : ''}`
            }
          >
            Projects
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </NavLink>
        </li>
        <li className="relative group">
          <NavLink 
            to="/resume" 
            className={({ isActive }) => 
              `group text-white transition duration-300 ${isActive ? 'text-gray-300' : ''}`
            }
          >
            Resume <MdDownload />

            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </NavLink>
        </li>
        <li className="relative group">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `group text-white transition duration-300 ${isActive ? 'text-gray-300' : ''}`
            }
          >
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
