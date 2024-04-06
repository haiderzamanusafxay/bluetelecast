import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const TestimonalsData = [
  {
    id: 1,
    description:
      "Bluetelecast is a fantastic contractor! Their team delivers top-notch work with a high level of professionalism. Whenever I had questions, they were always there, and they consistently met the deadlines they set. Their English skills are excellent, and collaborating with them is effortless. They're not just skilled but also genuinely nice people. I've already hired Bluetelecast again for another project and look forward to working with them more in the future.",
    name: "David Toles",
    title: "Executive Vice President",
  },
  {
    id: 2,
    description:
      "Even though I don't believe in make-believe creatures like unicorns, I want to express how impressed I am with Bluetelecast and their team. During our project meeting today, I commended Faheem, who leads the tech team, stating that in my more than 25 years of working with technology, I've never encountered better customer service. Bluetelecast and their team are not only proficient in technical matters but also exceptionally helpful and deliver outstanding results overall.",
    name: "Christopher Skomro",
    title: "IS- Technology & Planning Lead",
  },
  {
    id: 3,
    description:
      "I've been collaborating with Bluetelecast and their team for nearly three years on a significant project. Working with them has been a great experience—they're professional and accommodating. Despite numerous changes in project requirements, Bluetelecast and their team have consistently adapted. Bluetelecast provides clear cost breakdowns, and I highly recommend them to anyone seeking a reliable development team.",
    name: "Derek Perrelli",
    title: "VP IT managing Director",
  },
  {
    id: 4,
    description:
      "Working with Bluetelecast and their team has been absolutely fantastic. We've found them to be highly professional and knowledgeable in the web/app field. They go the extra mile to ensure that we meet all deadlines for Salaam Telecommunication and receive products according to our specifications. If you're in search of a reliable development team for your projects, I strongly recommend considering Bluetelecast and their team.",
    name: "Stella Leonard",
    title: "CEO AIB Bank",
  },
  {
    id: 5,
    description:
      "It's been a pleasure working with Bluetelecast and their team. As a startup from the US, we appreciated their assistance in suggesting the appropriate technology to kickstart and expand our vision. They understood our overarching goals, which facilitated the planning and development of our innovative app.",
    name: "Jace Mxkenzie ",
    title: "Lead Manager - Chief Capital (O & C ) LLC",
  },
  {
    id: 6,
    description:
      "Once again, Bluetelecast and their team have done an excellent job completing my apps and website. Although there are a few more updates I require, I'm closing the job and paying Bluetelecast in full because I trust they will take care of the remaining tasks we couldn't finish earlier. I thoroughly enjoy working with them - they're outstanding!",
    name: "Dr.John Blanch",
    title: "Senior VIP managing Director at Royal Medical Complex",
  },
  {
    id: 7,
    description:
      "Bluetelecast demonstrated excellence in defining the project scope. Communication channels remained consistently open throughout the process. Their team consistently exceeded expectations by going above and beyond. We anticipate employing their services again in the near future.",
    name: "Justin Thompson",
    title: "",
  },
  {
    id: 8,
    description:
      "Bluetelecast and their team have been incredibly supportive throughout our project. They understood our vision right from the start and dedicated themselves tirelessly to its completion, working day and night. We're extremely pleased with the final outcome and eagerly anticipate future collaborations with them. We wholeheartedly endorse working with this team and highly recommend their services.",
    name: "Julia Obiora",
    title: "",
  },
  {
    id: 9,
    description:
      "Bluetelecast stands out as one of the finest developers available. I wholeheartedly recommend them to anyone in need of mobile development and support. As a returning customer, I entrust them with the lead development role for my company's ongoing and future projects. Bluetelecast deserves a five-star rating for their exceptional work.",
    name: "Kevin ",
    title: "",
  },
  {
    id: 10,
    description:
      "Bluetelecast is an excellent team to work with. They communicate with clarity and promptness, making our exchanges over email and Skype very straightforward. Despite facing some personal issues that led to project delays, Bluetelecast remained diligent in staying updated and exceeded expectations in delivering my app. I will certainly engage them again for similar projects. I highly recommend their services!",
    name: "Laura Whisskeyman",
    title: "",
  },
  {
    id: 11,
    description:
      "Bluetelecast and their team demonstrate high levels of professionalism and are a pleasure to collaborate with. They consistently offer valuable assistance and maintain honesty throughout our interactions. I eagerly anticipate our next project together!",
    name: "Nataliaque Quesada Lopez",
    title: "",
  },
  {
    id: 12,
    description:
      "First of all, Bluetelecast and their team have been nothing but professional and talented, going above and beyond what I expected. They communicated well and did everything and more that was expected of them. I am very pleased and satisfied and would definitely hire them again. A big thank you to Bluetelecast.",
    name: "Nickole Biedrzycki",
    title: "",
  },
  {
    id: 13,
    description:
      "I strongly recommend Bluetelecast and their team. They possess excellent communication skills, and their work consistently meets high standards in a timely and professional manner. The team offered valuable and insightful advice for the project. I would certainly collaborate with them on future projects.",
    name: "Oladeji Olaleye",
    title: "",
  },
  {
    id: 14,
    description:
      "Bluetelecast and their proficient team developed an app for me. Following a brief description and a Skype call, they not only comprehended the business idea but also provided valuable feedback and suggestions for my project. They promptly assembled a highly skilled and open-minded team. The process was quick, uncomplicated, and devoid of complications. If you're seeking a functional solution, I recommend consulting Bluetelecast and their team.",
    name: "Priscilla Esteves",
    title: "Head of TLO ",
  },
  {
    id: 15,
    description:
      "Working with Bluetelecast and their team has been enjoyable. As a startup from the US, starting from scratch, they provided thoughtful recommendations on the technology that aligned with our vision for scaling. Their capacity to grasp the broader picture of our goals facilitated the design and construction of our innovative app.",
    name: "Eric Putzig",
    title: "Chief of party Checchi and Dexis Consultancy Washington D.C",
  },
];

const Testimonals = () => {
  return (
    <section
      className="pb-24 bg-gray-50"
      // style={{ backgroundImage: "url('/static/images/glob.svg')" }}
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
            className="w-2 h-2 text-gray-800 display-inline"
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
        <span className="text-blue-700">Testimonials</span>
      </div>

      <div className="text-center pt-24 w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl">
          <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
            Testimonials
          </span>
        </h1>
      </div>
      <Swiper
        // install Swiper modules
        key={1212}
        className="w-11/12 md:w-8/12 lg:w-6/12 relative py-16"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <div className="absolute bottom-16 right-16 z-50 ">
          <div
            className="swiper-button-prev text-gray-100 text-md bg-gray-900 w-12 h-12 rounded-full hover:bg-gray-800 hover:shadow-lg"
            style={{ left: "-120px" }}
          ></div>
          <div
            className="swiper-button-next text-gray-100 text-md bg-gray-900 w-12 h-12 rounded-full hover:bg-gray-800 hover:shadow-lg"
            style={{ right: "10px" }}
          ></div>
        </div>

        {TestimonalsData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="p-6 md:p-16 bg-white rounded-md shadow-md">
              <div className="w-36">
                <img src="./static/images/5star.png" />
              </div>
              <p className="flex  mb-8 text-lg text-justify text-gray-900 md:text-xl  mt-8 ">
                "{data.description}"
              </p>
              <h4 className="text-gray-900 text-2xl font-bold">{data.name}</h4>
              <h5 className="text-gray-900 text-xl font-medium">
                <span>{data.title}</span>
              </h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonals;
