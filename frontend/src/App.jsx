import { useState } from "react";
import ConsoleSumup from "./components/ConsoleSumup";
import MainHeader from "./components/header";
import Presentation from "./components/Presentation";
import GamesList from "./components/GamesList";
import "./styles/App.css";
import Footer from "./components/Footer";
import SortContainer from "./components/SortContainer";
import SocialFollow from "./components/SocialFollow";

function App() {
  const [platform, setPlatform] = useState(1);
  const [genre, setGenre] = useState(3);
  const [gameId, setGameId] = useState(0);
  const [platformName, setPlatformName] = useState("");
  const [consoleSumup, setConsoleSumup] = useState("");
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
        <Presentation
          key={`presentation-${gameId}`}
          gameId={gameId}
          setConsoleSumup={setConsoleSumup}
        />
      ) : null}
      <ConsoleSumup consoleSumup={consoleSumup} />
      <Footer key="footer" />
      <SocialFollow />
    </div>
  );
}

export default App;
