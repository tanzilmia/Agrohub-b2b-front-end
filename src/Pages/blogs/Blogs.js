import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RxHome } from "react-icons/rx";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import { blogData } from "./utilities";

const Blogs = () => {
  return (
    <div>
      <div className="py-12">
        <div className="xl:container m-auto px-6 bg-[#F3F4F6] dark:bg-[#1B1B1D] md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-600 md:text-4xl ">
              Sharing is Caring
            </h2>
            <p className="text-xl md:text-3xl pt-12 font-bold lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-400">
              Blogs page
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogData?.blogs.slice().map((blog, id) => (
              <Blog blog={blog} key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
