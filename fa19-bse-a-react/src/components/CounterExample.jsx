import React from "react";
import CounterValue from "./CounterValue";
const CounterExample = () => {
  //   let count = 0;
  const [count, setCount] = React.useState(0);
  const counterClicked = () => {
    // count = count + 1; dont do it
    // console.log(count); dont do it
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={counterClicked}>Click Me {count} </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Down Click Me
      </button>
      <div
        style={{
          border: "2px solid",
          borderColor: count < 5 ? "green" : "yellow",
        }}
      >
        My counter Value is {count}
      </div>
      {count == 2 && <div>This is Amazing {count}</div>}

      <CounterValue count={count} />
    </div>
  );
};

export default CounterExample;
