const initialState = {
  count: 0,
  name: "Jasurbek",
  surname: "O'telbayev",
};

export const reducer = (state = initialState, action) => {
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
