import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl pb-24">
          <div class="w-full mx-auto text-center md:w-11/12 xl:w-9/12 md:text-center">
            <h1 class="mb-8 justify-center px-8 text-4xl sm:px-5 font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>
                Discover your secure, reliable, and functional business
              </span>{" "}
              <span class=" py-2  bg-clip-text leading-12 lg:inline text-blue-700">
                software
              </span>{" "}
              <span> solutions.</span>
            </h1>
            <p class="flex px-5 mb-8 text-lg justify-center text-gray-900 md:text-xl lg:px-24">
              Your secure, reliable, and functional business software solutions.
              next-level templates and designs. Crafted to help you tell your
              story.
            </p>
            <div class="flex direction-row mb-4 justify-center space-x-0 md:space-x-2 md:mb-8">
              <a
                class="inline-flex items-center justify-center w-[200px] px-6 py-3 mb-2 text-lg bg-blue-700 text-white hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0"
                href="/#_"
              >
                Learn More
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          {/* <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center flex-none px-4 bg-gray-600 rounded-b-none h-11 rounded-xl">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 border-2 bg-[#B81D13] border-[#B81D13] rounded-full"></div>
                    <div className="w-3 h-3 border-2 bg-[#EFB700] border-[#EFB700] rounded-full"></div>
                    <div className="w-3 h-3 border-2 bg-[#008450] border-[#008450] rounded-full"></div>
                  </div>
                </div>
                <img
                  src="https://i.pinimg.com/originals/8e/23/1e/8e231e0aa5c7acb23e299ae2f4889fbe.png"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};
