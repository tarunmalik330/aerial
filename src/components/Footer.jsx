import React from "react";
import logo from "../assets/images/png/footer-logo.png";
import instasocialicon from "../assets/images/svg/instasocialicon.svg";
import telegramsocialicon from "../assets/images/svg/telegramsocialicon.svg";
import youtubesocialicon from "../assets/images/svg/youtubesocialicon.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-bg-darkblack pt-[45px]">
        <div className="container xl:max-w-[1164px] px-3 mx-auto">
          <div className="flex flex-row flex-wrap justify-between pb-[34.98px]">
            <div className="lg:w-4/12 w-full">
              <img
                src={logo}
                alt="logo"
                className="w-full sm:max-w-[96.39px] max-w-[75.39px] mb-2"
              />
              <p className="text-color-grey font-normal text-base leading-lh-md lg:max-w-[388px] mb-[27px]">
                Lorem ipsum dolor sit amet consectetur. Vulputate ac amet
                commodo adipiscing interdum netus id.
              </p>
              <div className="flex gap-[13px]">
                <a href="https://www.instagram.com/" target="blank">
                  <img src={instasocialicon} alt="instasocialicon" />
                </a>
                <a href="https://telegram.org/" target="blank">
                  <img src={telegramsocialicon} alt="telegramsocialicon" />
                </a>
                <a href="https://www.youtube.com/" target="blank">
                  <img src={youtubesocialicon} alt="youtubesocialicon" />
                </a>
              </div>
            </div>
            <div className="lg:w-6/12 w-full lg:pt-0 pt-8">
              <div className="flex flex-row flex-wrap justify-between">
                <div className="sm:w-4/12 w-6/12">
                  <h6 className="capitalize text-base font-medium text-color-lightgrey mb-[10px]">
                    Quick Links
                  </h6>
                  <ul className="flex flex-col gap-[10px]">
                    <li>
                      <a
                        className="text-color-grey font-normal text-base leading-lh-md"
                        href="#home"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-color-grey font-normal text-base leading-lh-md"
                        href="#home"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-color-grey font-normal text-base leading-lh-md"
                        href="#home"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-color-grey font-normal text-base leading-lh-md"
                        href="#home"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sm:w-4/12 w-6/12">
                  <h6 className="capitalize text-base font-medium text-color-lightgrey mb-[10px]">
                    About Us
                  </h6>
                  <ul className="flex flex-col gap-[10px]">
                    <li>
                      <a
                        className="text-color-grey capitalize font-normal text-base leading-lh-md"
                        href="#home"
                      >
                        Why We are Best
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-color-grey capitalize font-normal text-base leading-lh-md"
                        href="#home"
                      >
                        What We Do
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sm:w-4/12 w-6/12 sm:pt-0 pt-5">
                  <h6 className="capitalize text-base font-medium text-color-lightgrey mb-[10px]">
                    Register
                  </h6>
                  <ul className="flex flex-col gap-[10px]">
                    <li>
                      <a
                        className="text-color-grey capitalize font-normal text-base leading-lh-md"
                        href="#home"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-color-grey text-nowrap capitalize font-normal text-base leading-lh-md"
                        href="#home"
                      >
                        Privacay and Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-color-grey text-nowrap capitalize font-normal text-base leading-lh-md"
                        href="#home"
                      >
                        Terms and Condition
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-solid border-[#FFFFFF80] w-full"></div>
        <p className="capitalize leading-lh-md font-normal text-base text-color-lightgrey text-center py-[20px]">
          © {new Date().getFullYear()} Hartley Aerial. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
