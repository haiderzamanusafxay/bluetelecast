import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section
      className="pb-24 bg-gray-50 mt-16"
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
        <span className="text-blue-700">Privacy Policy</span>
      </div>
      <div className=" mx-auto w-11/12 md:w-8/12  pt-24" style={{ userSelect: "none" }}>
        <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Privacy Policy
          </span>
        </h1>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 md:mt-8 md:w-8/12">
          This privacy statement elucidates the collection and utilization of
          personal data by Bluetelecast. Last updated on 03/02/2023.
        </p>
        <br />
        <br />
        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Identity and Purpose:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          Bluetelecast, a US-based software development and IT consulting
          services company with a global team of over 120 software developers
          and programmers, is committed to providing you with an exceptional
          experience while safeguarding your privacy. This policy outlines our
          practices regarding the handling of your personal data.
        </p>

        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Data Collection:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          Bluetelecast collects data to enhance our services and provide
          relevant information. This includes information provided through forms
          such as 'Contact Us,' 'Office 365 Migration Calculator,' 'QLEAN
          Download,' and 'Ask Author.' We also utilize technologies like cookies
          and may receive error reports or usage data from software on your
          device. We may acquire data from third parties as well.
        </p>

        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Collected Data:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          The data collected may include name, contact information, demographic
          details, and website usage data. Please refrain from sharing sensitive
          information such as payment details through our forms.
        </p>

        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Purpose of Data Collection:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          We collect data for communication, advertising, website analysis,
          technical troubleshooting, and improving user experience. We employ
          technological and procedural safeguards to secure the data we collect.
        </p>

        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Data Sharing:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          We may share information with our Development Center to fulfill your
          requests, ensuring adherence to our privacy and security standards.
          Personal data may also be disclosed in response to legal processes or
          to protect our customers and rights.
        </p>

        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            User Rights:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          You have the right to view, amend, or delete your personal
          information, as well as control your communication preferences and
          consent.
        </p>

        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Cookies and Similar Technologies:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          We use cookies and similar technologies for security, storing
          information, and gathering website statistics. You can manage cookies
          through your browser settings.
        </p>

        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Security Measures:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          We employ various security technologies and procedures to protect
          personal data from unauthorized access, disclosure, or use.
        </p>

        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Data Retention:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          Personal data is retained as long as necessary for the provision of
          services, feedback, or legal obligations, in accordance with
          applicable laws and regulations.
        </p>

        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Policy Changes:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          This privacy statement will be updated as needed, with changes
          reflected by the 03/02/2023 date.
        </p>

        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Policy Changes:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          This privacy statement will be updated as needed, with changes
          reflected by the 03/02/2023 date.
        </p>
        <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl mt-8 mb-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Contact Us:{" "}
          </span>
        </h2>
        <p className="flex text-md text-justify text-gray-600 text-lg nd-pr-16 ">
          This privacy statement will be updated as needed, with changes
          reflected by the 03/02/2023 date.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
