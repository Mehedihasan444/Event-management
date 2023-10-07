import { BsFacebook } from "react-icons/bs";
import { AiFillGithub,AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";


const RightSideMenu = () => {
  return (
    <div className="ml-5 mt-5">
      <h1 className="text-2xl font-bold">Login With</h1>
      <div className="">
        <div className="flex justify-center items-center relative mt-4">
          <BsFacebook className="absolute text-blue-600 top-3.5 left-10 text-xl"></BsFacebook>
          <button className="w-full text-blue-600 border-2 border-blue-600 rounded-md py-2 text-lg font-semibold">
            Login with facebook
          </button>
        </div>
        <div className="flex justify-center items-center relative mt-4">
          <AiFillGithub className="absolute text-black top-3.5 left-10 text-xl"></AiFillGithub>
          <button className="w-full text-black border-2 border-black rounded-md py-2 text-lg font-semibold">
            Login with Github
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-bold">Find Us On</h1>
        <div className="flex justify-center items-center relative mt-4">
          <BsFacebook className="absolute text-blue-900 top-3.5 left-10 text-xl"></BsFacebook>
          <button className="w-full text-gray-500 border-2 border-gray-300  py-2 text-lg font-semibold">
            Facebook
          </button>
        </div>
        <div className="flex justify-center items-center relative ">
          <AiFillTwitterCircle className="absolute text-blue-600 top-3.5 left-10 text-xl"></AiFillTwitterCircle>
          <button className="w-full text-gray-500 border-l-2 border-r-2 border-gray-300  py-2 text-lg font-semibold">
          Twitter
          </button>
        </div>
        <div className="flex justify-center items-center relative ">
          <AiFillInstagram className="absolute text-red-400 top-3.5 left-10 text-xl"></AiFillInstagram>
          <button className="w-full text-gray-500 border-2 border-gray-300  py-2 text-lg font-semibold">
            Instagram
          </button>
        </div>
      </div>
      {/* <div className="mt-5 bg-[#F3F3F3] p-5 rounded-md">
      <h1 className="text-2xl font-bold">Q-Zone</h1>
<div className="">
    <img src={swimming} alt="" className="" />
    <img src={Class} alt="" className="" />
    <img src={playground} alt="" className="" />
</div>
      </div> */}
    </div>
  );
};

export default RightSideMenu;
