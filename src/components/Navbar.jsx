import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/bluetelecastwhite.png";

import { useMediaQuery } from "react-responsive";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 340px)" });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("done");
  };


  // Function to toggle the menu
  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <>
      <nav className="bg-gray-900 block w-full hid z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-6"
              alt="Bluetelecast"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              type="button"
              to="/contact"
              className={`text-white bg-blue-700 hover:bg-blue-800 ${isSmallScreen && "hidden"
                } focus:ring-4 focus:outline-none font-medium rounded-2xl text-sm px-4 py-2 text-center`}
            >
              Contact
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className={
                "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              }
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                onClick={toggleMenu}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${showMenu ? "" : "hidden"
              }  w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-gray-300 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            
              <li>
                <Link
                  to="services"
                  className="block py-2 px-3  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies"
                  className="block py-2 px-3  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Technologies
                </Link>
              </li>
              <li className="relative">
                {/* Dropdown Button */}
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="flex items-center px-3 md:w-20  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  type="button"
                  onClick={toggleDropdown}
                  style={{ minHeight: '25px' }} 
                >
                  <span>Company</span>
                  <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" style={{ fontWeight: "normal" }}>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {/* Dropdown Content */}
                <div id="dropdownHover" className={`${showDropDown ? "block" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-md shadow w-44 mt-2 z-200`}>
                  <ul className="font-medium text-gray-900 " aria-labelledby="dropdownHoverButton">
                    <li>
                      <Link to="/our-company" className="block px-4 py-2 hover:bg-gray-100 md:hover:text-blue-700">Our Company</Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-4 py-2 hover:bg-gray-100 md:hover:text-blue-700">Why us</Link>
                    </li>
                    <li>
                      <Link to="/team" className="block px-4 py-2 hover:bg-gray-100 md:hover:text-blue-700">Team</Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-4 py-2 hover:bg-gray-100 md:hover:text-blue-700">Parterners</Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-4 py-2 hover:bg-gray-100 md:hover:text-blue-700">Clients</Link>
                    </li>
                    <li>
                      <Link to="/testimonals" className="block px-4 py-2 hover:bg-gray-100 md:hover:text-blue-700">Testimonals</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
