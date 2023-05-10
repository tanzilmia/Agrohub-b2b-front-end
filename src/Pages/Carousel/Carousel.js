import React, { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://i.ibb.co/D737Z1j/Whats-App-Image-2023-05-09-at-11-00-28-AM.jpg",
    },
    {
      url: "https://i.ibb.co/LC74vxy/Whats-App-Image-2023-05-09-at-11-00-33-AM.jpg",
    },

    {
      url: "https://images.pexels.com/photos/5047282/pexels-photo-5047282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        setCurrentIndex(
          currentIndex === slides.length - 1 ? 0 : currentIndex + 1
        );
      }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  });
  return (
    <div
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      className="max-w-full h-[300px] xl:h-[450px] relative cursor-pointer group mt-2"
    >
      <div
        style={{ backgroundImage: `url("${slides[currentIndex].url}")` }}
        className="h-[300px] xl:h-[450px]  bg-center bg-cover duration-500"
      ></div>
      <div className="flex absolute bottom-5 left-1/2 transform -translate-x-1/2 ">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer mr-2"
          >
            {currentIndex === slideIndex ? (
              <RxDotFilled className="hover:text-[#FF5721] text-[#FF5721] transition duration-200 text-3xl"></RxDotFilled>
            ) : (
              <RxDotFilled className="hover:text-[#FF5721] text-[#666666] transition duration-200 text-3xl"></RxDotFilled>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
