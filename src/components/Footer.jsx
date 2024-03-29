import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/bluetelecastwhite.png";
import dribble from "../../assets/dribble.png";
import Facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import behance from "../../assets/behance.png";

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-gray-900 text-gray-400 border-t">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-teal-600">
              <img src={logo} alt="" width="200" />
            </div>

            <ul className="mt-8 flex  justify-start gap-6 sm:mt-0 sm:justify-end">
              <li>
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <img src={Facebook} alt="" width="20" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  <img src={linkedin} alt="" width="20" />
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/Bluetelecast"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <img src={dribble} alt="" width="20" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/bluetelecast"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <img src={behance} alt="" width="20" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 text-gray-400 gap-8 border-t border-gray-400 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
            <div>
              <p className="font-medium text-gray-300">Services</p>

              <ul className="mt-6 space-y-4  text-sm">
                <li>
                <Link
                    to="/services"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Software Product{" "}
                  </Link>
                </li>

                <li>
                <Link
                    to="/services"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Custom Software{" "}
                  </Link>
                </li>

                <li>
                <Link
                    to="/services"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Mobile Application{" "}
                  </Link>
                </li>

                <li>
                <Link
                    to="/services"
                    className="transition hover:opacity-75"
                  >
                    {" "}
                    Web Design & Development{" "}
                  </Link>
                </li>
                <li>
                <Link
                    to="/services"
                    className="transition hover:opacity-75"
                  >
                    {" "}
                    Software Design{" "}
                  </Link>
                </li>
                <li>
                <Link
                    to="/services"
                    className="transition hover:opacity-75"
                  >
                    {" "}
                    Graphic Design{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="transition hover:opacity-75"
                  >
                    {" "}
                    Application Maintenance & Support{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-300">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="about-us"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/team"
                    className="transition hover:opacity-75"
                  >
                    {" "}
                    Meet the Team{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-300">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/contact"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faqs"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    FAQs{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-300">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Accessibility{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Returns Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75"
                  >
                    {" "}
                    Refund Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75"
                  >
                    {" "}
                    Hiring Statistics{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()}. Bluetelecast. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
