import { useState } from "react";
import MainHeader from "./components/header";
import Presentation from "./components/Presentation";
import GamesList from "./components/GamesList";
import "./styles/App.css";
import Footer from "./components/Footer";
import SortContainer from "./components/SortContainer";

function App() {
  const [platform, setPlatform] = useState("4");
  const [genre, setGenre] = useState("action");
  const [gameId, setGameId] = useState("");
  const [platformName, setPlatformName] = useState("");
  return (
    <div className="App" id="global-div">
      <MainHeader key={3} />
      <SortContainer
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
        setPlatformName={setPlatformName}
        platformName={platformName}
        key={gameId}
      />
      <GamesList
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
        gameId={gameId}
        setGameId={setGameId}
        platformName={platformName}
        className="games-list"
        key={platform}
      />
      {gameId ? (
        <Presentation key={`presentation-${gameId}`} gameId={gameId} />
      ) : null}
      <Footer key="footer" />
    </div>
  );
}

export default App;
