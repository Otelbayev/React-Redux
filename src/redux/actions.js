export const incr = () => ({ type: "INC" });
export const decr = () => ({ type: "DEC" });
export const rndr = () => ({
  type: "RND",
  payload: Math.floor(Math.random() * 100),
});
export const resetr = () => ({ type: "RESET" });
