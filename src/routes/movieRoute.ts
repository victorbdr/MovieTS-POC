import { Router } from "express";
import {
  allMovies,
  deleteData,
  newMovie,
  UpdateData,
} from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter.post("/movies", newMovie);
movieRouter.get("/movies", allMovies);
movieRouter.put("/movies", UpdateData);
movieRouter.delete("/movies", deleteData);
export default movieRouter;
