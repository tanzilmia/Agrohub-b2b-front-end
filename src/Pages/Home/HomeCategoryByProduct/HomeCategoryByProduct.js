import React from "react";
import { Category } from "../../../utility/HomePageFakeData";
import { Link } from "react-router-dom";

const HomeCategoryByProduct = () => {
  return (
    <main className="mx-10 my-40">
      <h2 className="lg:text-2xl text-2xl font-semibold text-center lg:m-24 mt-32 lg:mb-10 mb-16">
        Shop By Category
      </h2>
      <section className="grid place-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5 lg:gap-5 gap-y-5 px-5">
        {Category.map((categoryData, index) => {
          return (
            <Link
              to="#"
              key={index}
              className="block rounded-lg w-full overflow-hidden shadow-2xl shadow-indigo-100 hover:shadow-2xl transition-all duration-300 hover:bg-indigo-100 transform hover:-translate-x-2 hover:scale-105"
            >
              <img
                src={categoryData.image}
                alt="Category"
                className="h-44 w-full object-cover"
              />
              <div className="px-4 py-3">
                <h3 className="text-base font-medium mb-1 text-center transition-all duration-300 hover:text-white">
                  {categoryData.title.slice(1, 20)}
                </h3>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default HomeCategoryByProduct;
