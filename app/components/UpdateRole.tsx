import Link from "next/link";

type UpdateRoleProps = {
  name: string;
  email: string;
  password: string;
  buttonText: string;
  func?: string;
};

export default function UpdateRole({
  name,
  email,
  password,
  buttonText,
}: UpdateRoleProps) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-emerald-700 rounded-md shadow-xl shadow-emerald-400 text-white flex flex-col gap-y-3 p-5 font-mono">
          <h1 className="text-center font-semibold text-xl">{buttonText}</h1>
          <h3 className="text-center font-medium">Enter fields</h3>
          <div className="flex flex-col gap-y-5">
            <label
              htmlFor=""
              className="flex flex-col gap-y-1 font-medium text-sm"
            >
              Id
              <input
                type="text"
                placeholder="Enter Id"
                className="p-1 rounded-md"
              />
            </label>
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
            <label
              htmlFor=""
              className="flex flex-col gap-y-1 font-medium text-sm"
            >
              {email}
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
              {password}
              <input
                type="password"
                placeholder="Enter Password"
                className="p-1 rounded-md"
              />
            </label>
            <div className="flex justify-center items-center">
              <Link href={"doctor-dashboard"}>
                <button className="bg-white text-emerald-700 rounded-lg text-sm p-1">
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
