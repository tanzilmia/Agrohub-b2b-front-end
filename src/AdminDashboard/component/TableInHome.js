/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Admin Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
import React from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import { Link } from "react-router-dom";
const TableInHome = () => {
  // recent products details
  const RecentProducts = [
    {
      name: "Arthur Melo",
      status: "Active",
      role: "Seller",
      email: "authurmelo@example.com",
      productId: "#2144l12AS",
    },
    {
      name: "Arthur Melo",
      status: "Active",
      role: "Seller",
      email: "authurmelo@example.com",
      productId: "#2144l12AS",
    },
    {
      name: "Arthur Melo",
      status: "Active",
      role: "Seller",
      email: "authurmelo@example.com",
      productId: "#2144l12AS",
    },
    {
      name: "Arthur Melo",
      status: "Active",
      role: "Seller",
      email: "authurmelo@example.com",
      productId: "#2144l12AS",
    },
    {
      name: "Arthur Melo",
      status: "Active",
      role: "Seller",
      email: "authurmelo@example.com",
      productId: "#2144l12AS",
    },
  ];
  return (
    <section class="container px-4 mx-auto pt-16">
      <div class="flex items-center gap-x-3">
        <h2 class="text-lg font-medium text-gray-800 dark:text-white">
          Recent Products
        </h2>

        <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          100 users
        </span>
      </div>

      <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div class="flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                        />
                        <span>Seller Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button class="flex items-center gap-x-2">
                        <span>Status</span>

                        <AiOutlineSortAscending />
                      </button>
                    </th>

                    <th
                      scope="col"
                      class="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button class="flex items-center gap-x-2">
                        <span>Role</span>

                        <CiCircleQuestion />
                      </button>
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Email address
                    </th>

                    <th
                      scope="col"
                      class="pl-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Product Id
                    </th>

                    <th scope="col" class="relative py-3.5 px-4">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {/* user row */}
                  {RecentProducts &&
                    RecentProducts.slice().map((product, id) => {
                      return (
                        <tr>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />

                              <div class="flex items-center gap-x-2">
                                <div>
                                  <h2 class="font-medium text-gray-800 dark:text-white ">
                                    {product.name}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-2 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                              <h2 class="text-sm font-normal text-emerald-500">
                                {product.status}
                              </h2>
                            </div>
                          </td>
                          <td class="px-2 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {product.role}
                          </td>
                          <td class="px-2 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {product.email}
                          </td>
                          <td class="pl-2 py-4 text-sm whitespace-nowrap">
                            <div class="flex items-center">
                              <p class="pl-2 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                {product.productId}
                              </p>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between mt-6">
        <Link
          to="/"
          class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>previous</span>
        </Link>

        <div class="items-center hidden lg:flex gap-x-3">
          <Link
            to="/"
            class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
          >
            1
          </Link>
          <Link
            to="/"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            2
          </Link>
          <Link
            to="/"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            3
          </Link>
          <Link
            to="/"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            ...
          </Link>
          <Link
            to="/"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            12
          </Link>
          <Link
            to="/"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            13
          </Link>
          <Link
            to="/"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            14
          </Link>
        </div>

        <Link
          to="/"
          class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <span>Next</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default TableInHome;
