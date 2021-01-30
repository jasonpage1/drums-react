import logo from "./logo.svg";
import "./App.css";
import { makeSound } from "./utils/get-sound";

function App() {
  const drumsToMap = ["w", "a", "s", "d", "j", "k", "l"];
  const renderdum = () => {
    return drumsToMap.map((drum) => {
      return <button onClick={() => makeSound(drum)} key={drum} className={`drum ${drum}`}></button>;
    });
  };
  return (
    <div className="App">
      <h1>Drums</h1>
      <div className="set">{renderdum()}</div>
      
    </div>
  );
}

export default App;
