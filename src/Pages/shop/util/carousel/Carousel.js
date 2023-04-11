import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import "swiper/swiper-bundle.css";
import CarouselCard from "./CarouselCard";
import { products } from "./carouselData";

SwiperCore.use([Navigation, Autoplay]);

const Carousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateCarousel = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSlidesToShow(1);
      } else if (screenWidth <= 1024) {
        setSlidesToShow(2);
      } else if (screenWidth <= 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateCarousel();

    window.addEventListener("resize", updateCarousel);
    return () => {
      window.removeEventListener("resize", updateCarousel);
    };
  }, []);

  return (
    <div>
      <Swiper
        className="mySwiper"
        spaceBetween={10}
        slidesPerView={slidesToShow}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 2500 }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <CarouselCard product={product} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default Carousel;
