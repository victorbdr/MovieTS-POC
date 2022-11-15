import { Router } from "express";
import { allMovies, newMovie } from "../controllers/movieController.js";
var movieRouter = Router();
movieRouter.post("/movies", newMovie);
movieRouter.get("/movies", allMovies);
export default movieRouter;
