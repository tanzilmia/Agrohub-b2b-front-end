import React from "react";
import { Category } from "../../../utility/HomePageFakeData";

const HomeCategoryByProduct = () => {
  return (
    <main className="bg-gray-100">
      <h2 className="text-4xl font-bold text-center m-24 mb-20 ">
        Shop By Category
      </h2>
      <section className="grid  place-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5  ">
        {Category.map((categoryData) => {
          return (
            <section className="h-72 grid place-content-center md:px-10 lg:px-20 bg-white w-60 mb-20 cursor-pointer hover:shadow hover:shadow-gray-400">
              <img src={categoryData.image} alt={categoryData.name} />

              <h2 className="text-xl font-semibold text-center  text-[#29BA2F]  ">
                {categoryData.category}
              </h2>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomeCategoryByProduct;
