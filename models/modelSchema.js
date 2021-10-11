const mongoose = require("mongoose");
const parameterSchema = require("./parameterSchema");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parameters: parameterSchema,
});
module.exports = schema;
