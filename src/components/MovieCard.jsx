import { imageCDN_URL } from "../utils/constants";



const MovieCard = ({posterPath}) => {

    return(
        <div className="w-48">
            <img src={imageCDN_URL + posterPath} alt="Movie Carc" />
        </div>
    )
}

export default MovieCard;