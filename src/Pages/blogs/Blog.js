import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Blog = ({ blog, id }) => {
  const { title, article, image_url, link } = blog;
  useTitle("Blog");
  return (
    <div>
      <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none  bg-opacity-50 shadow-2xl dark:bg-[#4B5563] ">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image_url}
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-6 relative">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
            {title && title.slice(0, 26)}
          </h3>
          <p className="mt-6 mb-8 text-gray-600 dark:text-gray-400">
            {article.slice(0, 100)}...
          </p>
          <Link
            className="inline-block hover:text-gray-900 hover:font-bold"
            to={`/${link}`}
          >
            <span className="text-primary dark:text-gray-300 dark:hover:text-indigo-400">
              Read more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
