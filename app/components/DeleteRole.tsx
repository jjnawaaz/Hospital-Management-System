import Link from "next/link";

type DeleteRoleProps = {
  name: string;
  buttonText: string;
  func?: string;
};

export default function DeleteRole({ name, buttonText }: DeleteRoleProps) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-emerald-700 rounded-md shadow-xl shadow-emerald-400 text-white flex flex-col gap-y-3 p-5 font-mono">
          <h1 className="text-center font-semibold text-xl">{buttonText}</h1>
          <h3 className="text-center font-medium">Fill Fields</h3>
          <div className="flex flex-col gap-y-5">
            <label
              htmlFor=""
              className="flex flex-col gap-y-1 font-medium text-sm"
            >
              {name}
              <input
                type="text"
                placeholder="Enter Name"
                className="p-1 rounded-md"
              />
            </label>
            <div className="flex justify-center items-center">
              <Link href={"doctor-dashboard"}>
                <button className="text-white bg-red-600 rounded-lg text-xs px-2 py-1">
                  {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
