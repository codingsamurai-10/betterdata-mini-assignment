const mongoose = require("mongoose");
const modelSchema = require("./modelSchema");
const urlSchema = require * "./urlSchema";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // TODO: validator to keep project names unique
  },
  models: [modelSchema],
  realData: [urlSchema],
});
module.exports = schema;
