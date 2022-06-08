import React from "react";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = React.useState([
    // { name: "Lenovo", price: "200" },
    // { name: "DELL", price: "300" },
  ]);
  const loadData = () => {
    axios
      .get("https://usman-recipes.herokuapp.com/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  };
  React.useEffect(loadData, []);
  return (
    <div>
      {products.map((p) => (
        <div>
          <h3>{p.name}</h3>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
