export const incr = () => ({ type: "INC" });
export const decr = () => ({ type: "DEC" });
export const rndr = (value) => ({ type: "RND", payload: value });
export const resetr = () => ({ type: "RESET" });
