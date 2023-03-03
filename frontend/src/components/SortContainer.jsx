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
  setSearchValue,
}) {
  const [genreList, setGenreList] = useState([]);
  const [platformList, setPlatformList] = useState([]);
  const [pageGenre, setPageGenre] = useState(1);
  const [pagePlatform, setPagePlatform] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/genres?key=453247c1c78a4a88aa6594a59227801b&page_size=10&page=${pageGenre}`
      )
      .then((response) => setGenreList(response.data.results));
  }, [pageGenre]);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/platforms?key=453247c1c78a4a88aa6594a59227801b&page_size=10&page=${pagePlatform}&ordering=released`
      )
      .then((response) => setPlatformList(response.data.results));
  }, [pagePlatform]);

  return (
    <div>
      <div id="sidebar">
        <ul className="submenu">
          {pagePlatform > 1 ? (
            <button
              className="button bright-platform"
              type="button"
              onClick={() => {
                setPagePlatform(pagePlatform - 1);
              }}
            >
              {" "}
              Previous page
            </button>
          ) : null}

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
          {pagePlatform < 6 ? (
            <button
              className="button bright-platform"
              type="button"
              onClick={() => {
                setPagePlatform(pagePlatform + 1);
              }}
            >
              {" "}
              Next Page
            </button>
          ) : null}
        </ul>

        <ul className="submenu">
          {pageGenre > 1 ? (
            <button
              className="button genre-button bright-genre"
              type="button"
              onClick={() => {
                setPageGenre(pageGenre - 1);
              }}
            >
              {" "}
              Previous page
            </button>
          ) : null}
          {genreList.map((genre) => (
            <ButtonGenre
              genre={genre}
              setGenre={setGenre}
              type="button"
              key={genre.id}
              onClick={() => {
                setGenre(genre.slug);
              }}
              className=" button genre-button"
            />
          ))}
          {pageGenre < 2 ? (
            <button
              className="button genre-button bright-genre"
              type="button"
              onClick={() => {
                setPageGenre(pageGenre + 1);
              }}
            >
              {" "}
              Next Page
            </button>
          ) : null}
        </ul>
      </div>
      <div className="input-container">
        <input
          placeholder="Find A Game"
          className="input-style"
          type="text"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

SortContainer.propTypes = {
  setPlatform: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setPlatformName: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SortContainer;
