import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RightSideMenu from "./RightSideMenu";

import {
  Card,CardHeader,CardBody,CardFooter,Typography,Button} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const ServiceDetails = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [filteredImage, setFilteredImage] = useState([]);

  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => setImages(data));

    const findData = images.find((i) => i.id == id);
    setFilteredImage(findData);
  }, [id, images]);

    // console.log(filteredImage?.packages)
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3 ">
          <h1 className="text-4xl font-bold my-5">{filteredImage?.category}</h1>
          <div className="">
            <img className="rounded-md" src={filteredImage?.image} alt="" />
          </div>
          <div className="mt-5 space-y-5">
            <p className="">{filteredImage?.description}</p>
          </div>
          <div className="space-y-5 mt-10">
            <h1 className="text-4xl font-bold text-center ">Our Packages</h1>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">

            <Card
              color="gray"
              variant="gradient"
              className="w-full max-w-[20rem] p-8 bg-[#3b3b41]"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal uppercase font-bold"
                >
                  Silver
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                >
                  <span className="mt-2 text-4xl font-bold">{filteredImage?.packages?.silver}</span>
                  <span className="self-end text-4xl">/event</span>
                </Typography>
              </CardHeader>
              <CardBody className="p-0">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      5 team members
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      200+ components
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      40+ built-in pages
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      1 year free updates
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      Life time technical support
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardFooter className="mt-12 p-0">
                <Button
                  size="lg"
                  color="black"
                  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-white text-black py-3"
                  ripple={false}
                  fullWidth={true}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
            <Card
              color="gray"
              variant="gradient"
              className="w-full max-w-[20rem] p-8 bg-[#3b3b41]"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal uppercase font-bold"
                >
                  Gold
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                >
                  <span className="mt-2 text-4xl font-bold">{filteredImage?.packages?.gold}</span>
                  <span className="self-end text-4xl">/event</span>
                </Typography>
              </CardHeader>
              <CardBody className="p-0">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      5 team members
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      200+ components
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      40+ built-in pages
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      1 year free updates
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      Life time technical support
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardFooter className="mt-12 p-0">
                <Button
                  size="lg"
                  color="black"
                  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-white text-black py-3"
                  ripple={false}
                  fullWidth={true}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
            <Card
              color="gray"
              variant="gradient"
              className="w-full max-w-[20rem] p-8 bg-[#3b3b41]"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal uppercase font-bold"
                >
                  Diamond
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                >
                  <span className="mt-2 text-4xl font-bold">{filteredImage?.packages?.diamond}</span>
                  <span className="self-end text-4xl">/event</span>
                </Typography>
              </CardHeader>
              <CardBody className="p-0">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      5 team members
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      200+ components
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      40+ built-in pages
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      1 year free updates
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">
                      Life time technical support
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardFooter className="mt-12 p-0">
                <Button
                  size="lg"
                  color="black"
                  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-white text-black py-3"
                  ripple={false}
                  fullWidth={true}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
          </div>
          </div>
         
        </div>
        <div className="">
          <RightSideMenu></RightSideMenu>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
