import React from 'react';
import Sellers from './Sellers';
import useTitle from '../../hooks/useTitle';

const CustomeOrder = () => {
    useTitle("customer order");
    return (
        <div className='w-10/12 mx-auto'>
                
            <Sellers/>
        </div>
    );
};

export default CustomeOrder;