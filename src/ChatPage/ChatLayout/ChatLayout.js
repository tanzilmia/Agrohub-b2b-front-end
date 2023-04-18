import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "../../sheardComponent/Navbar2";
import Chats from "../Chats";

const ChatLayout = () => {
  return (
    <>
      <Navbar2 />
      <div className="flex w-11/12 mx-auto">
        {/*  */}
        <div className="w-3/12">
          <Chats />
        </div>
        <div className="w-9/12">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ChatLayout;
