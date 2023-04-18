import React from "react";

const MyBuyer = (props) => {
  const myBuyerData = props.myBuyerData;
  return (
    <div className=" mx-auto px-4">
      <div className="mt-12 shadow-sm border rounded-lg ">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-1">Username</th>

              <th className="py-3 px-1">Email</th>
              <th className="py-3 px-1">Phone</th>
              <th className="py-3 px-1">Product Name</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {myBuyerData?.map((item, idx) => (
              <tr key={idx}>
                <td className="px-1 py-4 ">{item?.name}</td>
                <td className="px-1 py-4 ">{item?.email}</td>
                <td className="px-1 py-4 ">{item?.phoneNo}</td>
                <td className="px-1 py-4 ">{item?.productName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyer;
