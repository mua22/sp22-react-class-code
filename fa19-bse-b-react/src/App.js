import NavBar from "./components/NavBar";
import "./index.css";
function App() {
  const showParagraph = true;
  return (
    <div>
      <NavBar />
      <h1>Hello B Section</h1>
      {showParagraph && <p>How you doing?</p>}
    </div>
  );
}

export default App;
