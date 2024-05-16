import React from "react";
import serviceline from "../assets/images/svg/smallline.svg";

const Service = () => {
  return (
    <>
      <div className="pt-[150px]">
        <div className="container xl:max-w-[1164px] mx-auto px-3">
          <p className="text-black text-base font-medium tracking-letterspacing-xs text-center flex gap-[11px] items-center justify-center mb-4">
            <img src={serviceline} alt="serviceline" />
            Services
            <img src={serviceline} alt="serviceline" />
          </p>
          <h2 className="leading-lh-xxs text-center ff_hurmebold sm:text-text-sm text-3xl font-bold mb-[50px]">
            Your <span className="font-thin ff_hurmethin">Gateway to</span>{" "}
            Aerial Excellence
          </h2>
          <div className="flex flex-row flex-wrap"></div>
        </div>
      </div>
    </>
  );
};

export default Service;
