import React, { useRef } from "react";
import {
  ChooseLine,
  SliderLeftArrow,
  SliderRightArrow,
} from "./common/IconImg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { blogcard } from "./common/MapData";

const TheNews = () => {
  const sliderRef = useRef(null);
  return (
    <>
      <div className="xl:pb-[150px] lg:pb-[90px] md:pb-[70px] sm:pb-[55px] pb-12">
        <div className="container xl:max-w-[1164px] mx-auto px-3">
          <div className="flex justify-between sm:flex-row flex-col items-center lg:mb-[34px] sm:mb-6 mb-4">
            <div className="flex sm:gap-4 gap-3 flex-col sm:mb-0 mb-3">
              {" "}
              <p className="capitalize tracking-letterspacing-xs font-medium text-base leading-lh-md flex items-center max-lg:justify-center gap-[11px]">
                <ChooseLine />
                In The News
                <ChooseLine />
              </p>
              <h2 className="ff_hurmebold font-bold sm:text-text-sm text-3xl lg:text-start text-center leading-lh-md">
                Read <span className="ff_hurmethin font-thin">Our Blog to</span>{" "}
                Learn More
              </h2>
            </div>
            <div className="flex gap-[10.1px]">
              <button className="prevbtn">
                <SliderLeftArrow />
              </button>
              <button className="nextbtn">
                <SliderRightArrow />
              </button>
            </div>
          </div>
          <Swiper
            ref={sliderRef}
            spaceBetween={24}
            // modules={[Virtual]}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              620: { slidesPerView: 2 },
            }}
            navigation={{ nextEl: ".nextbtn", prevEl: ".prevbtn" }}
            modules={[Pagination, Navigation]}
          >
            {blogcard.map((blogitem, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[558px] w-full h-full sm:min-h-[467px] min-h-[420px] border border-solid border-[#0000001A] pt-[14px] pl-3 pb-[20px] pr-[11px] rounded-radius-xs hover:border-[#E67E221A] hover:shadow-[0px_6px_19.5px_0px_#0000001A] transition-all ease-linear duration-300"
              >
                <div className="flex flex-col items-start justify-between h-full">
                  <div className="flex flex-col ">
                    <img
                      className="rounded-md"
                      src={blogitem.img}
                      alt="News Images"
                    />
                    <p className="font-medium text-base text-color-lightblack-xs leading-lh-xsm mt-[14px]">
                      {blogitem.date}
                    </p>
                    <h3 className="mt-2 font-medium text-black lg:text-xl text-base leading-lh-md">
                      {blogitem.heading}
                    </h3>
                    <p className="mt-4 font-normal text-base text-color-lightblack-xs leading-lh-md lg:pr-2">
                      {blogitem.paragraph}
                    </p>
                  </div>
                  <button className="mt-6 font-medium text-lg text-color-orange leading-lh-xsm">
                    {blogitem.readbtn}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TheNews;
