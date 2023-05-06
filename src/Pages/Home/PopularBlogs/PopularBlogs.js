import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PopularBlogs = () => {

    const [popularBlog, setpopularBlog] = useState([])

    useEffect(() => {
   try{
    axios.get(`http://localhost:5000/seller/letest-blogs`)
    .then(res =>{
       setpopularBlog(res.data)
    })
   }catch(e){
    console.log(e.message);
   }
    
    }, [])
    

    return (
        <>
        <h1 className='text-center text-4xl my-5 font-semibold'>Popular Blog</h1>
        <div className='flex flex-wrap justify-center my-10'>
          {popularBlog.length && popularBlog?.map(blog => (
            <div className="w-full sm:w-1/2 md:w-1/3 p-4" key={blog._id}>
              <div className="h-full bg-white shadow-md rounded-md overflow-hidden">
                <img className="w-full h-40 object-cover" src={blog?.thumbnail} alt={blog?.blogTitle} />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{blog?.blogTitle}</h3>
                  <p className="text-gray-500">{blog?.blogDetails?.slice(0, 100)}...</p>
                  <Link
                    className="inline-block hover:text-gray-900 hover:font-bold"
                    to={`/blogs/${blog?._id}`}
                  >
                    <span className="text-primary dark:text-gray-300 dark:hover:text-indigo-400">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
      
    );
};

export default PopularBlogs;