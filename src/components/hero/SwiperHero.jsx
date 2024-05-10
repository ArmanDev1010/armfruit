import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { MyContext } from "../../context/MyContext";

const SwiperHero = () => {
  const { isDesktop } = useContext(MyContext);
  return (
    <Swiper
      loop={true}
      freeMode={true}
      slidesPerView={isDesktop >= 1450 ? 3 : isDesktop >= 801 ? 2 : 1}
      spaceBetween={22}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      speed={isDesktop >= 801 ? 2000 : 1800}
      modules={[Autoplay]}
      className="swiperImages relative w-full h-full"
    >
      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"].map(
        (text, key) => (
          <SwiperSlide key={key}>
            <div
              className="w-full h-[400px] max-medium:h-[320px] max-tablet: bg-center bg-no-repeat bg-cover rounded-[30px] border-primary border-2"
              style={{
                backgroundImage: `url(/assets/carousel/home/${text}.jpg)`,
              }}
            ></div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default SwiperHero;
