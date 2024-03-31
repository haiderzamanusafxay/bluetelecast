import React from "react";

function ContentNotFound() {
  return (
    <section className="pb-12 py-48 bg-gray-50 ">
      <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl pb-8">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Content not found
          </span>
        </h1>
        <p className="flex px-5 mb-8 text-lg justify-center text-gray-600 md:text-xl lg:px-24  ">
          The content you are looking for could not be found.
        </p>
      </div>
    </section>
  );
}

export default ContentNotFound;
