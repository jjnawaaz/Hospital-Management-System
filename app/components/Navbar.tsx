import Link from "next/link";
import Logo from "../svg/logo";

function Navbar() {
  return (
    <div className="fixed h-16 bg-emerald-700 w-screen flex items-center justify-between z-[40] font-mono">
      {/* Left Side Logo and Name */}
      <Link href={"/"}>
        <div className="flex items-center gap-x-1 ml-2">
          <Logo width={30} height={30} />
          <span className="text-md font-semibold text-white">Sehet</span>
        </div>
      </Link>
      {/* login button  */}
      <div className="flex items-center mr-3">
        <Link href={"/login"}>
          <button className="bg-white px-2 py-1 rounded-md text-emerald-700 text-sm font-medium">
            Login Staff
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
