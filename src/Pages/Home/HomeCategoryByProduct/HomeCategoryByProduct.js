import React from "react";
import { Category } from "../../../utility/HomePageFakeData";

const HomeCategoryByProduct = () => {
  return (
    <main>
      <h2 className="text-4xl font-bold text-center m-24 mb-20">
        Shop By Category
      </h2>
      <section className="grid  place-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5  ">
        {Category.map((categoryData) => {
          return (
            <section className="h-72 w-60 mb-20 cursor-pointer">
              <img src={categoryData.image} alt={categoryData.name} />

              <h2 className="text-xl font-semibold text-center underline hover:no-underline">
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
