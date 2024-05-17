import React from "react";
import serviceline from "../assets/images/svg/smallline.svg";
import { serviceslide } from "./common/MapData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import videoprodction from "../assets/images/png/videoproductionimg.png";
import { SliderLeftArrow, SliderRightArrow } from "./common/IconImg";

const Service = () => {
  const slider = React.useRef(null);
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="xl:py-[150px] lg:py-[90px] md:py-[70px] sm:py-[55px] py-12">
        <div className="container xl:max-w-[1164px] mx-auto px-3 relative">
          <button
            className="absolute bottom-[37%] left-[-7%] xl:flex hidden cursor-pointer"
            onClick={() => slider?.current?.slickPrev()}
          >
            <SliderLeftArrow />
          </button>
          <button
            className="absolute bottom-[37%] right-[-7%] xl:flex hidden cursor-pointer"
            onClick={() => slider?.current?.slickNext()}
          >
            <SliderRightArrow />
          </button>
          <p className="text-black text-base font-medium tracking-letterspacing-xs text-center flex gap-[11px] items-center justify-center mb-4">
            <img src={serviceline} alt="serviceline" />
            Services
            <img src={serviceline} alt="serviceline" />
          </p>
          <h2 className="leading-lh-xxs text-center ff_hurmebold sm:text-text-sm text-3xl font-bold mb-[50px]">
            Your <span className="font-thin ff_hurmethin">Gateway to</span>{" "}
            Aerial Excellence
          </h2>
          <Slider ref={slider} {...settings}>
            {serviceslide.map((slide, id) => {
              return (
                <div
                  key={id}
                  className="!flex lg:flex-row flex-col flex-wrap xl:justify-between justify-center max-xl:gap-9 items-center"
                >
                  <div className="xl:max-w-[526px] lg:max-w-[500px] w-ful l">
                    <p className="text-text-md text-color-orange leading-lh-lg font-bold opacity-10">
                      {slide.head}
                    </p>
                    <p className="ff_hurmebold font-bold text-text-xs text-black capitalize mb-4">
                      {slide.heading2}
                    </p>
                    <p className="text-base leading-lh-md text-color-lightblack-sm font-normal">
                      {slide.content}
                    </p>
                  </div>
                  <div className="xl:max-w-[563px] lg:max-w-[435px] w-fu ll">
                    <img
                      src={videoprodction}
                      alt="videoprodction"
                      className="rounded-radius-xs"
                    />
                  </div>
                  <div className="flex gap-5 xl:hidden">
                    <button onClick={() => slider?.current?.slickPrev()}>
                      <SliderLeftArrow />
                    </button>
                    <button onClick={() => slider?.current?.slickNext()}>
                      <SliderRightArrow />
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Service;
