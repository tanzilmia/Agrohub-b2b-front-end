import React from "react";
import { HomeData } from "../../../utility/HomePageFakeData";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  return (
    <section className="bg-gray-100">
      <div className="flex justify-between py-6">
        <h3 className="text-xl md:text-3xl text-[#29BA2F] font-bold ml-2">
          Top Products
        </h3>
        <span className="font-bold md:text-xl flex items-center hover:text-[#29BA2F] mr-2">
          <button className="">View More</button>
          <i className="ri-arrow-right-line ml-1"></i>
        </span>
      </div>
      <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4  mb-5">
        {HomeData.map((data) => {
          return (
            <main className="w-80 bg-white h-[480px] rounded-sm mb-32 cursor-pointer hover:shadow hover:shadow-gray-400 relative">
              <Link to="details">
                <section>
                  <img className="" src={data.image[0].url} alt="Makeup Box" />
                </section>
                <section className="m-3 absolute bottom-0 left-1">
                  <h2 className="text-2xl text-[#29BA2F] font-bold mb-2">
                    {data.name}
                  </h2>
                  {/* <p className="text-xl font-semibold mb-2">{data.title}</p> */}
                  <div className="flex gap-x-20">
                    <div className="flex gap-2">
                      <i className="ri-star-fill text-[#29BA2F]"></i>
                      <i className="ri-star-fill text-[#29BA2F]"></i>
                      <i className="ri-star-fill text-[#29BA2F]"></i>
                      <i className="ri-star-fill text-[#29BA2F]"></i>
                      <i className="ri-star-fill text-[#29BA2F]"></i>
                    </div>
                    <p className="text-xl font-semibold text-[#29BA2F]">
                      Price: ${data.price}
                    </p>
                  </div>
                </section>
              </Link>
            </main>
          );
        })}
      </div>
    </section>
  );
};

export default HomeProducts;
