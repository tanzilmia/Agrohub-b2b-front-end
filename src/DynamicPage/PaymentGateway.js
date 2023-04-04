import React, { useState } from 'react';

const PaymentGateway = () => {
    const [cardDetails, setCardValue] = useState([])
    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const city = form.city.value;
        const country = form.country.value;
        const zipCode = form.zipCode.value;
        const creditCardNumber = form.creditCardNumber.value;
        const expMonth = form.expMonth.value;
        const expYear = form.expYear.value;
        const cvv = form.cvv.value;
        const cardValue = {
            name,
            email,
            address,
            city,
            country,
            zipCode,
            creditCardNumber,
            expMonth,
            expYear,
            cvv
        }
        setCardValue(cardValue)
        window.location.reload();
    }
    console.log(cardDetails);


    return (
        <div className='max-h-screen'>
            <div className="flex justify-center items-center">
                <div className="w-full flex justify-center items-center p-6 m-auto">
                    <form onSubmit={onSubmit} className="mt-6 md:grid md:grid-cols-2 gap-6 p-10  bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600">
                        <div>
                            <h2 className='text-2xl font-semibold text-indigo-600 uppercase'>Billing Address</h2>
                            <div className="mb-2 mt-1 col-span-1">
                                <label>
                                    <span className="text-gray-700">Full Name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full border block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Type here..."
                                    />
                                </label>
                            </div>
                            <div className="mb-2 col-span-1">
                                <label>
                                    <span className="text-gray-700">Email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full border block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Type here..."
                                    />
                                </label>
                            </div>
                            <div className="mb-2 col-span-1">
                                <label>
                                    <span className="text-gray-700">Address</span>
                                    <input
                                        name="address"
                                        type="text"
                                        className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Type here..."
                                    />
                                </label>
                            </div>
                            <div className="mb-2 col-span-1">
                                <label>
                                    <span className="text-gray-700">City</span>
                                    <input
                                        name="city"
                                        type="text"
                                        className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Type here..."
                                    />
                                </label>
                            </div>
                            <div className='flex gap-6'>
                                <div className="mb-2 col-span-1">
                                    <label>
                                        <span className="text-gray-700">Country</span>
                                        <input
                                            name="country"
                                            type="text"
                                            className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            placeholder="Type here..."
                                        />
                                    </label>
                                </div>
                                <div className="mb-2 col-span-1">
                                    <label>
                                        <span className="text-gray-700">Zip Code</span>
                                        <input
                                            name="zipCode"
                                            type="text"
                                            className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            placeholder="Type here..."
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2 className='text-2xl font-semibold text-indigo-600 uppercase mb-6'>Accepted Card</h2>
                                <img src="https://i.ibb.co/2Z8NqQF/card-img.png" alt="" />
                            </div>
                            <div className="mt-6 mb-2">
                                <label>
                                    <span className="text-gray-700">Credit Card Number</span>
                                    <input
                                        name="creditCardNumber"
                                        type="text"
                                        className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Type here..."
                                    />
                                </label>
                            </div>
                            <div className="mb-2">
                                <label>
                                    <span className="text-gray-700">Exp Month</span>
                                    <input
                                        name="expMonth"
                                        type="text"
                                        className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Type here..."
                                    />
                                </label>
                            </div>
                            <div className='flex gap-6'>
                                <div className="mb-2">
                                    <label>
                                        <span className="text-gray-700">Exp Year</span>
                                        <input
                                            name="expYear"
                                            type="text"
                                            className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            placeholder="Type here..."
                                        />
                                    </label>
                                </div>
                                <div className="mb-2">
                                    <label>
                                        <span className="text-gray-700">CVV</span>
                                        <input
                                            name="cvv"
                                            type="text"
                                            className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            placeholder="Type here..."
                                        />
                                    </label>
                                </div>

                            </div>
                            <div className="mb-6 mt-4">
                                <button
                                    type="submit"
                                    className="h-10 w-full  px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                                >
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default PaymentGateway;