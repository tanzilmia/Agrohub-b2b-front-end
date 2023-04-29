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
        <div className="xl:container m-auto px-6 bg-gray-100 md:px-12 xl:px-6">
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
      </div>
    </div>
  );
};

export default Blogs;
