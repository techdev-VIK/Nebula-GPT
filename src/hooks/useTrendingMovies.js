
import { useEffect } from "react";
import { API_Options } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {


    const dispatch = useDispatch();

    const getTrendingMovies = async() => {
      const data = await fetch ('https://api.themoviedb.org/3/trending/movie/week?language=en-US', API_Options);
  
      const json = await data.json();
  
      dispatch(addTrendingMovies(json.results));
    }
  
  
    useEffect(() => {
      getTrendingMovies()
    }, [])
}


export default useTrendingMovies;