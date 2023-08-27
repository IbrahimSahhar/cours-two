import React from "react";
import NavBar from "../components/NavBar";
import useCounters from "../Hooks/useCounters.js";
const Reducer = () => {
  const { counter, Plus, Mines, Reset } = useCounters();
  return (
    <div>
      <NavBar />
      <div>{counter}</div>
      <button onClick={() => Plus()}>+</button>
      <button onClick={() => Mines()}>-</button>
      <button onClick={() => Reset()}>Reset</button>
    </div>
  );
};

export default Reducer;
