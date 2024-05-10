import React, { useEffect } from "react";

import SwiperHero from "./SwiperHero";

import Navbar from "../navbar/Navbar";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
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
    <div
      className="bg-transparent text-[#222] font-medium relative flex flex-col gap-10 px-[5%]"
      id="hero"
    >
      <div className="relative z-[2] w-full h-full max-w-[1680px] !mx-auto">
        <Navbar />
        <div className="mt-[4rem] relative w-full h-full">
          <motion.div
            ref={ref}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            initial="hidden"
            animate={control}
            transition={{
              ease: "ease",
              y: { duration: 0.5, delay: 0 },
              opacity: { duration: 0.7, delay: 0.1 },
            }}
            className="relative"
          >
            <SwiperHero />
            <div className="swiper_fade-gradient left"></div>
            <div className="swiper_fade-gradient"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
