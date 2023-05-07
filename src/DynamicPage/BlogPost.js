import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar2 from "../sheardComponent/Navbar2";

const BlogPost = () => {
  const singleBlog = useLoaderData();
  const { blogTitle, thumbnail, blogDetails, author } = singleBlog;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#1B1B1D]">
      <Navbar2></Navbar2>
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-300">
          {blogTitle}
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          {" "}
          <strong>Post By</strong> {author}
        </p>
        <img
          className="mt-8 rounded-lg shadow-md object-cover object-center h-64 w-full"
          src={thumbnail}
          alt={blogTitle}
        />
        <div
          className="mt-8 prose prose-indigo prose-lg text-gray-500 mx-auto dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: blogDetails }}
        />
      </div>
    </div>
  );
};

export default BlogPost;
