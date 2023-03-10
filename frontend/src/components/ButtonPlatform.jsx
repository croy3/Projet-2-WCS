import { useState } from "react";
import "../styles/SortContainer.css";
import PropTypes from "prop-types";

function ButtonPlatform({ platform, setPlatform }) {
  const [classTitle, setClassTitle] = useState(false);

  function handleClick() {
    setClassTitle(!classTitle);
  }

  return (
    <button
      type="button"
      className={`button platform-button 
      ${classTitle ? "bright-platform" : null}`}
      onClick={() => {
        setPlatform(platform.id);
        handleClick();
      }}
    >
      {platform.name}
    </button>
  );
}

ButtonPlatform.propTypes = {
  setPlatform: PropTypes.func.isRequired,
  platform: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ButtonPlatform;
