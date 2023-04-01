import React from 'react';

const ProductCard = ({ product }) => {
    const { image_url, new_price, old_price, rating, title } = product;

    return (
        <div className='flex flex-col sm:flex-row justify-center md:justify-start items-center bg-white py-6'>
            <img src={image_url} className='md:w-40 md:h-full mx-6' alt="" />
            <div className='mt-6 md:mt-0 mx-10'>
                <div className='flex gap-2'>
                    <i className="ri-star-fill text-orange-600"></i>
                    <i className="ri-star-fill text-orange-600"></i>
                    <i className="ri-star-fill text-orange-600"></i>
                    <i className="ri-star-fill text-orange-600"></i>
                    <i className="ri-star-fill text-orange-600"></i>
                </div>
                <div>
                    <p className='text-2xl my-2'>{title}</p>
                    <span className='flex gap-4 text-3xl font-semibold mb-2'>
                        <p className='text-gray-400 line-through'>${old_price}</p>
                        <p className='text-red-400'>${new_price}</p>
                    </span>
                    <button className='bg-orange-300 px-3 py-2 mt-2'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;