import { Link } from "react-router-dom";

const OurTeam = [
  {
    id: 111,
    url: "/static/images/team/",
    name: "Aimal Khan Samsor",
    title: "Business Development Director",
  },
  {
    id: 0,
    url: "/static/images/team/",
    name: "jorry Dorelian",
    title: "Operations Manager",
  },
  {
    id: 1,
    url: "/static/images/team/",
    name: "Fiasal Khan",
    title: "Technical Manager",
  },
  {
    id: 2,
    url: "/static/images/team/",
    name: "Joe",
    title: "Board of Director",
  },
  {
    id: 4,
    url: "/static/images/team/",
    name: "Thomas",
    title: "Full Stack Developer",
  },
  {
    id: 5,
    url: "/static/images/team/",
    name: "Kevin",
    title: "Full Stack Developer",
  },
  {
    id: 6,
    url: "/static/images/team/",
    name: "Gabor",
    title: "UI/UX Designer",
  },
  {
    id: 7,
    url: "/static/images/team/",
    name: "Raiful Islam Badhon",
    title: "Logo Desinger",
  },
  {
    id: 8,
    url: "/static/images/team/",
    name: "Mohammad Yusuf",
    title: "Full Stack Developer",
  },
  {
    id: 9,
    url: "/static/images/team/",
    name: "Tina Steven",
    title: "Marketing Manager",
  },
  {
    id: 10,
    url: "/static/images/team/",
    name: "John Scott",
    title: "Sales Manager",
  },
  {
    id: 11,
    url: "/static/images/team/",
    name: "Susan Caplan",
    title: "HR Manager",
  },
  {
    id: 12,
    url: "/static/images/team/",
    name: "Qais Abdul Rashid",
    title: "Sales Lead ",
  },
  {
    id: 13,
    url: "/static/images/team/",
    name: "Haider Zaman",
    title: "Full Stack Developer",
  },
];

const Team = () => {
  return (
    <section
      className="mt-16"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(254, 255, 255, 0.8)), url("/static/images/bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
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
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center pt-24 mb-20">
          <h1 className="font-bold text-2xl leading-[1.1] sm:text-3xl md:text-4xl pb-4">
            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Our Team
            </span>
          </h1>
          <p className="flex  mb-4  text-md md:text-lg text-justify text-gray-900 nd-pr-16">
            At Bluetelecast, our team members are the ones who make everything
            happen. Each person has an important role in helping us reach our
            goal of making really good products for our customers while keeping
            up with new technology.
          </p>
          <p className="flex  mb-8 text-md md:text-lg text-justify text-gray-900    ">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

const Person = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          className="object-cover w-20 h-20 mr-4 rounded-full shadow"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt="Person"
        />
        <div className="text-center">
          <Link className="text-xl font-bold hover:text-blue-700">
            {props.name}
          </Link>
          <p className="text-md text-gray-800">{props.title}</p>
        </div>
      </div>
    </>
  );
};
