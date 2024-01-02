import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, CreateMovie, UpdateMovie, DeleteMovie } from "./pages";

const App = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/create" element={<CreateMovie />} />
        <Route path="/movies/update/:id" element={<UpdateMovie />} />
        <Route path="/movies/delete/:id" element={<DeleteMovie />} />
      </Routes>
    </div>
  );
};

export default App;
