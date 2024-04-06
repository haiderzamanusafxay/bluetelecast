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
    <section
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(254, 255, 255, 0.8)), url("/static/images/bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
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
        <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center pt-24 mb-20">
          <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl pb-8">
            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Our Clients
            </span>
          </h1>
          <p className="flex  mb-8 text-lg text-justify text-gray-900 md:text-xl   ">
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
          <p className="flex  mb-8 text-lg text-justify text-gray-900 md:text-xl   ">
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
