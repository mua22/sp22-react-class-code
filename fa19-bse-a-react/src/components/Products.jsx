import React from "react";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://usman-recipes.herokuapp.com/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {products.map((p) => (
        <div className="row">
          <div className="col-12">
            <h1>{p.name}</h1>
            <p>{p.description}</p>
          </div>
          <div className="col-6">PKR {p.price}</div>
          <div className="col-6">Department: {p.department}</div>
        </div>
      ))}
    </div>
  );
};

export default Products;
