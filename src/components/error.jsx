import React from "react";
import e from "../assets/error.png";

const Error = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img src={e} alt="erro" className="object-cover" />
    </div>
  );
};

export default Error;
