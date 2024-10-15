import React from "react";
import Car from "../assets/CAR.png";

const Banner = () => {
  return (
    <div className="flex flex-row justify-between items-center h-[90vh] px-12">
      <div className="w-1/3 h-full font-Montserrat font-extrabold text-7xl flex justify-center items-center text-gray-800">
        <p>
          Planning to ride ? book a{" "}
          <span className="underline decoration-wavy decoration-4 decoration-[#47BDDE]">
            Rydr
          </span>
        </p>
      </div>
      <div className="w-2/3 h-full flex justify-center">
        <img src={Car} alt="" className="h-full" />
      </div>
    </div>
  );
};

export default Banner;
