import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { myContext } from '../../contextApi/Authcontext';

const MyBuyers = () => {
    const {user} = useContext(myContext)
const [myBuyers, setmyBuyers] = useState([])
    useEffect(() => {
      axios.get(`http://localhost:5000/payment-gateway/my-buyers?email=${user?.email}`)
      .then(res => {
        setmyBuyers(res.data)
      })
    }, [user?.email])
    
    console.log(myBuyers)

    return (
        <div>
            <h2>My Buyers</h2>
        </div>
    );
};

export default MyBuyers;