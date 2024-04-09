import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function LoadImages(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image(); // lowercase 'img' instead of 'Img'
    img.onload = () => setImageLoaded(true);
    img.src = props.src;
  }, [props.src]); // Depend on props.src change


  return imageLoaded ? <img className="rounded-t-lg w-16 m-auto opacity-90 border-b-2 border-b-gray-900 pb-8 mb-8 transition duration-300 hover:scale-110"
    src={props.src}
    alt={props.alt} /> : null;
}


const ServicesCard = (props) => {

  return (
    <div className="max-w-2xl mx-auto text-center ">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm py-12 min-h-52 hover:shadow-lg">
          <div>
            <LoadImages
              src={props.url}
              alt={props.alt}
            />


          </div>
          <div className="px-5">
            <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-gray-900 ">
              {props.title}
            </h1>
            <p className="flex text-gray-900 text-lg text-justify mb-5 ">
              {props.description}
            </p>

            <Link
              to="/content-not-found"
              className="font-medium text-blue-600 dark:text-blue-700 hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
    </div>

  );
};

export default ServicesCard;
