import React from "react";
import { useLoaderData } from "react-router-dom";

const UserReview = () => {
  const products = useLoaderData();
  return (
    <div className="mx-10 sm:mx-20 mb-20">
      <div className="flex flex-row gap-4 text-2xl font-semibold">
        <i className="ri-star-fill"></i>
        <p> 142 Review & Rating</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <div className="lg:col-span-1 gap-16 mt-8">
            {[...Array(2)].map((review) => (
              <div>
                <div className="sm:flex justify-between items-center mt-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://i.ibb.co/FH3Svpc/DSC-0008.jpg"
                      className="h-20 w-20 rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="font-semibold text-xl">Rakibul Hasan</p>
                      <p>May 03, 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <i className="ri-star-fill text-orange-500"></i>
                    <i className="ri-star-fill text-orange-500"></i>
                    <i className="ri-star-fill text-orange-500"></i>
                    <i className="ri-star-fill text-orange-500"></i>
                    <i className="ri-star-fill text-orange-500"></i>
                  </div>
                </div>
                <p className="mt-4 text-xl">
                  Very nice feeling sweater. I like it better than a regular
                  hoody because it is tailored to be a slimmer fit. Perfect for
                  going out when you want to stay comfy.
                </p>
              </div>
            ))}
          </div>
          <button className="mt-16 border-2 py-3 px-6 rounded-full hover:bg-orange-600 hover:text-white">
            Show me all reviews
          </button>
        </div>
        <div className="lg:col-span-1">
          <div>
            <h2 className="text-2xl font-semibold my-2">Review this product</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <p className="flex gap-2 mb-4 text-xl font-semibold">
              Your Rating :
              <span className="flex gap-2 ">
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
              </span>
            </p>
          </div>
          <div>
            <textarea
              className="border-2 p-2 w-full"
              placeholder="Write your review here..."
              name=""
              id=""
              cols="70"
              rows="5"
            ></textarea>
            <span>
              <label htmlFor="">Your name</label>
              <input
                className="p-2 border-2 w-full"
                placeholder="Type here..."
                type="text"
              />
            </span>
            <span>
              <label htmlFor="email">Your email</label>
              <input
                className="p-2 border-2 w-full"
                name="email"
                placeholder="Type here..."
                type="text"
              />
            </span>
          </div>
          <button className="border-2 px-8 py-2 bg-green-600 text-white mt-6">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
