import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/sortContainer.css";

function SortContainer({
  setPlatform,
  setGenre,
  setPlatformName,
  setGenreName,
}) {
  const [genreList, setGenreList] = useState([]);
  const [platformList, setPlatformList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/genres?key=453247c1c78a4a88aa6594a59227801b`
      )
      .then((response) => setGenreList(response.data.results));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/platforms?key=453247c1c78a4a88aa6594a59227801b`
      )
      .then((response) => setPlatformList(response.data.results));
  }, []);

  return (
    <div id="sidebar">
      <ul>
        <li className="roll">
          <a href="./" title="plateforme">
            Plateforme
          </a>

          <ul className="submenu">
            {platformList.map((platform) => (
              <button
                type="button"
                key={platform.id}
                onClick={() => {
                  setPlatform(platform.id);
                  setPlatformName(platform.name);
                }}
              >
                {platform.name}
              </button>
            ))}
          </ul>
        </li>
      </ul>
      <ul>
        <li className="roll">
          <a href="./" title="genre">
            Genre
          </a>

          <ul className="submenu">
            {genreList.map((genre) => (
              <button
                type="button"
                key={genre.id}
                onClick={() => {
                  setGenre(genre.slug);
                  setGenreName(genre.name);
                }}
              >
                {genre.name}
              </button>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

SortContainer.propTypes = {
  setPlatform: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
  setPlatformName: PropTypes.func.isRequired,
  setGenreName: PropTypes.func.isRequired,
};

export default SortContainer;
