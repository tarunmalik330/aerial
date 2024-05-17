import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { thePortfolioSecData } from "./common/MapData";
import { Virtual } from "swiper/modules";
import { SliderLeftArrow, SliderRightArrow } from "./common/IconImg";
import "swiper/swiper-bundle.css";
import porfolioline from "../assets/images/svg/smallline.svg";

const Portfolio = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[150px] relative overflow-x-clip">
      <div className="container xl:max-w-[1164px] mx-auto px-3 xl:my-6">
        <div className="flex flex-col items-center justify-between gap-7 sm:gap-10 sm:flex-row">
          <div className="flex flex-col sm:items-start">
            <p className="flex items-center gap-[11px] tracking-letterspacing-xs font-medium text-base text-black uppercase mb-3 lg:text-start text-center lg:justify-start justify-center">
              <img src={porfolioline} alt="porfolioline" />
              Portfolio
              <img src={porfolioline} alt="porfolioline" />
            </p>
            <h2 className="capitalize font-bold leading-lh-xxs ff_hurmebold text-text-sm">
              See <span className="ff_hurmethin font-thin">Our Work</span>{" "}
              Examples
            </h2>
          </div>
          <div className="flex items-center gap-5 sm:gap-[10px]">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-10 h-10 duration-300 border border-black rounded-full group prev-arrow"
            >
              <SliderLeftArrow />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-10 h-10 duration-300 border border-black rounded-full group next-arrow"
            >
              <SliderRightArrow />
            </button>
          </div>
        </div>
      </div>
      <div className="mx-2 sm:mr-0 sm:ml-5 mt-6 sm:mt-10 md:mt-[50px] min-h-[550px] lg:min-h-[603px]">
        <Swiper
          ref={sliderRef}
          spaceBetween={16}
          modules={[Virtual]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 500 }}
          speed={1000}
          centeredSlides={true}
          breakpoints={{
            556: { slidesPerView: 2 },
            920: { slidesPerView: 3 },
            1240: { slidesPerView: 4 },
          }}
        >
          {thePortfolioSecData.map((item, index) => (
            <SwiperSlide key={index} className="w-full max-w-[362px] !h-auto">
              <div className="relative group">
                <img
                  className="w-full duration-500 max-h-[506px] min-h-[506px] h-full group-hover:min-h-[550px] lg:group-hover:min-h-[603px] object-cover rounded-radius-xs"
                  src={item.portfolio}
                  alt="portfolio"
                />
                <div className="absolute z-10 top-[60%] sm:top-[70%] max-w-[280px] xl:max-w-[319px] left-4 flex flex-col w-full h-full opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:duration-300">
                  <p className="text-xl font-medium text-white">{item.title}</p>
                  <p className="mt-2 text-white opacity-70">{item.content}</p>
                  <a
                    className="mt-4 text-lg font-medium text-color-orange"
                    href="#"
                  >
                    Know more
                  </a>
                </div>
                <span className="absolute top-0 left-0 z-0 flex w-full h-full bg-black opacity-0 rounded-radius-xs group-hover:opacity-20"></span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
