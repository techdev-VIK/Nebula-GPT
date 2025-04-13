import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const dummyMovieData = {
  title: 'Stranger Things',
  description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces.',
  year: 2016,
  genre: 'Sci-Fi, Thriller',
  image: 'https://image.tmdb.org/t/p/original/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
};

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();



  return (
    <div className="bg-black text-white min-h-screen p-6">
      <button onClick={() => navigate(-1)} className="mb-4 text-sm text-red-400 hover:underline">&larr; Back</button>

      <div className="flex flex-col md:flex-row gap-6">
        <img src={dummyMovieData.image} alt={dummyMovieData.title} className="w-full md:w-1/3 rounded shadow-lg" />

        <Link to={`/movie/${index}-${i}`}>
  <img
    src={movie}
    alt="Movie Poster"
    className="w-40 h-60 rounded-md object-cover hover:scale-105 transition"
  />
</Link>


        <div>
          <h1 className="text-3xl font-bold mb-2">{dummyMovieData.title}</h1>
          <p className="text-gray-400 mb-2">{dummyMovieData.genre} | {dummyMovieData.year}</p>
          <p className="text-gray-300 mb-6">{dummyMovieData.description}</p>

          <div className="space-x-3">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-medium">Play</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 font-medium">Add to My List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
