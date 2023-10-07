import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {

    const {id}=useParams()
    const [images,setImages]=useState([])
    const [filteredImage,setFilteredImage]=useState([])

    useEffect(()=>{
      fetch('/Services.json')
      .then(res=>res.json())
      .then(data=>setImages(data))

      const findData = images.find(image=>image.id==id)
      setFilteredImage(findData)
    },[id,images])

    //  console.log(filteredImage)
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="">
                <img src={filteredImage.image} alt="" />
            </div>
            <div className="mt-5 space-y-5">
                <h1 className="text-4xl font-bold">{filteredImage.category}</h1>
                <p className="">{filteredImage.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;