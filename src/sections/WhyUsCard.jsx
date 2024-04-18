import React, { useState, useEffect } from "react";

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

const WhyUsCard = (props) => {
  return (
    <div className=" mx-auto ">
      <div className=" py-6 shadow-lg  hover:shadow-xl border border-gray-100 rounded-lg">
        <div>
          <LoadImages src={props.url} alt={props.alt} />
        </div>
        <div className="px-5">
          <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {props.title}
          </h1>
          <p className="font-normal text-gray-900 text-base text-justify ">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;
