import { React, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import SortContainer from "./SortContainer";
import Game from "./Game";
import "../App.css";

function GamesList({ searchValue, setSearchValue }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [platform, setPlatform] = useState("4");
  const [genre, setGenre] = useState("action");
  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=5e731b63837f49759cde8b1cb3505d80&genres=${genre}&platforms=${platform}&search=${searchValue}&page_size=5&page=${page}`
        )
        .then((res) => {
          setData(res.data.results);
        });
    }, 700);

    return () => clearTimeout(timeout);
  }, [page, searchValue, platform, genre]);

  return (
    <div>
      <SortContainer
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
      />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button type="button" onClick={() => setPage(page - 1)}>
        Page précédente
      </button>
      <div className="games-list">
        {data.map((game) => (
          <Game key={game.id} game={game} data={data} />
        ))}
      </div>
      <button type="button" onClick={() => setPage(page + 1)}>
        Page suivante
      </button>
    </div>
  );
}

GamesList.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default GamesList;
