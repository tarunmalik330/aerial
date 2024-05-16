import React from "react";
import meetsky from "../assets/images/png/meet-sky.png";
import aboutline from "../assets/images/svg/smallline.svg";
import btnarrow from "../assets/images/svg/btnarrow.svg";
import consultingimg from "../assets/images/svg/consulting-img.svg";
import livevideoimg from "../assets/images/svg/live-video.svg";
import dotesimg from "../assets/images/png/dotsimg.png";

const AboutUs = () => {
  return (
    <>
      <div className="bg-bg-lightyellow lg:pt-[62px] lg:pb-[115px] sm:py-[60px] py-[50px]">
        <div className="container xl:max-w-[1164px] px-3 mx-auto">
          <div className="flex flex-row flex-wrap items-center xl:justify-between max-xl:gap-12 justify-center">
            <div className="lg:w-6/12 sm:w-9/12 w-11/12">
              <div className="relative">
                <img
                  src={dotesimg}
                  alt="dotesimg"
                  className="w-full xl:max-w-[159px] lg:max-w-[124px] sm:max-w-[115px] max-w-[64px] absolute lg:bottom-[-12%] sm:bottom-[-8%] bottom-[-4%] sm:right-[-8.5%] xl:right-[-8.5%] lg:right-[-4.5%] right-[-4%]"
                />
                <div className="absolute sm:py-[15px] sm:pr-[15px] sm:pl-[26px] p-2 bg-white rounded-radius-xs bottom-[11px] left-[6%] flex items-center gap-2 cursor-pointer z-[2]">
                  <p className="capitalize text-black sm:text-base text-xs font-medium leading-lh-md">
                    Live Aerial Video
                  </p>
                  <img
                    src={livevideoimg}
                    alt="livevideoimg"
                    className="max-sm:w-[25px]"
                  />
                </div>
                <div className="absolute sm:py-[15px] cursor-pointer sm:pr-[18px] sm:pl-[15px] p-2 rounded-radius-xs bg-white flex items-center gap-2 right-[10%] top-[2%] z-[2]">
                  <img src={consultingimg} alt="consultingimg" />
                  <p className="capitalize text-black font-medium sm:text-base text-xs leading-lh-md">
                    Drone Consulting
                  </p>
                </div>
                <img
                  src={meetsky}
                  alt="meetsky"
                  className="w-full max-w-[539px] relative z-[1]"
                />
              </div>
            </div>
            <div className="lg:w-5/12 w-full flex flex-col max-lg:justify-center items-center lg:items-start">
              <p className="tracking-letterspacing-xs font-medium text-base text-black leading-lh-md flex items-center gap-[11px] mb-4">
                <img src={aboutline} alt="aboutline" /> About US
                <img src={aboutline} alt="aboutline" />
              </p>
              <h2 className="text-black ff_hurmebold lg:text-start text-center sm:text-text-sm text-2xl leading-lh-xxs font-bold capitalize mb-4">
                Get to Know Us:{" "}
                <span className="font-thin ff_hurmethin">Where Innovation</span>{" "}
                Meet Sky
              </h2>
              <p className="text-color-lightblack-sm lg:text-start text-center text-base font-normal leading-lh-md mb-8">
                We at Hartley Aerial cherish the role that we play in the drone
                service industry. We make it easy for your company, regardless
                of its size, to acquire professional drone imagery and data,
                anywhere you may need it.
              </p>
              <button className="text-white leading-lh-md text-lg font-medium py-[13px] px-[26px] rounded-radius-sm bg-bg-orange flex items-center">
                Meet the Team
                <img src={btnarrow} alt="btnarrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
