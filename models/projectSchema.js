const mongoose = require("mongoose");
const modelSchema = require("./modelSchema");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  models: [modelSchema],
});
module.exports = schema;
