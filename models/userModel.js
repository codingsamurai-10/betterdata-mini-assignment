const mongoose = require("mongoose");
const projectSchema = require("./projectSchema");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    projects: [projectSchema],
  },
});

const model = mongoose.model("User", schema);
module.exports = model;
