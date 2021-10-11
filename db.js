const mongoose = require("mongoose");

const db = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to db"));

module.exports = db;
