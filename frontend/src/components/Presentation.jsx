import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./Presentation.css";

function parseDescription(str) {
  const tab = str?.split(/<[/ a-z]+>/);
  return (
    <div id="game-description">
      {tab?.map((line) => (line !== "" ? <p key={line}>{line}</p> : null))}
    </div>
  );
}

function Presentation({ id }) {
  const [game, setGame] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}?key=2615651b79424162a332ce878d066b07`
      )
      .then((res) => setGame(res.data));
  }, []);

  return (
    <div id="presentation">
      <h1>{game.name}</h1>
      <p id="game-rating">Rating : {game.rating}</p>
      <img src={game.background_image} alt={game.name} id="game-image" />
      {parseDescription(game.description)}
      <div id="game-release-platforms">
        <p id="game-release">Released : {game.released}</p>
        <div id="game-platforms">
          {game.platforms?.map((element) => (
            <p key={element.platform.name}> {element.platform.name} </p>
          ))}
        </div>
      </div>
    </div>
  );
}
Presentation.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Presentation;
