import React from "react";

function Footer() {
  return (
    <div className="bg-emerald-500">
      <div className="flex container mx-auto">
        <div className="w-1/2 flex flex-col justify-center p-5 gap-y-2 border-r-2 border-gray-200">
          <h1 className="text-white font-semibold text-xl text-center">
            Sehet
          </h1>
          <p className="text-xs text-white font-extralight ">
            It was popularised in the 1960&apos;s with the release of Letraset
            sheets containing Lorem Ipsum passages It was popularised in the
            1960&apos;s with the release of Letraset sheets containing Lorem
            Ipsum passages It was popularised in the 1960&apos;s with the
            release of Letraset sheets containing Lorem Ipsum passages
          </p>
          <p className="text-xs text-white font-medium">info@website.com</p>
        </div>
        <div className="w-1/2  flex flex-col justify-center p-5 gap-y-2">
          <h1 className="text-white font-semibold text-xl">Services</h1>
          <p className="text-xs text-white font-extralight">Cardiology</p>
          <p className="text-xs text-white font-extralight">Neurology</p>
          <p className="text-xs text-white font-extralight">Urology</p>
          <p className="text-xs text-white font-extralight">Radiology</p>
          <p className="text-xs text-white font-extralight">Pulmanology</p>
          <p className="text-xs text-white font-extralight">Cardiology</p>
        </div>
      </div>
      <hr />
      <div className="text-white text-center text-sm p-2 font-extralight">
        All Rights Reserved &copy; 2025
      </div>
    </div>
  );
}

export default Footer;
