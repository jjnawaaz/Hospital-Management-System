export default function ProfilePage() {
  return (
    <>
      <div className="md:ml-28">
        <div className="flex flex-col justify-center font-mono pl-3 pt-10 pb-2">
          <h1 className="text-3xl font-semibold text-emerald-700">
            Your Profile
          </h1>
          <h6 className="text-sm text-emerald-500 font-sans pl-1">
            View all your profile details here{" "}
          </h6>
        </div>
        <div className=" p-3">
          <h1 className="text-emerald-700 text-xl font-semibold pb-3">
            Personal Details:
          </h1>
          <div className="flex sm:sm:w-1/2 justify-between py-2">
            <h4 className="w-1/2 text-emerald-500 text-sm">Full Name:</h4>
            <h4 className="w-1/2 text-emerald-700 text-sm font-medium">
              Junaid Nawaz
            </h4>
          </div>
          <div className="flex sm:w-1/2 justify-between py-2">
            <h4 className="w-1/2 text-emerald-500 text-sm">Email:</h4>
            <h4 className="w-1/2 text-emerald-700 text-sm font-medium">
              jj@test.com
            </h4>
          </div>
          <div className="flex sm:w-1/2 justify-between py-2">
            <h4 className="w-1/2 text-emerald-500 text-sm">Password:</h4>
            <h4 className="w-1/2 text-emerald-700 text-sm font-medium">
              Change Password ?
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
