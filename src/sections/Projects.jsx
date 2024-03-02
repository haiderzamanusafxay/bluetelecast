import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="block w-full py-2 text-transparent bg-clip-text text-5xl font-bold leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                  Our Recent Projects
                </span>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="../../assets/1/front.png"
              category="Full Stack Web App"
              title="Enmarco"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="../../assets/2/1.png"
              category="MIS (Full stack web app)"
              title="FLYAWAY HUB              "
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="../../assets/3/gdpr.png"
              category="Full Stack Web App"
              title="GDPR"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
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
          <div className="overflow-hidden rounded-[10px]">
            <img
              src={ImageHref}
              alt="portfolio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 mx-7 -mt-20 border-2  rounded-lg bg-white shadow-lg py-[34px] px-3 text-center shadow-portfolio-dark">
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
