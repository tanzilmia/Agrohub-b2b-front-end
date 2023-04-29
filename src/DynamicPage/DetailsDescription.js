import React from "react";
import { useLoaderData } from "react-router-dom";
import { useGetProductDetailsByIDQuery } from "../features/API/APISlice";

const DetailsDescription = () => {
  const products = useLoaderData();

  const { data } = useGetProductDetailsByIDQuery(products._id);
  return (
    <div className="pb-20">
      <div>
        <div className="flex justify-center">
          <img
            src={data && data?.images[1]}
            className="rounded-l-lg lg:w-[640px] lg:h-[427px] w-[340px] h-[227px]"
            alt=""
          />
          <img
            src={data && data?.images[2]}
            className="rounded-r-lg lg:w-[640px] lg:h-[427px] w-[340px] h-[227px]"
            alt=""
          />
        </div>

        <div>
          <h1 className="text-center text-2xl mt-10 font-medium">
            {data?.name}
          </h1>

          <div>
            <p className="text-center font-bold mt-5 underline">
              Product Posted
            </p>
            <div className="w-full mt-2">
              <img
                class="w-20 h-20 rounded mx-auto"
                src={data && data?.sellerProfilePicture}
                alt="Large avatar"
              />
            </div>
            <p className="text-center font-semibold">{data?.sellerName}</p>
          </div>

          <div className="flex justify-around my-5">
            <div>
              <span>
                <span className="text-lg font-medium">Category:</span>
                <span className="ml-2 text-gray-700 ">{data?.category}</span>
              </span>
            </div>
            <div>
              <span>
                <span className="text-lg font-medium">Brand:</span>
                <span className="ml-2 text-gray-700 ">{data?.brand}</span>
              </span>
            </div>
          </div>

          <div className="flex justify-around text-xl">
            <p>
              <span className="font-medium ">Regular Price:</span>

              <span className="text-gray-700 ml-2  font-bold">
                <span className="text-orange-500 ">$</span>
                {data?.newPrice}
              </span>
            </p>
            <p>
              <span className="font-medium ">Old Price:</span>

              <span className="text-gray-700 ml-2  font-bold">
                <span className="text-orange-500 ">$</span>
                {data?.oldPrice}
              </span>
            </p>
          </div>

          <p className="text-lg mt-5 w-11/12 mx-auto text-justify text-gray-700">
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsDescription;
