import React from "react";
import { useLoaderData } from "react-router-dom";
import { useGetProductDetailsByIDQuery } from "../features/API/APISlice";

const DetailsDescription = () => {
  const products = useLoaderData();

  const { data } = useGetProductDetailsByIDQuery(products._id);
  return (
    <div className="mx-10 sm:mx-20 mb-20">
      <div className="space-y-52">
        <div className="flex flex-col-reverse md:flex-row items-center gap-20">
          <div className="w-full">
            <p className="text-2xl font-semibold">{data?.name}</p>
            <p className="my-4">{data && data?.description}</p>
          </div>
          <img
            src={data && data?.images[1]}
            className="md:w-[300px] md:h-[300px] lg:h-full lg:w-[600px] rounded-3xl"
            alt=""
          />
        </div>
        <div className="md:flex items-center gap-20 mt-20">
          <img
            src={data && data?.images[2]}
            className="md:w-[300px] md:h-[300px] lg:h-full lg:w-[600px] rounded-3xl"
            alt=""
          />
          <div className="w-full">
            <p className="text-2xl font-semibold">{data?.name}</p>
            <p>{data && data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDescription;
