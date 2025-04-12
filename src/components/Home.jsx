import React from 'react';

const categories = [
  {
    title: 'Trending Now',
    movies: [
      'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
      'https://image.tmdb.org/t/p/w500/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg',
      'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
    ],
  },
  {
    title: 'Top Rated',
    movies: [
      'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      'https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
      'https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
    ],
  },
  {
    title: 'New Releases',
    movies: [
      'https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg',
      'https://image.tmdb.org/t/p/w500/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg',
      'https://image.tmdb.org/t/p/w500/4gKyQ1McHa8ZKDsYoyKQSevF01J.jpg',
    ],
  },
];

const MainPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-zinc-900 sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-red-600">NetflixLink</h1>
        <nav className="space-x-6 text-sm">
          <button className="hover:text-red-500">Home</button>
          <button className="hover:text-red-500">TV Shows</button>
          <button className="hover:text-red-500">Movies</button>
          <button className="hover:text-red-500">My List</button>
        </nav>
      </header>

      {/* Hero Banner */}
      <div className="relative h-[65vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute bottom-10 left-10 max-w-xl">
          <h2 className="text-4xl font-bold mb-2">Featured: Mission Impossible</h2>
          <p className="text-sm text-gray-300 mb-4">Action. Thriller. Adventure</p>
          <div className="space-x-3">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 font-medium">Play</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 font-medium">More Info</button>
          </div>
        </div>
      </div>

      {/* Movie Rows */}
      <section className="space-y-10 px-6 py-10">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {category.movies.map((movie, i) => (
                <img
                  key={i}
                  src={movie}
                  alt="Movie Poster"
                  className="w-40 h-60 rounded-md object-cover hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MainPage;
