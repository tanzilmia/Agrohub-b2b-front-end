import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RxHome } from "react-icons/rx";
import { Link } from "react-router-dom";
import AboutUsPost from "./AboutUsPost";
import AboutUsVideo from "./aboutUsVideo";
import { aboutUs } from "./utilities";
import useTitle from "../../hooks/useTitle";

const AboutUs = () => {
  useTitle("About us");
  return (
    <div className="pt-[120px] lg:mx-10">
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
    </div>
  );
};

export default AboutUs;
