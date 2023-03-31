import React, { useContext } from 'react';
import { myContext } from '../../contextApi/Authcontext';

const Home = () => {
    const {test} = useContext(myContext)
    return (
        <div>
            <h2>Home Page {test} </h2>
        </div>
    );
};

export default Home;