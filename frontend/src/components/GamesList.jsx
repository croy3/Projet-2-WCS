/* eslint-disable import/no-unresolved */
import { React, useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Pagination } from "swiper";
// import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropType from "prop-types";
import Game from "./Game";
import "../styles/App.css";
import "../styles/list.css";

function GamesList({ setGameId, gameId, platform, genre }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=453247c1c78a4a88aa6594a59227801b&genres=${genre}&platforms=${platform}`
        )
        .then((res) => {
          setData(res.data.results);
        });
    }, 700);

    return () => clearTimeout(timeout);
  }, [platform, genre]);

  return (
    <div id="list">
      <Swiper
        modules={[Navigation, Keyboard, Pagination]}
        pagination
        navigation
        keyboard
        slidesPerView={1}
        // spaceBetween={}
        speed={800}
        loop
        className="my-swiper"
        key={genre.id}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1350: {
            slidesPerView: 3,
          },
          1780: {
            slidesPerView: 4,
          },
        }}
      >
        {data
          .filter((gameChoice) => gameChoice.name.toLowerCase())
          .map((game) => (
            <div className="list-game">
              <SwiperSlide key={platform.id}>
                <button
                  id="game-list-button"
                  type="button"
                  onClick={() => {
                    setGameId(parseInt(game.id, 10));
                  }}
                >
                  <Game
                    key={gameId}
                    game={game}
                    data={data}
                    gameId={gameId}
                    setGameId={setGameId}
                    onClick={() => {
                      setGameId(parseInt(game.id, 10));
                    }}
                  />
                </button>
              </SwiperSlide>
            </div>
          ))}
      </Swiper>
    </div>
  );
}

export default GamesList;

GamesList.propTypes = {
  setGameId: PropType.func.isRequired,
  gameId: PropType.string.isRequired,
  platform: PropType.string.isRequired,
  genre: PropType.string.isRequired,
};
