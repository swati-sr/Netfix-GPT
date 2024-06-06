import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptContainer = () => {
  return (
    <div>
      <div className="fixed -z-10 w-full h-screen">
        <img
          src={BG_URL}
          alt="background"
          className="w-full h-full object-cover md:object-none"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptContainer;
