"use client";
import CreateRole from "@/app/components/CreateRole";
import DeleteRole from "@/app/components/DeleteRole";
import ListRole from "@/app/components/ListRole";
import UpdateRole from "@/app/components/UpdateRole";
import { useState } from "react";

export default function Page() {
  const [createDoctor, setCreateDoctor] = useState(true);
  const [updateDoctor, setUpdateDoctor] = useState(false);
  const [deleteDoctor, setDeleteDoctor] = useState(false);
  const [viewDoctor, setViewDoctor] = useState(false);

  return (
    <>
      <div className="p-2 pb-5 md:ml-28  flex flex-col gap-y-3 ">
        <div className="flex items-center justify-center text-3xl font-mono font-semibold text-emerald-700">
          Manage Admins
        </div>
        <div className="p-3 flex gap-x-3 items-center justify-center text-sm">
          <button
            onClick={() => {
              setCreateDoctor(true);
              setUpdateDoctor(false);
              setDeleteDoctor(false);
              setViewDoctor(false);
            }}
            className="border-2 border-emerald-700 bg-emerald-700 font-semibold text-[10px] px-2 py-1 rounded-md text-white"
          >
            Create Admin
          </button>
          <button
            onClick={() => {
              setUpdateDoctor(true);
              setDeleteDoctor(false);
              setCreateDoctor(false);
              setViewDoctor(false);
            }}
            className="border-2 border-emerald-700 font-semibold text-[10px] px-2 py-1 rounded-md text-emerald-700"
          >
            Update Admin
          </button>
          <button
            onClick={() => {
              setDeleteDoctor(true);
              setCreateDoctor(false);
              setUpdateDoctor(false);
              setViewDoctor(false);
            }}
            className="border-2 border-red-600 bg-red-600 font-semibold text-[10px] px-2 py-1 rounded-md text-white"
          >
            Delete Admin
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              setViewDoctor(true);
              setCreateDoctor(false);
              setUpdateDoctor(false);
              setDeleteDoctor(false);
            }}
            className="font-semibold text-sm px-2 py-1 rounded-md underline underline-offset-8"
          >
            View All Admins
          </button>
        </div>
        {/* Cards for functionalities  */}
        <div className="flex items-center justify-center">
          {createDoctor ? (
            <>
              <CreateRole
                name="Admin's Name"
                email="Admin's Email"
                password="Admin's Password"
                buttonText="Create Admin"
              />
            </>
          ) : (
            <></>
          )}
          {updateDoctor ? (
            <>
              <UpdateRole
                name="Admin's Name"
                email="Admin's Email"
                password="Admin's Password"
                buttonText="Update Admin"
              />
            </>
          ) : (
            <></>
          )}
          {deleteDoctor ? (
            <>
              <DeleteRole name="Admin id" buttonText="Delete Admin" />
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {viewDoctor ? (
            <>
              <ListRole />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
