import React from "react";
import languages from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  return (
    <div className="flex justify-center align-middle pt-[10%]">
      <form className="grid grid-cols-12 w-1/2 rounded-lg bg-gradient-to-l from-slate-400 to-[#f54848]">
        <input
          className="col-span-8 py-2 px-4 m-4 rounded-md border-white items-center"
          type="text"
          placeholder={languages[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-4 rounded-md font-bold text-base text-white bg-zinc-900 py-2 px-2 m-4 hover:opacity-80">
          {languages[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
