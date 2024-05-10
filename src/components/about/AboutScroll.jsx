import React, { useEffect, useRef } from "react";

import TimelineObserver from "react-timeline-animation";

import Framer from "./Framer";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Timeline = ({ setObserver }) => {
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);

  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const circle11 = useRef(null);
  const circle22 = useRef(null);
  const circle33 = useRef(null);

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current);
    setObserver(circle2.current);
    setObserver(circle3.current);
    setObserver(circle11.current);
    setObserver(circle22.current);
    setObserver(circle33.current);
  }, []);

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
        y: { duration: 0.5, delay: 0.4 },
        opacity: { duration: 0.5, delay: 0.4 },
      }}
      className="flex flex-col items-center gap-0 pt-[4rem] mb-16 px-12 max-btablet:px-[3%] max-btablet:mb-12 max-stablet:px-6 max-small:gap-0"
      id="about"
    >
      <Framer
        timeline={timeline1}
        circle={circle1}
        circle1={circle11}
        num="1"
      />
      <Framer
        timeline={timeline3}
        circle={circle3}
        circle1={circle33}
        num="3"
      />
      <Framer
        timeline={timeline2}
        circle={circle2}
        circle1={circle22}
        num="2"
      />
    </motion.div>
  );
};

export default function ScrollLine() {
  return (
    <TimelineObserver
      initialColor="#e5e5e5"
      hasReverse="true"
      fillColor="black"
      handleObserve={(setObserver) => (
        <Timeline className="timeline" setObserver={setObserver} />
      )}
    />
  );
}
