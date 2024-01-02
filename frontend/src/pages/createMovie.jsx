import React from "react";
import MovieForm from "../components/MovieForm";

const CreateMovie = () => {
  return (
    <div className="mt-10">
      <MovieForm mode="create" />
    </div>
  );
};

export default CreateMovie;
