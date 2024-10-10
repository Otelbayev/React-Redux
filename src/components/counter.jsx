import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actions from "../redux/actions";
// { counter, incr, decr, rndr, resetr }
import { incr, decr, rndr, resetr } from "../redux/actions";

const Counter = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="w-full vh-100 d-flex justify-content-center align-items-center text-white bg-dark">
      <div className="border border-5 w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column bg-secondary">
        <h1 className="text-center">
          Count: <span id="count">{state.count}</span>
        </h1>
        <div className="d-flex align-items-center gap-2">
          <button onClick={() => dispatch(incr())} className="btn btn-success">
            Increment
          </button>
          <button onClick={() => dispatch(decr())} className="btn btn-danger">
            Decrement
          </button>
          <button onClick={() => dispatch(rndr())} className="btn btn-info">
            Auto
          </button>
          <button
            onClick={() => dispatch(resetr())}
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     counter: state.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
