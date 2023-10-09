import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

const About = () => {
  const membersData = useLoaderData();
  // console.log(member)
  return (
    <div className="">
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-4xl font-bold text-center">Our Team Members</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {membersData.map((aMember) => (
            <>
              <div className="">
                <Card className="w-96">
                  <CardHeader floated={false} className="h-80">
                    <img className="w-full" src={aMember.image} />
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                      {aMember.name}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="font-medium"
                      textGradient
                    >
                      {aMember.position}
                    </Typography>
                  </CardBody>
                  <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Like">
                      <Typography
                        as="a"
                        href="#facebook"
                        variant="lead"
                        color="blue"
                        textGradient
                      >
                        <BsFacebook className="text-blue-700  "></BsFacebook>
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                      <Typography
                        as="a"
                        href="#twitter"
                        variant="lead"
                        color="light-blue"
                        textGradient
                      >
                        <AiFillTwitterCircle className="text-blue-500 text-2xl"></AiFillTwitterCircle>
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                      <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        textGradient
                      >
                        <AiFillInstagram className="text-pink-400  text-2xl"></AiFillInstagram>
                      </Typography>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/vP3tsGQ/Concert-1.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content w-screen">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">Let’s Start Planning!</h1>
              
              <div className="lg:flex gap-20">
                <div className="">
                  <p className="mb-5 text-2xl font-semibold">
                  Call Us
                  </p>
                  <h1 className="mb-5 text-4xl font-bold">
                  (255) 352-6258
                  </h1>
                </div>
                <div className="flex-1">
                  <p className="mb-5 text-2xl font-semibold">
                  Email Us
                  </p>
                  <h1 className="mb-5 text-4xl font-bold">
                  hello@divievent.com
                  </h1>
                </div>
              </div>
              <button className="btn btn-primary">SEND A MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
