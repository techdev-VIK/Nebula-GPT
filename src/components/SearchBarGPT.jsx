import { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

import { GoogleGenAI } from "@google/genai";


const SearchBarGPT = () => {

    const language = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

    const handleGptSearchClick = async () => {
        const prompt = searchText.current.value;
      
        // const response = await fetch("https://api.openai.com/v1/chat/completions", {
        //   method: "POST",
        //   headers: {
        //     "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({
        //     model: "gpt-4o",
        //     messages: [
        //       { role: "user", content: prompt }
        //     ]
        //   })
        // });

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: "Act as a movie recommendation system and suggest some movies for the query - " + prompt + ". Only give the name of 5 movies, comma separated like the example give. Example: Dhol, Don, Ironman, Batman, Dhamaal.",
          });
          console.log(response.text);

        
      
        // const data = await response.json();
        // console.log(data.choices);
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