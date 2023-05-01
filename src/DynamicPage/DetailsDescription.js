import React from "react";
import { useLoaderData } from "react-router-dom";
import { useGetProductDetailsByIDQuery } from "../features/API/APISlice";
import { MdCategory, MdOutlineBrandingWatermark } from "react-icons/md";

const DetailsDescription = () => {
  const products = useLoaderData();

  const { data } = useGetProductDetailsByIDQuery(products._id);
  return (
    <div className="pb-20 lg:mx-10 mx-5">
      <div className="flex items-center">
        <img
          class="w-16 h-16 rounded"
          src={data && data?.sellerProfilePicture}
          alt="Large avatar"
        />
        <p className="ml-3">
          <span className="font-bold">Author:</span>{" "}
          <span className="font-medium">{data?.sellerName}</span>
        </p>
      </div>
      <p className="my-10 lg:text-xl  font-medium text-center">{data?.name}</p>
      <div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <MdCategory className="lg:w-7 lg:h-7 w-5 h-5 text-orange-300"></MdCategory>{" "}
            <span className="lg:text-2xl font-semibold">{data?.category}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdOutlineBrandingWatermark className="lg:w-7 lg:h-7 w-5 h-5 text-orange-300"></MdOutlineBrandingWatermark>{" "}
            <span className="lg:text-2xl font-semibold">{data?.brand}</span>
          </div>
        </div>
        <div className="lg:flex lg:space-x-3 lg:space-y-0 space-y-3 my-5 justify-evenly">
          <img
            src={data && data?.images[0]}
            className="w-[36rem] h-96 rounded-3xl"
            alt=""
          />
          <img
            src={data && data?.images[1]}
            alt=""
            className="w-[36rem] h-96 rounded-3xl"
          />
        </div>
        <p className="mt-20 text-justify">{data?.description}</p>
      </div>
    </div>
  );
};

export default DetailsDescription;
