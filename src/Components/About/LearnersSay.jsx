import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MovieImage1 from '/about/ls1.png';
import MovieImage7 from '/about/ls7.png';
import MovieImage3 from '/about/ls3.png';
import MovieImage4 from '/about/ls4.png';
import MovieImage5 from '/about/ls5.png';
import MovieImage6 from '/about/ls6.png';
import MovieImage2 from '/about/curve.png'; 

const movies = [
  { id: 1, title: 'Pearl B. Hill', director: 'John Doe', longDescription: 'Like this Intellisoft, vulputate at sapien sit amet, auctor iaculis lorem.', poster: MovieImage1, directorImage: MovieImage2, rating: 5 },
  { id: 2, title: 'Mandy F. Wood', director: 'Jane Smith', longDescription: 'Educational template, vulputate at sapien sit amet, auctor iaculis lorem.', poster: MovieImage7, directorImage: MovieImage2, rating: 4 },
  { id: 3, title: 'Riya', director: 'Chris Brown', longDescription: 'Online learning, vulputate at sapien sit amet, auctor iaculis lorem.', poster: MovieImage3, directorImage: MovieImage2, rating: 5 },
  { id: 4, title: 'Martha Maldonado, CEO', director: 'Samuel Green', longDescription: 'After the launch, vulputate at sapien sit amet, auctor iaculis lorem.', poster: MovieImage4, directorImage: MovieImage2, rating: 4 },
  { id: 5, title: 'Michael D. Lovelady', director: 'Emily White', longDescription: 'Intellisoft education, vulputate at sapien sit amet, auctor iaculis lorem.', poster: MovieImage5, directorImage: MovieImage2, rating: 3 },
  { id: 6, title: 'Valerie J. Creasman', director: 'Michael Black', longDescription: 'Our educational, vulputate at sapien sit amet, auctor iaculis lorem.', poster: MovieImage6, directorImage: MovieImage2, rating: 5 },
];

const LearnersSay = () => {
  const movieRef = useRef(null);
  const bottomRef = useRef(null);

  const slideMovies = () => {
    if (movieRef.current) {
      movieRef.current.scrollLeft -= 1;
      if (movieRef.current.scrollLeft <= 0) {
        movieRef.current.scrollLeft = movieRef.current.scrollWidth;
      }
    }

    if (bottomRef.current) {
      bottomRef.current.scrollLeft += 1;
      if (bottomRef.current.scrollLeft >= bottomRef.current.scrollWidth) {
        bottomRef.current.scrollLeft = 0;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(slideMovies, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white-500 p-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/4 w-full p-5 rounded-lg">
            <h2 className="text-[32.36px] font-bold mb-3">What My Learners <span className="text-purple-500">Say</span></h2>
            <p className="text-[13.29px] mb-4 text-gray-600">Learning communication to the global world and building a bright future with our Intellisoft.</p>
            <Link to="#learn more" className="text-[11.91px] inline-block mt-5 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400">Learn More</Link>
          </div>
          <div className="md:w-3/4 w-full p-5 rounded-lg">
            <div ref={movieRef} className="overflow-hidden whitespace-nowrap flex gap-4">
              {movies.map((movie) => (
                <div key={movie.id} className="bg-black-500 p-4 rounded-lg shadow w-80 h-54 inline-block">
                  <div className="flex justify-between items-center">
                    <img src={movie.poster} alt={`Poster of ${movie.title}`} className="w-12 h-12 object-cover rounded my-2" />
                    <div className="p-2">
                      <h3 className="text-lg font-semibold">{movie.title}</h3>
                      <p className="text-sm text-gray-600">Directed by: {movie.director}</p>
                    </div>
                    <img src={movie.directorImage} alt={`Director's image of ${movie.director}`} className="w-5 h-5 object-cover rounded my-2" />
                  </div>
                  <p className="text-sm text-gray-700 truncate">{movie.longDescription}</p>
                  <div className="mt-2 flex space-x-1 text-yellow-400">
                    {'★'.repeat(movie.rating)}{'☆'.repeat(5 - movie.rating)}
                  </div>
                </div>
              ))}
            </div>
            <div ref={bottomRef} className="overflow-hidden whitespace-nowrap flex gap-4 mt-4">
              {movies.concat(movies).map((movie, index) => (
                <div key={index} className="bg-white-500 p-4 rounded-lg shadow w-80 h-54 inline-block">
                  <div className="flex justify-between items-center">
                    <img src={movie.poster} alt={`Poster of ${movie.title}`} className="w-12 h-12 object-cover rounded my-2" />
                    <div className="p-2">
                      <h3 className="text-lg font-semibold">{movie.title}</h3>
                      <p className="text-sm text-gray-600">Directed by: {movie.director}</p>
                    </div>
                    <img src={movie.directorImage} alt={`Director's image of ${movie.director}`} className="w-5 h-5 object-cover rounded my-2" />
                  </div>
                  <p className="text-sm text-gray-700 truncate">{movie.longDescription}</p>
                  <div className="mt-2 flex space-x-1 text-yellow-400">
                    {'★'.repeat(movie.rating)}{'☆'.repeat(5 - movie.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnersSay;

