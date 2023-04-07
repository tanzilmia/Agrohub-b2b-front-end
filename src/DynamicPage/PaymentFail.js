import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
    return (
        <div className='max-h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center mt-4'>
                <h1 className='text-3xl text-red-600'>Something went wrong</h1>
                <Link to='/'><button className='border-2 px-4 py-2 mt-4 bg-green-500 text-white'>Go To Home</button></Link>
            </div>
        </div>
    );
};

export default PaymentFail;