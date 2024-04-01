import { Link } from "react-router-dom";

const OurCampany = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            About Our Company
          </span>
        </h1>
        <p className="flex px-5 mb-8 text-lg justify-center text-gray-600 md:text-xl lg:px-24 mt-8 ">
          We started our journey in 2010 with a small group of people who had
          big dreams. Our main goal was simple: change how things work online.
          And guess what? Now, we're a successful company based in the US,
          helping businesses all over the world.
        </p>
        <Link
          to="servises"
          className="inline-flex items-center justify-center  px-6 py-3 mb-2 text-lg bg-blue-700 text-white hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0 font-semibold"
        >
          Explore our services
        </Link>
        <hr className="mt-20 mb-10" />
        <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl pt-40 mb-8 ">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            What Do We Do?
          </span>
        </h1>
        <div className="md:flex justify-center gap-5  w-11/12 m-auto">
          <div className="md:w-1/2 mt-2">
            <img
              className="rounded-l-2xl"
              src="../../assets/aboutcompany.jpg"
            />
          </div>
          <div className="md:w-1/2 text-left md:px-8">
            <p className="flex mb-8 text-lg justify-center text-gray-600 md:text-xl ">
              Well, we're experts in creating websites, custom software, and
              mobile apps. Plus, we're always ready to give top-notch advice
              about technology. How did we get so good? By always trying to
              improve and finding the best solutions for our clients. People
              know us for being creative and fantastic at what we do. <br />
              We get it – every client is different. So, we use our skills and
              focus on making each client really happy. Our team believes that
              every problem is a chance to make something better. And you know
              what? We absolutely love turning ideas into reality.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center  px-6 py-3 mb-2 text-lg bg-blue-700 hover:bg-blue-800 text-gray-100 rounded-2xl sm:w-auto sm:mb-0 font-semibold"
            >
              Get In Toch!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCampany;
