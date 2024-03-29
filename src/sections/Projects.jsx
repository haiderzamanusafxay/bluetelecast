import React, { useState } from "react";
import Modal from "react-modal";

import EnmarcoFront from "../../assets/1/front.png";
import MISFrontImage from "../../assets/2/1.png";
import GDPRImageFront from "../../assets/3/gdpr.png";

const customStyles = {
  content: {
    backgroundColor: "white",
    width: 400,
  },
};
const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");
  const ProjectsArray = [
    {
      id: 0,
      imageURL: EnmarcoFront,
      title: "Enmarco",
      subTitle: "Full Stack Web App",
    },
    {
      id: 1,
      imageURL: MISFrontImage,
      title: "FLYAWAY HUB",
      subTitle: "MIS (Full stack web app",
    },
    {
      id: 2,
      imageURL: GDPRImageFront,
      title: "GDPR",
      subTitle: "Full Stack Web App",
    },
  ];
  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                {/* <span className="block w-full py-2 text-transparent bg-clip-text text-5xl font-bold leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                  Our Recent Projects
                </span> */}
                <span className="block w-full py-2 text-gray-900 bg-clip-text text-5xl font-bold leading-12  lg:inline">
                  Our Recent Projects
                </span>
                <p className="text-body-color text-base text-blue-900">
                  Celebrating Innovation: Explore Our Latest Projects
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {ProjectsArray.map((project) => {
              return (
                <PortfolioCard
                  ImageHref={project.imageURL}
                  category={project.subTitle}
                  title={project.title}
                  button="View Details"
                  buttonHref="#"
                  showCard={showCard}
                />
              );
            })}
            {/*<PortfolioCard
              ImageHref={EnmarcoFront}
              category="Full Stack Web App"
              title="Enmarco"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
             <PortfolioCard
              ImageHref={MISFrontImage}
              category="MIS (Full stack web app)"
              title="FLYAWAY HUB              "
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={GDPRImageFront}
              category="Full Stack Web App"
              title="GDPR"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px] shadow-2xl">
            <img
              src={ImageHref}
              alt="portfolio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 mx-7 -mt-20 border-2  rounded-lg bg-gray-50 shadow-2xl py-[34px] px-3 text-center shadow-portfolio-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark  mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-blue-600 inline-block rounded-full border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
