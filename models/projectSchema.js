const mongoose = require("mongoose");
const modelSchema = require("./modelSchema");
const imageSchema = require * "./imageSchema";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // TODO: validator to keep project names unique
  },
  models: [modelSchema],
  realData: [imageSchema],
});
module.exports = schema;
