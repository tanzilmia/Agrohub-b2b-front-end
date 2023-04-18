/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Dashboard Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
import React, { useContext, useEffect, useState } from "react";
import Charts from "./Charts";
import axios from "axios";
import  { myContext } from "../../contextApi/Authcontext";
import BuyerTable from "./tableMenu/BuyerTable";

const BuyerDashboard = () => {
  const {user} = useContext(myContext)
  const [buyerProduct, setBuyerProduct] = useState([])
  

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get(`https://agrohub.vercel.app/payment-gateway/payment-product?email=${user?.email}`)
      const data = res.data?.result;
      console.log(data)
      setBuyerProduct(data);
    }
    fetchData();
  },[user?.email])
  return (
    <div className="flex flex-col">
      {/* this is default home page  */}
      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5 items-center justify-center">
        <div className="lg:col-span-3">
          <Charts />
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5 items-center justify-center">
        <div className="lg:col-span-3">
          <BuyerTable buyerProduct={buyerProduct}></BuyerTable>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
