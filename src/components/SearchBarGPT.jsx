import { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";

import { GoogleGenAI } from "@google/genai";
import { API_Options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const SearchBarGPT = () => {

    const language = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const dispatch = useDispatch();

    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

    const searchMovie = async(movie) => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_Options);

            const json = await data.json();

            return json.results;
        } catch (error) {
            console.error(error);
        }
    }

    const handleGptSearchClick = async () => {


        const prompt = searchText.current.value;

        if(prompt.trim() === "") return;

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: "Act as a movie recommendation system and suggest some movies for the query - " + prompt + ". Only give the name of 5 movies, comma separated like the example give. Example: Dhol,Don,Ironman,Batman,Dhamaal.",
              });
              console.log(response.text);

              const gptMovies = response?.text.split(',');

              const promiseData = gptMovies.map((movie) => searchMovie(movie));

              // promiseData => [Promise, Promise, Promise, Promise, Promise]

              const tmdbResults = await Promise.all(promiseData);

              console.log(tmdbResults);

              dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

        } catch (error) {
            console.error(error);
        }
      };


    return (
        <div className="pt-[5%] flex justify-center">
        <form className="w-3/4 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input
            ref={searchText} 
            type="text" 
            className="p-2 m-4 bg-white col-span-10 rounded-lg" placeholder={lang[language].gptSearchPlaceholder} 
            />

            <button className="m-4 py-2 px-2 bg-red-700 text-white rounded-lg col-span-2 hover:bg-red-900 cursor-pointer" onClick={handleGptSearchClick}>
            {lang[language].search}
            </button>
        </form>     
        </div>
    )
}

export default SearchBarGPT;