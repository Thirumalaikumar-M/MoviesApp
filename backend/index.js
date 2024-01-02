import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import moviesRouter from "./Routes/moviesRouter.js";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Router
app.use("/movies", moviesRouter);

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5555;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database is connected");
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
