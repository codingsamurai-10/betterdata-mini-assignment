const mongoose = require("mongoose");
const parameterSchema = require("./parameterSchema");
const fileSchema = require("./fileSchema");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // TODO: validator to keep model names unique
  },
  parameters: parameterSchema,
  syntheticData: [fileSchema],
});
module.exports = schema;
