import React from "react";

const PlayersFilter = () => {
  return (
    <div className="px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-transparent bg-opacity-10 mt-4">
      <h1 className="text-xl font-bold">Filter players by contingent</h1>
      <div className="flex mt-2">
        <button className="px-4 py-2 bg-gradient-to-r from-black to-slate-600 text-white rounded-l-md hover:opacity-90 transition-all">
          All
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white  hover:opacity-90 transition-all">
          Europe
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white  hover:opacity-90 transition-all">
          Africa
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white  hover:opacity-90 transition-all">
          Asia
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white  hover:opacity-90 transition-all rounded-r-md">
          Americas
        </button>
      </div>
    </div>
  );
};

export default PlayersFilter;
