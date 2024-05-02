import React, { useContext, useEffect } from "react";

import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Partners from "../components/pertners/Partners.jsx";
import AboutScroll from "../components/about/AboutScroll.jsx";

import { MyContext } from "../context/MyContext.js";
import Menu from "../components/navbar/Menu.jsx";
import Footer from "../components/footer/Footer.jsx";

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
    <div className="">
      <div className="relative z-[9999999] top desktop:h-screen" id="hero_full">
        <Navbar />
        <Hero />
      </div>
      <Menu />
      <Partners />
      <AboutScroll />
      <Footer />
    </div>
  );
};

export default Home;
