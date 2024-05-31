import React from "react";
import { ChooseLine } from "./common/IconImg";

const Reviews = () => {
  return (
    <>
      <div className="py-[67.5px]">
        <div className="container xl:max-w-[1164px] px-3 mx-auto">
          <p className="flex gap-[11px] items-center tracking-letterspacing-xs text-black font-medium text-base leading-lh-md justify-center mb-3">
            <ChooseLine />
            Reviews
            <ChooseLine />
          </p>
          <h2 className="capitalize ff_hurmebold font-bold text-text-sm text-black text-center mb-[76px]">
            Our{" "}
            <span className="ff_hurmethin font-thin">
              {" "}
              Costumers Say Something
            </span>{" "}
            About Us
          </h2>
        </div>
      </div>
    </>
  );
};

export default Reviews;
