import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
const BlogsPage = () => {

const blogs =useLoaderData()
// console.log(blogs)
    return (
        <div className='max-w-7xl mx-auto mt-10 grid grid-cols-2 gap-10'>
            {
              blogs.map(blog=><>
                     <Card className="w-full max-w-[48rem] h-[300px] flex-row mb-5">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={blog.image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className='pt-1'>
        <Typography variant="p" color="gray" className="mb-4 uppercase">
          {blog.category}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {blog.title}
        </Typography>
        <Typography color="gray" className="mb-2 font-normal">
          {blog.content}
        </Typography>
        <Link  to={`/BlogDetails/${blog.id}`} className="inline-block flex items-center gap-2 text-blue-600">
         
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
        
        </Link>
      </CardBody>
    </Card>
              </>)  
            }
     
        </div>
    );
};

export default BlogsPage;