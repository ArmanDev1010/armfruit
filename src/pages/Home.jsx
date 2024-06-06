import React, { useContext, useEffect } from "react";

import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Partners from "../components/pertners/Partners.jsx";
import AboutScroll from "../components/about/AboutScroll.jsx";

import { MyContext } from "../context/MyContext.js";
import Menu from "../components/navbar/Menu.jsx";
import Footer from "../components/footer/Footer.jsx";
import ExportImport from "../components/export&import/ExportImport.jsx";
import Contact from "../components/contact/Contact.jsx";
import Production from "../components/production/Production.jsx";

const Home = () => {
  const { targetId, is_Click, setIs_Click } = useContext(MyContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (document.getElementById(targetId) && is_Click) {
        window.scrollTo({
          behavior: "smooth",
          top:
            document.getElementById(targetId).getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            100,
        });
        setIs_Click(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [targetId && is_Click]);

  return (
    <div className="relative">
      <Hero />
      <Menu />
      <AboutScroll />
      <Partners />
      <ExportImport which="export" />
      <ExportImport which="import" />
      <Production />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
