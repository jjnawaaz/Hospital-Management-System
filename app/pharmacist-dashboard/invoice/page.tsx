"use client";
import { useState } from "react";

type TabletData = {
  name: string;
  price: string;
};

export default function Page() {
  const [patientName, setPatientName] = useState<string>("");
  const [doctorName, setDoctorName] = useState<string>("");
  const [tablet, setTablet] = useState<string>("");
  const [tabletData, setTabletData] = useState<TabletData[]>([]);
  const [price, setPrice] = useState<string>("");
  return (
    <>
      <div className="md:ml-28 ">
        <div className="flex justify-center items-center mt-10 text-3xl font-semibold text-emerald-700">
          Invoice
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-y-6 mt-10 pl-4 border-2 border-emerald-700 rounded-md shadow-md shadow-emerald-700 pb-10 pt-10 sm:w-1/2 lg:w-1/3 pr-4 sm:justify-center">
            <label htmlFor="" className="flex justify-between items-center">
              Patient&apos;s Name:
              <input
                type="text"
                placeholder="Patient's Name"
                value={patientName}
                className="ml-4 border-2 border-emerald-700 focus:outline-emerald-400"
                onChange={(e) => setPatientName(e.target.value)}
              />
            </label>
            <label htmlFor="" className="flex justify-between items-center">
              Doctor&apos;s Name:
              <input
                type="text"
                placeholder="Doctor's Name"
                value={doctorName}
                className="ml-4 border-2 border-emerald-700 focus:outline-emerald-400"
                onChange={(e) => setDoctorName(e.target.value)}
              />
            </label>
            <label htmlFor="" className="flex justify-between items-center">
              Tablet&apos;s Name:
              <input
                type="text"
                placeholder="Tablet's Name"
                className="ml-4 border-2 border-emerald-700 focus:outline-emerald-400"
                value={tablet}
                onChange={(e) => {
                  setTablet(e.target.value);
                }}
              />
            </label>
            <label htmlFor="" className="flex justify-between items-center">
              Price:
              <input
                type="text"
                value={price}
                placeholder="Tablet's Price"
                className="ml-4 border-2 border-emerald-700 focus:outline-emerald-400"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </label>
            <div className="flex justify-end">
              <button
                className="border-2 border-emerald-700 text-emerald-700 font-medium rounded-md w-1/4 "
                onClick={() => {
                  if (price && tablet) {
                    setTabletData((prev) => [
                      ...prev,
                      {
                        name: tablet,
                        price: price,
                      },
                    ]);
                    setTablet("");
                    setPrice("");
                  } else {
                  }
                }}
              >
                Add tablet
              </button>
            </div>
            <div className="flex justify-center">
              <button className="bg-emerald-700 text-white rounded-md w-1/2 px-1 py-1">
                Generate Invoice
              </button>
            </div>
          </div>
        </div>
        {/* Bill Invoice Field  */}
        <div className="p-4 border-2 border-emerald-700 m-10">
          <div className="border-b-2">Patient&apos;s Name: {patientName}</div>
          <div className="mb-5 border-b-2">
            Doctor&apos;s Name: {doctorName}
          </div>
          {tabletData.map((item, idx) => (
            <div
              key={idx}
              className="border-b-2 flex justify-between pr-10 pl-10"
            >
              <span className="block">{item.name}</span>
              <span className="block">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
