import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Industries = () => {
  const CardList = [
    {
      id: 0,
      url: "/static/images/industrial/Healthcare.png",
      alt: "Healthcare",
      title: "Healthcare",
    },
    {
      id: 1,
      url: "/static/images/industrial/Entertainment.png",
      alt: "Entertainment",
      title: "Entertainment",
    },
    {
      id: 2,
      url: "/static/images/industrial/Property.png",
      alt: "Property",
      title: "Property",
    },
    {
      id: 3,
      url: "/static/images/industrial/Manufacturing.png",
      alt: "Manufacturing",
      title: "Manufacturing",
    },
    {
      id: 4,
      url: "/static/images/industrial/E-commerce.png",
      alt: "E-commerce",
      title: "E-commerce",
    },
    {
      id: 5,
      url: "/static/images/industrial/E-learning.png",
      alt: "E-learning",
      title: "E-learning",
    },
    {
      id: 6,
      url: "/static/images/industrial/Ticketingsystem.png",
      alt: "Ticketing system",
      title: "Ticketing system",
    },
    {
      id: 7,
      url: "/static/images/industrial/InformationTechnology.png",
      alt: "Information Technology",
      title: "Information Technology",
    },
  ];
  return (
    <>
      <section className="pb-8 bg-gray-50 mt-16">
        <div className="text-md w-9/12 m-auto pt-4 flex items-center ">
          <span>
            <Link to="/" className="hover:text-blue-700" title="Home">
              Home{" "}
            </Link>
          </span>
          <span className="px-2">
            <svg
              className=" h-2 w-2 text-gray-800 display-inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </span>
          <span className="text-blue-700">Industrial</span>
        </div>
        <div className="text-center w-11/12 mx-auto max-w-screen-xl md:w-11/12 lg:w-9/12 md:px-8  md:text-center pt-24">
          <h1 className="font-bold text-2xl leading-[1.1] md:text-3xl">
            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Industrial
            </span>
          </h1>
          <p className="flex mb-8 text-justify text-gray-900 text-base  md:mt-4 ">
            To provide reliable software solutions and support, we need to do
            more than just know about technology. We must understand different
            types of businesses and the technology they use. This means knowing
            how companies operate, how they interact, and what their customers
            want. We also need to understand the unique challenges and
            opportunities each business faces.
            <br />
            <br />
            Each business sector has its own needs, and these can change
            depending on where they are located. The needs of our local clients
            are not the same as those of our international clients. Bluetelecast
            is good at understanding a wide range of businesses, both locally
            and globally. We've helped companies in various sectors, including:
          </p>
        </div>
      </section>
      <section className="pb-24 bg-gray-50 pt-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  2xl:grid-cols-5 max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12 md:px-8  gap-5  bg-gray-50">
          {CardList.map((about) => (
            <IndustrialCard
              key={about.id}
              id={about.id}
              title={about.title}
              url={about.url}
              alt={about.alt}
            />
          ))}
        </div>
        <div className="text-center  mx-auto w-11/12 xl:w-9/12 md:text-center pt-16">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center  px-6 py-3 mb-2 text-base bg-blue-700 text-white hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

function LoadImages(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = props.src;
  }, [props.src]); // Depend on props.src change

  return imageLoaded ? (
    <img
      className="rounded-t-lg w-16 m-auto opacity-90 mb-6 transition duration-300 hover:scale-110"
      src={props.src}
      alt={props.alt}
    />
  ) : null;
}

const IndustrialCard = (props) => {
  return (
    <div className=" mx-auto ">
      <div className=" py-6 shadow-lg  hover:shadow-xl border border-gray-100 rounded-lg w-48 h-48">
        <div>
          <LoadImages src={props.url} alt={props.alt} />
        </div>
        <div className="px-5">
          <h1 className="text-gray-900 text-center font-bold text-2xl tracking-tight mb-2">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Industries;
