const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("dotenv").config();

const mongoose = require("mongoose");

const usersRouter = require("./routes/users");
const projectsRouter = require("./routes/projects");
const modelsRouter = require("./routes/models");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use("/models", modelsRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to db"));

module.exports = app;
