import { Link } from "react-router-dom";

const CampanyMain = () => {
  return (
    <section className=" bg-gray-50 mt-16"  >
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
        <span className="text-blue-700">Our Company</span>
      </div>
      <div className=" mx-auto max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12 md:px-8 pt-24 pb-24">
        <h1 className="font-bold text-2xl leading-[1.1] md:text-3xl">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            About Company
          </span>
        </h1>
        <p className="flex mb-8 text-justify text-gray-600 text-base nd-pr-16 md:mt-8 ">
          We started our journey in 2010 with a small group of people who had
          big dreams. Our main goal was simple: change how things work online.
          And guess what? Now, we're a successful company based in the US,
          helping businesses all over the world.
          <br />
          <br />
          What do we do? Well, we're experts in creating websites, custom
          software, and mobile apps. Plus, we're always ready to give top-notch
          advice about technology. How did we get so good? By always trying to
          improve and finding the best solutions for our clients. People know us
          for being creative and fantastic at what we do.
          <br />
          <br />
          We get it – every client is different. So, we use our skills and focus
          on making each client really happy. Our team believes that every
          problem is a chance to make something better. And you know what? We
          absolutely love turning ideas into reality.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center justify-center text-base  px-6 py-3 text-md bg-blue-700 text-white hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0 font-semibold"
        >
          Explore our services
        </Link>
      
      </div>
    </section>
  );
};

export default CampanyMain;
