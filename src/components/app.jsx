import React from "react";
import PlayerList from "./player-list";
import PlayersAddForm from "./players-add-form";
import PlayersFilter from "./players-filter";

const App = () => {
  return (
    <div className="h-screen w-100 relative app">
      <div className="absolute inset-0  bg-black/80 z-10 blur-3xl" />
      <div className="grid grid-cols-2 gap-4 contianer max-w-6xl mx-auto h-full z-50 relative pt-12">
        <PlayerList />
        <div className="">
          <PlayersAddForm />
          <PlayersFilter />
        </div>
      </div>
    </div>
  );
};

export default App;
