import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import SwiperImg from "./SwiperImg";

const SwiperHero = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className="SwiperImages relative w-full h-full btablet:rounded-tl-[50vw]"
    >
      <SwiperSlide>
        <SwiperImg number="two" />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImg number="three" />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImg number="one" />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImg number="four" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperHero;
