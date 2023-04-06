import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const PaymentSuccess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get("transactionId")
    const [orderData, setOrderData] = useState({})
    console.log(orderData?.result?.productName);
    useEffect(() => {
        fetch(`http://localhost:5000/payment-gateway/orders-by-transaction-id/${transactionId}`)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [transactionId])
    return (
        <div>
            <h1>this is success page</h1>
            {orderData?.result?.productName}
            <table className="border-2 border-black w-full">
                    <tr className="border-2 border-black">
                        <td className="border-2 border-black bg-gray-300 py-2 px-4 text-xl">
                        </td>
                        <td className="border-2 border-black py-2 px-4 text-xl">
                        </td>
                    </tr>
               
            </table>
        </div>
    );
};

export default PaymentSuccess;