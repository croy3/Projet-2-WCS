import { useState } from "react";
import GamesList from "./components/GamesList";
import "./App.css";
import Presentation from "./components/Presentation";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Presentation id={1000} />
      <GamesList searchValue={value} setSearchValue={setValue} />
    </div>
  );
}

export default App;
