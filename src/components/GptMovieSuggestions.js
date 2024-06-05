import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieNames, gptMoviesList } = useSelector((store) => store.gpt);
  if (!gptMovieNames) return null;
  return (
    <div className="pl-9 my-9 opacity-80 bg-black m-2">
      <div>
        {gptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMoviesList[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
