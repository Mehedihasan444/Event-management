import { FaRegHandshake,FaGlassCheers } from "react-icons/fa";
import { GiBalloons } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsConeStriped } from "react-icons/bs";
const Features = () => {
  return (
    <div className="bg-[#f7f7f7] p-10 h-screen flex items-center">
      <div className="flex gap-16 mx-auto max-w-7xl">
        <div className="w-[40%] space-y-5">
          <p className="">WE ARE HARMONIC</p>
          <h1 className="text-4xl">
            <span className="font-bold">NO.1 </span>Events Management
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor
            ipsum, eaque saepe consectetur eligendi? Eveniet doloremque, iste
            maxime quasi ut eius incidunt inventore ratione hic quibusdam animi
            aliquam beatae accusamus culpa deserunt quod asperiores omnis
            tempora corrupti! Temporibus error nihil assumenda. Deleniti vel
            sequi sit sapiente officiis voluptatibus numquam.
          </p>
          <button className="btn btn-primary rounded-full">
            ABOUT HARMONI
          </button>
        </div>
        <div className="w-[60%] ml-20 grid grid-cols-3 bg-white">
            
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
