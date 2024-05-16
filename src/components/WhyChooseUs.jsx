import React from "react";
import { ChooseLine } from "./common/IconImg";
import { WhyChoose } from "./common/MapData";

const WhyChooseUs = () => {
  return (
    <>
      <div className="xl:pt-[141px] xl:pb-[150px] lg:py-[90px] md:py-[70px] sm:py-[55px] py-12">
        <div className="container xl:max-w-[1164px] mx-auto px-3">
          <p className="!tracking-letterspacing-xs font-medium text-base text-black text-center uppercase flex justify-center items-center gap-[11px] mb-4">
            <ChooseLine />
            Why Choose Us
            <ChooseLine />
          </p>
          <h2
            className="leading-lh-xxs font-bold text-black ff_hurmebold sm:text-text-sm text-3xl text-center md:mb-[50px] sm:mb-[40px] mb-6
          ]"
          >
            Unmatched{" "}
            <span className="ff_hurmethin font-thin">
              Expertise, Unrivalled
            </span>{" "}
            Results
          </h2>
          <div className="flex flex-row flex-wrap xl:justify-between justify-center gap-6">
            {WhyChoose.map((card, id) => {
              return (
                <div
                  key={id}
                  className="xl:w-[364px] lg:w-[30%] sm:w-5/12 w-full flex max-sm:items-center max-sm:justify-center"
                >
                  <div className="bg-white max-w-[364px] w-full h-full rounded-radius-xs px-3 pt-3 pb-4 border border-solid border-[border: 1px solid #0000001A]">
                    <img
                      src={card.img}
                      alt="whychoose img"
                      className="w-full max-w-[340px] rounded-lg mb-4"
                    />
                    <p className="capitalize font-semibold text-xl text-black mb-3 leading-lh-md">
                      {card.head}
                    </p>
                    <p className="font-normal text-color-lightblack-xs text-base">
                      {card.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
