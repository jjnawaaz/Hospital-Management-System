"use client";
import Sidebar from "../components/Sidebar";
import { Menu } from "lucide-react";
import { receptionistFields } from "../utils/constants";
import { useState } from "react";

export default function ReceptionistDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  return (
    <div className="pt-16">
      <Sidebar
        data={receptionistFields}
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
