const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
});

module.exports = schema;
