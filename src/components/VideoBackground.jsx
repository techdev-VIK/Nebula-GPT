import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({movieId}) => {

    // fetch trailer video
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);


    useMovieTrailer(movieId);

    return (
        <div>
            <iframe 
            className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/" + trailerVideo?.key} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground;