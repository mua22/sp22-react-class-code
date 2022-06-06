import React from "react";
const Cake = (props) => {
  console.log(props);
  return (
    <div style={{ color: props.color }}>
      <h1>{props.type}</h1>
      <span className="float-right">PKR: {props.price}</span>
    </div>
  );
};

export default Cake;
