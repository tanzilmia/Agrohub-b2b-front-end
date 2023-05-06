import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
const Blogs = () => {


const [blogData, setblogData] = useState([])
useEffect(() => {
  axios.get(`https://agrohub-b2b-new-server.vercel.app/seller/all-blogs`)
  .then(res => {
    setblogData(res.data)
    
  })
}, [])


  return (
    <div>
      <div className="py-12">
        <div className="xl:container m-auto px-6 bg-[#F3F4F6] dark:bg-[#1B1B1D] md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-600 md:text-4xl ">
              Sharing is Caring
            </h2>
            
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogData?.map((blog) => (
              <Blog blog={blog} key={blog._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
