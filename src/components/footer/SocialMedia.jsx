import React from "react";
import { useTranslation } from "react-i18next";

const SocialMedia = () => {
  const { t } = useTranslation();
  return (
    <ul className="flex items-center relative gap-[2.5rem] max-tablet:gap-[1.5rem]">
      {["facebook", "instagram", "youtube"].map((text, key) => (
        <li key={key} className="cursor-pointer font-semibold">
          <a
            href={
              text == "facebook"
                ? "https://www.facebook.com/armfruit.llc1"
                : text == "instagram"
                ? "https://www.instagram.com/armfruit_"
                : "https://www.youtube.com/@armfruitllc4060"
            }
            target="_blank"
          >
            <svg
              className={`${
                text == "facebook"
                  ? "w-[1.8rem] h-[1.8rem] max-tablet:w-[1.6] max-tablet:h-[1.6rem]"
                  : text == "instagram"
                  ? "w-[1.8rem] h-[1.8rem] max-tablet:w-[1.6] max-tablet:h-[1.6rem]"
                  : "w-[2rem] h-[2rem] max-tablet:w-[1.8] max-tablet:h-[1.8rem]"
              } relative fill-gray-500 transition-fill ease-in-out duration-200 hover:fill-thirdly`}
              viewBox={`0 0 ${
                text == "facebook"
                  ? "512 512"
                  : text == "instagram"
                  ? "448 512"
                  : text == "youtube"
                  ? "50 50"
                  : null
              }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              {text == "facebook" ? (
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              ) : text == "instagram" ? (
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              ) : text == "youtube" ? (
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
              ) : null}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
