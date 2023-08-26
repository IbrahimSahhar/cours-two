import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Form = () => {
  const auth = useContext(AuthContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    auth.setIsAuthorized(true);
    localStorage.setItem("auth", true);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="userName">Use Name</label>
        <input id="userName" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
