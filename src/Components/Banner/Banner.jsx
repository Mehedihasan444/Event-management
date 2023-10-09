import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className='relative '>
    <img className="h-screen w-full" src="https://i.ibb.co/ByTWQTH/Concert-8.jpg" alt="" />
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-[#00000077]">
      <div className="flex text-center space-y-5 flex-col justify-center items-center h-screen">
      <h1 className="text-white text-7xl ">One Stop <br /> <span className="font-extrabold">Event Planner</span></h1>
      <p className="text-white">EVERY EVENT SHOULD BE PERFECT </p>
      <div className="flex gap-5 md:gap-20 pt-10">
       <Link to="/About"> <button className="btn border-none bg-gradient-to-r from-[#fe4504] to-[#ffa628] text-white px-10 py-3 rounded-full">ABOUT US</button></Link>
        <a href="#service"><button className="btn bg-transparent  text-white border-2  border-[#fe4504] hover:text-black hover:border-[#fe4504] rounded-full px-10">GET STARTED!</button></a>
      </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;

//#fe4504 #ffa628