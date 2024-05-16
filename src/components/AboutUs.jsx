import React from "react";
import meetsky from "../assets/images/png/meet-sky.png";
import aboutline from "../assets/images/svg/smallline.svg";

const AboutUs = () => {
  return (
    <>
      <div className="bg-bg-lightyellow pt-[62px] pb-[115px]">
        <div className="container xl:max-w-[1164px] px-3 mx-auto">
          <div className="flex flex-row flex-wrap">
            <div className="w-6/12">
              <img
                src={meetsky}
                alt="meetsky"
                className="w-full max-w-[539px]"
              />
            </div>
            <div className="w-5/12">
              <p className="tracking-letterspacing-xs font-medium text-base text-black leading-lh-md flex items-center gap-[11px] mb-4">
                <img src={aboutline} alt="aboutline" /> About US
                <img src={aboutline} alt="aboutline" />
              </p>
              <h2 className="text-black ff_hurmebold text-text-sm leading-lh-xxs font-bold capitalize mb-4">
                Get to Know Us:{" "}
                <span className="font-thin ff_hurmethin">Where Innovation</span>{" "}
                Meet Sky
              </h2>
              <p className="text-color-lightblack-sm text-base">
                We at Hartley Aerial cherish the role that we play in the drone
                service industry. We make it easy for your company, regardless
                of its size, to acquire professional drone imagery and data,
                anywhere you may need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
