import React from 'react';
import Navbar from '../sheardComponent/Navbar';
import ProductDetails from '../DynamicPage/ProductDetails';
import { Outlet } from 'react-router-dom';

const ReviewLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ProductDetails></ProductDetails>
            <Outlet></Outlet>
        </div>
    );
};

export default ReviewLayout;