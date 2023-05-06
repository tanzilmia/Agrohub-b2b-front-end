import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BlogPost = () => {
  const singleBlog = useLoaderData();
  const { blogTitle, thumbnail, blogDetails, author } = singleBlog;

  return (
    <div className="min-h-screen bg-gray-100">
        <Link to ='/' className='btn text-center p-3  bg-[#4eef77]'>Back To Home</Link>
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900">{blogTitle}</h1>
        <p className="mt-4 text-lg text-gray-500">  <strong>Post By</strong> {author}</p>
        <img
          className="mt-8 rounded-lg shadow-md object-cover object-center h-64 w-full"
          src={thumbnail}
          alt={blogTitle}
        />
        <div
          className="mt-8 prose prose-indigo prose-lg text-gray-500 mx-auto"
          dangerouslySetInnerHTML={{ __html: blogDetails }}
        />
      </div>
    </div>
  );
};

export default BlogPost;
