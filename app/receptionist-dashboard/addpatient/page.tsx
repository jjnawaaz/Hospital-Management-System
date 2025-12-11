import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex p-10 md:ml-28  items-center justify-center ">
        <div className="bg-emerald-700 rounded-md shadow-xl w-80 sm:w-1/2 shadow-emerald-400 text-white flex flex-col gap-y-3 p-5 font-mono">
          <h1 className="text-center font-semibold text-xl">Add Patient</h1>
          <h3 className="text-center font-medium">Enter fields</h3>
          <div className="flex flex-col gap-y-5">
            <label
              htmlFor=""
              className="flex flex-col gap-y-1 font-medium text-sm"
            >
              Name
              <input
                type="text"
                placeholder="Enter Name"
                className="p-1 rounded-md"
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col gap-y-1 font-medium text-sm"
            >
              Age
              <input
                type="text"
                placeholder="Enter Age"
                className="p-1 rounded-md"
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col gap-y-1 font-medium text-sm"
            >
              Location
              <input
                type="text"
                placeholder="Enter Location"
                className="p-1 rounded-md"
              />
            </label>
            <div className="flex justify-center items-center">
              <Link href={"doctor-dashboard"}>
                <button className="bg-white text-emerald-700 rounded-lg text-sm p-1">
                  Add Patient
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
