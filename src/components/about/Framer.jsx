import React, { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";

import "/node_modules/flag-icons/css/flag-icons.min.css";

const Framer = ({ timeline, circle, circle1, num }) => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div
      className="framer px-[5%] max-tablet:gap-6 opacity-40 transition ease-in-out duration-1000"
      ref={targetRef}
      style={isVisible ? { opacity: 1 } : null}
    >
      <div className="flex flex-[1_0_0] h-[400px] w-full my-[4rem] max-desktop:hidden">
        <div
          className="bg-no-repeat bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: `url(${`/assets/about/${num}.jpg`})`,
          }}
        />
      </div>
      <div className="flex flex-col items-center self-stretch w-[365px] max-desktop:w-[250px] max-btablet:w-[210px] max-tablet:w-fit">
        <div
          id={`circle${num}`}
          ref={circle}
          className="dateClip relative pb-8 max-desktop:pb-4 max-tablet:hidden"
        >
          {t(`about.${num}.title`)}
        </div>
        <div
          id={`timeline${num}`}
          ref={timeline}
          className="w-1 bg-white flex-[1_0_0]"
        />
      </div>
      <div className="flex flex-[1_0_0] flex-col py-[2rem] max-desktop:max-w-[700px] max-tablet:pt-0 max-tablet:pl-4 max-small:pl-2">
        <div
          id={`circle${num}`}
          ref={circle1}
          className="dateClip relative pb-4 tablet:hidden"
        >
          {t(`about.${num}.title`)}
        </div>
        <div
          className="desktop:hidden bg-no-repeat bg-cover bg-center h-[300px] w-full mb-6 max-tablet:hidden"
          style={{
            backgroundImage: `url(${`/assets/about/${num}.jpg`})`,
          }}
        />
        <div className="text-[22px] max-desktop:text-lg max-tablet:text-[18px] max-smal:text-[17px]">
          {t(`about.${num}.paragraph`)}
        </div>
        {num == "2" ? (
          <ul className="mt-[2rem] grid grid-cols-[1fr] items-center gap-y-[1.5rem]">
            {["ru", "ae", "by", "ua", "ge", "gr", "eg", "ir"].map(
              (text, key) => (
                <li key={key} className="flex">
                  <span
                    className={`fi fi-${text} text-xl max-desktop:text-lg`}
                  ></span>
                  <span className="ey ml-4 text-[19px] font-[400] opacity-80 max-desktop:text-base">
                    {t(`about.coutries.${text}`)}
                  </span>
                </li>
              )
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Framer;
