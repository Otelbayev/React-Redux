import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useHttp } from "./../hooks/useHttp";
import { playersCreated } from "../redux/actions";

const PlayersAddForm = () => {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const { filters, filtersLoadingStatus } = useSelector((state) => state);

  const onSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const country = e.target.country.value;
    const continent = e.target.continent.value;
    const data = { id: uuidv4(), name, country, continent };

    request("http://localhost:8080/players", "POST", JSON.stringify(data))
      .then((res) => console.log(res))
      .then(dispatch(playersCreated(data)))
      .catch((err) => console.log(err));
  };

  const renderFilters = () => {
    if (filtersLoadingStatus === "loading") {
      return <option>Loading</option>;
    } else if (filtersLoadingStatus === "error") {
      return <option>Somthing went wrong</option>;
    }

    if (filters && filters.length) {
      return filters.map(({ id, label }) => {
        if (id === "all") return;
        return (
          <option value={label} key={id}>
            {label}
          </option>
        );
      });
    }
  };

  return (
    <div className="px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-transparent bg-opacity-10">
      <form onSubmit={onSubmit}>
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
              {renderFilters()}
            </select>
          </div>
          <button
            typpe="submit"
            className="py-2 px-4 bg-blue-500 w-fit text-white rounded-md ml-auto bg-gradient-to-r from-blue-500 to-blue-950 hover:scale-105 transition-all font-medium"
          >
            Add player
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlayersAddForm;
