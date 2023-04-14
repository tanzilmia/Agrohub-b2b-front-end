import React, { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "http://magento2.magentech.com/themes/sm_metro/pub/media/wysiwyg/slideshow/home-2/item-1.jpg",
    },
    {
      url: "http://magento2.magentech.com/themes/sm_metro/pub/media/wysiwyg/slideshow/home-2/item-3.jpg",
    },

    {
      url: "http://magento2.magentech.com/themes/sm_metro/pub/media/wysiwyg/slideshow/home-2/item-2.jpg",
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
  }, [currentIndex, autoPlay, slides.length]);

  return (
    <div
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      className="max-w-full h-[300px] xl:h-[450px] relative cursor-pointer group mt-2"
    >
      <div
        style={{ backgroundImage: `url("${slides[currentIndex].url}")` }}
        className="h-[300px] xl:h-[450px] bg-white bg-center bg-cover duration-500"
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

{
  /* <div className="col-span-2">
                <p className="font-semibold text-4xl mb-6 ml-2">
                  <span className="text-red-500">{slides[currentIndex].offer}</span>{" "}
                  Off For Your First Shopping <br /> This Product
                </p>
                <p className="font-semibold text-2xl mb-6 mr-10">
                  This offer for your first shopping. If you can get offer please
                  purchase now this product or visit more and see huge collection
                </p>
                <button className="border bg-red-600 text-white text-xl px-4 py-2">
                  Visit Collections
                </button>
              </div> */
}
{
  /* <div className="col-span-1">
                <img className="w-80 h-80" src={slides[currentIndex].url}></img>
                <p className="font-semibold text-2xl text-center mt-4 text-red-500 ml-2">
                  {slides[currentIndex].name}
                </p>
              </div> */
}
