import { useState } from "react";
import MainHeader from "./components/header";
import Presentation from "./components/Presentation";
import GamesList from "./components/GamesList";
import "./styles/App.css";
import Footer from "./components/Footer";
import SortContainer from "./components/SortContainer";

function App() {
  const [value, setValue] = useState("");
  const [platform, setPlatform] = useState("4");
  const [genre, setGenre] = useState("action");
  const [gameId, setGameId] = useState("");
  const [platformName, setPlatformName] = useState("");
  return (
    <div className="App" id="global-div">
      <MainHeader />
      <SortContainer
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
        setPlatformName={setPlatformName}
        platformName={platformName}
      />
      <GamesList
        searchValue={value}
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
        gameId={gameId}
        setGameId={setGameId}
        platformName={platformName}
        className="games-list"
      />
      <Presentation id={1000} />
      <Footer />
    </div>
  );
}

export default App;
