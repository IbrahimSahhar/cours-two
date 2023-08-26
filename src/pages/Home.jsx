import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  const [name, setName] = useState("ibrahim");
  const handelChange = (e) => {
    setName(e.target.value); 
  };
  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div>
      <NavBar />

      <div>home</div>

      <input
        onChange={(e) => {
          handelChange(e);
        }}
      />
      <div>{name}</div>
    </div>
  );
};

export default Home;
