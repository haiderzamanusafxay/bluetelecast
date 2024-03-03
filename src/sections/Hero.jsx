import React from "react";

export const Hero = () => {
  return (
    <>
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            {/* <h1 className="mb-8 justify-center px-4 text-4xl sm:px-5 font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Discover</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                your secure, reliable, and functional business
              </span>{" "}
              <span>software solutions.</span>
            </h1> */}
            <h1 className="mb-8 justify-center px-4 text-4xl sm:px-5 font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>
                Discover your secure, reliable, and functional business
              </span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                software
              </span>{" "}
              <span> solutions.</span>
            </h1>
            <p className="flex px-5 mb-8 text-lg justify-center text-gray-600 md:text-xl lg:px-24">
              Your secure, reliable, and functional business software solutions.
              next-level templates and designs. Crafted to help you tell your
              story.
            </p>
            <div className="flex direction-row mb-4 justify-center space-x-0 md:space-x-2 md:mb-8">
              {/* <a
                href="#_"
                className="inline-flex items-center  w-[200px] px-6 py-3 mb-2 text-lg text-white bg-blue-700 rounded-2xl sm:mb-0"
              >
                Contact Now!
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a> */}
              <a
                href="#_"
                className="inline-flex items-center justify-center w-[200px] px-6 py-3 mb-2 text-lg bg-blue-700 hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
