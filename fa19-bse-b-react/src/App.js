import Cake from "./components/Cake";
import ClickCounter from "./components/ClickCounter";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SortableStudents from "./components/SortableStudents";
import Student from "./components/Student";
import "./index.css";
function App() {
  const showParagraph = true;
  return (
    <div>
      <Products />
      {/* <SortableStudents /> */}
      {/* <ClickCounter /> */}
      {/* <Cake type="Fruit Cake" price="50" color="black" /> */}
      {/* <Cake type="Choclate Cake" price="150" color="yellow" /> */}

      {/* <NavBar /> */}
      {/* <Student name="Nabeel" cgpa="3" /> */}
      {/* <Student name="Usman" cgpa="2.7" /> */}
      {/* <Student />
      <Student />
      <Student /> */}
      {/* <h1>Hello B Section</h1> */}
      {/* {showParagraph && <p>How you doing?</p>} */}
    </div>
  );
}

export default App;
