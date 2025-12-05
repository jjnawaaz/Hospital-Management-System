import Logo from "../svg/logo";

function Navbar() {
  return (
    <div className="fixed h-16 bg-emerald-700 w-screen flex items-center justify-between z-[40]">
      {/* Left Side Logo and Name */}
      <div className="flex items-center gap-x-1 ml-2">
        <Logo width={30} height={30} />
        <span className="text-md font-semibold text-white">Sehet</span>
      </div>
      {/* login button  */}
      <div className="flex items-center mr-3">
        <button className="bg-white px-2 py-1 rounded-md text-emerald-700 text-sm font-medium">
          Login Staff
        </button>
      </div>
    </div>
  );
}

export default Navbar;
