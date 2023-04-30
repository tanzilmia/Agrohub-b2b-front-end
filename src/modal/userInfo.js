import { useState } from "react";
import {
  FaGoogle,
  FaKey,
  FaLocationArrow,
  FaOutdent,
  FaPaypal,
  FaPlus,
  FaRegArrowAltCircleRight,
  FaXRay,
  FaXbox,
} from "react-icons/fa";
import "./user.css";
import { useNavigate } from "react-router-dom";
const UserInfo = ({ setModalOpen, ModalOpen, user, Logouts }) => {
  const navigate = useNavigate();
  if (Logouts) {
    navigate("/")
  }
  return (
    <div className={`popup active`} id="popup">
      <div className="popup-wrapper relative">
        <form className="popup__form">
          <div className="h-20 w-full bg-[#999]"></div>
          <div className="flex mt-[-50px] align-middle justify-center">
            <img
              className="h-20 w-20 rounded-full"
              src={user.profilePic}
              alt={user.name}
              title={user.name}
            />
          </div>
          <p className="flex flex-col items-center">
            <span className="font-semibold"> {user.name}</span>
            <span className="text-[10px]">{user.email}</span>
          </p>
          <div className="flex align-middle justify-center my-2 ">
            <FaKey /> <FaPaypal className="mx-2" /> <FaLocationArrow />
          </div>
          <div>
            <p className="flex items-center cursor-pointer">
              <FaGoogle className="mr-2" /> Manage your Account
            </p>
            <p
              className="flex items-center cursor-pointer"
              onClick={Logouts}
            >
              <FaRegArrowAltCircleRight className="mr-2" /> Sign Out
            </p>
          </div>
        </form>
        <div className="d-flex absolute top-0 right-0 justify-content-center align-items-center">
          <button
            className="go-register fz-14 font-weight-bold"
            style={{ padding: "5px 10px", border: "1px solid" }}
            onClick={() => setModalOpen(false)}
          >
            <FaXbox />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
