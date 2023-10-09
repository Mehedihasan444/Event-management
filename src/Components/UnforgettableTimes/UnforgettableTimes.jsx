import { useEffect, useState } from "react";

const UnforgettableTimes = () => {
  const [images, setImages] = useState([]);
  const [value,setValue]=useState(false)
  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);


  const handleSeeAll =()=>{
    setValue(true)
  }
//   console.log(images);
  return (
    <div className="text-center mt-20 ">
      <p className="">HARMONI GALLERY</p>
      <h1 className="text-2xl md:text-4xl">
        Beautiful &<span className="font-bold "> Unforgettable Time</span>
      </h1>
      <div className="">
        <div className="grid grid-cols-1  md:grid-cols-3 pl-3 md:pl-0 md:px-5 lg:px-0 lg:grid-cols-4 gap-4 mt-10">
          {value?images.map((image) => (
            <>
              <div>
                <img
                  className="object-cover h-[250px] w-[380px] rounded-lg"
                  src={image.image}
                  alt=""
                />
              </div>
            </>
          )):images.slice(0,12).map((image) => (
            <>
              <div>
                <img
                  className="object-cover h-[250px] w-[380px] rounded-lg"
                  src={image.image}
                  alt=""
                />
              </div>
            </>
          ))}
    
        </div>
        <div className="mt-10">{!value&&<button onClick={handleSeeAll} className="btn bg-gradient-to-r text-white from-[#ffa628] shadow-xl to-[#fe4504]">SEE ALL</button>}</div>
      </div>
    </div>
  );
};

export default UnforgettableTimes;
