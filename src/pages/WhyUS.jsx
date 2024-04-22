import { Link } from "react-router-dom";
import WhyUsCard from "../sections/WhyUsCard";

const WhyUs = () => {
  const CardList = [
    {
      id: 0,
      url: "/static/images/track.png",
      alt: "values",
      title: "Proven Track Record of Excellence:",
      description:
        "With over a decade of experience in the industry, Bluetelecast has earned a reputation for delivering top-notch custom software solutions. Our portfolio showcases a diverse range of successful projects across various industries.",
    },
    {
      id: 1,
      url: "/static/images/solution.png",
      alt: "values",
      title: "Tailored Solutions for Every Business:",
      description:
        "Whether you're a big corporation, a medium-sized enterprise, or a startup, we have the expertise to meet your unique requirements. Our team takes the time to understand your business objectives and tailors solutions that align perfectly with your goals.",
    },
    {
      id: 2,
      url: "/static/images/agile.png",
      alt: "values",
      title: "Agile and Flexible Approach:",
      description:
        "We embrace agile methodologies to ensure flexibility and adaptability throughout the development process. Our iterative approach allows for quick adjustments based on feedback, resulting in faster time-to-market and superior outcomes.",
    },
    {
      id: 3,
      url: "/static/images/global-network.png",
      alt: "values",
      title: "Global Talent Network:",
      description:
        "With a team of over 110 experienced professionals spread across two global locations, Bluetelecast offers a diverse talent pool with expertise in various technologies and domains. Our collaborative approach ensures seamless communication and efficient project execution.",
    },
    {
      id: 4,
      url: "/static/images/execution.png",
      alt: "values",
      title: "Comprehensive Service Offering:",
      description:
        "From mobile app development and web app development to e-commerce solutions and enterprise software, we provide end-to-end software development services to address all your needs. Whether it's front-end or back-end development, design, cloud computing, or full-stack development, we have the skills and resources to deliver.",
    },
    {
      id: 5,
      url: "/static/images/cost.png",
      alt: "values",
      title: "Cost-Effective Solutions:",
      description:
        "Bluetelecast offers competitive pricing and flexible engagement models to fit your budget and timeline. By partnering with us, you gain access to a dedicated team of experts without the overhead costs associated with hiring in-house.",
    },
    {
      id: 6,
      url: "/static/images/badge.png",
      alt: "values",
      title: "Commitment to Quality and Customer Satisfaction:",
      description:
        "Quality is at the heart of everything we do at Bluetelecast. We adhere to industry best practices and rigorous quality standards to ensure that every project we deliver meets or exceeds expectations. Customer satisfaction is our ultimate goal, and we go above and beyond to ensure that our clients are delighted with the results.",
    },
  ];
  return (
    <>
      <section className="pb-8 bg-gray-50 mt-16" >
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
          <span className="text-blue-700">Why Us</span>
        </div>
        <div className="text-center mx-auto max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12 md:px-6 md:text-center pt-24">
          <h1 className="font-bold text-2xl leading-[1.1] md:text-3xl">
            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Why Choose Bluetelecast for Your Software Development Needs?
            </span>
          </h1>
          <p className="flex px-5 mb-8 text-justify text-gray-900 text-base md:mt-4 ">
            At Bluetelecast, we understand that choosing the right partner for
            your software development projects is crucial for the success of
            your business. Here's why Bluetelecast stands out as the ideal
            choice:
          </p>
        </div>
      </section>
      <section className="pb-24 bg-gray-50">
        <div className="container mx-auto grid lg:grid-cols-2 max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12 gap-5 md:px-6 bg-gray-50">
          {CardList.map((about) => (
            <WhyUsCard
              key={about.id}
              id={about.id}
              title={about.title}
              description={about.description}
              url={about.url}
              alt={about.alt}
            />
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="text-center  mx-auto max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12 md:px-6  ">
          <h1 className="font-bold text-2xl leading-[1.1] md:text-3xl pb-4">
            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Ready to Transform Your Ideas into Reality?{" "}
            </span>
          </h1>
          <p className="flex px-5 mb-8 text-justify text-gray-900 text-base">
            Whether you're looking to develop a mobile app, a web application,
            or an enterprise solution, Bluetelecast is your trusted partner for
            all your software development needs. Contact us today to schedule a
            consultation and take the first step towards achieving your business
            objectives.
          </p>
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

export default WhyUs;
