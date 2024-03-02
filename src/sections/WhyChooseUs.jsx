import React from "react";
import companiesImage from "../../assets/companies.png";
import experienceImage from "../../assets/experience.png";
import clientsImage from "../../assets/clients.png";
const WhyChooseUs = () => {
  return (
    <>
      <div id="features">
        <h2 className="flex justify-center items-center border-t font-bold text-4xl leading-[1.1] py-8 sm:text-3xl md:text-6xl">
          <span className="py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500">
            Why Choose Us?
          </span>
        </h2>
        <div className="flex margin-4 items-center justify-evenly max-w-full">
          <div className="text-center justify-center items-center my-10">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-ful sm:w-12 sm:h-12">
              <img src={experienceImage} alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              15+
            </h6>
            <p className="mb-2 font-bold text-md">Years Experience</p>
          </div>
          <div className="text-center my-10">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full sm:w-12 sm:h-12">
              <img src={companiesImage} alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              6
            </h6>
            <p className="mb-2 font-bold text-md">Companies Worldwide</p>
          </div>
          <div className="text-center my-10">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full sm:w-12 sm:h-12">
              <img src={clientsImage} alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              1k+
            </h6>
            <p className="mb-2 font-bold text-md">Clients</p>
          </div>
          <div className="text-center my-10">
            <div className="flex items-center justify-center w-6 h-6 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              52
            </h6>
            <p className="mb-2 font-bold text-md">Products</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
