import { useState } from "react";
import "../styles/SortContainer.css";
import PropTypes from "prop-types";

function ButtonGenre({ genre, setGenre }) {
  const [classTitle, setClassTitle] = useState(false);

  return (
    <button
      type="button"
      className={`button genre-button 
      ${classTitle ? "bright-genre" : null}`}
      onClick={() => {
        setGenre(genre.id);
        setClassTitle(!classTitle);
      }}
    >
      {genre.name}
    </button>
  );
}

ButtonGenre.propTypes = {
  setGenre: PropTypes.func.isRequired,
  genre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ButtonGenre;
