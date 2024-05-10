import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";

import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

import { useNavigate } from "react-router-dom";

const Menu = () => {
  const { setIs_Click, is_MenuActive, setIs_MenuActive } =
    useContext(MyContext);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const menuSlide = () => {
    setIs_MenuActive((current) => !current);
  };

  const linkClick = (text) => {
    navigate("/", { state: { targetId: `${text}` } });
    setIs_MenuActive((current) => !current);
    setIs_Click(true);
  };

  return (
    <div
      className="glassy_effect fixed z-[-1] opacity-0 h-[100vh] w-full top-0 right-0 transition-all ease-in-out duration-500"
      style={
        is_MenuActive
          ? { right: "0", opacity: "1", zIndex: "9999999999999999" }
          : null
      }
    >
      <div className="h-[100vh] w-full text-white pt-20 py-16 overflow-y-auto max-small:pb-12">
        <div className="flex flex-col justify-between items-center w-full h-full px-[5%]">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="cursor-pointer w-[250px] h-auto max-small:w-[200px]"
          />
          <ul className="flex flex-col !text-center justify-center gap-12 text-2xl max-smaller:gap-8 max-tablet:text-xl max-small:text-lg">
            {[
              "about",
              "partners",
              "export",
              "import",
              "production",
              "contact",
            ].map((text, key) => (
              <li
                key={key}
                onClick={() => linkClick(text)}
                className={`${text} text-center transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold`}
              >
                {t(`navbar.links.${text}`)}
              </li>
            ))}
            <li className="phone:hidden text-center transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold">
              <LanguageSwitcher />
            </li>
          </ul>
          <a
            href="tel:+37410444401"
            className="max-small:hidden flex items-center gap-4 text-2xl max-tablet:text-xl max-smaller:pt-12"
          >
            <svg
              className={`w-[1.5rem] h-[1.5rem] relative fill-thirdly transition-fill ease-in-out duration-200 hover:fill-schole_primary`}
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
            <span>+374 10 44 44 01</span>
          </a>
        </div>
      </div>
      <button
        className="absolute top-[30px] right-[30px] z-[9999999]"
        onClick={menuSlide}
        id="menu_btn_icons"
      >
        <GrClose color="white" size="2em" />
      </button>
    </div>
  );
};

export default Menu;
