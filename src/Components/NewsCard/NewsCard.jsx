import { BsBookmark } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillEye, AiOutlineClockCircle } from "react-icons/ai";
import { BiBox } from "react-icons/bi";
import { useEffect, useState } from "react";



const NewsCard = ({ blog }) => {


  const { id, title, image, author, date, category, content } = blog;
  const [view, setView] = useState([]);
  const [desireId, setDesiredId] = useState(0);
  const [count, setCount] = useState(0);

  const handleBlogView = (id) => {
    setCount(count + 1);
    setView([...view, { id: id, views: count }]);
  };


  console.log(view);
  useEffect(() => {
    const desire = view.find((i) => i.id == id);
    setDesiredId(desire);
  }, [id, view]);




  return (
    <div className="mb-5">
      <div className="  border rounded-md border-gray-200">
        <div className="flex justify-between p-5 bg-[#F3F3F3]">
          <div className="flex justify-around gap-3">
            <div className="flex items-center justify-center">
              <img src={image} alt="" className="rounded-full w-10" />
            </div>
            <div className="">
              <p className="font-bold">{author}</p>
              <div className="flex items-center gap-2 text-gray-400 ">
                <AiOutlineClockCircle></AiOutlineClockCircle>
                <p className="">{date} / </p>
                <BiBox></BiBox>
                <p className=""> {category}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center text-xl">
            <BsBookmark></BsBookmark>
            <BiShareAlt></BiShareAlt>
          </div>
        </div>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
          </a>
          <a href="#">
            <img className="rounded-t-lg " src={image} alt="" />
          </a>
          <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
            {content?.length > 200 ? (
              <p className="">
                {content.slice(0, 200)}{" "}
                <Link
                  to={`/BlogDetails/${id}`}
                  className="text-blue-600 font-semibold"
                  onClick={() => handleBlogView(id)}
                >
                  Read more...
                </Link>
              </p>
            ) : (
              content
            )}
          </p>
        </div>

        <div className="flex justify-between p-5 bg-[#F3F3F3]">
          <div className="flex justify-around gap-3"></div>
          <div className="flex gap-5 items-center text-xl">
            <AiFillEye></AiFillEye>

            <p className="text-black">{desireId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
