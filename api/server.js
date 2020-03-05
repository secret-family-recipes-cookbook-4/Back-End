const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/auth-middleware");
const authRouter = require("../auth/auth-router");
const recipeRouter = require("../recipes/recipes-router");
const userRouter = require("../users/users-router");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/recipes", recipeRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.json({ message: "Hello from the server side!" });
});

module.exports = server;
