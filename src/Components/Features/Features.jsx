import { FaRegHandshake,FaGlassCheers } from "react-icons/fa";
import { GiBalloons } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsConeStriped } from "react-icons/bs";
const Features = () => {
  return (
    <div className="bg-[#f7f7f7] p-10 lg:h-screen flex items-center">
      <div className="lg:flex gap-16 mx-auto max-w-7xl">
        <div className="text-center lg:text-left lg:w-[40%] space-y-5" data-aos="fade-right">
          <p className="">WE ARE HARMONIC</p>
          <h1 className="text-2xl md:text-4xl">
            <span className="font-bold">NO.1 </span>Events Management
          </h1>
          <p className="">
          At No. 1 Entertainment Event Management, we take the spotlight in creating extraordinary experiences. With a team dedicated to orchestrating unforgettable entertainment events, we're your premier choice for making moments magical. We specialize in curating events that pulse with energy, from dazzling concerts and lively festivals to captivating live shows. Our commitment to excellence, coupled with cutting-edge technology and a passion for entertainment, ensures that each event we craft is a showstopper. Let us bring your entertainment vision to life and make your event the talk of the town.
          </p>
          <button className="btn btn-primary rounded-full bg-gradient-to-r border-none text-white from-[#ffa628] shadow-xl to-[#fe4504]">
            ABOUT HARMONI
          </button>
        </div>
        <div className="lg:w-[60%] mt-10 lg:mt-0 lg:ml-20 grid  md:grid-cols-3 bg-white">
            
          <div className="text-center border-b py-10 ">
            <div className="flex justify-center items-center text-6xl text-[#fe4504]">
              <FaRegHandshake></FaRegHandshake>
            </div>
            <h1 className="font-bold text-xl">Friendly Team</h1>
            <p className="">More than 200 teams</p>
            
          </div>
          <div className=" bg-gradient-to-t from-[#ffa628] shadow-xl to-[#fe4504] text-center border-b text-white  border-l py-10">
            <div className="flex justify-center items-center text-6xl ">
              <GiBalloons></GiBalloons>
            </div>
            <h1 className="font-bold text-xl">Perfect Venues</h1>
            <p className="">Around 20 Venues</p>
          </div>
          <div className="text-center border-b border-l py-10">
            <div className="flex justify-center items-center text-6xl text-[#fe4504]">
              <FaGlassCheers></FaGlassCheers>
            </div>
            <h1 className="font-bold text-xl">Unique Scenario</h1>
            <p className="">We thinking out of the box</p>
          </div>
          <div className="text-center border-b py-10">
            <div className="flex justify-center items-center text-6xl text-[#fe4504]">
              <BsConeStriped></BsConeStriped>
            </div>
            <h1 className="font-bold text-xl">Unforgettable Time</h1>
            <p className="">We make your perfect event</p>
          </div>
          <div className="text-center border-l py-10">
            <div className="flex justify-center items-center text-6xl text-[#fe4504]">
              <BiSolidPhoneCall></BiSolidPhoneCall>
            </div>
            <h1 className="font-bold text-xl">24/7 Hours Support</h1>
            <p className="">Anytime anywhere</p>
          </div>
          <div className="text-center border-l py-10">
            <div className="flex justify-center items-center text-6xl text-[#fe4504]">
              <HiLightBulb></HiLightBulb>
            </div>
            <h1 className="font-bold text-xl">Briliant idea</h1>
            <p className="">We have million idea</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
