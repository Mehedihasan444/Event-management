import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RightSideMenu from "../ServiceDetails/RightSideMenu";

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
        <div className="">
          <img src={filterBlog?.image} alt="" className="rounded-md" />
        </div>
        <h1 className="text-4xl font-bold ">{filterBlog?.title}</h1>
        <p className="">{filterBlog?.content}</p>
      </div>
      <div className="">
        <RightSideMenu></RightSideMenu>
      </div>
    </div>
  );
};

export default BlogDetails;
