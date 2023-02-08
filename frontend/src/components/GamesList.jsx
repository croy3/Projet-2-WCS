import React from "react";
import PropTypes from "prop-types";

function GamesList({ searchValue, setSearchValue }) {
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </div>
  );
}

GamesList.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default GamesList;
