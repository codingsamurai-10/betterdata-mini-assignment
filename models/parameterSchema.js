const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    batchSize: {
      type: Number,
      validate: {
        validator: Number.isInteger,
      },
    },
    trainingCycles: {
      type: Number,
      validate: {
        validator: Number.isInteger,
      },
    },
  },
  { _id: false }
);
module.exports = schema;
