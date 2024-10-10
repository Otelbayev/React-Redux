import { createStore } from "./node_modules/redux/src/createStore";

const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const rnd = document.getElementById("rnd");
const reset = document.getElementById("reset");

const initialState = {
  count: 0,
  name: "Jasurbek",
  surname: "O'telbayev",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
    case "RND":
      return { ...state, count: state.count + action.payload };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const updateUi = () => {
  document.getElementById("count").textContent = store.getState().count;
};

store.subscribe(updateUi);

inc.addEventListener("click", () => store.dispatch({ type: "INC" }));
dec.addEventListener("click", () => store.dispatch({ type: "DEC" }));
reset.addEventListener("click", () => store.dispatch({ type: "RESET" }));
rnd.addEventListener("click", () => {
  const randomValue = Math.floor(Math.random() * 100);
  store.dispatch({ type: "RND", payload: randomValue });
});
