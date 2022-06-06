import React from "react";
const ClickCounter = () => {
  //   let count = 6;

  const [count, setCount] = React.useState(6);

  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>{count} This is a click counter: Click below</h4>
      <button onClick={clickHandler}>Click Me</button> You Have clicked {count}{" "}
      times
      {count > 100 && <span>Count is Too Much</span>}
    </div>
  );
};

export default ClickCounter;
