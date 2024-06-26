import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const OurTeam = [
  {
    id: 0,
    url: "/static/images/team/Jorry.jpg",
    name: "Jorry Dorelian",
    title: "Operations Manager",
    description:
      "Meet Jorry Dorelian, a driven individual who graduated from the College of Westchester and has since amassed an impressive track record of achievements over the past 11 years. Currently serving as the Operations Manager at Bluetelecast, Jorry brings a wealth of experience and expertise to the table. Known for his meticulous attention to detail and proactive approach to problem-solving, he has consistently delivered outstanding results throughout his career. Jorry's dedication to excellence and his ability to effectively streamline operations make him an invaluable asset to the Bluetelecast team. With his leadership, the company continues to thrive and excel in its endeavors.",
  },
  {
    id: 1,
    url: "/static/images/team/Qais.png",
    name: "Qais Abdul Rashid",
    title: "Sales Lead ",
    description:
      "Meet Qais Abdul Rasheed: an esteemed sales lead renowned for consistently surpassing targets and cultivating unwavering client confidence. With a decade-long track record in business development and spearheading revenue expansion, Qais injects our team with strategic foresight and charismatic leadership. His fervent drive for innovation and unwavering commitment to client contentment render him an indispensable force in navigating the ever-evolving terrain of modern business.",
  },
  {
    id: 2,
    url: "/static/images/team/JoeCannon.jpg",
    name: "Joe Cannon",
    title: "Product Manager",
    description:
"Meet Joe Cannon: Joe Cannon is an accomplished professional with over 15 years of experience in the field of product management. He graduated from the University of Southern Connecticut, where he specialized in business and honed his skills in areas such as product strategy, market research, and product development. Joe’s expertise lies in creating innovative products that meet customer needs and drive business growth. His strategic thinking, leadership, and dedication have made him an invaluable asset to every organization he has worked with. Currently, Joe serves as the Vice President of Business Development at Hyperice, where he continues to excel in his role, contributing to the company’s success through impactful product strategies and partnerships."  },
  {
    id: 3,
    url: "/static/images/team/JohnScott.jpg",
    name: "John Scott",
    title: "Project Manager",
    description:
"John Scott is an accomplished Project Manager with a wealth of experience in leading software development projects. He graduated from the University of California, where he honed his skills in project management, team collaboration, and stakeholder communication. John’s journey likely began at the university, where he gained a solid foundation in project management methodologies and industry-related knowledge. Throughout his career, John has worked with various organizations, including digital publishing, enterprise software, and utilities companies. His expertise extends beyond technical aspects; he excels in fostering collaboration, resolving conflicts, and ensuring successful project outcomes. As a certified Project Management Professional (PMP) and Scrum Master (CSM), John brings a wealth of knowledge to every project he leads. John’s ability to manage virtual teams effectively is especially valuable in today’s remote work environment. He understands the importance of online collaboration tools and strategies, ensuring seamless communication across distributed teams. His dedication to client satisfaction and project success has made him an invaluable asset to the organizations he has served."  },
  {
    id: 4,
    url: "/static/images/team/tina.jpeg",
    name: "Tina Steven",
    title: "Marketing Manager",
    description:
"Meet Tina Steven: Tina Steven is an accomplished Marketing Manager with 12 years of experience in the field of digital marketing. She graduated from the University of New Haven, where she specialized in marketing and honed her skills in areas such as social media, database marketing, Google AdWords, and data mining. Tina’s expertise lies in creating effective marketing campaigns that leverage cutting-edge technologies to drive business growth. Her strategic thinking, creativity, and dedication have made her an invaluable asset to every organization she has worked with. Currently, Tina serves as the Marketing Manager at Bluetelecast, where she continues to excel in her role, contributing to the company’s success through innovative marketing strategies and impactful campaigns."  },
  {
    id: 5,
    url: "/static/images/team/AimalSamsour.jpg",
    name: "Aimal Samsor",
    title: "Business Development Manager",
    description:
      "Meet Aimal Samsour, a seasoned business development professional who graduated from the University of Khurasan with a degree in Business Administration. With a wealth of experience working for numerous international companies, Aimal has established himself as a driving force in the field of business development. Currently serving as a Business Development Manager at Bluetelecast, he continues to leverage his expertise to drive growth and foster strategic partnerships. Aimal's track record of success and dedication to his craft make him an invaluable asset in the world of business development.",
  },
  {
    id: 6,
    url: "/static/images/team/FiasalKhan.jpg",
    name: "Fiasal Khan",
    title: "Technical Manager",
    description:
      "Meet Faisal, a expert technical manager with a rich and diverse background in project management across various industries. With a journey that began in 2015, Faisal has navigated through numerous projects, each presenting unique challenges and opportunities for growth. His expertise in web development, honed through years of hands-on experience with technologies like Laravel and React (Next.js), has made him a sought-after leader in the field. Having successfully led projects in Kabul and contributed to startups in Berlin, Faisal now brings his wealth of knowledge and leadership skills to Bluetelecast as a technical manager. With a proven track record of delivering innovative solutions and driving project success, Faisal is poised to make a significant impact on Bluetelecast's technical endeavors. His relentless commitment to excellence and ability to navigate complex technical landscapes make him an invaluable asset to the team.",
  },
  {
    id: 7,
    url: "/static/images/team/Javid.jpg",
    name: "Javid",
    title: "Technical Manager",
    description:
      "Meet Javid, a experienced technical manager with over a decade of experience in full-stack development and project management. Graduating with a BCS from Peshawar University, Javid has led more than 120 successful projects, showcasing his prowess in navigating complex technical landscapes. Proficient in a variety of technologies, from front-end frameworks like React and Angular to back-end solutions like Node.js and Django, Javid brings a diverse skill set to the table. Now, as a key member of the Bluetelecast team, he continues to drive innovation and excellence, inspiring his team to achieve new heights of success.",
  },
  {
    id: 8,
    url: "/static/images/team/yusuf.jpg",
    name: "Mohammad Yusuf",
    title: "Full Stack Developer",
    description:
      "Meet Mohammad Yousaf, an adept Senior MERN Stack Engineer with extensive experience in full-stack web development. With a keen eye for innovation and a steadfast dedication to client satisfaction, Mohammad consistently exceeds expectations. Proficient in MongoDB, Express.js, React.js, Larval, and Node.js, he crafts dynamic and user-friendly web applications with ease. Mohammad's collaborative nature and knack for seamlessly integrating into teams ensure project success, making him a standout in the field of web development.",
  },
  {
    id: 9,
    url: "/static/images/team/ThomasAlbert.jpg",
    name: "Thomas Albert",
    title: "Full Stack Developer",
    description:
      "Meet Thomas Albert, a University of Bridgeport BCS graduate who has spearheaded full-stack development projects for major players like Google, Indeed, and Charter Communication. With a knack for innovation and a commitment to client satisfaction, Thomas consistently delivers exceptional results. His expertise, collaborative nature, and seamless integration into teams have earned him a stellar reputation in the industry.",
  },
  {
    id: 10,
    url: "/static/images/team/KevinFord.jpg",
    name: "Kevin Ford",
    title: "Full Stack Developer",
    description:
      "Meet with Kevin Ford, a seasoned Senior MERN Stack Engineer who graduated from New Haven University. With a track record of delivering exceptional projects, Kevin's portfolio speaks volumes about his expertise and dedication. His commitment to client satisfaction is unwavering, and his innovative approach to web development sets him apart. Proficient in MongoDB, Express.js, React.js, and Node.js, Kevin effortlessly creates dynamic and intuitive web applications. Known for his collaborative spirit and ability to seamlessly blend into teams, Kevin consistently ensures project success, solidifying his reputation as a standout in the web development industry.",
  },
  {
    id: 11,
    url: "/static/images/team/DanielWilliam.jpg",
    name: "Daniel Willam",
    title: "UI/UX Designer",
    description:
      "Meet Daniel William, a seasoned professional programmer with a Bachelor's degree in Computer Science from the prestigious University of Yale. With nine years of experience under his belt, Daniel has honed his skills and expertise to deliver outstanding results in the field of programming. His impressive track record of successful projects attests to his commitment and proficiency. Daniel's dedication to client satisfaction is unmatched, and his innovative approach to programming distinguishes him from his peers. Armed with extensive knowledge of various programming languages and technologies, Daniel consistently produces high-quality work. His collaborative nature and ability to seamlessly integrate into teams ensure project success, earning him a well-deserved reputation as a standout in the industry.",
  },
  {
    id: 12,
    url: "/static/images/team/Badhon.jpg",
    name: "Raiful Islam Badhon",
    title: "Graphic Designer",
    description:
      "Meet Raiful Islam Badhon, a graphic designer renowned for his mastery of visual storytelling. With a repertoire of design tools that includes Adobe Photoshop, Illustrator, and InDesign, as well as CorelDRAW and Affinity Designer, Raiful brings a unique blend of creativity and technical skill to his craft. Over the years, he has curated a portfolio of captivating designs, from intricate logos to compelling marketing collateral. Now contributing his expertise to Bluetelecast as a graphics designer, Raiful continues to elevate brand identities and communication strategies with his innovative approach and impeccable execution.",
  },

  {
    id: 13,
    url: "/static/images/team/susan.jpeg",
    name: "Susan Caplan",
    title: "HR Manager",
    description:
      "Meet Susan Caplan, a qualified HR Manager at Bluetelecast, boasting an impressive 24-year career in human resources across various organizations. A graduate of the prestigious University of MIT, MA, Susan brings a wealth of knowledge and expertise to her role. With her extensive experience and unwavering dedication, she plays a pivotal role in fostering a positive and productive work environment at Bluetelecast. Susan’s exceptional leadership skills and commitment to employee well-being make her an invaluable asset to the team.",
  },

  {
    id: 14,
    url: "/static/images/team/Haider.jpg",
    name: "Haider Zaman",
    title: "Full Stack Developer",
    description:
      "Meet Haider Zaman: a Senior MERN Stack Engineer with over a year of hands-on experience in full-stack web development. His passion for innovation and commitment to excellence consistently exceed client expectations. Proficient in MongoDB, Express.js, React.js, and Node.js, he crafts dynamic and user-centric web applications. Haider's collaborative nature and mastery of his craft ensure project success, leaving an indelible mark on the world of web development.",
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
        className="flex flex-col pb-6 shadow-lg  hover:shadow-xl  rounded-md items-center cursor-pointer px-4 pt-4"
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
