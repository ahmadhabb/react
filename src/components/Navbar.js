import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiBookOpen } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { ReactComponent as MoilLogo } from '../assets/logo.svg';

function Navbar() {
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
  let technologyTimeout;

  const handleMouseEnterTechnology = () => {
    clearTimeout(technologyTimeout);
    setTechnologyDropdownOpen(true);
  };

  const handleMouseLeaveTechnology = () => {
    technologyTimeout = setTimeout(() => {
      setTechnologyDropdownOpen(false);
    }, 100); // Delay 100ms
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex flex-shrink-0">
              <MoilLogo className="h-8 w-auto mr-2" />
              <NavLink to="/" className="text-2xl font-bold text-primary">MoilWeb</NavLink>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-black text-sm font-medium"
                    : "text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-black text-sm font-medium"
                    : "text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                }
              >
                About Us
              </NavLink>
              <div
                className="relative"
                onMouseEnter={handleMouseEnterTechnology}
                onMouseLeave={handleMouseLeaveTechnology}
              >
                <NavLink
                  to="/technology"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-black text-sm font-medium"
                      : "text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                  }
                >
                  Technology
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </NavLink>
                {technologyDropdownOpen && (
                  <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <NavLink to="/technology/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Fisheye Dewarping</NavLink>
                      <NavLink to="/technology/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">3D Measurement</NavLink>
                      <NavLink to="/technology/option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashcam With DMS</NavLink>
                    </div>
                  </div>
                )}
              </div>
              <NavLink
                to="/solution"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-black text-sm font-medium"
                    : "text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                }
              >
                Solution
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-black text-sm font-medium"
                    : "text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                }
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <FiBookOpen style={{ width: '24px', height: '24px', strokeWidth: '2', color: '#304860' }}/>
            </button>
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <IoSearch style={{ width: '24px', height: '24px', strokeWidth: '1', color: '#304860' }}/>
            </button>
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <CiGlobe style={{ width: '24px', height: '24px', strokeWidth: '1', color: '#304860' }}/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
