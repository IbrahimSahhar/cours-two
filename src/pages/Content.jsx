import React, { useRef } from "react";
import NavBar from "../components/NavBar";

const Content = () => {
  const input = useRef();
  const focus = () => {
    input.current.focus();
    console.log(input.current.value);
  };
  return (
    <div>
      <NavBar />

      <div onClick={focus}>focus</div>
      <br />
      <input ref={input} />
    </div>
  );
};

export default Content;
