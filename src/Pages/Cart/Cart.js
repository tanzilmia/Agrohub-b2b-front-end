import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';

const Cart = () => {
    const products = useSelector((state)=> state.cart.cart)
    console.log(products)
    return (
        <div className='mx-20 my-10'>
            <div className='grid grid-cols-3 gap-10'>
            {
               products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>) 
            }
            </div>
        </div>
    );
};

export default Cart;