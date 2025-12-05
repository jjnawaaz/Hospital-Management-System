import { Ambulance } from "lucide-react";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="bg-emerald-500 p-10 flex items-stretch">
      {/* Left side text section  */}
      <div className="text-white flex flex-col gap-y-12 md:w-1/2">
        <h1 className="font-semibold text-md lg:text-lg flex items-center gap-x-2">
          Welcome to Sehet
          <Ambulance />
        </h1>
        <h1 className="text-4xl lg:text-7xl tracking-wide">
          Taking care of your health is our priority
        </h1>
        <p className="text-[10px] lg:text-sm mb-3">
          Being healthy is more than just not getting sick . It entails mental,
          physical and social wellbeing. Its not just about treatment, its about
          healing
        </p>
      </div>
      {/* Right side photo in large screens  */}
      <div className="hidden md:block  w-1/2 relative">
        <Image
          src={"/doctor-hero.png"}
          alt="undefined"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
