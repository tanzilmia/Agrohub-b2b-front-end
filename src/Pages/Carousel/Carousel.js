import React, { useEffect, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaRegDotCircle,
} from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://i.ibb.co/HtRP4PZ/bag-removebg-preview.png",
      name: "Bag",
      offer: "50%",
     },
    {
      url: "https://i.ibb.co/N2GGZ7L/headphone-removebg-preview.png",
      name: "Headphone",
      offer: "40%",
     },
    {
      url: "https://i.ibb.co/ZL2Pm37/shoes-removebg-preview.png",
      name: "Nike Shoe",
      offer: "60%",
     },
    {
      url: "https://i.ibb.co/jV0GCtc/laptop-removebg-preview.png",
      name: "Laptop",
      offer: "30%",
      },
    {
      url: "https://i.ibb.co/L088QFj/cloth-removebg-preview.png",
      name: "Comfort Cloth",
      offer: "20%",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        nextSlide();
      }, 2500);
    return () => {
      clearTimeout(timeOut);
    };
  });
  console.log(slides[currentIndex].url)
  return (
    <div
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      className="max-w-full h-[300px] xl:h-[500px] w-full m-auto pb-16 mt-4 relative cursor-pointer group"
    >
      <div
      //  style={{
      //   backgroundImage: `url("${slides[currentIndex].url}")`,
      // }}
        className="grid grid-cols-3 lg:px-20 justify-center items-center w-full h-full bg-gray-100 bg-center bg-cover duration-500"
      >
        <div className="col-span-2">
        <p className="font-semibold text-4xl mb-6 ml-2">
          <span className="text-red-500">{slides[currentIndex].offer}</span> Off For Your First Shopping <br/> This Product
        </p>
        <p className="font-semibold text-2xl mb-6 mr-10">
        This offer for your first shopping. If you can get offer please purchase now this product or visit more and see huge collection
        </p>
        <button className="border bg-red-600 text-white text-xl px-4 py-2">Visit Collections</button>
        </div>
        <div className="col-span-1">
          <img className="w-80 h-80" src={slides[currentIndex].url}></img>
          <p className="font-semibold text-2xl text-center mt-4 text-red-500 ml-2">
          {slides[currentIndex].name}
        </p>
        </div>
        
      </div>
      {/* Left Arrow  */}

      <FaRegArrowAltCircleLeft
        onClick={prevSlide}
        className="hidden group-hover:block  absolute top-[38%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        size={50}
      ></FaRegArrowAltCircleLeft>
      {/* Right Arrow  */}
      <FaRegArrowAltCircleRight
        onClick={nextSlide}
        className="hidden group-hover:block  absolute top-[38%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        size={50}
      ></FaRegArrowAltCircleRight>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl  cursor-pointer"
          >
            <RxDotFilled></RxDotFilled>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
