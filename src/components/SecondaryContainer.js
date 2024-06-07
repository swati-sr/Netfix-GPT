import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const data = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 pt-4 sm:pt-40 md:-mt-24 relative z-20 pl-4 md:pl-9">
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
