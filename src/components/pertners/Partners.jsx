import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SwiperPartners from "./SwiperPartners";

const Partners = () => {
  const { t } = useTranslation();

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
      className="relative py-[4rem] overflow-hidden max-btablet:pt-[4rem] max-btablet:pb-[3rem] max-small:pt-[3rem] max-small:pb-[2.5rem]"
      id="partners"
    >
      <div className="px-[5%]">
        <div className="max-w-[1680px] !mx-auto">
          <motion.h2
            ref={ref}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            initial="hidden"
            animate={control}
            transition={{
              ease: "ease",
              y: { duration: 0.4, delay: 0.1 },
              opacity: { duration: 0.6, delay: 0.2 },
            }}
            className="text-6xl font-[500] text-[#222] mb-9 max-bmedium:text-5xl max-small:text-[max(3vw,9.5vw)]"
          >
            {t("partners.title")}
          </motion.h2>
          <motion.p
            ref={ref}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            initial="hidden"
            animate={control}
            transition={{
              ease: "ease",
              y: { duration: 0.4, delay: 0.4 },
              opacity: { duration: 0.6, delay: 0.5 },
            }}
            dangerouslySetInnerHTML={{
              __html: t("partners.paragraph"),
            }}
            className="text-base text-xl mb-8 max-tablet:text-lg max-w-[1200px]"
          ></motion.p>
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
              y: { duration: 0.5, delay: 0.7 },
              opacity: { duration: 0.6, delay: 0.8 },
            }}
            className=""
          >
            <a href="mailto:info@armfruit-llc.am">
              <button className="bg-[rgba(152,197,15,.2)] text-xl text-primary font-bold px-10 py-4 rounded-full max-stablet:text-lg transition-all ease-in-out duration-200 hover:opacity-75">
                {t("partners.button")}
              </button>
            </a>
          </motion.div>
        </div>
      </div>
      <div className="max-bigg:pl-[5%] max-medium:!px-0">
        <div className="max-w-[1680px] !mx-auto">
          <SwiperPartners />
        </div>
      </div>
    </div>
  );
};

export default Partners;
