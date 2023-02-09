import React from "react";
import PropTypes from "prop-types";

function SortContainer({ setPlatform, setGenre }) {
  return (
    <div id="sidebar">
      <ul>
        <li className="roll">
          <a href="./" title="plateforme">
            Plateforme
          </a>

          <ul className="submenu">
            <li>
              <a
                href="./"
                title="4"
                onClick={(e) => setPlatform(e.target.title)}
              >
                PC
              </a>
            </li>
            <li>
              <a
                href="./"
                title="18"
                onClick={(e) => setPlatform(e.target.title)}
              >
                Playstation 4
              </a>
            </li>
            <li>
              <a
                href="./"
                title="187"
                onClick={(e) => setPlatform(e.target.title)}
              >
                Playstation 5
              </a>
            </li>
            <li>
              <a
                href="./"
                title="14"
                onClick={(e) => setPlatform(e.target.title)}
              >
                Xbox 360
              </a>
            </li>
            <li>
              <a
                href="./"
                title="186"
                onClick={(e) => setPlatform(e.target.title)}
              >
                Xbox series X|S
              </a>
            </li>
            <li>
              <a
                href="./"
                title="7"
                onClick={(e) => setPlatform(e.target.title)}
              >
                Switch
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <br />
      <ul>
        <li className="roll">
          <button type="button" title="genre">
            Genre
          </button>

          <ul className="submenu">
            <li>
              <button
                type="button"
                title="adventure"
                onClick={(e) => setGenre(e.target.title)}
              >
                Aventure
              </button>
            </li>
            <li>
              <button
                type="button"
                title="action"
                onClick={(e) => setGenre(e.target.title)}
              >
                Action
              </button>
            </li>
            <li>
              <button
                type="button"
                title="adventure"
                onClick={(e) => setGenre(e.target.title)}
              >
                Indie
              </button>
            </li>
            <li>
              <button
                type="button"
                title="strategy"
                onClick={(e) => setGenre(e.target.title)}
              >
                Strategy
              </button>
            </li>
            <li>
              <button
                type="button"
                title="casual"
                onClick={(e) => setGenre(e.target.title)}
              >
                Casual
              </button>
            </li>
            <li>
              <button
                type="button"
                title="simulation"
                onClick={(e) => setGenre(e.target.title)}
              >
                Simulation
              </button>
            </li>
            <li>
              <button
                type="button"
                title="arcade"
                onClick={(e) => setGenre(e.target.title)}
              >
                Arcade
              </button>
            </li>
            <li>
              <button
                type="button"
                title="racing"
                onClick={(e) => setGenre(e.target.title)}
              >
                Racing
              </button>
            </li>
            <li>
              <button
                type="button"
                title="sports"
                onClick={(e) => setGenre(e.target.title)}
              >
                Sports
              </button>
            </li>
            <li>
              <button
                type="button"
                title="family"
                onClick={(e) => setGenre(e.target.title)}
              >
                Family
              </button>
            </li>
            <li>
              <button
                type="button"
                title="role-playing-games-rpg"
                onClick={(e) => setGenre(e.target.title)}
              >
                RPG
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

SortContainer.propTypes = {
  setPlatform: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
};

export default SortContainer;
