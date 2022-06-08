import React from "react";
const Counter = () => {
  const [count, setCounter] = React.useState(6);

  const clickHandler = () => {
    console.log("You Clicked Me");
    setCounter(count + 1);
  };
  return (
    <div style={{ color: count < 5 ? "green" : "blue" }}>
      <button onClick={clickHandler}>Click To Count {count}</button>
      <button
        onClick={() => {
          setCounter(count - 1);
        }}
      >
        Down Click
      </button>
      <div>You Clicked {count} times</div>
      {count > 5 ? <p>You are Pass</p> : <p>Fail</p>}
      {count < 5 && <p>Danger Zone</p>}
    </div>
  );
};
export default Counter;
