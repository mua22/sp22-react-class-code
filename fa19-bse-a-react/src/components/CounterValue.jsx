import React from "react";

const CounterValue = (props) => {
  let count = props.count;
  return <p>Current Count Value is {count}</p>;
};

export default CounterValue;
