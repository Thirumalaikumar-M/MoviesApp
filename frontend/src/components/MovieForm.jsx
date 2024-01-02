import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieForm = ({ mode, movieId }) => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    year: "",
    rating: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "create") {
        await axios.post("http://localhost:5555/movies", formData);
      } else if (mode === "update") {
        await axios.put(`http://localhost:5555/movies/${movieId}`, formData);
      }

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (mode === "update") {
      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5555/movies/${movieId}`
          );
          const movieData = response.data.data;
          setFormData(movieData);
        } catch (error) {
          console.error(error);
        }
      };

      fetchMovieDetails();
    }
  }, [mode, movieId]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">
        {mode === "create" ? "Create a New Movie" : "Update Movie"}
      </h2>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-md font-semibold text-gray-600"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="genre"
          className="block text-md font-semibold text-gray-600"
        >
          Genre
        </label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="year"
          className="block text-md font-semibold text-gray-600"
        >
          Year
        </label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="rating"
          className="block text-md font-semibold text-gray-600"
        >
          Rating
        </label>
        <input
          type="number"
          step="0.1"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        {mode === "create" ? "Create Movie" : "Update Movie"}
      </button>
    </form>
  );
};

export default MovieForm;
