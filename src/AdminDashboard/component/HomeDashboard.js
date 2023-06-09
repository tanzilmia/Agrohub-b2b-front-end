import React, { useEffect, useState } from "react";
import axios from "axios";
import BestSeller from "./tableMenu/BestSeller";
import TableInHome from "./tableMenu/TableInHome";
import { FcCurrencyExchange } from "react-icons/fc";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const HomeDashboard = () => {
  const [userData, setUserData] = useState([]);
  const [buyerData, setBuyerData] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const [totalSell, settotalSell] = useState(null);
  const [totalPorduct, settotalPorduct] = useState([]);
  useTitle("Dashboard");
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://agrohub-b2b-new-server.vercel.app/common/sellers");
      const data = await res.data;
      setUserData(data);
      const response = await axios.get(
        "https://agrohub-b2b-new-server.vercel.app/common/buyer"
      );
      const resData = await response.data;
      setBuyerData(resData);
      const productdData = await axios.get(
        "https://agrohub-b2b-new-server.vercel.app/seller/recent_Product"
      );
      const resProductData = productdData.data;
      setAllProductData(resProductData);

      const totalProduct = await axios.get(
        "https://agrohub-b2b-new-server.vercel.app/seller/all_Product"
      );
      const restotalProduct = totalProduct.data;
      settotalPorduct(restotalProduct);
    };
    getData();
  }, []);

  useEffect(() => {
    axios
      .get(`https://agrohub-b2b-new-server.vercel.app/payment-gateway/totalsells`)
      .then((res) => {
        settotalSell(res.data.totalSellPrice);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="flex flex-col">
      {/* this is default home page  */}
      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5  items-center justify-center">
        <div className="lg:col-span-3 flex items-center mx-3 mt-5 justify-center flex-wrap dark:text-gray-300">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 py-6  px-6 shadow-lg hover:shadow-xl  mb-3  transition duration-300 dark:bg-[#4338CA] rounded">
              <div className="font-bold text-5xl text-center flex justify-center">
                {" "}
                <FcCurrencyExchange />{" "}
              </div>
              <p className="text-center text-2xl">
                <span className="text-base mr-2 font-bold">TOTAL</span>
                {totalSell} <span className="text-base font-bold">TK</span>
              </p>
            </div>
            <div className="w-full lg:w-1/2 py-6  px-6 shadow-lg hover:shadow-xl  mb-3  transition duration-300 dark:bg-[#4338CA] rounded">
              <div className="font-bold text-5xl text-center text-[#6c976c] flex justify-center">
                {" "}
                <FaShoppingCart />{" "}
              </div>
              <p className="text-center text-2xl">
                {totalPorduct?.length}{" "}
                <span className="text-base">Product</span>
              </p>
            </div>
            <div className="w-full lg:w-1/2 py-6  px-6 shadow-lg hover:shadow-xl transition duration-300 dark:bg-[#4338CA] rounded">
              <div className="font-bold text-5xl text-center text-[#6c976c] flex justify-center">
                {" "}
                <FaUsers />{" "}
              </div>
              <p className="text-center text-2xl">
                {userData?.length} <span className="text-base">Sellers</span>
              </p>
            </div>
            <div className="w-full lg:w-1/2 py-6  px-6 shadow-lg hover:shadow-xl transition duration-300 dark:bg-[#4338CA] rounded">
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

        <div className="lg:col-span-2">
          <div className="">
            <h3 className="text-gray-800 text-xl text-center font-bold sm:text-4xl my-12 dark:text-gray-300">
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
            <h3 className="text-gray-800 text-xl text-center font-bold sm:text-4xl my-12 dark:text-gray-300">
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
