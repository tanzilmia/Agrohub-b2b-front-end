import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { myContext } from '../contextApi/Authcontext';
import Loadding from '../sheardComponent/Loadding';

const SellerRouting = ({children}) => {
    const {user,Loading} = useContext(myContext)
    const location = useLocation();
    if(Loading){
         
         return <Loadding/>
    }
    if (user?.role === "seller"){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SellerRouting;