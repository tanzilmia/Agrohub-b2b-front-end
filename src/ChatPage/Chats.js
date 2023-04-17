import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../contextApi/Authcontext";

const Chats = () => {
  const {
    user,
    seller,
    header,
    setSelectedChat,
    selectedChat,
    setChats,
    chats,
    setchatUser
  } = useContext(myContext);

  const fetchChaats = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/chat/fetchChat?email=${user?.email}`,
        header
      );

      setChats(data);
    } catch (e) {
      console.log(e.message);
    }
  };


  const getsender = (logedInuser, users) => {
    return users[0]._id === logedInuser?._id ? users[1]?.name : users[0]?.name;
  };
  

  const singleChat = (logedInuser, users) => {
    return users[0]._id === logedInuser?._id ? users[1]?._id : users[0]?._id;
  };
  
  // const selectChat = (logedInuser, users , chat) => {
  //   setSelectedChat(logedInuser?._id ? users[1] : users[0])
  //   setchatUser(chat)
  // };

  const selectChat = (loggedInUser, users, chat) => {
    const otherUser = users.find(user => user._id !== loggedInUser?._id);
    setSelectedChat(otherUser);
    setchatUser(chat);
  };
  

  const accessChat = async (user, users, chat,userId) => {
    selectChat(user, users, chat)
    try {
      const { data } = await axios.post(
        `http://localhost:5000/chat/accessChat?email=${user?.email}`,
        { userId },
        header
      );

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchChaats();
    }
  }, [user?.email]);

  return (
    <div>
      <h2>Chat Section</h2>

      {chats.length ? (
        chats.map((chat) =>(
         
          <>
            <Link
              onClick={() => accessChat(user, chat.users, chat, chat?._id)}
              to={`/seller/contact/chats/${singleChat(user, chat.users)}`}
              key={chat._id}
              
            >
              {!chat.isGroupChat ? getsender(user, chat.users) : chat.chatName}
            </Link>
            <br />
          </>
        ))
      ) : (
        <p>Loadding...</p>
      )}
    </div>
  );
};

export default Chats;
