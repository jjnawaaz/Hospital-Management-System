import React from "react";
import { SideBarFields } from "../utils/constants";
import { X } from "lucide-react";
import Link from "next/link";

type SidebarProps = {
  data: SideBarFields[];
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ data, setSideBarOpen, sideBarOpen }: SidebarProps) {
  let url: string = "";
  if (data[0].type === "Doctor") {
    url = "/doctor-dashboard";
  } else if (data[0].type === "Receptionist") {
    url = "/receptionist-dashboard";
  } else if (data[0].type === "Pharmacist") {
    url = "/pharmacist-dashboard";
  } else {
    url = "/admin";
  }
  return (
    <div
      className={`${
        sideBarOpen ? "translate-x-0" : "-translate-x-96"
      } fixed flex md:translate-x-0 flex-col justify-between w-28  h-[calc(100vh-4rem)] bg-emerald-700 text-white transition-all duration-300`}
    >
      {/* Important Info  */}
      <div className="flex flex-col gap-y-10 p-2">
        <div className="md:hidden">
          <X onClick={() => setSideBarOpen((prev) => !prev)} size={20} />
        </div>
        {data.map((item, idx) => (
          <div key={idx} className="flex gap-x-3  items-center">
            <Link
              href={`${
                item.name === "Profile"
                  ? url
                  : `${`${url}/${item.name.toLowerCase()}`}`
              }`}
            >
              <span className="mt-2 hidden">{item.logo}</span>
              <span className="mt-2 text-[10px] font-semibold">
                {item.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
      {/* Settings and help center  */}
      <div className="flex flex-col text-xs font-semibold gap-y-7 p-2">
        <h1>Settings</h1>
        <h1>HelpCenter</h1>
      </div>
    </div>
  );
}

export default Sidebar;
