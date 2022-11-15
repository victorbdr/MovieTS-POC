import express from "express";
import dotenv from "dotenv";
import movieRouter from "./routes/movieRoute.js";
var server = express();
server.use(express.json());
dotenv.config();
server.use(movieRouter);
server.get("/health", function (req, res) {
    res.send("ok");
});
server.listen(4000, function () {
    console.log("working");
});
