import React, { useContext } from 'react';
import { myContext } from '../../contextApi/Authcontext';
import HomeCategoryByProduct from './HomeCategoryByProduct/HomeCategoryByProduct';
import HomeProducts from './HomeProducts/HomeProducts';

const Home = () => {
    const {test} = useContext(myContext)
    return (
        <div>
           <h1>Navbar</h1>
           <h1>Hero section</h1>
           <HomeProducts />
           <HomeCategoryByProduct />
            {/* <h2>Home Page {test} </h2> */}
        </div>
    );
};

export default Home;