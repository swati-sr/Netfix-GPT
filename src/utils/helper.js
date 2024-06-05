export const searchGptDataInTMDB = async (movieName, options) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movieName +
      "&include_adult=false&language=en-US&page=1",
    options
  );
  const json = await data.json();
  return json.results;
};
