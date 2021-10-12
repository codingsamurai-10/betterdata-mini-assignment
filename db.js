const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to db"));
module.exports = { upload };
