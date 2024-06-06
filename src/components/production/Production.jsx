import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { MyContext } from "../../context/MyContext";

const Production = () => {
  const { t } = useTranslation();

  const { isDesktop } = useContext(MyContext);

  return (
    <div className="relative px-[5%] mb-20 max-medium:mb-16" id="production">
      <div className="relative max-w-[1680px] w-full !mx-auto">
        <h2 className="text-7xl text-center font-[500] text-[#222] mb-12 max-bmedium:text-6xl max-small:text-[max(3vw,9.5vw)]">
          {t("production.title")}
        </h2>
        <div className="flex justify-center">
          <p
            className="text-center max-w-[900px] text-2xl leading-[1.6] max-tablet:text-xl"
            dangerouslySetInnerHTML={{
              __html: t("production.paragraph"),
            }}
          ></p>
        </div>
        <ul className="flex justify-evenly items-center mt-[3rem] max-medium:justify-between max-bmedium:mt-[4rem] max-small:flex-wrap max-small:justify-center max-small:gap-x-[2rem] max-small:gap-y-[1rem] max-small:mt-[2rem]">
          {["1", "2", "3", "4"].map((text, key) => (
            <li
              key={key}
              style={{
                display: text == "3" && isDesktop <= 701 ? "none" : null,
              }}
            >
              <div
                style={{
                  backgroundImage: `url(/assets/production/${text}.jpg)`,
                  top:
                    (text == "1" && isDesktop >= 1350) ||
                    (text == "4" && isDesktop >= 1350)
                      ? "-100px"
                      : (text == "1" && isDesktop >= 551) ||
                        (text == "4" && isDesktop >= 551)
                      ? "-50px"
                      : null,
                }}
                className="relative bg-center bg-contain bg-no-repeat w-[250px] h-[250px] rounded-[50vw] shadow-md 
                max-desktop:w-[200px] max-desktop:h-[200px] 
                max-medium:w-[170px] max-medium:h-[170px]
                max-btablet:w-[150px] max-btablet:h-[150px]
                max-small:w-[140px] max-small:h-[140px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Production;
