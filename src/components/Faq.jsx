import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Faq = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState([]);

  const toggleFaq = (index) => {
    setActiveIndex((prevActiveIndex) => {
      const indexExists = prevActiveIndex.includes(index);

      if (indexExists) {
        return prevActiveIndex.filter((activeIdx) => activeIdx !== index);
      }

      return [...prevActiveIndex, index];
    });
  };

  return (
    <section className="max-w-screen-xl w-11/12 md:w-11/12 lg:w-9/12  m-auto  px-3 py-24">
      <div className="mb-8 ">
        <h3 className="text-3xl font-bold text-center"> Frequently Asked Questions</h3>
      </div>
      <div className="divide-y pt-4">
        {items.map(({ title, content }, index) => (
          <div key={index} className="  p-4 hover:bg-slate-50">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between w-full items-center focus:outline-none"
            >
              <h4 className="flex-1 text-lg text-left font-semibold">
                {title}
              </h4>
              <div className="rounded-full h-8 w-8 items-center flex justify-center">
                <ChevronDown
                  className={`w-6  h-5 transition-transform ${
                    activeIndex.includes(index) ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </button>
            {activeIndex.includes(index) && (
              <div className="mt-3">
                <p className="text-base text-gray-900">{content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
