import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

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
            "Even though I don't believe in make-believe creatures like unicorns, I want to express how impressed I am with Bluetelecast and their team. During our project meeting today, I commended Faheem, who leads the tech team, stating that in my more than 25 years of working with technology, I've never encountered better customer service. Bluetelecast and their team are not only proficient in technical matters but also exceptionally helpful and deliver outstanding results overall.",
        name: "Christopher Skomro",
        title: "IS- Technology & Planning Lead",
    },
    {
        id: 4,
        description:
            "Even though I don't believe in make-believe creatures like unicorns, I want to express how impressed I am with Bluetelecast and their team. During our project meeting today, I commended Faheem, who leads the tech team, stating that in my more than 25 years of working with technology, I've never encountered better customer service. Bluetelecast and their team are not only proficient in technical matters but also exceptionally helpful and deliver outstanding results overall.",
        name: "Christopher Skomro",
        title: "IS- Technology & Planning Lead",
    },
    {
        id: 5,
        description:
            "Even though I don't believe in make-believe creatures like unicorns, I want to express how impressed I am with Bluetelecast and their team. During our project meeting today, I commended Faheem, who leads the tech team, stating that in my more than 25 years of working with technology, I've never encountered better customer service. Bluetelecast and their team are not only proficient in technical matters but also exceptionally helpful and deliver outstanding results overall.",
        name: "Christopher Skomro",
        title: "IS- Technology & Planning Lead",
    },
    {
        id: 6,
        description:
            "Even though I don't believe in make-believe creatures like unicorns, I want to express how impressed I am with Bluetelecast and their team. During our project meeting today, I commended Faheem, who leads the tech team, stating that in my more than 25 years of working with technology, I've never encountered better customer service. Bluetelecast and their team are not only proficient in technical matters but also exceptionally helpful and deliver outstanding results overall.",
        name: "Christopher Skomro",
        title: "IS- Technology & Planning Lead",
    },
    {
        id: 7,
        description:
            "Even though I don't believe in make-believe creatures like unicorns, I want to express how impressed I am with Bluetelecast and their team. During our project meeting today, I commended Faheem, who leads the tech team, stating that in my more than 25 years of working with technology, I've never encountered better customer service. Bluetelecast and their team are not only proficient in technical matters but also exceptionally helpful and deliver outstanding results overall.",
        name: "Christopher Skomro",
        title: "IS- Technology & Planning Lead",
    },
    {
        id: 8,
        description:
            "Even though I don't believe in make-believe creatures like unicorns, I want to express how impressed I am with Bluetelecast and their team. During our project meeting today, I commended Faheem, who leads the tech team, stating that in my more than 25 years of working with technology, I've never encountered better customer service. Bluetelecast and their team are not only proficient in technical matters but also exceptionally helpful and deliver outstanding results overall.",
        name: "Christopher Skomro",
        title: "IS- Technology & Planning Lead",
    },
    {
        id: 9,
        description:
            "Even though I don't believe in make-believe creatures like unicorns, I want to express how impressed I am with Bluetelecast and their team. During our project meeting today, I commended Faheem, who leads the tech team, stating that in my more than 25 years of working with technology, I've never encountered better customer service. Bluetelecast and their team are not only proficient in technical matters but also exceptionally helpful and deliver outstanding results overall.",
        name: "Christopher Skomro",
        title: "IS- Technology & Planning Lead",
    },
    {
        id: 10,
        description:
            "Even though I don't believe in make-believe creatures like unicorns, I want to express how impressed I am with Bluetelecast and their team. During our project meeting today, I commended Faheem, who leads the tech team, stating that in my more than 25 years of working with technology, I've never encountered better customer service. Bluetelecast and their team are not only proficient in technical matters but also exceptionally helpful and deliver outstanding results overall.",
        name: "Christopher Skomro",
        title: "IS- Technology & Planning Lead",
    },

];

const Testimonals = () => {

    return (
        <section className='pb-24 bg-gray-50' style={{ backgroundImage: "url('/static/images/glob.svg')" }}>
            <div className="text-lg w-9/12 m-auto pt-4 flex items-center">
                <span>
                    <Link to="/" title="Home">Home </Link>
                </span>
                <span className='px-2'>
                    <svg class="w-2 h-3 text-gray-800 display-inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                    </svg>
                </span>
                <span>
                    Testimonials
                </span>
            </div>

            <div className="text-center pt-24 w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center">
                <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl">
                    <span class="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                        Testimonials
                    </span>
                </h1>
            </div>
            <Swiper
                // install Swiper modules
                className='w-6/12 relative py-16'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <div className="absolute bottom-16 right-16 z-50 ">
                    <div className="swiper-button-prev text-gray-100 text-md bg-gray-900 w-12 h-12 rounded-full hover:bg-gray-800 hover:shadow-lg" style={{ left: '-120px' }}></div>
                    <div className="swiper-button-next text-gray-100 text-md bg-gray-900 w-12 h-12 rounded-full hover:bg-gray-800 hover:shadow-lg" style={{ right: '10px' }}></div>
                </div>

                {TestimonalsData.map((data) => (

                    <SwiperSlide>
                        <div className='p-16 bg-white rounded-md'>
                            <div className="w-36">
                                <img src='./static/images/5star.png' />
                            </div>
                            <p className="flex  mb-8 text-lg text-justify text-gray-900 md:text-xl  mt-8 ">
                                "{data.description}"
                            </p>
                            <h4 className="text-gray-900 md:text-2xl font-bold">
                                {data.name}
                            </h4>
                            <h5 className='text-gray-900 font-medium'>
                                <span>{data.title}</span>
                            </h5>
                        </div>
                    </SwiperSlide>))
                }

            </Swiper>

        </section>
    );

}

export default Testimonals;