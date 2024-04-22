// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/bluetelecastwhite.png";

// import { useMediaQuery } from "react-responsive";
// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [showDropDownIndustries, setShowDropDownIndustries] = useState(false);

//   const isSmallScreen = useMediaQuery({ query: "(max-width: 340px)" });

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//     console.log("done");
//   };

//   // Function to toggle the menu
//   const toggleDropdown = () => {
//     setShowDropDown(!showDropDown);
//   };

//   // Function to toggle the menu
//   const toggleDropdownIndustries = () => {
//     setShowDropDownIndustries(!showDropDownIndustries);
//   };

//   const closeDropdown = () => {
//     setShowDropDown(false);
//   };
//   return (
//     <>
//       <nav className="bg-gray-900 block w-full hid z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-200">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img src={logo} className="h-6" alt="Bluetelecast" />
//           </Link>
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <Link
//               type="button"
//               to="/contact"
//               className={`text-white bg-blue-700 hover:bg-blue-800 ${
//                 isSmallScreen && "hidden"
//               } focus:ring-4 focus:outline-none font-medium rounded-2xl text-sm px-4 py-2 text-center`}
//             >
//               Contact
//             </Link>
//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className={
//                 "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               }
//               aria-controls="navbar-sticky"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//                 onClick={toggleMenu}
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className={`items-center justify-between ${
//               showMenu ? "" : "hidden"
//             }  w-full md:flex md:w-auto md:order-1`}
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 text-gray-300 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
//               <li>
//                 <Link
//                   to="services"
//                   className="block py-2 px-3  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technologies"
//                   className="block py-2 px-3  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                 >
//                   Technologies
//                 </Link>
//               </li>
//               <li
//                 className="relative"
//                 onMouseEnter={toggleDropdown}
//                 onMouseLeave={toggleDropdown}
//               >
//                 {/* Dropdown Button */}
//                 <button
//                   id="dropdownHoverButton"
//                   data-dropdown-toggle="dropdownHover"
//                   data-dropdown-trigger="hover"
//                   className="flex items-center px-3 md:w-20  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                   type="button"
//                   style={{ minHeight: "25px" }}
//                 >
//                   <span>Company</span>
//                   <svg
//                     className="w-2.5 h-2.5 ms-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                     style={{ fontWeight: "normal" }}
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </button>

//                 {/* Dropdown Content */}
//                 <div
//                   id="dropdownHover"
//                   className={`${
//                     showDropDown ? "block" : "hidden"
//                   } absolute shadow w-52  z-200 bg-white`}
//                 >
//                   <ul
//                     className="font-medium text-gray-900  px-2 divide-y divide-gray-200 "
//                     aria-labelledby="dropdownHoverButton"
//                   >
//                     <li>
//                       <Link
//                         to="/our-company"
//                         className="block px-4 py-2 md:hover:text-blue-700 "
//                       >
//                         Our Company
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/why-us"
//                         className="block px-4 py-2 md:hover:text-blue-700"
//                       >
//                         Why us
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/team"
//                         className="block px-4 py-2 md:hover:text-blue-700"
//                       >
//                         Team
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/our-partners"
//                         className="block px-4 py-2 md:hover:text-blue-700"
//                       >
//                         Parterners
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/our-clients"
//                         className="block px-4 py-2 md:hover:text-blue-700"
//                       >
//                         Clients
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/testimonals"
//                         className="block px-4 py-2 pb-4 md:hover:text-blue-700"
//                       >
//                         Testimonals
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li
//                 className="relative"
//                 onMouseEnter={toggleDropdownIndustries}
//                 onMouseLeave={toggleDropdownIndustries}
//               >
//                 {/* Dropdown Button Industries*/}
//                 <button
//                   id="dropdownHoverButton"
//                   data-dropdown-toggle="dropdownHover"
//                   data-dropdown-trigger="hover"
//                   className="flex items-center px-3 md:w-20  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                   type="button"
//                   style={{ minHeight: "25px" }}
//                 >
//                   <span>Industries</span>
//                   <svg
//                     className="w-2.5 h-2.5 ms-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                     style={{ fontWeight: "normal" }}
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </button>

//                 {/* Dropdown Content Industries*/}
//                 <div
//                   id="dropdownHoverIndustries"
//                   className={`${
//                     showDropDownIndustries ? "block" : "hidden"
//                   } absolute bg-white   shadow w-52  z-200`}
//                 >
//                   <ul
//                     className="font-medium text-gray-900 divide-y divide-gray-200"
//                     aria-labelledby="dropdownHoverButton"
//                   >
//                     <li>
//                       <Link
//                         to="#"
//                         className="block px-4 py-2  md:hover:text-blue-700"
//                       >
//                         Healthcare
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="#"
//                         className="block px-4 py-2 md:hover:text-blue-700"
//                       >
//                         Entertainment
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="#"
//                         className="block px-4 py-2 md:hover:text-blue-700"
//                       >
//                         Property
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="#"
//                         className="block px-4 py-2  md:hover:text-blue-700"
//                       >
//                         Manufacturing
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="#"
//                         className="block px-4 py-2 md:hover:text-blue-700"
//                       >
//                         E-commerce
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="#"
//                         className="block px-4 py-2  md:hover:text-blue-700"
//                       >
//                         ELearning
//                       </Link>
//                       <Link
//                         to="#"
//                         className="block px-4 py-2 pb-4 md:hover:text-blue-700"
//                       >
//                         Ticketing system
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//               <li>
//                 <Link
//                   to="/careers"
//                   className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                 >
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/bluetelecastwhite.png";

// import { useMediaQuery } from "react-responsive";

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [showDropDownIndustries, setShowDropDownIndustries] = useState(false);

//   const isSmallScreen = useMediaQuery({ query: "(max-width: 340px)" });
//   const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const toggleDropdown = () => {
//     setShowDropDown(!showDropDown);
//   };

//   const toggleDropdownIndustries = () => {
//     setShowDropDownIndustries(!showDropDownIndustries);
//   };

//   const closeDropdown = () => {
//     setShowDropDown(false);
//   };

//   return (
//     <>
//       <nav className="bg-gray-900 block w-full hid z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-200">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img src={logo} className="h-6" alt="Bluetelecast" />
//           </Link>
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <Link
//               type="button"
//               to="/contact"
//               className={`text-white bg-blue-700 hover:bg-blue-800 ${
//                 isSmallScreen && "hidden"
//               } focus:ring-4 focus:outline-none font-medium rounded-2xl text-sm px-4 py-2 text-center`}
//             >
//               Contact
//             </Link>
//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className={
//                 "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               }
//               aria-controls="navbar-sticky"
//               aria-expanded="false"
//               onClick={toggleMenu}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//                 onClick={toggleMenu}
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           {/* Sidebar content */}
//           <div
//             className={`fixed inset-y-0 right-0 w-64 bg-gray-900 overflow-y-auto z-50 md:hidden ${
//               showMenu ? "block" : "hidden"
//             }`}
//           >
//             <div className="py-6 px-4">
//               <button
//                 type="button"
//                 className="text-white absolute top-4 right-4"
//                 onClick={toggleMenu}
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//               {/* Logo in sidebar */}
//               <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                 <img src={logo} className="h-6" alt="Bluetelecast" />
//               </Link>
//               <ul className="space-y-6 mt-6">
//                 <li>
//                   <Link
//                     to="/services"
//                     className="block text-gray-300 hover:text-white"
//                     onClick={toggleMenu}
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/technologies"
//                     className="block text-gray-300 hover:text-white"
//                     onClick={toggleMenu}
//                   >
//                     Technologies
//                   </Link>
//                 </li>
//                 <li>
//                   <div
//                     className="block text-gray-300 hover:text-white cursor-pointer"
//                     onClick={toggleDropdown}
//                   >
//                     Company
//                     <svg
//                       className="w-4 h-4 inline-block ml-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                   <ul className={`${showDropDown ? "block" : "hidden"} mt-2 pl-4`}>
//                     <li>
//                       <Link
//                         to="/our-company"
//                         className="block text-gray-300 hover:text-white"
//                         onClick={toggleMenu}
//                       >
//                         Our Company
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/why-us"
//                         className="block text-gray-300 hover:text-white"
//                         onClick={toggleMenu}
//                       >
//                         Why us
//                       </Link>
//                     </li>
//                     {/* Add more dropdown items here */}
//                   </ul>
//                 </li>
//                 <li>
//                   <div
//                     className="block text-gray-300 hover:text-white cursor-pointer"
//                     onClick={toggleDropdownIndustries}
//                   >
//                     Industries
//                     <svg
//                       className="w-4 h-4 inline-block ml-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                   <ul className={`${showDropDownIndustries ? "block" : "hidden"} mt-2 pl-4`}>
//                     <li>
//                       <Link
//                         to="/healthcare"
//                         className="block text-gray-300 hover:text-white"
//                         onClick={toggleMenu}
//                       >
//                         Healthcare
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/entertainment"
//                         className="block text-gray-300 hover:text-white"
//                         onClick={toggleMenu}
//                       >
//                         Entertainment
//                       </Link>
//                     </li>
//                     {/* Add more dropdown items here */}
//                   </ul>
//                 </li>
//                 <li>
//                   <Link
//                     to="/careers"
//                     className="block text-gray-300 hover:text-white"
//                     onClick={toggleMenu}
//                   >
//                     Careers
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Navbar content */}
//           <div
//             className={`items-center justify-between ${
//               showMenu ? "" : "hidden"
//             }  w-full md:flex md:w-auto md:order-1`}
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 text-gray-300 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
//               <li>
//                 <Link
//                   to="/services"
//                   className="block py-2 px-3  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technologies"
//                   className="block py-2 px-3  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                 >
//                   Technologies
//                 </Link>
//               </li>
//               <li>
//                 <div
//                   className="relative"
//                   onMouseEnter={toggleDropdown}
//                   onMouseLeave={toggleDropdown}
//                 >
//                   {/* Dropdown Button */}
//                   <button
//                     id="dropdownHoverButton"
//                     data-dropdown-toggle="dropdownHover"
//                     data-dropdown-trigger="hover"
//                     className="flex items-center px-3 md:w-20  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                     type="button"
//                     style={{ minHeight: "25px" }}
//                   >
//                     <span>Company</span>
//                     <svg
//                       className="w-2.5 h-2.5 ms-2"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 10 6"
//                       style={{ fontWeight: "normal" }}
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 1 4 4 4-4"
//                       />
//                     </svg>
//                   </button>

//                   {/* Dropdown Content */}
//                   <div
//                     id="dropdownHover"
//                     className={`${
//                       showDropDown ? "block" : "hidden"
//                     } absolute shadow w-52  z-200 bg-white`}
//                   >
//                     <ul
//                       className="font-medium text-gray-900  px-2 divide-y divide-gray-200 "
//                       aria-labelledby="dropdownHoverButton"
//                     >
//                       <li>
//                         <Link
//                           to="/our-company"
//                           className="block px-4 py-2 md:hover:text-blue-700 "
//                         >
//                           Our Company
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/why-us"
//                           className="block px-4 py-2 md:hover:text-blue-700"
//                         >
//                           Why us
//                         </Link>
//                       </li>
//                       {/* Add more dropdown items here */}
//                     </ul>
//                   </div>
//                 </div>
//               </li>

//               <li>
//                 <div
//                   className="relative"
//                   onMouseEnter={toggleDropdownIndustries}
//                   onMouseLeave={toggleDropdownIndustries}
//                 >
//                   {/* Dropdown Button Industries*/}
//                   <button
//                     id="dropdownHoverButton"
//                     data-dropdown-toggle="dropdownHover"
//                     data-dropdown-trigger="hover"
//                     className="flex items-center px-3 md:w-20  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                     type="button"
//                     style={{ minHeight: "25px" }}
//                   >
//                     <span>Industries</span>
//                     <svg
//                       className="w-2.5 h-2.5 ms-2"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 10 6"
//                       style={{ fontWeight: "normal" }}
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 1 4 4 4-4"
//                       />
//                     </svg>
//                   </button>

//                   {/* Dropdown Content Industries*/}
//                   <div
//                     id="dropdownHoverIndustries"
//                     className={`${
//                       showDropDownIndustries ? "block" : "hidden"
//                     } absolute bg-white   shadow w-52  z-200`}
//                   >
//                     <ul
//                       className="font-medium text-gray-900 divide-y divide-gray-200"
//                       aria-labelledby="dropdownHoverButton"
//                     >
//                       <li>
//                         <Link
//                           to="/healthcare"
//                           className="block px-4 py-2  md:hover:text-blue-700"
//                         >
//                           Healthcare
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/entertainment"
//                           className="block px-4 py-2 md:hover:text-blue-700"
//                         >
//                           Entertainment
//                         </Link>
//                       </li>
//                       {/* Add more dropdown items here */}
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <Link
//                   to="/careers"
//                   className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                 >
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

//3
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/bluetelecastwhite.png";

// import { useMediaQuery } from "react-responsive";

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [showDropDownIndustries, setShowDropDownIndustries] = useState(false);

//   const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
//   const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const toggleDropdown = () => {
//     setShowDropDown(!showDropDown);
//   };

//   const toggleDropdownIndustries = () => {
//     setShowDropDownIndustries(!showDropDownIndustries);
//   };

//   return (
//     <>
//       <nav className="bg-gray-900 block w-full hid z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-200">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img src={logo} className="h-6" alt="Bluetelecast" />
//           </Link>
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <Link
//               type="button"
//               to="/contact"
//               className={`text-white bg-blue-700 hover:bg-blue-800 ${
//                 isSmallScreen && "hidden"
//               } focus:ring-4 focus:outline-none font-medium rounded-2xl text-sm px-4 py-2 text-center`}
//             >
//               Contact
//             </Link>
//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className={
//                 "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               }
//               aria-controls="navbar-sticky"
//               aria-expanded={`${showMenu}`}
//               onClick={toggleMenu}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           {/* Sidebar content */}
//           <div
//             className={`fixed inset-y-0 right-0 w-64 bg-gray-900 overflow-y-auto z-50 md:hidden ${
//               showMenu ? "block" : "hidden"
//             }`}
//           >
//             <div className="py-6 px-4">
//               <button
//                 type="button"
//                 className="text-white absolute top-4 right-4"
//                 onClick={toggleMenu}
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//               {/* Logo in sidebar */}
//               <Link
//                 to="/"
//                 className="flex items-center space-x-3 rtl:space-x-reverse"
//               >
//                 <img src={logo} className="h-6" alt="Bluetelecast" />
//               </Link>
//               <ul className="space-y-6 mt-6">
//                 <li>
//                   <Link
//                     to="/services"
//                     className="block text-gray-300 hover:text-white"
//                     onClick={toggleMenu}
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/technologies"
//                     className="block text-gray-300 hover:text-white"
//                     onClick={toggleMenu}
//                   >
//                     Technologies
//                   </Link>
//                 </li>
//                 <li>
//                   <div
//                     className="block text-gray-300 hover:text-white cursor-pointer"
//                     onClick={toggleDropdown}
//                   >
//                     Company
//                     <svg
//                       className="w-4 h-4 inline-block ml-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                   <ul
//                     className={`${
//                       showDropDown ? "block" : "hidden"
//                     } mt-2 pl-4`}
//                   >
//                     <li>
//                       <Link
//                         to="/our-company"
//                         className="block text-gray-300 hover:text-white"
//                         onClick={toggleMenu}
//                       >
//                         Our Company
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/why-us"
//                         className="block text-gray-300 hover:text-white"
//                         onClick={toggleMenu}
//                       >
//                         Why us
//                       </Link>
//                     </li>
//                     {/* Add more dropdown items here */}
//                   </ul>
//                 </li>
//                 <li>
//                   <div
//                     className="block text-gray-300 hover:text-white cursor-pointer"
//                     onClick={toggleDropdownIndustries}
//                   >
//                     Industries
//                     <svg
//                       className="w-4 h-4 inline-block ml-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                   <ul
//                     className={`${
//                       showDropDownIndustries ? "block" : "hidden"
//                     } mt-2 pl-4`}
//                   >
//                     <li>
//                       <Link
//                         to="/healthcare"
//                         className="block text-gray-300 hover:text-white"
//                         onClick={toggleMenu}
//                       >
//                         Healthcare
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/entertainment"
//                         className="block text-gray-300 hover:text-white"
//                         onClick={toggleMenu}
//                       >
//                         Entertainment
//                       </Link>
//                     </li>
//                     {/* Add more dropdown items here */}
//                   </ul>
//                 </li>
//                 <li>
//                   <Link
//                     to="/careers"
//                     className="block text-gray-300 hover:text-white"
//                     onClick={toggleMenu}
//                   >
//                     Careers
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Navbar content */}
//           <div
//             className={`items-center justify-between ${
//               showMenu ? "" : "hidden"
//             }  w-full md:flex md:w-auto md:order-1`}
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 text-gray-300 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
//               <li>
//                 <Link
//                   to="/services"
//                   className="block py-2 px-3  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technologies"
//                   className="block py-2 px-3  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                 >
//                   Technologies
//                 </Link>
//               </li>
//               <li>
//                 <div
//                   className="relative"
//                   onMouseEnter={toggleDropdown}
//                   onMouseLeave={toggleDropdown}
//                 >
//                   {/* Dropdown Button */}
//                   <button
//                     id="dropdownHoverButton"
//                     data-dropdown-toggle="dropdownHover"
//                     data-dropdown-trigger="hover"
//                     className="flex items-center px-3 md:w-20  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                     type="button"
//                     style={{ minHeight: "25px" }}
//                   >
//                     <span>Company</span>
//                     <svg
//                       className="w-2.5 h-2.5 ms-2"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 10 6"
//                       style={{ fontWeight: "normal" }}
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 1 4 4 4-4"
//                       />
//                     </svg>
//                   </button>

//                   {/* Dropdown Content */}
//                   <div
//                     id="dropdownHover"
//                     className={`${
//                       showDropDown ? "block" : "hidden"
//                     } absolute shadow w-52  z-200 bg-white`}
//                   >
//                     <ul
//                       className="font-medium text-gray-900  px-2 divide-y divide-gray-200 "
//                       aria-labelledby="dropdownHoverButton"
//                     >
//                       <li>
//                         <Link
//                           to="/our-company"
//                           className="block px-4 py-2 md:hover:text-blue-700 "
//                         >
//                           Our Company
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/why-us"
//                           className="block px-4 py-2 md:hover:text-blue-700"
//                         >
//                           Why us
//                         </Link>
//                       </li>
//                       {/* Add more dropdown items here */}
//                     </ul>
//                   </div>
//                 </div>
//               </li>

//               <li>
//                 <div
//                   className="relative"
//                   onMouseEnter={toggleDropdownIndustries}
//                   onMouseLeave={toggleDropdownIndustries}
//                 >
//                   {/* Dropdown Button Industries*/}
//                   <button
//                     id="dropdownHoverButton"
//                     data-dropdown-toggle="dropdownHover"
//                     data-dropdown-trigger="hover"
//                     className="flex items-center px-3 md:w-20  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                     type="button"
//                     style={{ minHeight: "25px" }}
//                   >
//                     <span>Industries</span>
//                     <svg
//                       className="w-2.5 h-2.5 ms-2"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 10 6"
//                       style={{ fontWeight: "normal" }}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M1 1 4 4 4-4"
//                       />
//                     </svg>
//                   </button>

//                   {/* Dropdown Content Industries*/}
//                   <div
//                     id="dropdownHoverIndustries"
//                     className={`${
//                       showDropDownIndustries ? "block" : "hidden"
//                     } absolute bg-white   shadow w-52  z-200`}
//                   >
//                     <ul
//                       className="font-medium text-gray-900 divide-y divide-gray-200"
//                       aria-labelledby="dropdownHoverButton"
//                     >
//                       <li>
//                         <Link
//                           to="/healthcare"
//                           className="block px-4 py-2  md:hover:text-blue-700"
//                         >
//                           Healthcare
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/entertainment"
//                           className="block px-4 py-2 md:hover:text-blue-700"
//                         >
//                           Entertainment
//                         </Link>
//                       </li>
//                       {/* Add more dropdown items here */}
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <Link
//                   to="/careers"
//                   className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
//                 >
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           {/* Sidebar backdrop */}
//           {isSmallScreen && showMenu && (
//             <div
//               className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
//               onClick={toggleMenu}
//             ></div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/bluetelecastwhite.png";

import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDownIndustries, setShowDropDownIndustries] = useState(false);
  const [showDropDownSidebar, setShowDropDownSidebar] = useState(false);
  const [showDropDownIndustriesSidebar, setShowDropDownIndustriesSidebar] =
    useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  // const toggleDropdownIndustries = () => {
  //   setShowDropDownIndustries(!showDropDownIndustries);
  // };

  const toggleDropdownSidebar = () => {
    setShowDropDownSidebar(!showDropDownSidebar);
  };

  // const toggleDropdownIndustriesSidebar = () => {
  //   setShowDropDownIndustriesSidebar(!showDropDownIndustriesSidebar);
  // };

  return (
    <>
      <nav className="bg-gray-900 block w-full hid z-20 top-0 start-0 border-b border-gray-700 fixed ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-6" alt="Bluetelecast" />
          </Link>
          <Link
            type="button"
            to="/contact"
            className={`text-white bg-blue-700 flex md:order-3 hover:bg-blue-800 ${
              isSmallScreen && "hidden"
            } focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 text-center`}
          >
            Contact
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isMdScreen && (
              <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 text-gray-300 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                <li>
                  <Link
                    to="/services"
                    className="block py-2 px-3  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 "
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technologies"
                    className="block py-2 px-3  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 "
                  >
                    Technologies
                  </Link>
                </li>
                <li>
                  <div
                    className="relative"
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                  >
                    {/* Dropdown Button */}
                    <button
                      id="dropdownHoverButton"
                      data-dropdown-toggle="dropdownHover"
                      data-dropdown-trigger="hover"
                      className="flex items-center px-3 md:w-20  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 "
                      type="button"
                      style={{ minHeight: "25px" }}
                    >
                      <span>Company</span>
                      <svg
                        className="w-2.5 h-2.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        style={{ fontWeight: "normal" }}
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Content */}
                    <div
                      id="dropdownHover"
                      className={`${
                        showDropDown ? "block" : "hidden"
                      } absolute shadow w-60  z-200  pt-5`}
                    >
                      <ul
                        className="font-medium text-gray-900  px-2 divide-y bg-white divide-gray-200 "
                        aria-labelledby="dropdownHoverButton"
                      >
                        <li>
                          <Link
                            to="/our-company"
                            className="block px-4 py-3 md:hover:text-gray-600 "
                          >
                            Our Company
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/why-us"
                            className="block px-4 py-3 md:hover:text-gray-600"
                          >
                            Why us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/team"
                            className="block px-4 py-3 md:hover:text-gray-600"
                          >
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/our-partners"
                            className="block px-4 py-3 md:hover:text-gray-600"
                          >
                            Parterners
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/our-clients"
                            className="block px-4 py-3 md:hover:text-gray-600"
                          >
                            Clients
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/testimonals"
                            className="block px-4 py-3 md:hover:text-gray-600"
                          >
                            Testimonals
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* <li>
                  <div
                    className="relative"
                    onMouseEnter={toggleDropdownIndustries}
                    onMouseLeave={toggleDropdownIndustries}
                  > */}
                {/* Dropdown Button Industries*/}
                {/* <button
                      id="dropdownHoverButton"
                      data-dropdown-toggle="dropdownHover"
                      data-dropdown-trigger="hover"
                      className="flex items-center px-3 md:w-20  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 transition-all duration-500 ease-in-out"
                      type="button"
                      style={{ minHeight: "25px" }}
                    >
                      <span>Industries</span>
                      <svg
                        className="w-2.5 h-2.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        style={{ fontWeight: "normal" }}
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button> */}

                {/* Dropdown Content Industries*/}
                {/* <div
                      id="dropdownHoverIndustries"
                      className={`${
                        showDropDownIndustries ? "block " : "hidden"
                      } absolute pt-5 shadow w-60 z-200 `}
                    >
                      <ul
                        className="font-medium text-gray-900 bg-white px-2 divide-y divide-gray-200 transition-all duration-5000 ease-in-out"
                        aria-labelledby="dropdownHoverButton"
                      >
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-3  md:hover:text-gray-600"
                          >
                            Healthcare
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-3 md:hover:text-gray-600"
                          >
                            Entertainment
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-3 md:hover:text-gray-600"
                          >
                            Property
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-3  md:hover:text-gray-600"
                          >
                            Manufacturing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-3 md:hover:text-gray-600"
                          >
                            E-commerce
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-3  md:hover:text-gray-600"
                          >
                            ELearning
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-3  md:hover:text-gray-600"
                          >
                            Ticketing system
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li> */}

                <li>
                  <Link
                    to="/industries"
                    className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 "
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 "
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className={
                "inline-flex items-center  p-3 w-12 h-12 justify-center text-sm text-gray-500  md:hidden border-dotted border border-gray-700"
              }
              aria-controls="navbar-sticky"
              aria-expanded={`${showMenu}`}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
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
          {/* Sidebar content */}
          <div
            className={`fixed inset-y-0 right-0 w-72 bg-gray-900 overflow-y-auto z-50 md:hidden ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <div className="py-6 px-4">
              <button
                type="button"
                className="text-white p-3  border-dotted border border-gray-700 absolute top-4 right-4"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Logo in sidebar */}
              <Link
                to="/"
                className="flex items-center space-x-3 mt-2 rtl:space-x-reverse"
              >
                <img src={logo} className="h-6" alt="Bluetelecast" />
              </Link>
              <ul className="mt-6 divide-y divide-gray-800">
                <li>
                  <Link
                    to="/services"
                    className="block text-gray-300 py-4 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technologies"
                    className="block text-gray-300 py-4 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Technologies
                  </Link>
                </li>
                <li>
                  <div
                    className="flex justify-between text-gray-300 py-4 hover:text-gray-600 cursor-pointer "
                    onClick={toggleDropdownSidebar}
                  >
                    <span>Company</span>
                    <svg
                      className={`${
                        showDropDownSidebar ? "rotate-90" : ""
                      } w-4 h-4 inline-block ml-1 `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <ul
                    className={`${
                      showDropDownSidebar ? "block" : "hidden"
                    }  divide-y divide-gray-800 pl-4`}
                  >
                    <li className="">
                      <Link
                        to="/our-company"
                        className="block text-gray-300 pb-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Our Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/why-us"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Why us
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/team"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-partners"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Parterners
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-clients"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Clients
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/testimonals"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Testimonals
                      </Link>
                    </li>
                    {/* Add more dropdown items here */}
                  </ul>
                </li>
                {/* <li>
                  <div
                    className=" text-gray-300 py-4 hover:text-gray-600 cursor-pointer flex justify-between"
                    onClick={toggleDropdownIndustriesSidebar}
                  >
                    <span>Industries</span>
                    <svg
                      className={`${
                        showDropDownIndustriesSidebar ? "rotate-90" : ""
                      } w-4 h-4 inline-block ml-1 `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <ul
                    className={`${
                      showDropDownIndustriesSidebar ? "block" : "hidden"
                    }  pl-4 divide-y divide-gray-800`}
                  >
                    <li>
                      <Link
                        to="/healthcare"
                        className="block text-gray-300 pb-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/entertainment"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/entertainment"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Property
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/entertainment"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/entertainment"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        E-commerce
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/entertainment"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        ELearning
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/entertainment"
                        className="block text-gray-300 py-3 hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        Ticketing system
                      </Link>
                    </li>
                  </ul>
                </li> */}
                 <li>
                  <Link
                    to="/industries"
                    className="block text-gray-300 py-4 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="block text-gray-300 py-4 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block text-gray-300 py-4 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Sidebar backdrop */}
          {isSmallScreen && showMenu && (
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
              onClick={toggleMenu}
            ></div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
