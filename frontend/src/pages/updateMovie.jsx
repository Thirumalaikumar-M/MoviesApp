import React from "react";
import MovieForm from "../components/MovieForm";
import { useParams } from "react-router-dom";

const UpdateMovie = () => {
  const { id } = useParams();
  return <MovieForm mode="update" movieId={id} />;
};

export default UpdateMovie;
