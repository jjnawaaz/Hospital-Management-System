import {
  Activity,
  Bean,
  Brain,
  HeartPulse,
  Radio,
  Stethoscope,
} from "lucide-react";
import React from "react";

function Services() {
  return (
    <div className=" ">
      <div className="flex items-center justify-center pt-4 gap-2 text-xs sm:text-lg font-semibold">
        <Activity />
        Medical Services
      </div>
      <div className="flex items-center justify-center mt-5">
        <h1 className="w-96 text-2xl sm:text-3xl text-center font-semibold ">
          Find Out More About Our Services
        </h1>
      </div>
      {/* Grid Section  */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 p-10">
        <div className="flex flex-col gap-y-3 p-7 lg:p-10 rounded-md shadow-2xl shadow-gray-400">
          <div className="flex justify-center items-center">
            <HeartPulse className="text-emerald-700" size={40} />
          </div>
          <h1 className="flex justify-center items-center font-semibold text-emerald-700">
            Cardiology
          </h1>
          <p className="text-center text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab
            quos perferendis.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-7 lg:p-10 rounded-md shadow-2xl shadow-gray-400">
          <div className="flex justify-center items-center">
            <Brain className="text-emerald-700" size={40} />
          </div>
          <h1 className="flex justify-center items-center font-semibold text-emerald-700">
            Neurology
          </h1>
          <p className="text-center text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab
            quos perferendis.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-7 lg:p-10 rounded-md shadow-2xl shadow-gray-400">
          <div className="flex justify-center items-center">
            <Bean className="text-emerald-700" size={40} />
          </div>
          <h1 className="flex justify-center items-center font-semibold text-emerald-700">
            Urology
          </h1>
          <p className="text-center text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab
            quos perferendis.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-7 lg:p-10 rounded-md shadow-2xl shadow-gray-400">
          <div className="flex justify-center items-center">
            <Stethoscope className="text-emerald-700" size={40} />
          </div>
          <h1 className="flex justify-center items-center font-semibold text-emerald-700">
            Pulmonology
          </h1>
          <p className="text-center text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab
            quos perferendis.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-7 lg:p-10 rounded-md shadow-2xl shadow-gray-400">
          <div className="flex justify-center items-center">
            <Radio className="text-emerald-700" size={40} />
          </div>
          <h1 className="flex justify-center items-center font-semibold text-emerald-700">
            Radiology
          </h1>
          <p className="text-center text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab
            quos perferendis.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-7 lg:p-10 rounded-md shadow-2xl shadow-gray-400">
          <div className="flex justify-center items-center">
            <Brain className="text-emerald-700" size={40} />
          </div>
          <h1 className="flex justify-center items-center font-semibold text-emerald-700">
            Hypotherapy
          </h1>
          <p className="text-center text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab
            quos perferendis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
