import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../../contextApi/Authcontext";

const Sellers = () => {
  const {
    user,
    seller,
    header,
    setSelectedChat,
    selectedChat,
    setChats,
    chats,
  } = useContext(myContext);
  console.log(user);

  const accessChat = async (userId) => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/chat/accessChat?email=${user?.email}`,
        { userId },
        header
      );

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
    } catch (e) {
      console.log(e.message);
    }
  };
  //  add neew comment

  console.log(selectedChat);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {seller.map((singleSeller) => (
        <div
          key={singleSeller._id}
          className="relative bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative overflow-hidden">
            {singleSeller.profilePic === "" ? (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6IpEDiKCxZRTUPzz34ncgMeygQ_PnPXnvNQR-l-1u&s"
                alt={singleSeller.name}
                className="w-full h-40 object-cover object-center transition duration-300 ease-in-out transform hover:scale-110"
                style={{ height: "auto" }}
              />
            ) : (
              <img
                src={singleSeller.profilePic}
                alt={singleSeller.name}
                className="w-full h-40 object-cover object-center transition duration-300 ease-in-out transform hover:scale-110"
                style={{ height: "auto" }}
              />
            )}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 opacity-75"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-[#9ec54b] font-bold text-lg">
              {singleSeller.name}
            </h3>
            <h3 className="text-[#a7d6f8] font-bold text-sm">
              {singleSeller.email}
            </h3>
            <div className="flex mt-2">
              <Link
                to={`/seller-profile/${singleSeller._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded mr-2 transition duration-200 ease-in-out"
              >
                Profile
              </Link>
              <Link
                to={`/seller/contact/chats`}
                onClick={() => accessChat(singleSeller._id)}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded transition duration-200 ease-in-out"
                disabled={user?.role === "seller"} // Set disabled property based on user.role
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sellers;
