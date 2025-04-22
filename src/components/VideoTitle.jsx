

const VideoTitle = ({title, overview}) => {


    return (
        <div className="pt-36 px-12">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview.slice(0,111)}...</p>

            <div className="flex">
                <button className="bg-gray-500 text-black p-4 px-10 text-xl text-white bg-opacity-50 rounded-lg">▶ Play</button>
                <button className="mx-2 bg-gray-400 text-black p-4 px-10 text-xl text-white bg-opacity-50 rounded-lg">ℹ︎ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;