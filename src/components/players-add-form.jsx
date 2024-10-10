import React from "react";

const PlayersAddForm = () => {
  return (
    <div className="px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-transparent bg-opacity-10">
      <div className="flex flex-col space-y-2">
        <div>
          <label htmlFor="name" className="text-2xl">
            New Football Player
          </label>
          <input
            type="text"
            className="block w-full py-2 px-4 rounded-md"
            placeholder="Jasurbek"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="country" className="text-2xl">
            Country
          </label>
          <input
            type="text"
            className="block w-full py-2 px-4 rounded-md"
            placeholder="Uzbekistan"
            name="country"
            required
          />
        </div>
        <div>
          <label htmlFor="continent" className="text-2xl">
            Continent
          </label>
          <select
            name="continent"
            id="continent"
            className="block w-full py-2 px-4 rounded-md "
          >
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
          </select>
        </div>

        <button className="py-2 px-4 bg-blue-500 w-fit text-white rounded-md ml-auto bg-gradient-to-r from-blue-500 to-blue-950 hover:scale-105 transition-all font-medium">
          Add player
        </button>
      </div>
    </div>
  );
};

export default PlayersAddForm;
