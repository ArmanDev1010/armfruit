import React from "react";

const SwiperImg = ({ number }) => {
  return (
    <div
      className="w-full h-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(/assets/carousel/${number}.jpg)`,
      }}
    ></div>
  );
};

export default SwiperImg;
