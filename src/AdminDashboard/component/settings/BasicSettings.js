import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BasicSettings = () => {
  const [AllProduct, setAllProduct] = useState([])
  useEffect(() => {
    try{
    axios.get("http://localhost:5000/seller/all_Product")
    .then(res => {
      setAllProduct(res.data)
    })
    }catch(e){
      console.log(e.message)
    }
  }, [])
  
  return (
    <div>
      <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Product Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Brand
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Seller Name
                      </th>
  
                      <th
                        scope="col"
                        className="pl-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                      Category
                      </th>
                      <th
                        scope="col"
                        className="pl-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                      Action
                      </th>
                    
                     
            
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {/* user row */}
                    {AllProduct?.map((product) => {
                      return (
                        <tr key={product?._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />
  
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-medium text-gray-800 dark:text-white ">
                                    {product?.name?.slice(0, 20)}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
  
                              <h2 className="text-sm font-normal text-emerald-500">
                                {product?.brand}
                              </h2>
                            </div>
                          </td>
                          <td className="px-2 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
  
                              <h2 className="text-sm font-normal text-emerald-500">
                                {product?.sellerName}
                              </h2>
                            </div>
                          </td>


                          <td className="px-2 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {product?.category}
                          </td>
                          <td className="pl-2 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center">
                              <Link to ={`/details/${product?._id}`} className="pl-2 py-1 text-xs p-2 font-bold hover:cursor-pointer text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                 Details
                              </Link>
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

    </div>
  );
};

export default BasicSettings;