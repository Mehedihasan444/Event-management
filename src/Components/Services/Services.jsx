import React, { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,

} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Services = () => {
const [images,setImages]=useState([])

  useEffect(()=>{
    fetch('/Services.json')
    .then(res=>res.json())
    .then(data=>setImages(data))
  },[])

  // console.log(images)
  return (
   <div className="my-20">
     <div className="text-center mt-10 max-w-7xl mx-auto">
      <p className="">OUR SERVICES</p>
      <h1 className="text-4xl">
        Harmoni <span className="font-bold "> Expertises</span>
      </h1>
      <div className="mt-8 grid grid-cols-3 gap-5">
    
    {
      images.map(image=><>
       <Card shadow={false} className="w-full max-w-[26rem]   border">
        <CardHeader  floated={false} color="blue-gray" className=" shadow-none">
          <img
            src={image.image}
            alt="" className="h-[275px] object-cover w-screen"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody className="flex-grow">
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-bold text-4xl ">
            {image.category}
            </Typography>
       
          </div>
          <Typography color="gray" className="text-justify">
          {image.description}
          </Typography>
       <div className="text-gray-400 mt-5 text-lg text-left"><span className="text-black">Starting from : </span>{image.price}</div>
        </CardBody>
        <CardFooter className="pt-3">
          <Link to={`/ServiceDetails/${image.id}`}>
          <Button  className="text-white py-3  bg-black w-full border ">
            See Details
          </Button></Link>
        </CardFooter>
      </Card>
      </>
        )
    }

      </div>
    
    </div>
   </div>
  );
};

export default Services;
