import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RightSideMenu from "../ServiceDetails/RightSideMenu";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiBox } from "react-icons/bi";
const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useLoaderData();
  const [filterBlog, setFilterBlog] = useState([]);
  // console.log(id)
  useEffect(() => {
    const desireBlog = blogs.find((blog) => blog.id == id);
    setFilterBlog(desireBlog);
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-10 grid grid-cols-4 ">
      <div className="space-y-5 col-span-3">
        <h1 className="text-4xl font-bold ">{filterBlog?.title}</h1>
        <div className="flex items-center gap-2 text-gray-400">
          <AiOutlineClockCircle></AiOutlineClockCircle>
          <p className="">{filterBlog?.date}  / </p>
          <BiBox></BiBox>
          <p className=""> {filterBlog?.category}</p>
        </div>
        <div className="">
          <img src={filterBlog?.image} alt="" className="rounded-md" />
        </div>
        <p className="">{filterBlog?.content}</p>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Share this: </h2>
          <div className="flex gap-3">
            <button className="bg-[#3b5998] px-5 py-2 text-white text-xl">Facebook</button>
            <button className="bg-[#55acee] px-5 py-2 text-white text-xl">Tweet</button>
            <button className="bg-[#25d366] px-5 py-2 text-white text-xl">WhatsApp</button>
          </div>
          {/* {
            filterBlog?.tags.map((tag,index)=><p key={index}>#{tag}</p>)
          } */}
        </div>
      </div>
      <div className="">
        <RightSideMenu></RightSideMenu>
      </div>
    </div>
  );
};

export default BlogDetails;
