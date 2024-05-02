import React, { useContext, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { MyContext } from "../../context/MyContext";

const SwiperPartners = () => {
  const { isDesktop } = useContext(MyContext);

  // animation
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      return;
    }
  }, [control, inView]);
  //

  return (
    <motion.div
      ref={ref}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      initial="hidden"
      animate={control}
      transition={{
        ease: "easeOut",
        y: { duration: 0.5, delay: 1 },
        opacity: { duration: 0.5, delay: 1 },
      }}
      className="relative mt-12 flex flex-col items-end justify-end max-phone:mt-10 min-w-0
      after:content-[''] after:bottom-0 after:h-[240px] after:absolute after:my-auto after:mx-0 after:bg-[linear-gradient(180deg,#f4f4f4,#f8fcf2)] 
      after:left-[100%] after:w-[3500px] max-bigg:after:hidden"
    >
      <div
        className="w-full pl-12 pr-8 rounded-l-full bg-[linear-gradient(180deg,#f4f4f4,#f8fcf2)] 
      max-medium:w-full max-medium:pl-28 max-medium:pr-16 max-medium:rounded-l-none max-medium:!px-0"
      >
        <Swiper
          loop={true}
          freeMode={true}
          spaceBetween={0}
          slidesPerView={
            isDesktop >= 1451
              ? 6
              : isDesktop >= 1351
              ? 5
              : isDesktop >= 1025
              ? 5
              : isDesktop >= 701
              ? 3
              : 2
          }
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={1000}
          modules={[Autoplay]}
          className="swiper-container relative w-full h-full py-[30px]"
        >
          {[
            "x5",
            "perekrestok",
            "pyaterochka",
            "magnit",
            "diksi",
            "miratorg",
            "azbuka",
            "okei",
            "da",
            "lenta",
            "samokat",
            "karusel",
            "metro",
            "yarche",
            "begemag",
            "pokupochka",
            "evropa",
            "lama",
            "pobeda",
            "mjf",
            "agro",
            "carrefour",
            "tsaglis",
            "sino",
            "taifo",
            "managi",
            "agrokreta",
          ].map((text, key) => (
            <SwiperSlide key={key}>
              <img
                src={`/src/assets/partners/${text}.png`}
                alt={text}
                className="b min-w-[150px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default SwiperPartners;
