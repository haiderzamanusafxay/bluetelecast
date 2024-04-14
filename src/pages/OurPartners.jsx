import { Link } from "react-router-dom";

const PartnerList = [
  {
    id: 0,
    // url: "/static/images/partners/Namecheap.png",
    url: "/static/images/technologiesIcons/flask-flask.webp",
    name: "Company Name",
    address: "www.name.com",
    partnerLink: "https://www.name.com/",
  },
  {
    id: 1,
    // url: "/static/images/partners/Namecheap.png",
    url: "/static/images/technologiesIcons/flask-flask.webp",
    name: "Company Name",
    address: "www.name.com",
    partnerLink: "https://www.name.com/",
  },

  {
    id: 2,
    // url: "/static/images/partners/Namecheap.png",
    url: "/static/images/technologiesIcons/flask-flask.webp",
    name: "Company Name",
    address: "www.name.com",
    partnerLink: "https://www.name.com/",
  },
  {
    id: 3,
    // url: "/static/images/partners/Namecheap.png",
    url: "/static/images/technologiesIcons/flask-flask.webp",
    name: "Company Name",
    address: "www.name.com",
    partnerLink: "https://www.name.com/",
  },
  {
    id: 4,
    // url: "/static/images/partners/Namecheap.png",
    url: "/static/images/technologiesIcons/flask-flask.webp",
    name: "Company Name",
    address: "www.name.com",
    partnerLink: "https://www.name.com/",
  },
];

const OurPartners = () => {
  return (
    <>
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
          <span className="text-blue-700">Our Partners</span>
        </div>
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center pt-24 mb-20">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl pb-8">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Our Partners
              </span>
            </h1>
            <p className="flex  mb-8 text-lg text-justify text-gray-900 md:text-xl   ">
              At Bluetelecast, we believe in the power of collaboration. Our
              partnerships are key to delivering exceptional software solutions
              and driving success for our clients.
              <br />
              <br />
              As a leading software development firm, we are proud to
              collaborate with esteemed partners across various industries.
              Through strategic alliances and shared expertise, we enhance our
              capabilities and deliver innovative solutions that meet the
              evolving needs of our clients.
              <br />
              <br />
              Our network of partners includes industry leaders, technology
              innovators, and forward-thinking organizations. Together, we
              leverage our collective strengths to deliver superior results and
              achieve mutual success.
            </p>
            <p className="flex  mb-8 text-lg text-justify text-gray-900 md:text-xl   ">
              Explore our Partners Page to learn more about our esteemed
              collaborators and the impactful projects we have undertaken
              together. From joint ventures to strategic alliances, each
              partnership reflects our commitment to excellence, integrity, and
              client satisfaction.
              <br />
              <br />
              Thank you to all our partners for your continued trust and
              collaboration. Together, we are shaping the future of software
              development and driving positive change in the digital landscape.
            </p>
          </div>
          <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 ">
            {PartnerList.map((partner) => (
              <Partners
                key={partner.id}
                id={partner.id}
                url={partner.url}
                name={partner.name}
                address={partner.address}
                partnerLink={partner.partnerLink}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="text-center mx-auto w-11/12 md:w-6/12 md:text-center m-auto pt-24 mb-20">
        <p className="flex  mb-8 text-lg text-justify text-gray-900 md:text-xl   ">
          For inquiries about partnership opportunities or to explore
          collaboration possibilities, please contact us.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center  px-6 py-3 mb-2 text-lg bg-blue-700 text-white hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0 font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default OurPartners;

const Partners = (props) => {
  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-lg p-8 min-h-56 shadow-lg hover:shadow-xl transition-shadow">
        <img
          className="w-full  shadow hover:filter hover:grayscale transition-all"
          src={props.url}
          alt="Partner"
        />

        <div className="text-center">
          <p className="text-xl text-gray-900 font-bold pt-8 pb-4 ">
            {props.name}
          </p>
          <a
            href={props.partnerLink}
            target="_blank"
            className="text-xl font-bold  text-gray-700 hover:text-blue-700"
          >
            {props.address}
          </a>
        </div>
      </div>
    </>
  );
};
