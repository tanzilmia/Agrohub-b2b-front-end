import React from "react";
import { HomeData } from "../../../utility/HomePageFakeData";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  return (
    <section className="bg-gray-100 border-2">
      <div className="flex justify-between py-6">
        <h3 className="text-xl md:text-3xl font-bold ml-2">
          Top Products
        </h3>
        <span className="font-bold md:text-xl flex items-center hover:text-[#29BA2F] mr-2">
          <Link to="/products">View More</Link>
          <i className="ri-arrow-right-line ml-1"></i>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-x-6">
      <div className="bg-white p-4 h-[390px]">
        <p className="text-lg font-semibold">New Arrivals</p>
      <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3">
        {HomeData.slice(0,3).map((data) => {
          return (
            <main className="h-[300px]  rounded-sm mb-32 cursor-pointer hover:shadow hover:shadow-gray-400 relative">
              <Link to="details">
                <section>
                  <img className="w-40 h-40" src={data.image[0].url} alt="Makeup Box" />
                </section>
                <section className="m-3 absolute bottom-0 left-1">
                  <h2 className="text-xl font-semibold mb-2">
                    {data.name}
                  </h2>
                  {/* <p className="text-xl font-semibold mb-2">{data.title}</p> */}
                  <div className="text-center gap-x-20">
                    <div className="flex gap-2">
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                    </div>
                    <p className="text-xl font-semibold">
                      Price: ${data.price}
                    </p>
                  </div>
                </section>
              </Link>
            </main>
          );
        })}
      </div>
      </div>
      <div className="bg-white p-4 h-[390px]">
        <p className="text-lg font-semibold">Up Comming</p>
      <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3">
        {HomeData.slice(0,3).map((data) => {
          return (
            <main className="h-[300px] rounded-sm mb-32 cursor-pointer hover:shadow hover:shadow-gray-400 relative">
              <Link to="details">
                <section>
                  <img className="w-40 h-40" src={data.image[0].url} alt="Makeup Box" />
                </section>
                <section className="m-3 absolute bottom-0 left-1">
                  <h2 className="text-xl font-semibold mb-2">
                    {data.name}
                  </h2>
                  {/* <p className="text-xl font-semibold mb-2">{data.title}</p> */}
                  <div className="text-center gap-x-20">
                    <div className="flex gap-2">
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                    </div>
                    <p className="text-xl font-semibold">
                      Price: ${data.price}
                    </p>
                  </div>
                </section>
              </Link>
            </main>
          );
        })}
      </div>
      </div>
      <div className="bg-white p-4 h-[390px]">
        <p className="text-lg font-semibold">Recent selling</p>
      <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3">
        {HomeData.slice(0,3).map((data) => {
          return (
            <main className="h-[300px] rounded-sm mb-32 cursor-pointer hover:shadow hover:shadow-gray-400 relative">
              <Link to="details">
                <section>
                  <img className="w-40 h-40" src={data.image[0].url} alt="Makeup Box" />
                </section>
                <section className="m-3 absolute bottom-0 left-1">
                  <h2 className="text-xl font-semibold mb-2">
                    {data.name}
                  </h2>
                  {/* <p className="text-xl font-semibold mb-2">{data.title}</p> */}
                  <div className="text-center gap-x-20">
                    <div className="flex gap-2">
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                      <i className="ri-star-fill text-orange-500"></i>
                    </div>
                    <p className="text-xl font-semibold">
                      Price: ${data.price}
                    </p>
                  </div>
                </section>
              </Link>
            </main>
          );
        })}
      </div>
      </div>
      </div>
    </section>
  );
};

export default HomeProducts;
