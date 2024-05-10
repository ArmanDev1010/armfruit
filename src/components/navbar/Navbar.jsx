import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

import { useNavigate } from "react-router-dom";

import { MyContext } from "../../context/MyContext";

const Navbar = () => {
  const { setIs_Click, setIs_MenuActive } = useContext(MyContext);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const menuSlide = () => {
    setIs_MenuActive((current) => !current);
  };

  const linkClick = (text) => {
    navigate("/", { state: { targetId: `${text}` } });
    setIs_Click(true);
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 250);
    });
  });

  return (
    <>
      <div
        className="relative z-[99999999] w-full pt-6 max-big:h-[17%] mb-10"
        id="navbar"
      >
        <div className="relative max-w-[1680px] w-full !mx-auto flex items-center justify-between gap-10">
          <div className="desktop:hidden text-xl border-white border-1 max-phone:hidden">
            <LanguageSwitcher />
          </div>
          <img
            src="/assets/logo.png"
            alt="logo"
            className="w-[300px] h-auto max-bdesktop:w-[270px] max-tablet:w-[250px]"
          />
          <ul className="flex items-start gap-12 text-xl font-[500] max-big:text-lg max-big:gap-8 max-desktop:hidden">
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
                className={`${text} transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer`}
              >
                {t(`navbar.links.${text}`)}
              </li>
            ))}
            <li className="transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer">
              <LanguageSwitcher />
            </li>
          </ul>
          <div
            className="desktop:hidden grid grid-cols-[1fr_1fr_1fr] gap-1 group overflow-hidden pointer-events-auto cursor-pointer"
            onClick={menuSlide}
          >
            {["", "", "", "", "", "", "", "", ""].map((text, id) => (
              <div
                key={id}
                className={`bg-thirdly w-1.5 h-1.5 ${
                  id == 0 || id == 2 || id == 4 || id == 6 || id == 8
                    ? `${
                        id !== 0 ? "group-hover:opacity-0" : null
                      } group-hover:transform group-hover:translate-x-[11px] group-hover:translate-y-[11px] transition-all duration-300 linear`
                    : null
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {scroll ? (
        <div
          className="sticky bg-white desktop:h-[95px] !px-[5%] desktop:flex desktop:justify-between items-center 
          max-desktop:py-[1.5rem] max-sdesktop:flex max-sdesktop:justify-between"
          id="scroll"
        >
          <div className="flex items-center gap-8 max-desktop:justify-between">
            <img
              src="/assets/scrollLogo.png"
              alt="logo"
              className="h-full cursor-pointer w-[220px] h-full max-bmedium:w-[200px]"
            />
            <ul className="max-sdesktop:hidden h-full flex items-center gap-8 text-[18px] font-[500] max-bdesktop:text-[17px] max-desktop:gap-7">
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
                  className={`${text} transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer`}
                >
                  {t(`navbar.links.${text}`)}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="tel:+37410444401"
            className="max-desktop:hidden flex items-center gap-4 text-center text-[18px] font-[500] transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer"
          >
            <svg
              className={`w-[1.4rem] h-[1.4rem] max-desktop:w-[1.2rem] max-desktop:h-[1.2rem] relative fill-thirdly transition-fill ease-in-out duration-200 hover:fill-schole_primary`}
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
            <span>+374 10 44 44 01</span>
          </a>
          <div
            className="sdesktop:hidden grid grid-cols-[1fr_1fr_1fr] gap-1 group overflow-hidden pointer-events-auto cursor-pointer"
            onClick={menuSlide}
          >
            {["", "", "", "", "", "", "", "", ""].map((text, id) => (
              <div
                key={id}
                className={`bg-thirdly w-1.5 h-1.5 ${
                  id == 0 || id == 2 || id == 4 || id == 6 || id == 8
                    ? `${
                        id !== 0 ? "group-hover:opacity-0" : null
                      } group-hover:transform group-hover:translate-x-[11px] group-hover:translate-y-[11px] transition-all duration-300 linear`
                    : null
                }`}
              ></div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
