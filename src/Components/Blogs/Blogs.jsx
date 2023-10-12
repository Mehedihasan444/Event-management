import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiBox } from "react-icons/bi";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const Blogs = () => {
  const [open, setOpen] = React.useState(0);
  const [blogs, setBlogs] = useState([]);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    fetch("/BlogsData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto  lg:h-screen ">
      <div className="  lg:flex  items-center mb-7 lg:mb-0 ">
        <div className="text-center lg:text-left sm:flex flex-col items-center lg:items-start space-y-5 flex-1">
          <div className="h-1 bg-gradient-to-r text-white from-[#ffa628] shadow-xl to-[#fe4504] w-20 hidden lg:block"></div>
          <p className="">FIND YOUR ANSWER</p>
          <h1 className="text-4xl">
            Ask & <span className="font-bold">Questions</span>
          </h1>
        </div>
        <div className="hidden lg:block  flex-1 ml-[40px] lg:flex justify-between">
          <div className="space-y-5">
            <div className="h-1 bg-gradient-to-r text-white from-[#ffa628] shadow-xl to-[#fe4504] w-20"></div>
            <p className="">OUR BLOG</p>
            <h1 className="text-4xl">
              Latest <span className="font-bold">News</span>
            </h1>
          </div>
          <div className="flex justify-end items-end">
            <Link to="/BlogsPage">
              <button className="btn bg-gradient-to-r text-white from-[#ffa628] shadow-xl to-[#fe4504]">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-10 items-center">
        {/* accordian */}
        <div className=" flex justify-center flex-1 space-y-5 border-gray-300  border-b-1 mx-5 lg:mx-0">
          <div className="lg:bg-[#f8f8f8] md:p-5 rounded-md">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                <h1 className="">
                  <span className="font-extrabold text-gray-300">01.</span> What
                  types of events do you manage?
                </h1>
              </AccordionHeader>
              <AccordionBody>
                We specialize in managing a variety of entertainment events,
                including concerts, music festivals, comedy shows, theater
                productions, and corporate conferences. Our expertise covers a
                wide range of event genres to meet your entertainment needs.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                <h1 className="">
                  <span className="font-extrabold text-gray-300">02.</span> How
                  do I purchase tickets for your events?
                </h1>
              </AccordionHeader>
              <AccordionBody>
                Purchasing tickets is easy! Simply visit our website, navigate
                to the event you're interested in, and click the "Buy Tickets"
                button. Follow the on-screen instructions to select your seats
                and complete the purchase securely.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                <h1 className="">
                  <span className="font-extrabold text-gray-300">03.</span> Can
                  I book your services for private events?
                </h1>
              </AccordionHeader>
              <AccordionBody>
                Yes, we offer event management services for private and
                corporate events. Whether you're planning a company retreat,
                product launch, or a special celebration, our team can tailor
                our services to meet your unique requirements.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(4)}>
                <h1 className="">
                  <span className="font-extrabold text-gray-300">04.</span> What
                  sets your entertainment events apart from others?
                </h1>
              </AccordionHeader>
              <AccordionBody>
                Our entertainment events are distinguished by the exceptional
                talent we bring, state-of-the-art production values, and a
                commitment to creating unforgettable experiences. We prioritize
                quality and innovation to ensure each event is a success.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(5)}>
                <h1 className="">
                  <span className="font-extrabold text-gray-300">05.</span> How
                  can I stay updated on upcoming events?
                </h1>
              </AccordionHeader>
              <AccordionBody>
                To stay informed about our upcoming events, subscribe to our
                newsletter, and follow us on social media. You'll receive
                regular updates, event announcements, and exclusive offers to
                make sure you never miss out on the excitement.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        {/* blogs */}
        <div className="flex-1 hidden lg:block">
          <div className="">
            {blogs.slice(0, 2).map((blog) => (
              <>
                <Card className="w-full max-w-[48rem] h-[200px] flex-row mt-5 shadow-none border border-gray-300  mb-5">
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                  >
                    <img
                      src={blog.image}
                      alt="card-image"
                      className="h-full w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody className="pt-0">
                    {/* <Typography
                    variant="p"
                    color="gray"
                    className="mb-2 uppercase "
                  >
                    {blog.category}
                  </Typography> */}
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="mb-2 "
                    >
                      {blog.title.length > 20
                        ? blog.title.slice(0, 20)
                        : blog.title}
                    </Typography>
                    <Typography color="gray" className="mb-2 font-normal">
                      {blog.content.length > 100
                        ? blog.content.slice(0, 100)
                        : blog.content}
                    </Typography>
                    <Link
                      to={`/BlogDetails/${blog.id}`}
                      className="inline-block flex items-center gap-2 text-blue-600"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Link>
                    <div className="flex items-center gap-2 text-gray-400 mt-4">
                      <AiOutlineClockCircle></AiOutlineClockCircle>
                      <p className="">{blog?.date} / </p>
                      <BiBox></BiBox>
                      <p className=""> {blog?.category}</p>
                    </div>
                  </CardBody>
                </Card>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
