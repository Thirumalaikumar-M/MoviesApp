import express from "express";
import { Movie } from "../models/movieModel.js";
const router = express.Router();

// Post a movie
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.genre ||
      !req.body.year ||
      !req.body.rating
    ) {
      res.status(400).send("Fill all the fields");
    }
    const newMovie = {
      title: req.body.title,
      genre: req.body.genre,
      year: req.body.year,
      rating: req.body.rating,
    };
    const movie = await Movie.create(newMovie);
    res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// Read all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      data: movies,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// Read a single movie
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.status(200).json({
      data: movie,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// Update a movie
router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.genre ||
      !req.body.year ||
      !req.body.rating
    ) {
      res.status(400).send("Fill all the fields");
    }
    const { id } = req.params;
    const updatedMovie = {
      title: req.body.title,
      genre: req.body.genre,
      year: req.body.year,
      rating: req.body.rating,
    };
    const result = await Movie.findByIdAndUpdate(id, updatedMovie, {
      new: true,
    });
    if (!result) {
      return res.status(404).send("Movie not found");
    }
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// Delete a movie
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Movie.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send("Movie not found");
    }
    res.status(200).json({ message: "Movie deleted", deletedMovie: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

export default router;
