import React from "react";
const Product = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>Price : {props.price} PKR</h4>
    </div>
  );
};

export default Product;
