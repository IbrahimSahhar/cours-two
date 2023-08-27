import React, { useMemo, useState } from "react";
import NavBar from "../components/NavBar";

const About = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215);
  const [counter, setCounter] = useState(0);
  const [test, setTest] = useState(0);

  const result = useMemo(() => {
    return (
      <div style={{ color: randomColor }}>
        the value {counter} * 2 = {counter * 2}
      </div>
    );
  }, [counter, randomColor]);
  //use memo
  return (
    <div>
      <NavBar />
      {result}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setTest(test + 1);
        }}
      >
        test
      </button>
    </div>
  );
};

export default About;
