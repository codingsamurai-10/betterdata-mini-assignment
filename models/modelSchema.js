const mongoose = require("mongoose");
const parameterSchema = require("./parameterSchema");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // TODO: validator to keep model names unique
  },
  parameters: parameterSchema,
});
module.exports = schema;
