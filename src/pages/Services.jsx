import { Link } from "react-router-dom";
import ServicesCard from "../components/ServicesCards";

const Services = () => {
  const ServicesList = [
    {
      id: 0,
      url: "/static/images/settings.png",
      title: "SOFTWARE PRODUCT",
      description:
        "We offer a wide range of technical know-how and resources to meet any technical requirement. Moreover, we are dedicated to delivering excellent results and protecting intellectual property. Our team easily blends in and quickly shares knowledge to ensure smooth collaboration.",
      alt: "SOFTWARE PRODUCT",
    },
    {
      id: 1,
      url: "/static/images/setting.png",
      title: "CUSTOM SOFTWARE",
      description:
        "We're a company that makes custom software, and we've been doing it for over 15 years. We create top-notch solutions for businesses that rely on high-quality software. Our dedication and the quality of our work are like having your own in-house team, but it costs less.",
      alt: "CUSTOM SOFTWARE",
    },
    {
      id: 2,
      url: "/static/images/appdev.png",
      title: "MOBILE APPLICATION",
      description:
        "We provide services for developing applications on iOS, Android, and multiple platforms. Our goal is to make user-friendly mobile solutions that have won awards. We work with startups, small to medium-sized enterprises (SMEs), and large companies.",
      alt: "MOBILE APPLICATION",
    },
    {
      id: 3,
      url: "/static/images/website.png",
      title: "WEB DESIGN AND DEVELOPMENT",
      description:
        "Discover the art and science of online presence with Bluetelecast's web design and development services. We craft unique websites that seamlessly blend style and function. Let our portfolio speak for itself as we showcase our ability to elevate businesses through compelling digital experiences.",
      alt: "WEB DESIGN AND DEVELOPMENT",
    },
    {
      id: 4,
      url: "/static/images/app-design.png",
      title: "SOFTWARE DESIGN",
      description:
        "Empower your business with our custom software solutions. We specialize in optimizing your operations with intuitive and efficient software design. Explore how we've enhanced workflows for clients in our case studies, demonstrating the tangible benefits of our tailored software solutions.",
      alt: "SOFTWARE DESIGN",
    },
    {
      id: 5,
      url: "/static/images/design.png",
      title: "GRAPHIC DESIGN",
      description:
        "Explore the world of graphic design with Bluetelecast. Our designs don't just look good; they're made to connect with your audience. Trust us to give your brand a lively and engaging look through our graphic design skills.",
      alt: "GRAPHIC DESIGN",
    },
    {
      id: 6,
      url: "/static/images/app-maintenance.png",
      title: "APPLICATION MAINTENANCE AND SUPPORT",
      description:
        "Concentrate on important business tasks, and let Bluetelecast handle and support your apps. We offer different levels of support to keep your software running smoothly, update it, introduce new features, and make sure it can handle growth.",
      alt: "APPLICATION MAINTENANCE AND SUPPORT",
    },
  ];
  return (
    <>
      <section className="pb-12 bg-gray-50">
        <div className="text-md w-9/12 m-auto pt-4 flex items-center ">
          <span>
            <Link to="/" className="hover:text-blue-700" title="Home">
              Home{" "}
            </Link>
          </span>
          <span className="px-2">
            <svg
              className="w-2 h-2 text-gray-800 display-inline"
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
          <span className="text-blue-700">Our Services</span>
        </div>

        <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center pt-24">
          <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl pb-8">
            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Our Services
            </span>
          </h1>
          <p className="flex px-5 mb-8 text-lg text-center text-gray-900 md:text-xl lg:px-24 pb-8">
            We're really good at making awesome mobile apps, websites, logos,
            and ads. We help businesses get better and bigger by creating cool
            stuff that people love and solving tricky problems.
          </p>
        </div>

        <div className="container mx-auto grid lg:grid-cols-3  md:w-9/12 gap-5 pb-24 bg-gray-50">
          {ServicesList.map((service) => (
            <ServicesCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              url={service.url}
              alt={service.alt}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
