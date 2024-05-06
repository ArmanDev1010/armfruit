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
      {["1", "2", "3", 4].map((text, key) => (
        <SwiperSlide key={key}>
          <SwiperImg number={text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHero;
