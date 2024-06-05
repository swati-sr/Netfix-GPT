import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieNames: null,
    gptMoviesList: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { gptMovieNames, gptMoviesList } = action.payload;
      state.gptMovieNames = gptMovieNames;
      state.gptMoviesList = gptMoviesList;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults, addGptMovieNames } =
  gptSlice.actions;
export default gptSlice.reducer;
