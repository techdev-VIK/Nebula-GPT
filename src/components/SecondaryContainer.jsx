import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);

    // console.log(movies);

    return (
        <div>

            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> 

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