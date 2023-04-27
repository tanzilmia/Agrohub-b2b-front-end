import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
 const [sellers, setsellers] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/common/sellers`)
    .then(res => {
      setsellers(res.data)
    })
    .catch((e)=> console.log(e))
    
  }, [])


  const deleteSeller = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
  
    if (confirmed) {
      try {
        axios.delete(`http://localhost:5000/seller/delete-user?id=${id}`)
          .then(res => {
            console.log(res.data);
             
          });
      } catch (e) {
        console.log(e.message);
      }
    }
  }
  

  return (
    <div>
    <section class="container px-4 mx-auto pt-16">
      <div class="flex items-center gap-x-3">
        <h2 class="text-lg font-medium text-gray-800 dark:text-white">All Sellers</h2>
      </div>
  
      <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>  
                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <div class="flex items-center gap-x-3">
                        <span class="font-medium">Seller Name</span>
                      </div>
                    </th>
  
                    <th scope="col" class="px-3 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <button class="flex items-center gap-x-2">
                        <span class="font-medium">Seller Email</span>
                      </button>
                    </th>
  
                    <th scope="col" class="pl-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Action
                    </th>
                    <th scope="col" class="pl-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {/* user row */}
                  {sellers?.map((seller) => {
                    return (
                      <tr key={seller?._id}>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
  
                            <div class="flex items-center gap-x-2">
                              <div>
                                <h2 class="font-medium text-gray-800 dark:text-white">{seller?.name}</h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100 dark:bg-gray-800">
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
  
                            <h2 class="text-sm font-normal text-emerald-500">{seller?.email}</h2>
                          </div>
                        </td>
                        <td className="px-2 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <Link to ={`/dashboard/Seller/${seller?._id}`} className="pl-2 py-1 text-xs p-2 font-bold hover:cursor-pointer text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                               Details
                            </Link>
                        </td>
                        <td className="pl-2 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center">
                            <button onClick={()=>deleteSeller(seller?._id)} className="pl-2 py-1 text-xs p-2 font-bold hover:cursor-pointer text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                              Delete
                            </button>
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

    </section>
    </div>
  );
};

export default SellerDashboard;