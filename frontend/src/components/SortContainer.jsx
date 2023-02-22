import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/SortContainer.css";
import ButtonPlatform from "./ButtonPlatform";
import ButtonGenre from "./ButtonGenre";

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
          <h3>Plateforme</h3>

          <ul className="submenu">
            {platformList.map((platform) => (
              <ButtonPlatform
                platform={platform}
                setPlatform={setPlatform}
                type="button"
                key={platform.id}
                onClick={() => {
                  setPlatform(platform.id);
                  setPlatformName(platform.name);
                }}
                className=" button platform-button"
                id={`${platform.i}`}
              />
            ))}
          </ul>
        </li>
      </ul>
      <ul>
        <li className="roll">
          <h3>Genre</h3>

          <ul className="submenu">
            {genreList.map((genre) => (
              <ButtonGenre
                genre={genre}
                setGenre={setGenre}
                type="button"
                key={genre.id}
                onClick={() => {
                  setGenre(genre.slug);
                  setGenreName(genre.name);
                }}
                className=" button genre-button"
              />
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
