const Vacancies = () => {
  return (
    <section className="pt-24 pb-8">
      <div className="text-center w-full mx-auto md:w-7/12 md:text-center">
        <h1 className="font-bold text-2xl leading-[1.1] sm:text-3xl md:text-4xl mt-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            List of vacancies
          </span>
        </h1>
        <ul className="p-8 list-disc list-inside text-start bg-gray-40 border-y border-gray-100  m-auto rounded  mt-10 grid sm:grid-cols-2 md:grid-cols-3">
          <li className="mb-2 text-gray-700">Web Developer</li>
          <li className="mb-2 text-gray-700">Software engineer</li>
          <li className="mb-2 text-gray-700">Full Stack Developer</li>
          <li className="mb-2 text-gray-700">Project manager</li>
          <li className="mb-2 text-gray-700">Graphics Designer</li>
          <li className="mb-2 text-gray-700">UI/UX Designer</li>

          <li className="mb-2 text-gray-700">Marketing Coordinator</li>
          <li className="mb-2 text-gray-700">Operations Manager</li>
          <li className="mb-2 text-gray-700">Logo Designer </li>
          <li className="mb-2 text-gray-700">Animation Creator</li>
          <li className="mb-2 text-gray-700">Digital marketing Coordinator </li>
        </ul>
        <div className="container mx-auto mt-10">
          <div className="md:flex md:justify-center">
            <div className=" md:mr-4">
              <div className=" px-8 md:px-12">
                <p className="text-lg text-gray-900 md:text-xl ">
                  If you have the right skills and want to join our team, check
                  out our job openings or send your resume to &nbsp;
                  <a
                    className="text-blue-700 underline"
                    href="mailto:info@bluetelecast.com"
                  >
                    info@bluetelecast.com
                  </a>{" "}
                  or fill the below form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
