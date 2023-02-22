import { useState } from "react";
import "../styles/SortContainer.css";
import PropTypes from "prop-types";

function ButtonGenre({ genre, setGenre }) {
  const [classTitle, setClassTitle] = useState(false);

  function handleClick() {
    setClassTitle(!classTitle);
  }

  return (
    <button
      type="button"
      className={`button genre-button 
      ${classTitle ? "bright-genre" : null}`}
      onClick={() => {
        setGenre(genre.id);
        handleClick();
      }}
    >
      {genre.name}
    </button>
  );
}

ButtonGenre.propTypes = {
  setGenre: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default ButtonGenre;
