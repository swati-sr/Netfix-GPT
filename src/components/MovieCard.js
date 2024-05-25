import React from "react";
import { IMG_CDN_URL_MOVIE_CARD } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-48">
      <img src={IMG_CDN_URL_MOVIE_CARD + poster} alt="poster" />
    </div>
  );
};

export default MovieCard;
