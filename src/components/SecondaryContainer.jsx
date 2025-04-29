import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);


    return (
        <div className="bg-black pb-20">

            <div className="-mt-20 relative z-25 pl-12">

            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

            <MovieList title={"Trending"} movies={movies.trendingMovies} /> 

            <MovieList title={"Popular"} movies={movies.popularMovies} /> 

            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />

            </div>
            {/* 
            
                MovieList - Popular
                    MovieCards*n
                MovieList - Trending
                MovieList - Upcoming
            */}
        </div>
    )
}


export default SecondaryContainer;