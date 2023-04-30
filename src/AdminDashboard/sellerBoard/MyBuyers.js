import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { myContext } from "../../contextApi/Authcontext";

const MyBuyers = () => {
  const { user } = useContext(myContext);
  const [myBuyers, setmyBuyers] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/payment-gateway/my-buyers?email=${user?.email}`
      )
      .then((res) => {
        setmyBuyers(res.data);
      });
  }, [user?.email]);

  console.log(myBuyers);

  return (
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
                      <span> Name</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                {/* user row */}
                {myBuyers?.map((buyer, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <div>
                              <h2 className="font-medium text-gray-800 dark:text-white ">
                                {buyer?.name}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                          <h2 className="text-sm font-normal text-emerald-500">
                            {buyer?.email}
                          </h2>
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
  );
};

export default MyBuyers;
