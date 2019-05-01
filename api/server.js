// Packages
const express = require("express");
const helmet = require("helmet");

// Routers
const cohortsRouter = require("../routers/cohorts-router");

// Server
const server = express();
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to Web DB III Challenge!");
});

server.use("/api/cohorts", cohortsRouter);

module.exports = server;
