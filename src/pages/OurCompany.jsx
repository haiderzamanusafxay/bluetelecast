import AboutCard from "../AboutSections/AboutCards";
import Background from "../AboutSections/Background";
import CampanyMain from "../AboutSections/CampanyMain";
import OurStory from "../AboutSections/OurStory";

const About = () => {
  const AboutCardList = [
    {
      id: 0,
      url: "/static/images/mission.png",
      title: "Mission",
      description:
        "At Bluetelecast, our mission is to help businesses and individuals by providing innovative and reliable technology solutions. We focus on web development, software development, Graphics designing, and IT consulting services to help our clients reach their goals. Our aim is to do excellent work and make our clients happy.",
      alt: "mission",
    },
    {
      id: 1,
      url: "/static/images/vision.png",
      title: "Vision",
      description:
        "At Bluetelecast, we imagine a future where technology makes everything easier for our clients. We want to lead the way in software and web development and IT consulting. By always trying new things and working together, we want to be the best solution for our clients in the ever-changing world of technology.",
      alt: "vision",
    },
    {
      id: 2,
      url: "/static/images/values.png",
      title: "Values",
      description:
      "At Bluetelecast, we imagine a future where technology makes everything easier for our clients. We want to lead the way in software and web development and IT consulting. By always trying new things and working together, we want to be the best solution for our clients in the ever-changing world of technology.",
      alt: "values",
    },
  ];
  return (
    <>
      <CampanyMain />
      <Background />
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto grid lg:grid-cols-3 max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12 md:px-8 gap-5  bg-gray-50">
          {AboutCardList.map((about) => (
            <AboutCard
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
      <OurStory/>
    </>
  );
};

export default About;
