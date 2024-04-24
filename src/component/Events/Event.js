import React from "react";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { TbMapShare } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";

const Event = () => {
  return (
    <>
      {/* hero section */}
      <div
        className="mb-4 contact-hero flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/Events/event-hero-modified.jpg")`,
        }}
      >
        <h1 className="text-6xl font-semibold text-white ">Events</h1>
      </div>
      {/* Events */}
      <div className="flex flex-wrap mx-10 mt-20">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

/* Single event */
const Card = () => {
  return (
    <>
      <div className="card w-full md:w-1/2 lg:w-1/3 p-4 bg-white rounded-lg shadow-md overflow-hidden">
        {/* event image */}
        <div className="h-40 md:h-48 lg:h-56">
          <img
            className="object-cover w-full h-full"
            src="/Events/Medical-Camp.jpg"
            alt="Medical-Camp"
          />
        </div>
        {/* event discription */}
        <div className="flex flex-col justify-around h-40 md:h-48 lg:h-56 p-4">
          <p className="text-sm">Sep. 10, 2018</p>
          <h3 className="text-xl font-semibold">World Wide Donation</h3>
          <div className="flex justify-between">
            <div className="flex ">
              <FaRegClock className="text-orange-500 w-5 h-5 mr-2" />
              <p className="event-time text-sm">10:30AM-03:30PM</p>
            </div>
            <div className="flex">
              <TbMapShare className="text-orange-500 w-6 h-6 mr-2" />
              <p className="event-venue text-sm">Venue:</p>
            </div>
          </div>
          <p className="event-content">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </>
  );
};

export default Event;
