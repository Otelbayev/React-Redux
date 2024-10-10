import { createStore, bindActionCreators } from "redux";
import * as actions from "./actions";
import { reducer } from "./reducer";

const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const rnd = document.getElementById("rnd");
const reset = document.getElementById("reset");

const { getState, subscribe, dispatch } = createStore(reducer);

const updateUi = () => {
  document.getElementById("count").textContent = getState().count;
};

subscribe(updateUi);

// const bindActionCreators =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

const { decr, incr, resetr, rndr } = bindActionCreators(actions, dispatch);

inc.addEventListener("click", incr);
dec.addEventListener("click", decr);
reset.addEventListener("click", resetr);
rnd.addEventListener("click", () => {
  const randomValue = Math.floor(Math.random() * 100);
  rndr(randomValue);
});
