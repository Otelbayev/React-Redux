import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "./../hooks/useHttp";
import {
  activeFilterChanged,
  filterFetched,
  filterFetchilng,
  filterFetchilngError,
} from "../redux/actions";
import Spinner from "./spinner";
import Empty from "./empty";

const PlayersFilter = () => {
  const { filters, filtersLoadingStatus, activeFilter } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(filterFetchilng());

    request("http://localhost:8080/filters")
      .then((data) => dispatch(filterFetched(data)))
      .catch(() => filterFetchilngError());
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner className={"w-8 h-8 block mx-auto text-white"} />;
  } else if (filtersLoadingStatus === "error") {
    return <span className="text-red-500">Somthing went wrong!</span>;
  }

  const renderFilters = () => {
    if (!filters.length) {
      return <Empty />;
    }

    return filters.map(({ id, label, classes }) => {
      return (
        <button
          key={id}
          className={`px-4 py-2  text-white hover:opacity-90 transition-all ${classes} ${
            activeFilter === label && "text-black font-bold"
          } `}
          onClick={() => dispatch(activeFilterChanged(label))}
        >
          {label}
        </button>
      );
    });
  };

  return (
    <div className="px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-transparent bg-opacity-10 mt-4">
      <h1 className="text-xl font-bold">Filter players by contingent</h1>
      <div className="flex mt-2">{renderFilters()}</div>
    </div>
  );
};

export default PlayersFilter;
