import React from "react";
import languages from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import {
  gptSearchSuggestionOne,
  gptSearchSuggestionTwo,
  GEMINI_API_KEY,
  API_OPTIONS,
} from "../utils/constants";
import { searchGptDataInTMDB } from "../utils/helper";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleGptSearchBtn = async () => {
    const gptQuery =
      gptSearchSuggestionOne +
      searchText?.current?.value +
      gptSearchSuggestionTwo;
    const request = {
      contents: [{ parts: [{ text: gptQuery }] }],
    };

    fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
        GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      }
    )
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(
            new Error("Network response was not ok " + response.statusText)
          );
        }
        return response.json();
      })
      .then(async (json) => {
        const gptMovies =
          json?.candidates[0]?.content?.parts[0]?.text.split(",");
        const promiseDataArray = gptMovies.map((movie) =>
          searchGptDataInTMDB(movie, API_OPTIONS)
        );
        const tmdbResults = await Promise.all(promiseDataArray);
        dispatch(
          addGptMovieResults({
            gptMovieNames: gptMovies,
            gptMoviesList: tmdbResults,
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching movie recommendations:", error);
      });
  };

  return (
    <div className="flex justify-center align-middle pt-[10%]">
      <form
        className="grid grid-cols-12 w-1/2 rounded-lg bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-8 py-2 px-4 m-4 rounded-md border-white items-center"
          type="text"
          placeholder={languages[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-4 rounded-md font-bold text-base text-white bg-[#f54848] py-2 px-2 m-4 hover:bg-zinc-900"
          onClick={handleGptSearchBtn}
        >
          {languages[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
