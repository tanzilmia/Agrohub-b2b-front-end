import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import ScrollableFeed from "react-scrollable-feed";
import { myContext } from "../../contextApi/Authcontext";
import { io } from "socket.io-client";
import Loader from "../../Pages/shop/util/loader/Loader";

// master barnch commit

// import ChatMessage from "../ChatMessage";

const ENDPOINT = "https://agrohub-b2b-new-server.vercel.app";
var socket, selectedChatCompare;

const Inbox = () => {
  const { user, header, setSelectedChat, selectedChat, chatUser } =
    useContext(myContext);
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState();
  const [IoIosAdd, setscoketConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name } = selectedChat;
  const sendMessage = async (event) => {
    event.preventDefault();
    if (newMessage) {
      try {
        setNewMessage("");
        const { data } = await axios.post(
          `https://agrohub-b2b-new-server.vercel.app/chat/sendMessage?email=${user?.email}`,
          {
            content: newMessage,
            chatId: chatUser?._id,
          },
          header
        );

        console.log(data);
        socket.emit("new message", data);

        setMessage([...message, data]);
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  // chake commit

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get(
        `https://agrohub-b2b-new-server.vercel.app/chat/${chatUser?._id}?email=${user?.email}`,
        header
      );
      setMessage(data);
      setLoading(false);
      socket.emit("join chat", chatUser?._id);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    // Check if socket is defined
    if (!socket) {
      // Handle error: socket is undefined
      console.error("socket is undefined");
      return;
    }

    socket.on("message receive", (newMessageRecive) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageRecive?.chat?._id
      ) {
        // Display the message
      } else {
        setMessage([...message, newMessageRecive]);
      }
    });

    // Clean up the effect
    return () => {
      socket.off("message receive");
    };
  },[message]);

  // [socket, selectedChatCompare, message]

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connection", () => setscoketConnected(true));
  }, [user]);

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = chatUser;
  }, [chatUser]);

  console.log(message);

  const typingHandler = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <>
      {selectedChat ? (
        <>
          {loading ? (
            <Loader></Loader>
          ) : (
            <div className="h-screen bg-gray-100 dark:bg-[#4B5563] flex border-l-4 border-blue-200">
              {/* Sidebar */}
              {/* Add sidebar content here */}

              {/* Chat area */}
              <div className="flex-1 p-4 flex flex-col">
                {/* Chat header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="">
                    <div className="flex w-full justify-between">
                      <h2 className="text-2xl font-semibold dark:text-white">
                        {name}
                      </h2>
                    </div>
                  </div>
                </div>
                {/* Chat messages */}
                <ScrollableFeed className="flex-1">
                  {message?.map((m, i) => (
                    <div
                      key={m._id}
                      className={`flex ${
                        user?._id === m.sender._id
                          ? "flex-row-reverse"
                          : "flex-row"
                      } space-x-4 items-start mt-2`}
                    >
                      <div
                        className={`rounded-lg px-4 py-2 max-w-75% ${
                          user?._id === m.sender._id
                            ? "bg-blue-500"
                            : "bg-white"
                        }`}
                      >
                        <p
                          className={`text-sm ${
                            user?._id === m.sender._id
                              ? "text-white"
                              : "text-black"
                          }`}
                        >
                          {m?.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </ScrollableFeed>

                {/* Chat input */}
                <form className="mt-4 flex items-center" onSubmit={sendMessage}>
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2 dark:bg-[#81858D] dark:placeholder:text-gray-300 dark:text-white"
                    placeholder="Type your message..."
                    onChange={typingHandler}
                    value={newMessage}
                  />
                  <input
                    type="submit"
                    value="Send"
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2 "
                  />
                </form>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="h-screen bg-gray-100 flex">
          {/* Sidebar */}

          <div>
            <h2>No Chat History</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Inbox;
