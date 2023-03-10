import React from "react";
import PropTypes from "prop-types";
import "../styles/list.css";

function Game({ game }) {
  return (
    <div
      role="presentation"
      id="game"
      style={{ background: `url(${game.background_image}) center/cover` }}
    >
      <h1 id="game-name">{game.name}</h1> <br />
    </div>
  );
}

Game.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
  }).isRequired,
};
export default Game;
