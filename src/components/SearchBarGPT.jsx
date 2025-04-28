import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const SearchBarGPT = () => {

    const language = useSelector((store) => store.config.lang);


    return (
        <div className="pt-[5%] flex justify-center">
        <form className="w-3/4 bg-black grid grid-cols-12">
            <input 
            type="text" 
            className="p-2 m-4 bg-white col-span-10 rounded-lg" placeholder={lang[language].gptSearchPlaceholder} 
            />

            <button className="m-4 py-2 px-2 bg-red-700 text-white rounded-lg col-span-2">
            {lang[language].search}
            </button>
        </form>     
        </div>
    )
}

export default SearchBarGPT;