const mongoose = require("mongoose");
const modelSchema = require("./modelSchema");
const fileSchema = require("./fileSchema");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // TODO: validator to keep project names unique
  },
  models: [modelSchema],
  realData: [fileSchema],
});
module.exports = schema;
