import React from "react";
import companiesImage from "../../assets/companies.png";
import experienceImage from "../../assets/experance.png";
import clientsImage from "../../assets/clients.png";
import productsImage from "../../assets/products.png";

const WhyChooseUs = () => {
  return (
    <>
      <div id="features" className=" py-24 bg-gray-50">
        <h2 className="flex justify-center items-center  font-bold text-4xl leading-[1.1] py-8 sm:text-3xl md:text-6xl">
      
          <span className="py-2 text-gray-900 bg-clip-text leading-12 pb-4 md:pb-10">
            Why Choose Us?
          </span>
        </h2>
        <div className=" mx-auto grid grid-cols-2  lg:grid-cols-4  md:w-10/12 gap-5 margin-4 ">
          <div className="text-center justify-center items-center ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-ful sm:w-12 sm:h-12">
              <img src={experienceImage} alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              10+
            </h6>
            <p className="mb-2 font-bold text-md">Years Experience</p>
          </div>
          <div className="text-center ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full sm:w-12 sm:h-12">
              <img src={companiesImage} alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              3
            </h6>
            <p className="mb-2 font-bold text-md">Companies Worldwide</p>
          </div>
          <div className="text-center ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full sm:w-12 sm:h-12">
              <img src={clientsImage} alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              1k+
            </h6>
            <p className="mb-2 font-bold text-md">Clients</p>
          </div>
          <div className="text-center ">
            <div className="flex items-center justify-center w-8 h-8 mx-auto mb-3 rounded-full sm:w-12 sm:h-12">
              <img src={productsImage} alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              110
            </h6>
            <p className="mb-2 font-bold text-md">Products</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
