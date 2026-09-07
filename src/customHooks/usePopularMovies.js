import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTIONS,
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };

    if (!popularMovies) {
      getPopularMovies();
    }
  }, [popularMovies, dispatch]);

  return null;
};

export default usePopularMovies;
