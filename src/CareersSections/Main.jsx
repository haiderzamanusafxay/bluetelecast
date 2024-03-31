import image from "../../assets/careers.jpg";
const Main = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Join Bluetelecast Software a global team
          </span>
        </h1>
        <p className="flex px-5 mb-8 text-lg justify-center text-gray-900 md:text-xl lg:px-24 mt-8 ">
          Let's work together to make fantastic products. At Bluetelecast, we
          help companies use the newest technology to organize their business
          information.
        </p>

        <hr className="mt-20 mb-20" />

        <div className="m-auto">
          <div className="m-auto w-10/12 md:w-6/12 mt-2">
            <img className="rounded-md" src={image} />
          </div>
          <div className="w-9/12 m-auto md:px-8">
            <p className="flex  mt-16 text-lg text-gray-900 md:text-xl text-center">
              At Bluetelecast, we have an amazing team skilled in ERP
              implementation, website development, graphic design, branding,
              logo design, web hosting, application development, and MIS
              development. We're looking for experienced and creative people who
              can create interactive systems for our clients. We believe great
              organizations are made up of great people, and we're driven by
              them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
