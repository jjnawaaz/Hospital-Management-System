import { HeartPulse, Helicopter, Hospital } from "lucide-react";
import React from "react";

function About() {
  return (
    <div className="container mx-auto bg-white rounded-md -mt-10 md:flex items-stretch shadow-2xl shadow-emerald-300 ">
      <div className="md:w-1/3 flex flex-col gap-y-3 p-7 border-b-2 md:border-r-2 md:border-b-0 border-gray-100 ">
        <div className="flex items-center justify-center">
          <Hospital className="text-emerald-700" size={40} />
        </div>
        <h1 className="flex justify-center items-center text-emerald-700 font-semibold">
          Qualified Doctors
        </h1>
        <p className="text-center text-black text-sm">
          Developing whole individuals is our goal. We have flexible, high-trust
          environment
        </p>
      </div>
      <div className="md:w-1/3 flex flex-col gap-y-3 p-7 border-b-2 md:border-r-2 md:border-b-0 border-gray-100">
        <div className="flex items-center justify-center">
          <Helicopter className="text-emerald-700" size={40} />
        </div>
        <h1 className="flex justify-center items-center text-emerald-700 font-semibold">
          Emergency Helicopter
        </h1>
        <p className="text-center text-black text-sm">
          The air ambulance feature is now available even to middle class
          people, saving lives
        </p>
      </div>{" "}
      <div className="md:w-1/3  flex flex-col gap-y-3 p-7">
        <div className="flex items-center justify-center">
          <HeartPulse className="text-emerald-700" size={40} />
        </div>
        <h1 className="flex justify-center items-center text-emerald-700 font-semibold">
          Cardiac Arrest
        </h1>
        <p className="text-center text-black text-sm">
          With rising Cardiac Arrest cases, it is hard to imagine a positive
          start to your date
        </p>
      </div>
    </div>
  );
}

export default About;
