import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
    return (
        <div>
            <h1>this is payment fail page</h1>
            <h1>Something went wrong</h1>
            <Link to='/'>Go To Home</Link>
        </div>
    );
};

export default PaymentFail;