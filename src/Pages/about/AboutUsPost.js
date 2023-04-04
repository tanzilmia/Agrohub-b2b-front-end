import React from "react";
import { Link } from "react-router-dom";

const AboutUsPost = ({ id, name, text, image }) => {
  console.log({ image });
  const flexPosition =
    id % 2 === 0 ? " flex-col md:flex-row-reverse" : "md:flex-row";
  return (
    <div class={`flex min-h-screen flex-col  bg-white ${flexPosition} my-36`}>
      <div class="flex flex-col justify-center flex-1 px-8 py-8 lg:flex-none">
        <div class="w-full mx-auto lg:max-w-6xl">
          <div class="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
            <div>
              <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                {name}
              </p>
              <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600 text-justify">
                {text}
              </p>
            </div>
            <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
              <Link
                to="/"
                class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              >
                Home
              </Link>
              <Link
                to="/contactus"
                class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
              >
                Contact Us
                <span aria-hidden="true"> → </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex-1 order-first w-0 bg-gray-300 lg:block max-w-[650px]">
        <div className="">
          <img
            class="absolute inset-0 object-cover w-full h-full lg:border-l"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPost;
