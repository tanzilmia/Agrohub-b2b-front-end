import React from "react";

const BestSeller = (props) => {
  const userData = props.userData;
  // console.log(userData)

  return (
    <div className=" mx-auto px-4">
      <div className="mt-12 shadow-sm border rounded-lg ">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 dark:bg-slate-500 dark:text-gray-300 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-1">Username</th>

              <th className="py-3 px-1">Email</th>
              <th className="py-3 px-1">Phone</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y dark:text-gray-300">
            {userData?.map((item, idx) => (
              <tr key={idx}>
                <td className="px-1 py-4 ">{item?.name}</td>
                <td className="px-1 py-4 ">{item?.email}</td>
                <td className="px-1 py-4 ">{item?.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BestSeller;
