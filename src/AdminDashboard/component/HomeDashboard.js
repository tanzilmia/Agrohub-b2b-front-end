/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Dashboard Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import BestSeller from "./tableMenu/BestSeller";
import Charts from "./Charts";
import TableInHome from "./tableMenu/TableInHome";

const HomeDashboard = () => {
  const [userData, setUserData] = useState([]);
  const [buyerData, setBuyerData] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/common/sellers");
      const data = await res.data;
      setUserData(data);
      const response = await axios.get("http://localhost:5000/common/buyer");
      const resData = await response.data;
      setBuyerData(resData);
      const productdData = await axios.get("http://localhost:5000/seller/recent_Product");
      const resProductData = productdData.data;
      setAllProductData(resProductData);
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col">
      {/* this is default home page  */}
      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5 items-center justify-center">
        <div className="lg:col-span-3">
          <Charts />
        </div>
        <div className="lg:col-span-2">
          <div className="">
            <h3 className="text-gray-800 text-xl font-bold sm:text-4xl my-12">
              All Seller
            </h3>
          </div>
          <BestSeller userData={userData} />
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5 items-center justify-center">
        <div className="lg:col-span-3">
          <TableInHome allProductData={allProductData} />
        </div>
        <div className="lg:col-span-2">
          <div className="">
            <h3 className="text-gray-800 text-xl font-bold sm:text-4xl my-12">
              All Buyer
            </h3>
          </div>
          <BestSeller userData={buyerData} />
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
