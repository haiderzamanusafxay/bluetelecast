import React from "react";

const Map = () => {
  return (
    <>
      <div className="relative w-full h-96">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.98146307862!2d-72.92570278773246!3d41.30926687119035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d9b58e690233%3A0x3b980736d90a4ded!2s227%20Church%20St%2C%20New%20Haven%2C%20CT%2006510%2C%20USA!5e0!3m2!1sen!2s!4v1713110035267!5m2!1sen!2s"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
