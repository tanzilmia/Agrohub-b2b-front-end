import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const myContext = createContext();
const Authcontext = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const [isLogin, setisLogin] = useState(false);
  const [seller, setSeller] = useState([]);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState([]);
  const [chatUser, setchatUser] = useState([]);
  const [productInfo, setProductInfo] = useState({
    wishList: 0,
    productCount: 0,
    rating: 0,
    countPrice: 0,
    user,
  });
  const token = localStorage.getItem("accessToken");
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  // function onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  useEffect(() => {
    axios
      .get(`https://agrohub-b2b-new-server.vercel.app/common/sellers`)
      .then((res) => {
        setSeller(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (token || isLogin) {
      axios
        .post(`https://agrohub-b2b-new-server.vercel.app/auth/user-info`, { token })
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
  useEffect(() => {
    if (token || isLogin) {
      axios
        .post(`https://agrohub-b2b-new-server.vercel.app/auth/google-user-info`, { token })
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
    setuser,
    loading,
    logout,
    header,
    seller,
    setChats,
    chats,
    setSelectedChat,
    selectedChat,
    setchatUser,
    chatUser,
    productInfo,
    setProductInfo,
  };
  return (
    <myContext.Provider value={contextValue}> {children} </myContext.Provider>
  );
};

export default Authcontext;
