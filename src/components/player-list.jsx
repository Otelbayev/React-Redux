import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../hooks/useHttp";
import { useCallback, useEffect } from "react";
import {
  playerDeleted,
  playersFetched,
  playersFetchilng,
  playersFetchilngError,
} from "../redux/actions";
import Spinner from "./spinner";
import Error from "./error";
import Empty from "./empty";
import PlayersListItem from "./players-list-item";

const PlayerList = () => {
  const { filteredPlayers, playersLoadingStatus } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(playersFetchilng());

    request("http://localhost:8080/players")
      .then((data) => dispatch(playersFetched(data)))
      .catch(() => playersFetchilngError());
  }, []);

  const onDelete = useCallback(
    (id) => {
      request(`http://localhost:8080/players/${id}`, "DELETE")
        .then((res) => console.log(res))
        .then(dispatch(playerDeleted(id)))
        .catch((e) => console.log(e));
    },
    [request]
  );

  if (playersLoadingStatus === "loading") {
    return <Spinner className={"w-8 h-8 block mx-auto text-white"} />;
  } else if (playersLoadingStatus === "error") {
    return <Error />;
  }

  const renderPlayers = () => {
    if (!filteredPlayers.length) {
      return <Empty />;
    }

    return filteredPlayers.map(({ id, ...props }) => (
      <PlayersListItem key={id} {...props} onDelete={() => onDelete(id)} />
    ));
  };

  return <div className="flex flex-col space-y-3">{renderPlayers()}</div>;
};

export default PlayerList;
