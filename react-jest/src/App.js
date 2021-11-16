import "./App.css";
import Hello from "./components/Hello";
import Timer from "./components/Timer";

const user = {
  name: "Minjae",
  age: 27,
};

function App() {
  return (
    <div className="App">
      <Hello user={user} />
      <Timer />
    </div>
  );
}

export default App;
