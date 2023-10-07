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
      <h1 className="text-4xl">
        Beautiful &<span className="font-bold "> Unforgettable Time</span>
      </h1>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
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
        <div className="mt-10">{!value&&<button onClick={handleSeeAll} className="btn">SEE ALL</button>}</div>
      </div>
    </div>
  );
};

export default UnforgettableTimes;
