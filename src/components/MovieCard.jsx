import { imageCDN_URL } from "../utils/constants";



const MovieCard = ({posterPath}) => {

    return(
        <div className="w-36 px-1">
            <img src={imageCDN_URL + posterPath} alt="Movie Carc" />
        </div>
    )
}

export default MovieCard;