import React, { useEffect } from "react";
import SwiperExportImport from "./SwiperExportImport";
import { useTranslation } from "react-i18next";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExportImport = ({ which }) => {
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
    <div className="px-[5%] mb-24 max-medium:mb-16" id={which}>
      <div className="relative max-w-[1680px] w-full !mx-auto">
        <motion.h3
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
          className="text-6xl font-[500] text-[#222] mb-10 max-bmedium:text-5xl max-small:text-[max(3vw,9.5vw)]"
        >
          {t(`export_import.${which}`)}
        </motion.h3>
        <motion.div
          className=""
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
        >
          <SwiperExportImport which={which} />
        </motion.div>
        <motion.div
          className=""
          ref={ref}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          initial="hidden"
          animate={control}
          transition={{
            ease: "ease",
            y: { duration: 0.4, delay: 0.7 },
            opacity: { duration: 0.6, delay: 0.8 },
          }}
        >
          <SwiperExportImport reverse={true} which={which} />
        </motion.div>
      </div>
    </div>
  );
};

export default ExportImport;
