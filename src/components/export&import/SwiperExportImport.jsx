import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { MyContext } from "../../context/MyContext";

const SwiperExportImport = ({ reverse, which, home }) => {
  const { isDesktop } = useContext(MyContext);

  const first = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const second = ["9", "10", "11", "12", "13", "14", "15", "16"];
  const images = !reverse ? first : second;

  return (
    <Swiper
      loop={true}
      freeMode={true}
      slidesPerView={
        isDesktop >= 1081 && !home
          ? 3
          : isDesktop >= 601 && !home
          ? 2
          : isDesktop >= 701 && home
          ? 1
          : 1
      }
      spaceBetween={isDesktop >= 1081 ? 24 : 16}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: reverse ? true : false,
      }}
      speed={isDesktop >= 800 && !home ? 4000 : 3000}
      modules={[Autoplay]}
      className={`swiperExportImport relative w-full  ${
        home
          ? "h-full"
          : "h-[320px] max-big:h-[270px] max-tablet:h-[200px] mb-[24px] max-tablet:mb-[16px]"
      }`}
    >
      {images.map((text, key) => (
        <SwiperSlide key={key}>
          <div
            className="bg-cover bg-no-repeat bg-center w-full h-full rounded-[30px] border-[2px] border-primary"
            style={{ backgroundImage: `url(/assets/carousel/${which}/${text}.jpg)` }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperExportImport;
