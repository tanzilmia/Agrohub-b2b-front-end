import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");
  const [orderData, setOrderData] = useState({});
  useEffect(() => {
    fetch(
      `https://agrohub.vercel.app/payment-gateway/orders-by-transaction-id/${transactionId}`
    )
      .then((res) => res.json())
      .then((data) => {
        try{
          console.log(transactionId)
          axios.put(`https://agrohub.vercel.app/payment-gateway/update/success?transactionId=${transactionId}`)
          .then(res =>  console.log(res.data))
        }catch(e){
          console.log(e.message);
        }

        setOrderData(data)
      });
  }, [transactionId]);
  return (
    <div className="max-h-screen">
      <div className="flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center p-6 m-auto">
          <div
            ref={ref}
            className="mt-6 md:grid md:grid-cols-1 gap-6 p-10 text-xl font-semibold bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600"
          >
            <p>Name: {orderData?.result?.name}</p>
            <p>Email: {orderData?.result?.email}</p>
            <p>Phone No: {orderData?.result?.phoneNo}</p>
            <p>Address: {orderData?.result?.address}</p>
            <p>Product Name: {orderData?.result?.productName}</p>
            <p>Post Code: {orderData?.result?.postCode}</p>
            <p>Paid Amount: {orderData?.result?.price}</p>
            <p>TransactionId: {orderData?.result?.transactionId}</p>
          </div>
          <Pdf targetRef={ref} filename="payment-invoice.pdf">
            {({ toPdf }) => (
              <button onClick={toPdf} className="border-2 px-4 py-3 mt-4">
                Download
              </button>
            )}
          </Pdf>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
