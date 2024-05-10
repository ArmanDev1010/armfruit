import React from "react";
import { useTranslation } from "react-i18next";
import Forms from "./Forms";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="relative z-[1] w-full mb-[4rem] bg-[linear-gradient(180deg,#f4f4f4,#f8fcf2)] text-[#333333] rounded-tr-[20vw] py-[50px]"
    >
      <div className="px-[5%]">
        <div className="relative max-w-[1680px] w-full !mx-auto">
          <div className="flex items-center gap-[10rem] max-big:gap-[5rem] max-bdesktop:gap-[3rem] max-desktop:flex-col max-desktop:items-start max-stablet:gap-[2rem]">
            <div className="">
              <h2 className="text-6xl font-[500] text-[#222] mb-9 max-bmedium:text-5xl max-small:text-[max(3vw,9.5vw)]">
                {t("contact.title")}
              </h2>
              <p className="text-[#5b5b5b] text-xl leading-[1.6] mb-8 max-tablet:text-lg max-w-[600px] max-stablet:text-[17px]">
                {t("contact.paragraph")}
              </p>
              <div className="flex flex-col gap-6 max-stablet:gap-4">
                <a
                  href="tel:+37410444401"
                  className="flex items-center gap-4 text-center text-gray-500 w-fit text-xl max-stablet:text-lg transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer"
                >
                  <span>+374 10 44 44 01</span>
                </a>
                <a
                  href="mailto:info@armfruit-llc.am"
                  className="flex items-center gap-4 text-center text-gray-500 w-fit text-xl max-stablet:text-lg transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer"
                >
                  <span>info@armfruit-llc.am</span>
                </a>
              </div>
            </div>
            <div
              className="bg-white w-[600px] px-[30px] py-[25px] rounded-[20px] max-big:w-[550px] max-desktop:w-full max-stablet:px-[20px]"
              style={{
                boxShadow: "rgba(17, 12, 46, 0.15) 0px 18px 100px 0px",
              }}
            >
              <div className="">
                <h3 className="text-4xl font-[500] text-[#222] mb-4 max-stablet:text-3xl">
                  {t("contact.touch")}
                </h3>
                <p className="text-[#5b5b5b] text-lg leading-[1.6] mb-8 max-stablet:mb-7 max-stablet:text-base">
                  {t("contact.touch_paragraph")}
                </p>
              </div>
              <div className="">
                <Forms />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
