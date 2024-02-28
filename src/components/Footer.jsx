import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="font-[sans-serif] p-10 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
          <div className="xl:col-span-2">
            <a href="javascript:void(0)">
              <img
                src="../../assets/bluetelecast.png"
                alt="logo"
                className="w-48"
              />
            </a>
            <ul className="mt-10 flex space-x-6">
              <li>
                <a href="#fb">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="fill-black hover:fill-blue-700 w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/bluetelecast-software-company/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="fill-black hover:fill-blue-700 w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-semibold text-lg relative max-sm:cursor-pointer">
              Services{" "}
            </h4>
            <ul className="mt-4 space-y-5">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Client Portal
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-semibold text-lg relative max-sm:cursor-pointer">
              Platforms{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="sm:hidden absolute right-0 top-1 fill-black"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                  data-original="#000000"
                ></path>
              </svg>
            </h4>
            <ul className="space-y-5 mt-4 max-sm:hidden">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Hubspot
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Integration Services
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Marketing Glossar
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  UIPath
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-semibold text-lg relative max-sm:cursor-pointer">
              Company{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="sm:hidden absolute right-0 top-1 fill-black"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                  data-original="#000000"
                ></path>
              </svg>
            </h4>
            <ul className="space-y-5 mt-4 max-sm:hidden">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-semibold text-lg relative max-sm:cursor-pointer">
              Additional{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="sm:hidden absolute right-0 top-1 fill-black"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                  data-original="#000000"
                ></path>
              </svg>
            </h4>
            <ul className="space-y-5 mt-4 max-sm:hidden">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-blacktext-sm"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-black text-sm"
                >
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-8 border-gray-300" />
        <div className="md:flex md:item-center mt-8">
          <ul className="md:flex md:space-x-6 max-md:space-y-2">
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-blue-700 text-black text-sm"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-blue-700 text-black text-sm"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-blue-700 text-black text-sm"
              >
                Security
              </a>
            </li>
          </ul>
          <p className="text-gray-800 text-sm ml-auto max-md:mt-5">
            Copyright © {new Date().getFullYear()}
            <a
              href="https://readymadeui.com/"
              target="_blank"
              className="hover:underline mx-1"
            >
              Bluetelecast
            </a>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
