/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Dashboard Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
import React, { useContext, useEffect, useState } from "react";
import Charts from "./Charts";
import TableInHome from "./tableMenu/TableInHome";
import axios from "axios";
import { myContext } from "../../contextApi/Authcontext";
import MyBuyer from "./tableMenu/MyBuyer";

const SellerDashboard = () => {
  const [allProductData, setAllProductData] = useState([]);
  const [myBuyerData, setMyBuyerData] = useState([]);
  const { user } = useContext(myContext);
  // console.log(user.email)
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/seller/seller-product?email=${user?.email}`);
      const data = res.data;
      setAllProductData(data?.result);
      const response = await axios.get(`http://localhost:5000/seller/my-buyer?email=${user?.email}`);
      const resData = response?.data?.result;
      setMyBuyerData(resData);
    };
    fetchData();
  }, [user?.email]);
  // console.log(allProductData);
  return (
    <div className="flex flex-col">
      {/* this is default home page  */}
      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5 items-center justify-center">
        <div className="lg:col-span-3">
          <Charts />
        </div>
        {/* <div className="lg:col-span-2">
          <BestSeller />
        </div> */}
      </div>
      <div className="items-center justify-center">
        <div className="lg:col-span-3">
          <TableInHome allProductData={allProductData} />
        </div>
        <div className="lg:col-span-2">
          <div className="">
            <h3 className="text-gray-800 text-xl font-bold sm:text-4xl my-12">
              My Buyer
            </h3>
          </div>
          {/* <MyBuyer myBuyerData={myBuyerData}></MyBuyer> */}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
