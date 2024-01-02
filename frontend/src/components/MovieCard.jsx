import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete, MdEdit } from "react-icons/md";

const MovieCard = ({ movie, showIcons }) => {
  return (
    <div className="group relative max-w-m rounded overflow-hidden shadow-lg bg-gray-100">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center pb-3 border-b border-gray-300">
          <div className="font-bold text-xl text-blue-500">{movie.title}</div>
          {showIcons && (
            <div className="flex space-x-2">
              <Link to={`/movies/update/${movie._id}`}>
                <MdEdit className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </Link>
              <Link to={`/movies/delete/${movie._id}`}>
                <MdOutlineDelete className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </Link>
            </div>
          )}
        </div>
        <div className="flex mt-2">
          <div className="mr-4">
            <span className="font-bold block mb-2">Genre:</span>
            <span className="font-bold block mb-2">Year:</span>
            <span className="font-bold block mb-2">Rating:</span>
          </div>
          <div>
            <span className="text-gray-700 font-semibold block mb-2">
              {movie.genre}
            </span>
            <span className="text-gray-700 font-semibold block mb-2">
              {movie.year}
            </span>
            <span className="text-gray-700 font-semibold block mb-2">
              {movie.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
