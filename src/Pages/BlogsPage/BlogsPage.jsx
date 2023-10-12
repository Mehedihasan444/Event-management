import React from "react";
import { useLoaderData } from "react-router-dom";

import LeftSideMenu from "../../Components/LeftSideMenu/LeftSideMenu";
import NewsCard from "../../Components/NewsCard/NewsCard";
import RightSideMenu from "../ServiceDetails/RightSideMenu";

const BlogsPage = () => {
  const blogs = useLoaderData();
  // console.log(blogs)
  return (
    <div className="bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto pt-10 flex gap-5 grid grid-cols-4 ">
        <div className="">
           <div className="fixed ">
          <LeftSideMenu></LeftSideMenu>
         
        </div>
        
        </div>
       

        <div className="col-span-2">
          {blogs.map((blog) => (
            <NewsCard key={blog.idx} blog={blog}></NewsCard>
          ))}
        </div>
        <div className="">
          <RightSideMenu></RightSideMenu>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;

