import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

export const Movie = mongoose.model("Movie", movieSchema);
