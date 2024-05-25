import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const data = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-20 pl-9">
        <MovieList
          title={"Now Playing Movies"}
          movies={data?.nowPlayingMovies}
        />
        <MovieList title={"Top Rated Movies"} movies={data?.topRatedMovies} />
        <MovieList title={"Popular"} movies={data?.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={data?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
