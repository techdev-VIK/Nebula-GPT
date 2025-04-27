import GPTMovieSuggestions from "./GPTMovieSuggestions";
import SearchBarGPT from "./SearchBarGPT";


const GptSearch = () => {

    return(
        <>
        <div className="absolute w-full -z-10">

        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
        alt="background-img"
        className="w-full h-screen object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <SearchBarGPT />
        <GPTMovieSuggestions />
        </>
    )
}
        {/* 
            - GPT Search Bar
            - GPT Movie Suggestions
        */}

export default GptSearch;