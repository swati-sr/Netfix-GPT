import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingmovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTIONS,
      );
      const json = await data.json();
      dispatch(addUpcomingmovies(json.results));
    };

    if (!upcomingMovies) {
      getUpcomingMovies();
    }
  }, [upcomingMovies, dispatch]);
};

export default useUpcomingMovies;
