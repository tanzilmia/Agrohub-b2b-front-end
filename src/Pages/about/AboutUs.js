import React from "react";
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
    </div>
  );
};

export default AboutUs;
