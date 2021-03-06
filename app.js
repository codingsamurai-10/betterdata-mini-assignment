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
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: { message: err.message } });
});

module.exports = app;
