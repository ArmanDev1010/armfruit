import React from "react";
import { useTranslation } from "react-i18next";
import { GiGrapes } from "react-icons/gi";
import { PiCarrot } from "react-icons/pi";
import { GiAppleSeeds } from "react-icons/gi";

const Icon = ({ text }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-thirdly p-2 rounded-full text-white">
        {text == "fruit" ? (
          <GiGrapes className="text-[24px]" />
        ) : text == "vegetable" ? (
          <PiCarrot className="text-[24px]" />
        ) : (
          <GiAppleSeeds className="text-[24px]" />
        )}
      </div>
      <p className="text-[20px] font-[500] max-desktop:font-[400] max-big:text-[18px] max-desktop:text-base max-tablet:text-[16px]">{t(`hero.icons.${text}`)}</p>
    </>
  );
};

export default Icon;
