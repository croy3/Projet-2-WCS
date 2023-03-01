import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/SortContainer.css";
import ButtonPlatform from "./ButtonPlatform";
import ButtonGenre from "./ButtonGenre";

function SortContainer({ setPlatform, setGenre, setPlatformName }) {
  const [genreList, setGenreList] = useState([]);
  const [platformList, setPlatformList] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [textButton, setTextButton] = useState("Show More");
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
        `https://api.rawg.io/api/platforms?key=453247c1c78a4a88aa6594a59227801b&page_size=${pageSize}&ordering=released`
      )
      .then((response) => setPlatformList(response.data.results));
  }, [pageSize]);

  return (
    <div id="sidebar">
      {/* <h3>Plateforme</h3> */}

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
        <button
          className="button bright-platform"
          type="button"
          onClick={() => {
            if (pageSize === 10) {
              setPageSize(pageSize + 30);
              setTextButton("Show Less");
            } else {
              setPageSize(pageSize - 30);
              setTextButton("Show More");
            }
          }}
        >
          {" "}
          {textButton}
        </button>
      </ul>
      {/* <h3>Genre</h3> */}

      <ul className="submenu">
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
      </ul>
    </div>
  );
}

SortContainer.propTypes = {
  setPlatform: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setPlatformName: PropTypes.func.isRequired,
};

export default SortContainer;
