import { React, useEffect, useState } from "react";
import axios from "axios";
import SortContainer from "./SortContainer";
import Game from "./Game";
import "../styles/App.css";
import "../styles/list.css";

function GamesList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [platform, setPlatform] = useState("4");
  const [genre, setGenre] = useState("action");
  const [searchValue, setSearchValue] = useState("");
  const [platformName, setPlatformName] = useState("");
  const [genreName, setGenreName] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=453247c1c78a4a88aa6594a59227801b&genres=${genre}&platforms=${platform}&search=${searchValue}&page_size=5&page=${page}`
        )
        .then((res) => {
          setData(res.data.results);
        });
    }, 700);

    return () => clearTimeout(timeout);
  }, [page, searchValue, platform, genre]);

  return (
    <div id="list">
      <SortContainer
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
        setPlatformName={setPlatformName}
        setGenreName={setGenreName}
      />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        id="game-name"
      />
      <h2>{platformName}</h2> <br /> <br />
      <h2>{genreName}</h2>
      <button type="button" onClick={() => setPage(page - 1)}>
        Page précédente
      </button>
      {data.map((game) => (
        <Game key={game.id} game={game} data={data} />
      ))}
      <button type="button" onClick={() => setPage(page + 1)}>
        Page suivante
      </button>
    </div>
  );
}

export default GamesList;
