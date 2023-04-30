import React, { useEffect, useState } from "react";
import axios from "axios";
import { FcCurrencyExchange } from "react-icons/fc";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { useContext } from "react";
import { myContext } from "../contextApi/Authcontext";
import TableInHome from "./component/tableMenu/TableInHome";


const CommonDashPage = () => {
  const { user } = useContext(myContext);
  const [buyerData, setBuyerData] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const [totalSell, settotalSell] = useState(null);
  const [totalPorduct, settotalPorduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://agrohub.vercel.app/payment-gateway/my-buyers?email=${user?.email}`
      );
      const resData = await response.data;
      setBuyerData(resData);
      const productdData = await axios.get(
        `https://agrohub.vercel.app/common/my-product?email=${user?.email}`
      );
      const resProductData = productdData.data;
      setAllProductData(resProductData);

      const totalProduct = await axios.get(
        `https://agrohub.vercel.app/common/my-product?email=${user?.email}`
      );
      const restotalProduct = totalProduct.data;
      settotalPorduct(restotalProduct);
    };
    getData();
  }, [user?.email]);

  useEffect(() => {
    axios
      .get(
        `https://agrohub.vercel.app/payment-gateway/total-mysells?email=${user?.email}`
      )
      .then((res) => {
        settotalSell(res.data.totalSellPrice);
      })
      .catch((e) => console.log(e.message));
  }, [user?.email]);

  return (
    <div className="flex flex-col">
      {/* this is default home page  */}
      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5">
        <div className="lg:col-span-3 flex items-center mx-3 mt-5 justify-center flex-wrap">
        


            <div className="w-full lg:w-1/2 py-6  px-6 shadow-lg hover:shadow-xl  mb-3  transition duration-300">
              <div className="font-bold text-5xl text-center flex justify-center">
                {" "}
                <FcCurrencyExchange />{" "}
              </div>
              <p className="text-center text-2xl">
                <span className="text-base mr-2 font-bold">My Sells</span>
                {totalSell} <span className="text-base font-bold">TK</span>
              </p>
            </div>


            <div className="w-full lg:w-1/2 py-6  px-6 shadow-lg hover:shadow-xl  mb-3  transition duration-300">
              <div className="font-bold text-5xl text-center text-[#6c976c] flex justify-center">
                {" "}
                <FaShoppingCart />{" "}
              </div>
              <p className="text-center text-2xl">
                {totalPorduct?.length}{" "}
                <span className="text-base">Product</span>
              </p>
            </div>


            <div className="w-full lg:w-1/2 py-6  px-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="font-bold text-5xl text-center text-[#6c976c] flex justify-center">
                {" "}
                <FaUsers />{" "}
              </div>
              <p className="text-center text-2xl">
                {buyerData?.length} <span className="text-base">buyers</span>
              </p>
            </div>


         
        </div>
        
      </div>

      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5 items-center justify-center">
        <div className="lg:col-span-3">
          <TableInHome allProductData={allProductData} />
        </div>
        
      </div>
    </div>
  );
};

export default CommonDashPage;
