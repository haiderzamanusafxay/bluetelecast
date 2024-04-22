import { Link } from "react-router-dom";
import ServicesCard from "../components/ServicesCards";
import Faq from "../components/Faq";

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

  const Faqs = [
    {
      title: "What services does Bluetelecast offer?",
      content:
        "Bluetelecast offers a range of services including software development, mobile application development, website development, and logo design.",
    },
    {
      title: "How experienced is Bluetelecast's team?",
      content:
        "Our team at Bluetelecast consists of highly skilled professionals with years of experience in their respective fields. We ensure that our team members are experts in the latest technologies and methodologies.",
    },
    {
      title:
        "Can Bluetelecast customize solutions according to our specific needs?",
      content:
        "Yes, at Bluetelecast, we understand that every project is unique. We are committed to providing customized solutions tailored to your specific requirements.",
    },
    {
      title: "What industries has Bluetelecast worked with in the past?",
      content:
        "Bluetelecast has experience working with various industries including but not limited to healthcare, finance, e-commerce, education, and entertainment.",
    },
    {
      title:
        "How does Bluetelecast ensure the security of our data and intellectual property?",
      content:
        "Bluetelecast takes data security and confidentiality very seriously. We have strict protocols in place to safeguard your data and intellectual property throughout the development process.",
    },
    {
      title: "What is Bluetelecast's development process like?",
      content:
        "Our development process at Bluetelecast is collaborative and transparent. We involve our clients at every stage of the project to ensure that their requirements are met and expectations are exceeded.",
    },

    {
      title:
        "How long does it typically take Bluetelecast to complete a project?",
      content:
        "The duration of a project depends on its complexity and scope. Bluetelecast provides estimated timelines during the initial consultation phase and keeps our clients updated on the progress throughout the development process.",
    },

    {
      title: "What after-sales support does Bluetelecast offer?",
      content:
        "Bluetelecast offers comprehensive after-sales support including maintenance, updates, and troubleshooting to ensure that your solution continues to perform optimally.",
    },

    {
      title:
        "Can Bluetelecast provide references or examples of previous work?",
      content:
        "Yes, Bluetelecast can provide references and case studies of previous work upon request. You can also visit our portfolio section on our website to see examples of our work.",
    },

    {
      title: "How do we get started with our project with Bluetelecast?",
      content:
        "Simply reach out to Bluetelecast via phone, email, or through the contact form on our website. We'll schedule an initial consultation to discuss your project requirements and provide you with a detailed proposal.",
    },
  ];
  return (
    <>
      <section className=" mt-20">
        <div className="text-md w-9/12 m-auto  flex items-center">
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
          <h1 className="font-bold text-2xl leading-[1.1]  md:text-3xl pb-4">

            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Our Services
            </span>
          </h1>
          <p className="flex px-5 text-md text-justify  md:text-center m-auto  text-gray-900 md:text-base max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12   lg:px-24 pb-16">
            We're really good at making awesome mobile apps, websites, logos,
            and ads. We help businesses get better and bigger by creating cool
            stuff that people love and solving tricky problems.
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12   gap-5 pb-24 border-b border-gray-200">
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
      <Faq items={Faqs} />{" "}
    </>
  );
};

export default Services;
