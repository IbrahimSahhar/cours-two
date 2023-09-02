import React from "react";

const Date = ({ src, name, time }) => {
  return (
    <div className="d-flex p-2 border-bottom mx-2 my-2">
      <img src={require("../../assets/images/person.jpg")} alt="person" />
      <div className="px-2">
        <span className="fs-5">{name}</span>
        <p className="fs-6"> {time}</p>
      </div>
    </div>
  );
};

export default Date;
