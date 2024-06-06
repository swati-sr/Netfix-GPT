import React from "react";
import { IMG_CDN_URL_MOVIE_CARD } from "../utils/constants";

const MovieCard = ({ poster }) => {
  if (!poster) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMG_CDN_URL_MOVIE_CARD + poster} alt="poster" />
    </div>
  );
};

export default MovieCard;
