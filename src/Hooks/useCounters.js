import { useReducer } from "react";
import { ACTION } from "../Constants/Action";

const useCounters = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION.PLUS:
        return state + 1;
      case ACTION.MINES:
        return state - 1;
      case ACTION.RESET:
        return 0;
      default:
        return state;
    }
  };
  const [counter, dispatch] = useReducer(reducer, 0);
  const Plus = () => dispatch({ type: ACTION.PLUS });
  const Mines = () => dispatch({ type: ACTION.MINES });
  const Reset = () => dispatch({ type: ACTION.RESET });

  return { counter, Plus, Mines, Reset };
};

export default useCounters;
