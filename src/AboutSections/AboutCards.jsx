import React, { useState, useEffect } from 'react';

function LoadImages(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image(); // lowercase 'img' instead of 'Img'
    img.onload = () => setImageLoaded(true);
    img.src = props.src;
  }, [props.src]); // Depend on props.src change


  return imageLoaded ? <img className="rounded-t-lg w-16 m-auto opacity-90 mb-8 transition duration-300 hover:scale-105"
    src={props.src}
    alt={props.alt} /> : null;
}

const AboutCard = (props) => {
  return (
    <div className="max-w-2xl mx-auto text-center ">
      <div className="max-w-sm py-6 hover:shadow-lg border-b-4 border-gray-900">
        <div>
        <LoadImages
              src={props.url}
              alt={props.alt}
            />
        </div>
        <div className="px-5">
          <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {props.title}
          </h1>
          <p className="font-normal text-base text-gray-900 text-justify ">
            {props.description}
          </p>

        </div>
      </div>
    </div>
  );
};

export default AboutCard;
