import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;

    if (paragraph) {
      const preventSelection = (event) => {
        event.preventDefault();
      };

      paragraph.addEventListener("selectstart", preventSelection);
      paragraph.addEventListener("copy", preventSelection);

      return () => {
        paragraph.removeEventListener("selectstart", preventSelection);
        paragraph.removeEventListener("copy", preventSelection);
      };
    }
  }, []);
  return (
    <>
      <section
        id="about"
        className="overflow-hidden lg:pt-[120px]  lg:pb-[90px] bg-gray-50"
      >
        <div className="container max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12 md:px-8 mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="py-3 sm:py-4">
                <img
                  src="/static/images/bg.png"
                  alt=""
                  className="w-full rounded-2xl"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h1>
                  <span className="block w-full py-2 text-2xl  md:text-3xl  font-bold text-gray-900 bg-clip-text leading-12  lg:inline">
                    Empowering Your Online Success
                  </span>
                </h1>

                <p
                  className="flex text-gray-900 text-md nd-pr-16 md:text-base text-justify pt-4"
                  ref={paragraphRef}
                >
                  In 2010, a small group of people with big ideas started a
                  company called Bluetelecast, a US-based company. They wanted
                  to change the way things were done online, and now
                  Bluetelecast is a successful company that helps businesses
                  around the world. We're really good at making websites, custom
                  software, mobile apps, UI/UX designing, organizing data, and
                  giving advice about technology. Our success comes from always
                  trying to improve and finding the best solutions for our
                  clients. Bluetelecast is known for being creative and
                  excellent at what we do. We understand that each client is
                  different, and we use our skills and focus on clients to make
                  them really happy. Our team believes that every problem is a
                  chance to make something better, and we love turning ideas
                  into reality.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
