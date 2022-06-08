import React from "react";
import Counter from "./Counter";
const HomePage = () => {
  let styles = {
    borderLeft: "2px solid brown",
  };
  return (
    <div className="container">
      <h2 style={styles}>Home Page</h2>
      <p>This is Home Page</p>

      <Counter />
    </div>
  );
};
export default HomePage;
