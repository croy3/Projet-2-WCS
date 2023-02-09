import { useState } from "react";
import GamesList from "./components/GamesList";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <GamesList searchValue={value} setSearchValue={setValue} />
    </div>
  );
}

export default App;
