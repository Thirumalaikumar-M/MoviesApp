import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const DeleteMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/movies/${id}`);
        setMovie(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5555/movies/${id}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {movie ? (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Delete Movie</h2>
          <MovieCard movie={movie} showIcons={false} />

          <p className="text-black-700 mb-4 mt-4">
            Are you sure you want to delete this movie?
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <button
              onClick={handleDelete}
              className="flex-shrink-0 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800"
            >
              Yes, Delete
            </button>
            <Link
              to="/"
              className="flex-shrink-0 px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:shadow-outline-gray active:bg-gray-400"
            >
              Cancel
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DeleteMovie;
