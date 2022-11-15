import { Request, Response } from "express";

import { Movie } from "../protocols/movie.js";
import {
  InsertMovie,
  showMovies,
  deleteMovie,
  updateMovie,
} from "../repositories/movieRepository.js";
import { movieSchema } from "../schemas/movieSchema.js";

async function newMovie(req: Request, res: Response) {
  const movieData = req.body as Movie;
  const { error } = movieSchema.validate(movieData);
  if (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
  try {
    const result = await InsertMovie(movieData);
    return res.send("ok").status(200);
  } catch (e) {
    console.log(e);
    return res.send(e).status(500);
  }
}

async function allMovies(req: Request, res: Response) {
  try {
    const result = await showMovies();
    return res.send(result.rows);
  } catch (e) {
    console.log(e);
    return res.send(e).status(500);
  }
}

async function UpdateData(req: Request, res: Response) {
  const { id } = req.query;
  const { status } = req.body;
  try {
    await updateMovie({ id, status });
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.send(e).status(500);
  }
}
async function deleteData(req: Request, res: Response) {
  const { name } = req.query;
  try {
    await deleteMovie({ name });
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}

export { newMovie, allMovies, UpdateData, deleteData };
