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

  const selectChat = (loggedInUser, users, chat) => {
    const otherUser = users.find(user => user._id !== loggedInUser?._id);
    setSelectedChat(otherUser);
    setchatUser(chat);
  };


  const accessChat = async (user, users, chat, userId) => {
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
    <div className="flex flex-col h-screen bg-gray-100">
  
  <h2 className="text-2xl font-bold ml-6">My Chats</h2>
  <Link to="/" className="mb-4 mt-6 ml-6 text-blue-500 underline">Back To Home</Link>

  {chats.length ? (
    <div className="flex-1 w-full max-w-xs bg-white p-4 rounded-md shadow-md overflow-y-scroll">
      {chats.map((chat) => (
        singleChat(user, chat.users) && (
          <Link
            onClick={() => accessChat(user, chat.users, chat, chat?._id)}
            to={`/seller/contact/chats/${singleChat(user, chat.users)}`}
            key={chat._id}
            className={`block mb-2 text-blue-500 hover:underline ${
              selectedChat?._id === singleChat(user, chat.users) ? "font-bold" : ""
            }`}
          >
            {!chat.isGroupChat ? getsender(user, chat.users) : chat.chatName}
          </Link>
        )
      ))}
    </div>
  ) : (
    <p className="text-gray-500 ml-6">No Chat Availavle</p>
  )}
</div>

  );
};

export default Chats;
