import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsDescription = () => {
  const products = useLoaderData();
  return (
    <div className="mx-10 sm:mx-20 mb-20">
      <div className="">
        <div className="flex flex-col-reverse md:flex-row items-center gap-20">
          <div>
            <p>Galaxy A8 tablet</p>
            <p className="text-2xl font-semibold">Your world at a glance</p>
            <p className="my-4">
              With a slim design, a vibrant entertainment system, and
              outstanding performance, the new Galaxy Tab A7 is a stylish new
              companion for your life.Dive head-first into the things you love,
              and easily share your favorite moments. Learn, explore, connect
              and be inspired.
            </p>
            <p className="text-2xl font-semibold">
              Draw inspiration with S Pen
            </p>
            <p className="my-4">
              The St. Louis Meramec Canoe Company was founded by Alfred Wickett
              in 1922. Wickett had previously worked for the Old Town Canoe Co
              from 1900 to 1914. Manufacturing of the classic wooden canoes in
              Valley Park, Missouri ceased in 1978.
            </p>
          </div>
          <img
            src="https://i.ibb.co/WzsXgTZ/product-details-desc-1.jpg"
            className="md:w-[300px] md:h-[300px] lg:h-full lg:w-full"
            alt=""
          />
        </div>
        <div className="md:flex items-center gap-20 mt-20">
          <img
            src="https://i.ibb.co/YpLfmt1/product-details-desc-2.jpg"
            className="md:w-[300px] md:h-[300px] lg:h-full lg:w-full"
            alt=""
          />
          <div>
            <p className="text-2xl font-semibold">
              Carry with <br />
              Confidence and style
            </p>
            <p>
              Wrap your tablet in a sleek case that's as stylish as it is
              convenient. Galaxy Tab S6 Lite Book Cover folds around and clings
              magnetically, so you can easily gear up as you're headed out the
              door. There's even a compartment for S pen, so you can be sure it
              doesn't get left behind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDescription;
