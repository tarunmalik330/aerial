import React, { useState } from "react";
import pagelogo from "../assets/images/png/pagelogo.png";
import { NavBtnArrow } from "./common/IconImg";
import Hamburger from "hamburger-react";

const Hero = () => {
  const [nav, setNav] = useState(false);
  if (nav === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <>
      <div className="bg-[url('./assets/images/png/header-bg.png')] bg-center bg-no-repeat lg:bg-bgsize bg-cover xl:min-h-screen flex flex-col">
        <div className="container xl:max-w-[1164px] mx-auto px-3 pt-[24.64px]">
          <div className="flex justify-between">
            <a href="">
              <img
                src={pagelogo}
                alt="pagelogo"
                className="w-full sm:max-w-[91.97px] max-w-[50px]"
              />
            </a>
            <div className="flex gap-[120px]">
              <ul
                className={`${nav ? "left-0" : "left-[-100%]"}
            max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:z-[20] max-lg:transition-all max-lg:ease-linear max-lg:duration-300 max-lg:min-h-screen max-lg:flex-col max-lg:justify-center flex xl:gap-[126px] lg:gap-[70px] gap-9 items-center max-lg:bg-black`}
              >
                <li onClick={() => setNav(!nav)}>
                  <a
                    href="#home"
                    className="font-normal text-base text-white uppercase leading-lh-sm hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    HOME
                  </a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a
                    href="#home"
                    className="font-normal text-base text-white uppercase leading-lh-sm hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    ABOUT
                  </a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a
                    href="#home"
                    className="font-normal text-base text-white uppercase leading-lh-sm hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    SERVICES
                  </a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a
                    href="#home"
                    className="font-normal text-base text-white uppercase leading-lh-sm hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    BLOG
                  </a>
                </li>
                <li className="lg:hidden flex">
                  {" "}
                  <button className="py-[14.5px] px-[27px] border border-solid border-white font-medium text-lg leading-lh-md rounded-[221px] text-white flex gap-[2px]">
                    Contact
                    <NavBtnArrow />
                  </button>
                </li>
              </ul>
              <div>
                <button className="py-[14.5px] lg:flex hidden px-[27px] border border-solid border-white font-medium text-lg leading-lh-md rounded-[221px] text-white gap-[2px]">
                  Contact
                  <NavBtnArrow />
                </button>
                <div
                  onClick={() => setNav(!nav)}
                  className="lg:hidden flex relative z-20"
                >
                  <Hamburger
                    color="white"
                    toggled={nav}
                    toggle={setNav}
                    size={25}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container xl:max-w-[1164px] flex-col mx-auto px-3 flex items-center justify-center xl:flex-grow max-xl:pb-[100px] max-xl:pt-[120px] max-sm:pt-[80px]">
          <h1 className="text-white xl:text-8xl md:text-7xl capitalize sm:text-6xl text-4xl leading-lh-xs text-center ff_hurmebold font-bold lg:max-w-[861px] mx-auto sm:mb-[30.22px] mb-4">
            Professional{" "}
            <span className="xl:text-text-lg md:text-8xl sm:text-7xl text-5xl text-color-orange">
              Aerial{" "}
            </span>
            Solutions
          </h1>
          <p className="font-normal text-color-lightblack sm:text-xl text-base leading-lh-md lg:max-w-[564px] text-center">
            We at Hartley Aerial cherish the role that we play in the drone
            service industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
