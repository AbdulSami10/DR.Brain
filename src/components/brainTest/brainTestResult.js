import React from "react";
import H1 from "../../UI/H1/H1";

const BrainTestResult = ({ rightPercentage, leftPercentage }) => {
  const userinfo = JSON.parse(localStorage.getItem("userInfo"));
  const name = userinfo.name;
  return (
    <React.Fragment>
      {setTimeout(() => {
        return <H1>{name}</H1>;
      }, 5000)}
      <H1>{rightPercentage}</H1>
      <H1>{leftPercentage}</H1>
      <div
        style={{
          border: "1px solid black",
          width: "100px",
          height: `${rightPercentage}px`,
          backgroundColor: "blue",
        }}
      ></div>
      <div
        style={{
          border: "1px solid black",
          width: "200px",
          height: `${leftPercentage}px`,
          backgroundColor: "blue",
        }}
      ></div>
    </React.Fragment>
  );
};

export default BrainTestResult;
