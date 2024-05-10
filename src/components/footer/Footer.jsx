import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContext";
import SocialMedia from "./SocialMedia";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const { t } = useTranslation();

  const { setIs_Click } = useContext(MyContext);

  const navigate = useNavigate();

  const linkClick = (text) => {
    navigate("/", { state: { targetId: `${text}` } });
    setIs_Click(true);
  };

  return (
    <div className="relative z-[1] w-full">
      <div className="px-[5%]">
        <div className="relative max-w-[1680px] w-full !mx-auto">
          <div className="py-[42px] border-y-[#f3f3f3] border-y-2 flex justify-between max-tablet:flex-col max-tablet:gap-[2rem]">
            <div className="h-full w-[60%] max-tablet:w-full">
              <img
                src="/assets/logo.png"
                alt="logo"
                onClick={() => linkClick("hero_full")}
                className="w-[250px] mb-12 cursor-pointer"
              />
              <div className="mb-8">
                <a
                  href="https://maps.app.goo.gl/fbyem38iouJfqVhb6"
                  className="text-lg text-gray-500  w-fit transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer"
                >
                  {t("footer.address")}
                </a>
              </div>
              <ul className="h-full flex items-center gap-6 flex-wrap text-lg font-[500] max-desktop:text-lg max-tablet:pb-[0.5rem]">
                {["about", "import", "export", "partners", "production"].map(
                  (text, key) => (
                    <li
                      key={key}
                      onClick={() => linkClick(text)}
                      className={`${text} transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer`}
                    >
                      {t(`navbar.links.${text}`)}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="h-full w-[40%] flex flex-col items-end gap-8 max-tablet:gap-6 max-tablet:w-full max-tablet:items-start">
              <SocialMedia />
              <a
                href="tel:+37410444401"
                className="flex items-center gap-4 text-center text-gray-500 w-fit text-xl max-tablet:text-lg transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer"
              >
                <svg
                  className={`w-[1.4rem] h-[1.4rem] max-tablet:w-[1.2rem] max-tablet:h-[1.2rem] relative fill-thirdly transition-fill ease-in-out duration-200 hover:fill-schole_primary`}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <span>+374 10 44 44 01</span>
              </a>
              <a
                href="mailto:info@armfruit-llc.am"
                className="flex items-center gap-4 text-center text-gray-500 w-fit text-xl max-tablet:text-lg transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer"
              >
                <IoIosMail className="text-[32px] text-thirdly max-tablet:text-[26px]" />
                <span>info@armfruit-llc.am</span>
              </a>
            </div>
          </div>
          <div className="py-[34px] flex justify-between max-medium:flex-col max-medium:gap-[2rem] max-medium:items-center max-medium:text-center">
            <p className="text-gray-400">{t("footer.right")}</p>
            <h3 className="text-lg leading-6 text-[#7f7f7f]">
              {t("footer.design")}
              <span className="font-medium text-black">
                <a href="https://armanmanukyan.am/" target="_blank">
                  {t("footer.me")}
                </a>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
