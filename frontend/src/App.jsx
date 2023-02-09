import { useState } from "react";
import GamesList from "./components/GamesList";
import "./App.css";
import MainHeader from "./components/header";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <MainHeader />
      <GamesList searchValue={value} setSearchValue={setValue} />
    </div>
  );
}

export default App;
