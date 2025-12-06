import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="pt-16 min-h-screen border-2 border-purple-400 flex justify-center items-center">
      <div className="bg-emerald-700 rounded-md shadow-xl shadow-emerald-400 text-white flex flex-col gap-y-3 p-5 font-mono">
        <h1 className="text-center font-semibold text-xl">SEHET</h1>
        <h3 className="text-center font-medium">Login to your account</h3>
        <div className="flex flex-col gap-y-5">
          <label
            htmlFor=""
            className="flex flex-col gap-y-1 font-medium text-sm"
          >
            Email
            <input
              type="text"
              placeholder="Enter Email"
              className="p-1 rounded-md"
            />
          </label>
          <label
            htmlFor=""
            className="flex flex-col gap-y-1 font-medium text-sm"
          >
            Password
            <input
              type="password"
              placeholder="Enter Password"
              className="p-1 rounded-md"
            />
          </label>
          <div className="flex justify-center items-center">
            <Link href={"doctor-dashboard"}>
              <button className="bg-white text-emerald-700 rounded-lg text-sm p-1">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
