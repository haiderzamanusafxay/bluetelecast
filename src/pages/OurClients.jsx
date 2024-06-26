import { Link } from "react-router-dom";

const OurTeam = [
  {
    id: 4,
    url: "/static/images/clients/HealthNetTPO.svg",
    name: "Health Net TPO",
  },
  {
    id: 2,
    url: "/static/images/clients/ChecchiConusltingInc.jpeg",
    name: "Checchi Conuslting Inc",
  },
  {
    id: 9,
    url: "/static/images/clients/YOUTHEDUCATIONAL.png",
    name: "Family Residences and Essential Enterprises",
  },
  {
    id: 8,
    url: "/static/images/clients/VeevoTech.png",
    name: "Veevo Tech",
  },
  {
    id: 5,
    url: "/static/images/clients/RMC.jpeg",
    name: "RMC",
  },
  {
    id: 1,
    url: "/static/images/clients/afghanyouthservices.png",
    name: "Youth Services Organization",
  },
  {
    id: 6,
    url: "/static/images/clients/ShirshahSuriHighSchool.jpeg",
    name: "Shir Shah Suri High School",
  },
  {
    id: 7,
    url: "/static/images/clients/TLO.jpg",
    name: "TLO",
  },
  {
    id: 10,
    url: "/static/images/clients/zaaztcgmb.jpg",
    name: "ZAAZTC Gmbh",
  },
  {
    id: 0,
    url: "/static/images/clients/AADA.png",
    name: "AADA",
  },
];

const OurClients = () => {
  return (
    <section className="mt-16"
    
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
          <span className="text-blue-700">Our Clients</span>
        </div>
      <div className="px-4  mx-auto max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12 md:px-6">
        <div className="text-center mx-auto md:text-center pt-24 mb-20">
          <h1 className="font-bold text-2xl leading-[1.1] md:text-3xl pb-4">
            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Our Clients
            </span>
          </h1>
          <p className="flex  mb-4 text-base text-justify text-gray-900">
            At Bluetelecast, we truly value our clients. Each partnership shows
            our commitment to providing great software solutions that fit your
            needs.
            <br />
            <br />
            We're thankful for the chance to work with a variety of clients in
            different industries. Whether you're a small business or a big
            company, we're here to offer reliable, creative, and effective
            software development services.
          </p>
          <p className="flex  mb-4 text-base text-justify text-gray-900">
            As you browse our client page, take a look at the organizations
            we've worked with. Together, we've tackled challenges and achieved
            goals, building strong relationships based on trust and success.
            <br />
            <br />
            Thanks for choosing Bluetelecast for your software needs. We're
            excited about the opportunity to work with you and make your
            vision a reality.
          </p>
        </div>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 pb-24">
          {OurTeam.map((team) => (
            <Person
              key={team.id}
              id={team.id}
              url={team.url}
              name={team.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;

const Person = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img className="h-16  shadow" src={props.url} alt="Person" />

        <div className="text-center">
          <p className="text-xl font-bold pt-4">
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
};
