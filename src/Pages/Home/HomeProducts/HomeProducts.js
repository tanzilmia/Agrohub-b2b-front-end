import React from "react";
import { HomeData } from "../../../utility/HomePageFakeData";

const HomeProducts = () => {
  return (
    <section className="bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-20">Top Products</h2>

      <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4  mb-5">
        {HomeData.map((data) => {
          return (
            <main className="w-80 bg-white h-[480px] rounded-sm mb-32 cursor-pointer hover:shadow hover:shadow-gray-400 relative">
              <section>
                <img className="" src={data.image[0].url} alt="Makeup Box" />
              </section>
              <section className="m-3 absolute bottom-0 left-1">
                <h2 className="text-2xl text-[#29BA2F] font-bold mb-2">
                  {data.name}
                </h2>
                {/* <p className="text-xl font-semibold mb-2">{data.title}</p> */}
                <div className="flex gap-2">
                  <i className="ri-star-fill text-[#29BA2F]"></i>
                  <i className="ri-star-fill text-[#29BA2F]"></i>
                  <i className="ri-star-fill text-[#29BA2F]"></i>
                  <i className="ri-star-fill text-[#29BA2F]"></i>
                  <i className="ri-star-fill text-[#29BA2F]"></i>
                </div>
                <p className="text-xl font-semibold">${data.price}</p>
              </section>
            </main>
          );
        })}
      </div>
    </section>
  );
};

export default HomeProducts;
