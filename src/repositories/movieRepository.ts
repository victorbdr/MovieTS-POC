import db from "../db/db.js";
import { QueryResult } from "pg";
import { Movie } from "../protocols/movie";

async function InsertMovie(movie: Movie) {
  const insert = db.query(
    `INSERT INTO movies ( name,
    platform,
    genre,
    status)VALUES ($1,$2,$3,$4)`,
    [movie.name, movie.platform, movie.genre, movie.status]
  );
  return insert;
}

async function showMovies(): Promise<QueryResult<Movie>> {
  const getMovies = db.query(`SELECT * from movies;`);
  return getMovies;
}

async function updateMovie({ status, id }): Promise<QueryResult<Movie>> {
  const update = db.query(`UPDATE movies SET status = $1 WHERE id=$2`, [
    status,
    id,
  ]);
  return update;
}

async function deleteMovie({ name }): Promise<QueryResult<Movie>> {
  const deleteOne = db.query(`DELETE FROM movies WHERE name=$1`, [name]);
  return deleteOne;
}
export { InsertMovie, showMovies, updateMovie, deleteMovie };
