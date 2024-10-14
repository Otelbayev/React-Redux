import React from "react";
import e from "../assets/empty.png";
const Empty = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img src={e} alt="erro" className="object-cover" />
    </div>
  );
};

export default Empty;
