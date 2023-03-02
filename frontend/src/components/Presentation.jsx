import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../styles/Presentation.css";

function parseDescription(str) {
  const tab = str?.split(/<[/ a-z]+>/);
  return (
    <div id="game-description">
      {tab?.map((line) => (line !== "" ? <p key={line}>{line}</p> : null))}
    </div>
  );
}

function Presentation({ gameId, setConsoleSumup }) {
  const [game, setGame] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${gameId}?key=2615651b79424162a332ce878d066b07`
      )
      .then((res) => setGame(res.data));
  }, []);

  return (
    <div id="presentation">
      <h1 id="game-title">{game.name}</h1>
      <div id="game-rating">
        <p>Rating : {game.rating} / 5</p>
      </div>
      <img src={game.background_image} alt={game.name} id="game-image" />
      {parseDescription(game.description)}
      <div id="game-release-platforms">
        <p id="game-release">Released : {game.released}</p>
        <div id="game-platforms">
          {game.platforms?.map((element) => (
            <p
              onClick={() => {
                setConsoleSumup(element.platform.name);
              }}
              key={element.platform.name}
            >
              {" "}
              {element.platform.name}{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
Presentation.propTypes = {
  gameId: PropTypes.number.isRequired,
};

export default Presentation;
