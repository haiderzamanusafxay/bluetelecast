import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function SimpleSlider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='h-24' key="slide1">Slide 1</SwiperSlide>
      <SwiperSlide className='h-24'key="slide2">Slide 2</SwiperSlide>
      <SwiperSlide className='h-24' key="slide3">Slide 3</SwiperSlide>
      <SwiperSlide className='h-24' key="slide4">Slide 4</SwiperSlide>
      {/* Add more SwiperSlides if needed */}
    </Swiper>
  );
}
