import { useState } from "react";
import MainHeader from "./components/header";
import Presentation from "./components/Presentation";
import GamesList from "./components/GamesList";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <MainHeader />
      <Presentation id={1000} />
      <GamesList searchValue={value} setSearchValue={setValue} />
    </div>
  );
}

export default App;
