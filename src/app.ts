import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRouter from "./routes/movieRoute.js";

const server = express();
server.use(express.json());
dotenv.config();
server.use(cors());

server.use(movieRouter);
server.get("/health", (req, res) => {
  res.send("ok");
});

server.listen(4000, () => {
  console.log("working");
});
