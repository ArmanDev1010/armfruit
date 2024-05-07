import React, { useContext } from "react";

import { useTranslation } from "react-i18next";

import SwiperHero from "./SwiperHero";
import Icon from "./Icon";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import { MyContext } from "../../context/MyContext";

const Hero = () => {
  const { setIs_Click, setIs_MenuActive } = useContext(MyContext);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const linkClick = (text) => {
    navigate("/", { state: { targetId: `${text}` } });
    setIs_Click(true);
  };

  return (
    <div
      className="bg-transparent text-[#222] h-[80%] font-medium relative flex flex-col gap-10 max-tablet:h-auto max-small:gap-8"
      id="hero"
    >
      <div
        className="w-full h-full max-bigg:relative bigg:max-w-[1680px] bigg:!mx-auto flex gap-[1rem] items-center max-btablet:items-start 
      max-btablet:flex-col max-btablet:pb-[0rem] overflow-hidden max-small:gap-[1rem]"
      >
        <div
          className="relative z-[7] bigg:!pl-0 items-end w-[60%] h-fit pl-[5%] max-big:w-[60%] 
        max-btablet:w-full max-btablet:text-left max-btablet:!px-[5%] max-btablet:pt-[2rem]"
        >
          <div className="max-w-[900px] flex flex-col max-btablet:py-[2rem] max-btablet:!py-[1rem]">
            <motion.h2
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: "ease",
                x: { duration: 0.5, delay: 0.1 },
                opacity: { duration: 0.6, delay: 0.2 },
              }}
              className="clipText bigg:text-7xl bigg:leading-[1.5] text-[max(3vw,4vw)] tracking-[-0rem] font-[600] text-lightb leading-[1.4] max-w-[900px] mb-4 
          max-desktop:leading-[1.4] max-desktop:mb-6 max-medium:text-[max(3vw,4.5vw)] 
          max-btablet:text-[max(3vw,6vw)] max-phone:text-[max(3vw,7.5vw)] max-small:mb-4 max-small:leading-[1.5]"
              dangerouslySetInnerHTML={{
                __html: t(`hero.title`),
              }}
            ></motion.h2>
            <motion.p
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: "ease",
                x: { duration: 0.5, delay: 0.4 },
                opacity: { duration: 0.6, delay: 0.6 },
              }}
              className="max-w-[600px] text-[#222] font-[400] text-[22px] mb-10 leading-[1.7] 
              max-big:text-[20px] max-big:mb-8 max-desktop:text-[19px] max-desktop:leading-[1.7] max-desktop:mb-8 
              max-phone:text-[18px] max-phone:mb-6 max-small:text-[17px] max-small:leading-[1.7] max-smal:text-[15px]"
            >
              {t(`hero.paragraph`)}
            </motion.p>
            <div
              onClick={() => linkClick("about")}
              className="w-fit max-small:w-full"
            >
              <motion.button
                initial={{ opacity: 0, x: "-100px" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "ease",
                  x: { duration: 0.5, delay: 0.8 },
                  opacity: { duration: 0.6, delay: 1 },
                }}
                className="signup relative text-xl bg-thirdly text-white inline-flex items-center 
              justify-center px-10 py-4 overflow-hidden font-medium rounded-md border-[2px] border-white overflow-hidden
              group border-[2px] border-white mb-10 max-desktop:py-3 max-desktop:px-7 
              max-tablet:py-[0.8rem] max-tablet:px-[2rem] max-tablet:mb-8 max-phone:mb-6 max-small:mb-8"
              >
                <span
                  className="absolute inset-0 flex items-center justify-center w-full h-full 
              text-white duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span
                  className="absolute text-xl flex items-center justify-center w-full h-full transition-all 
              duration-300 transform group-hover:translate-x-full ease max-desktop:text-lg max-tablet:!text-xl max-small:!text-lg"
                >
                  {t(`hero.learn`)}
                </span>
                <span className="relative invisible">{t(`hero.learn`)}</span>
              </motion.button>
            </div>
            <motion.ul
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: "ease",
                x: { duration: 0.5, delay: 1.1 },
                opacity: { duration: 0.6, delay: 1.4 },
              }}
              className="flex items-center gap-x-[4rem] gap-y-[1.5rem] max-bdesktop:hidden max-btablet:flex pointer-events-none flex-wrap max-tablet:gap-x-[2rem]"
            >
              {["fruit", "vegetable", "dryfruit"].map((text, key) => (
                <li key={key} className="flex items-center gap-3" id={text}>
                  <Icon text={text} />
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div
          className="bigg:!w-[45%] max-bigg:relative !w-[45%] w-full big:h-full h-[600px] max-medium:h-[550px]
          max-big:!w-[50%] max-medium:!w-[40%] max-btablet:!w-full max-btablet:h-auto max-btablet:aspect-[16/9]"
        >
          <div className="btablet:absolute btablet:!top-[50px] bigg:!w-[45%] btablet:!h-[92%] btablet:top-0 btablet:right-0 !w-full h-full btablet:rounded-tl-[50vw]">
            <SwiperHero />
          </div>
        </div>
      </div>
      <div className="hero_fade max-btablet:hidden"></div>
    </div>
  );
};

export default Hero;
