const Vacancies = () => {
  return (
    <section className="py-24">
      <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center">
       
        <h1 className="font-bold text-2xl leading-[1.1] sm:text-3xl md:text-4xl mt-4">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            List of vacancies
          </span>
        </h1>
        <ul class="p-8 list-disc list-inside text-start bg-gray-40 border-t border-gray-100 w-11/12 m-auto rounded shadow-sm mt-10 grid sm:grid-cols-2 md:grid-cols-3">
         
            <li class="mb-2 text-gray-700">Web Developer</li>
            <li class="mb-2 text-gray-700">Software engineer</li>
            <li class="mb-2 text-gray-700">Full Stack Developer</li>
            <li class="mb-2 text-gray-700">Project manager</li>
            <li class="mb-2 text-gray-700">Graphics Designer</li>
            <li class="mb-2 text-gray-700">UI/UX Designer</li>
         
            <li class="mb-2 text-gray-700">Marketing Coordinator</li>
            <li class="mb-2 text-gray-700">Operations Manager</li>
            <li class="mb-2 text-gray-700">Logo Designer </li>
            <li class="mb-2 text-gray-700">Animation Creator</li>
            <li class="mb-2 text-gray-700">Digital marketing Coordinator </li>
          
        </ul>
        <div className="container mx-auto mt-10">
          <div className="md:flex md:justify-center">
            <div className=" md:mr-4">
              <div className=" px-8 md:px-12">
                <p className="text-lg text-gray-900 md:text-xl ">
                  If you have the right skills and want to join our team, check
                  out our job openings or send your resume to:
                  <a
                    className="text-blue-700 underline"
                    href="mailto:info@bluetelecast.com"
                  >
                    info@bluetelecast.com.
                  </a>
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
