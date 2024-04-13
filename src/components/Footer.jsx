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
      <footer className="bg-gray-900 text-gray-400 border-t">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-16 pb-10 sm:px-6 lg:space-y-8 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-teal-600">
              <img src={logo} alt="" width="200" />
            </div>

            <ul className="mt-8 flex justify-start gap-6 md:mt-0 md:justify-end">
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

          <div className="grid grid-cols-1 text-gray-400 gap-8 border-t border-gray-400 pt-8 sm:grid-cols-2 lg:grid-cols-5 ">
            <div>
              <p className="font-medium text-gray-300">Services</p>

              <ul className="mt-6 space-y-4  text-sm">
                <li>
                  <Link to="/services" className=" transition hover:opacity-75">
                    {" "}
                    Software Product{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/services" className=" transition hover:opacity-75">
                    {" "}
                    Custom Software{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/services" className=" transition hover:opacity-75">
                    {" "}
                    Mobile Application{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/services" className="transition hover:opacity-75">
                    {" "}
                    Web Design & Development{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="transition hover:opacity-75">
                    {" "}
                    Software Design{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="transition hover:opacity-75">
                    {" "}
                    Graphic Design{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/services" className="transition hover:opacity-75">
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
                    to="/our-company"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Our Company{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/why-us" className=" transition hover:opacity-75">
                    {" "}
                    Why Us{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="transition hover:opacity-75">
                    {" "}
                    Team{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-partners"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Partners{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-clients"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Clients{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonals"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Testimonials{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-300">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link to="/services" className=" transition hover:opacity-75">
                    {" "}
                    Services{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technologies"
                    className=" transition hover:opacity-75"
                  >
                    {" "}
                    Technologies{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className=" transition hover:opacity-75">
                    {" "}
                    Industries{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className=" transition hover:opacity-75">
                    {" "}
                    Careers{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className=" transition hover:opacity-75">
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-300">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Accessibility{" "}
                  </a>
                </li>

                <li>
                  <Link to="/privacy-policy" className=" transition hover:opacity-75">
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                </li>

                <li>
                  <a href="#" className="transition hover:opacity-75">
                    {" "}
                    Refund Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-300">Contact</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link to="/services" className=" transition hover:opacity-75">
                    {" "}
                    Email: info@bluetelecast.com{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className=" transition hover:opacity-75">
                    {" "}
                     sales@bluetelecast.com{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className=" transition hover:opacity-75">
                    {" "}
                    Address: 227 Church St, New Haven, CT 06510{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-3  md:mt-0  md:m-auto w-12/12  md:w-3/12 gap-5 items-center place-items-center">
            <img
              src="static/images/footer/toprated.webp"
              alt="Top Rated App Development Companies"
              width="100"
              className="shadow hover:filter hover:grayscale transition-all"
            />
            <img
              src="static/images/footer/clutch.webp"
              alt="Clutch"
              className="shadow hover:filter hover:grayscale transition-all"
              width="100"
            />
            <img
              src="static/images/footer/goofgirms.webp"
              alt="Good Firms"
              width="100"
              className="rounded-lg shadow hover:filter hover:grayscale transition-all"
            />
          </div>
          <p className="text-sm text-gray-300 ">
            &copy; {new Date().getFullYear()}. Bluetelecast. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
