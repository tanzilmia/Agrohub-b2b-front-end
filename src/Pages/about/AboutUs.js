import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RxHome } from "react-icons/rx";
import { Link } from "react-router-dom";
import AboutUsPost from "./AboutUsPost";
import AboutUsVideo from "./aboutUsVideo";
import { aboutUs } from "./utilities";

const AboutUs = () => {
  console.log("this is about us page");
  return (
    <div className="pt-[120px]">
      <AboutUsVideo />
      {aboutUs.slice().map((item, id) => (
        <AboutUsPost
          key={id}
          id={id}
          text={item.text}
          name={item.name}
          image={item.image}
        />
      ))}

      {/* nav */}
      <Link
        to="/"
        className="flex hover:text-slate-900 fixed top-24 right-0 mr-1 hover:mr-2 border p-2 rounded-2xl bg-slate-800 hover:bg-white text-white"
      >
        <RxHome className="text-2xl" />
      </Link>
      <Link
        to="/contactus"
        className="flex hover:text-slate-900 fixed top-36 right-0 mr-1 hover:mr-2 border p-2 rounded-2xl bg-slate-800 hover:bg-white text-white"
      >
        <FiPhoneCall className="text-2xl" />
      </Link>
      <Link
        to="/blog"
        className="flex hover:text-slate-900 fixed top-48 right-0 mr-1 hover:mr-2 border p-2 rounded-2xl bg-slate-800 hover:bg-white text-white"
      >
        <FaBloggerB className="text-2xl" />
      </Link>
      <Link
        to="/login"
        className="flex hover:text-slate-900 fixed top-60 right-0 mr-1 hover:mr-2 border p-2 rounded-2xl bg-slate-800 hover:bg-white text-white"
      >
        <AiOutlineLogin className="text-2xl" />
      </Link>
    </div>
  );
};

export default AboutUs;
