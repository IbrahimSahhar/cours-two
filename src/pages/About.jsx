import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const About = () => {
  const [goToContent, setGoToContent] = useState(false);
  return (
    <div>
      <NavBar />

      <div>About</div>
      <Link to={"/"}>Go To Home</Link>
      <br />
      <button
        onClick={() => {
          setGoToContent(true);
        }}
      >
        Go to Content
      </button>
      {goToContent ? <Navigate to={"/content"} /> : ""}
    </div>
  );
};

export default About;
