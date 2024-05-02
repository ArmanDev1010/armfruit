import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    localStorage.setItem("armfruit-language", newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <select value={i18n.language} onChange={handleLanguageChange} className="bg-transparent !border !border-white cursor-pointer font-[400]">
      <option value="am" className="bg-white text-black">ՀԱՅ</option>
      <option value="en" className="bg-white text-black">ENG</option>
      <option value="ru" className="bg-white text-black">РУС</option>
    </select>
  );
};

export default LanguageSwitcher;
