import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const myContext = createContext();
const Authcontext = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const [isLogin, setisLogin] = useState(false);
  const [seller, setSeller] = useState([]);
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState([])
  const [chatUser, setchatUser] = useState([])

  const token = localStorage.getItem("accessToken");
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };


  useEffect(() => {
   axios.get(`http://localhost:5000/common/sellers`)
   .then(res => {
     setSeller(res.data)
   })
   .catch(e => console.log(e))
  }, [])
  

  useEffect(() => {
    if (token || isLogin) {
      axios
        .post(`http://localhost:5000/auth/user-info`, { token })
        .then((res) => {
          if (res.data.message === "successfull") {
            setuser(res.data.data);
            setloading(false);
          }
        })
        .catch((e) => console.log(e));
    } else {
      setloading(false);
    }
  }, [token, isLogin]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setloading(true);
    setisLogin(false);
    setuser(null);
  };

  const contextValue = {
    setisLogin,
    setloading,
    user,
    loading,
    logout,
    header,
    seller,
    setChats,
    chats,
    setSelectedChat,
    selectedChat,
    setchatUser,
    chatUser


  };
  return (
    <myContext.Provider value={contextValue}> {children} </myContext.Provider>
  );
};

export default Authcontext;
