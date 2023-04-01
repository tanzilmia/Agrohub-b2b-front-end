import React from "react";
import { HomeData } from "../../../utility/HomePageFakeData";

const HomeProducts = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-20">Top Products</h2>

      <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4  mb-5">
        {HomeData.map((data) => {
          return (
            <main className="h-96 w-80 mb-32 cursor-pointer">
              <section>
                <img className="" src={data.image[0].url} alt="Makeup Box" />
              </section>
              <section className="m-3">
                <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
                <p className="text-xl font-semibold mb-2">{data.title}</p>
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
