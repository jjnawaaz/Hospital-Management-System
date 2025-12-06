"use client";
import { pharmacistFields } from "../utils/constants";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function PharmacistDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  return (
    <div className="pt-16">
      <Sidebar
        data={pharmacistFields}
        setSideBarOpen={setSideBarOpen}
        sideBarOpen={sideBarOpen}
      />
      {sideBarOpen ? (
        <></>
      ) : (
        <>
          {" "}
          <Menu
            className="fixed md:hidden bg-emerald-700 rounded-sm stroke-white m-2 p-1"
            onClick={() => setSideBarOpen((prev) => !prev)}
          />
        </>
      )}
      {children}
    </div>
  );
}
