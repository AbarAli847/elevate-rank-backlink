import React from "react";

const InfoCard = () => {
  return (
    <div className="flex items-center ml-[27rem] bg-white border mt-[10rem]  rounded-2xl shadow-md px-6 py-4 w-fit space-x-4">
      {/* Profile Image */}
      <div className="w-15 h-15 bg-blue-800 rounded-2xl overflow-hidden">
        <img
          src="profileimage.png" 
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <p className="text-black font-semibold">Want to know more?</p>

      {/* Button */}
      <button className="bg-blue-800 text-white font-semibold px-4 py-2 rounded-2xl">
        How we work
      </button>
    </div>
  );
};

export default InfoCard;
