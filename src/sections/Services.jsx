import React from "react";
import ServicesCard from "../components/ServicesCards";


const ServicesList = [
  {
    id: 0,
    url: "../../assets/icons/settings.png",
    title: "SOFTWARE PRODUCT",
    description:
      "We offer a wide range of technical know-how and resources to meet any technical requirement. Moreover, we are dedicated to delivering excellent results and protecting intellectual property. Our team easily blends in and quickly shares knowledge to ensure smooth collaboration.",
    alt: "SOFTWARE PRODUCT",
  },
  {
    id: 1,
    url: "../../assets/icons/setting.png",
    title: "CUSTOM SOFTWARE",
    description:
      "We're a company that makes custom software, and we've been doing it for over 15 years. We create top-notch solutions for businesses that rely on high-quality software. Our dedication and the quality of our work are like having your own in-house team, but it costs less.",
    alt: "CUSTOM SOFTWARE",
  },
  {
    id: 2,
    url: "../../assets/icons/appdev.png",
    title: "MOBILE APPLICATION",
    description:
      "We provide services for developing applications on iOS, Android, and multiple platforms. Our goal is to make user-friendly mobile solutions that have won awards. We work with startups, small to medium-sized enterprises (SMEs), and large companies.",
    alt: "MOBILE APPLICATION",
  },


];

const Services = () => {
  return (
    <>
        <section className="pb-12 pt-24 ">
          <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl pb-16">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Our Services
              </span>
            </h1>
          </div>

          <div className="container mx-auto grid lg:grid-cols-3  md:w-9/12 gap-5 pb-24 ">
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
