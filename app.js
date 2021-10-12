const express = require("express");
const path = require("path");
const logger = require("morgan");

require("dotenv").config();

require("./db");

const usersRouter = require("./routes/users");
const projectsRouter = require("./routes/projects");
const modelsRouter = require("./routes/models");
const parametersRouter = require("./routes/parameters");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use("/models", modelsRouter);
app.use("/parameters", parametersRouter);

app.use((req, res, next) => {
  res.status(400).json({ messsage: "Not found" });
});

module.exports = app;
