export const playersFetchilng = () => {
  return {
    type: "PLAYERS_FETCHING",
  };
};

export const playersFetched = (players) => {
  return {
    type: "PLAYERS_FETCHED",
    payload: players,
  };
};

export const playersFetchilngError = () => {
  return {
    type: "PLAYERS_FETCHING_ERROR",
  };
};

export const playersCreated = (player) => {
  return {
    type: "PLAYER_CREATED",
    payload: player,
  };
};

export const playerDeleted = (id) => {
  return {
    type: "PLAYER_DELETED",
    payload: id,
  };
};

export const filterFetchilng = () => {
  return {
    type: "FILTERS_FETCHING",
  };
};

export const filterFetched = (players) => {
  return {
    type: "FILTERS_FETCHED",
    payload: players,
  };
};

export const filterFetchilngError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR",
  };
};

export const activeFilterChanged = (filter) => {
  return {
    type: "ACTIVE_FILTER_CHANGED",
    payload: filter,
  };
};
