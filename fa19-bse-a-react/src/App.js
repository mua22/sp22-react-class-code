import CounterExample from "./components/CounterExample";
import MyNavBar from "./components/MyNavBar";
import Product from "./components/Product";
import Products from "./components/Products";
import SortableStudents from "./components/SortableStudents";

function App() {
  const styles = { color: "green", borderRadius: "5px" };

  const handleClick = () => {
    console.log("You clicked Me");
  };

  return (
    <div className="container">
      <Products />
      {/* <SortableStudents /> */}
      {/* <MyNavBar /> */}
      {/* <CounterExample /> */}
      {/* <button onClick={handleClick}>Click Me</button> */}

      {/* <Product title="Lenovo" price="500" /> */}
      {/* <Product title="HP" price="900" /> */}
      {/* <Product title="DELL" /> */}

      {/* <h1 style={styles}>Hello From App.js</h1> */}
    </div>
  );
}

export default App;
