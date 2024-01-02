import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { VscDiffAdded } from "react-icons/vsc";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/movies")
      .then((response) => {
        setMovies(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Movies List
        </h1>
        <Link to={`/movies/create`}>
          <VscDiffAdded className="w-10 h-10 text-white" />
        </Link>
      </div>

      <div className="m-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} showIcons={true} />
        ))}
      </div>
    </div>
  );
};

export default Home;
