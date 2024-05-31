import React from "react";
import needimg from "../assets/images/png/needimg.png";
import { ChooseLine } from "./common/IconImg";
import adaptation from "../assets/images/svg/adaptation.svg";
import Knowledge from "../assets/images/svg/knowledge-img.svg";
import dotesimg from "../assets/images/png/dotsimg.png";
import btnarrow from "../assets/images/svg/btnarrow.svg";

const EveryNeed = () => {
  return (
    <>
      <div className="bg-bg-lightyellow lg:pt-[88.94px] xl:pb-[118.48px] lg:pb-[89px] sm:py-[60px] py-[50px]">
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
                    Knowledge
                  </p>
                  <img
                    src={Knowledge}
                    alt="Knowledge"
                    className="max-sm:w-[25px]"
                  />
                </div>
                <div className="absolute sm:py-[15px] cursor-pointer sm:pr-[18px] sm:pl-[15px] p-2 rounded-radius-xs bg-white flex items-center gap-2 right-[10%] top-[2%] z-[2]">
                  <img src={adaptation} alt="adaptation" />
                  <p className="capitalize text-black font-medium sm:text-base text-xs leading-lh-md">
                    Adaptation
                  </p>
                </div>
                <img
                  src={needimg}
                  alt="needimg"
                  className="w-full max-w-[539px] relative z-[1]"
                />
              </div>
            </div>
            <div className="lg:w-[42.6%] w-full flex flex-col max-lg:justify-center items-center lg:items-start">
              <p className="tracking-letterspacing-xs uppercase font-medium sm:text-base text-xs text-black leading-lh-md flex items-center sm:gap-[11px] gap-1 text-nowrap mb-4">
                <ChooseLine /> book shows our expertise
                <ChooseLine />
              </p>
              <h2 className="text-black ff_hurmebold lg:text-start text-center sm:text-text-sm text-2xl leading-lh-xxs font-bold capitalize mb-4">
                Tailored
                <span className="font-thin ff_hurmethin"> Drone Solutions
                </span>{" "}
                for Every Need
              </h2>
              <p className="text-color-lightblack-sm lg:text-start text-center text-base font-normal leading-lh-md mb-8">
                Lorem ipsum dolor sit amet consectetur. Ut viverra tortor
                accumsan donec. Amet curabitur eget integer tincidunt. Eu
                bibendum semper magna arcu quam elit egestas. Euismod quis velit
                aliquet mattis non dui. Lorem ipsum dolor sit amet consectetur.
                Ut viverra tortor accumsan donec.
              </p>
              <div className="flex w-full items-center gap-[15px] max-lg:justify-center sm:flex-row flex-col-reverse">
                <button className="text-white leading-lh-md text-nowrap text-lg font-medium py-[13px] px-[26px] rounded-radius-sm bg-bg-orange flex items-center">
                  Buy Now
                  <img src={btnarrow} alt="btnarrow" />
                </button>
                <div className="py-[5px] pl-[17px] pr-[6px] bg-white w-full max-w-[316px] rounded-radius-md flex">
                  <input
                    type="text"
                    placeholder="Email here"
                    className="leading-lh-md text-color-lightblack-xs max-w-[161px] font-thin text-lg bg-white outline-none placeholder:text-color-lightblack-xs rounded-radius-md"
                  />
                  <button className="text-white leading-lh-md text-lg font-medium py-[8px] px-[19px] rounded-radius-sm bg-bg-orange flex items-center">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EveryNeed;
