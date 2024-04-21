import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const OurTeam = [
  {
    id: 0,
    url: "/static/images/team/Jorry.jpg",
    name: "jorry Dorelian",
    title: "Operations Manager",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 12,
    url: "/static/images/team/Qais.png",
    name: "Qais Abdul Rashid",
    title: "Sales Lead ",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 2,
    url: "/static/images/team/JoeCannon.jpg",
    name: "Joe Cannon",
    title: "Board of Director",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 10,
    url: "/static/images/team/JohnScott.jpg",
    name: "John Scott",
    title: "Sales Manager",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 9,
    url: "/static/images/team/tina.jpeg",
    name: "Tina Steven",
    title: "Marketing Manager",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 111,
    url: "/static/images/team/AimalSamsour.jpg",
    name: "Aimal Khan Samsor",
    title: "Business Development Director",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 1,
    url: "/static/images/team/FiasalKhan.jpg",
    name: "Fiasal Khan",
    title: "Technical Manager",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 14,
    url: "/static/images/team/Javid.jpg",
    name: "Javid",
    title: "Technical Manager",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 8,
    url: "/static/images/team/yusuf.jpg",
    name: "Mohammad Yusuf",
    title: "Full Stack Developer",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 4,
    url: "/static/images/team/",
    name: "Thomas",
    title: "Full Stack Developer",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 5,
    url: "/static/images/team/",
    name: "Kevin",
    title: "Full Stack Developer",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 6,
    url: "/static/images/team/",
    name: "Gabor",
    title: "UI/UX Designer",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },
  {
    id: 7,
    url: "/static/images/team/Badhon.jpg",
    name: "Raiful Islam Badhon",
    title: "Logo Desinger",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },

  {
    id: 11,
    url: "/static/images/team/susan.jpeg",
    name: "Susan Caplan",
    title: "HR Manager",
    description:
      "As chief people and communications officer, Greg Giangrande leads all aspects of Ellucian’s global people organization, including employee experience, HR business partners, talent acquisition, total rewards, diversity, equity and inclusion, learning and development, and communications. Greg has deep experience as a transformative human resources and communications leader. He comes to Ellucian most recently from McKinsey & Company where he served as a senior advisor working with clients across sectors and geographies on enterprise transformation, employee experience, human resources, organizational health and culture, leadership development, diversity and inclusion, and communications strategies.",
  },

  {
    id: 13,
    url: "/static/images/team/Haider.jpg",
    name: "Haider Zaman",
    title: "Full Stack Developer",
    description:
      "Passionate and skilled Senior MERN Stack Engineer with over 1 year of hands-on experience in full-stack web development. Committed to delivering high-quality, scalable solutions that exceed client expectations. Proficient in leveraging the power of MongoDB, Express.js, React.js, and Node.js to create dynamic and user-friendly web applications. Skilled collaborator known for effectively working within cross-functional teams to achieve project goals.",
  },
];

const Team = () => {
  return (
    <section className="mt-16">
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
        <span className="text-blue-700">Our Team</span>
      </div>
      <div className=" mx-auto max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12 md:px-6">
        <div className="text-center mx-auto  md:text-center pt-24 mb-20">
          <h1 className="font-bold text-2xl leading-[1.1] md:text-3xl pb-4">
            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Our Team
            </span>
          </h1>
          <p className="flex mb-4 text-base text-justify text-gray-900 nd-pr-16">
            At Bluetelecast, our team members are the ones who make everything
            happen. Each person has an important role in helping us reach our
            goal of making really good products for our customers while keeping
            up with new technology.
          </p>
          <p className="flex  mb-8 text-base text-justify text-gray-900    ">
            We give our team members the freedom to do their jobs well and take
            care of our customers. Our values like being honest, fair, and clear
            help us lead the company in the right way. This helps us build
            strong, long-lasting relationships with our customers, based on
            trust and respect.
          </p>
        </div>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pb-24">
          {OurTeam.map((team) => (
            <Person
              key={team.id}
              id={team.id}
              url={team.url}
              title={team.title}
              name={team.name}
              description={team.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

function LoadImages(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = props.src;
  }, [props.src]); // Depend on props.src change

  return imageLoaded ? (
    <img
      className=" w-full h-52 rounded-sm shadow cursor-pointer"
      src={props.src}
      alt={props.alt}
    />
  ) : null;
}

const Person = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  const handleScroll = (e) => {
    e.stopPropagation(); // Prevent the scroll event from bubbling up
  };
  return (
    <>
      <div
        className="flex flex-col pb-6 shadow-lg  hover:shadow-xl  rounded-md items-center cursor-pointer"
        onClick={openModal}
      >
        <LoadImages src={props.url} alt={props.alt} />

        <div className="text-center">
          <p
            className="text-xl font-bold pt-6 hover:text-gray-800 "
            onClick={openModal}
          >
            {props.name}
          </p>
          <p className="text-base text-gray-800">{props.title}</p>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white p-8 pb-16 rounded-xl w-11/12  lg:w-3/5 max-h-full overflow-y-auto transform transition-all duration-300 relative">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={closeModal}
                className="text-5xl px-4 py-2 border-dotted border border-gray-700 font-bold"
              >
                &times;
              </button>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-20 pt-8">
              <div className=" order-2 lg:order-1">
                <h2 className="text-3xl font-bold">{props.name}</h2>
                <p className="text-xl text-gray-800">{props.title}</p>
                <p className="mt-4 text-justify">{props.description}</p>
              </div>
              <img
                src={props.url}
                alt={props.name}
                className="mt-4 w-60 object-cover shadow rounded-sm order-1 lg:order-2"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
