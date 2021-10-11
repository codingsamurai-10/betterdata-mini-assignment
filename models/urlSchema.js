const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  type: String,
  validate: {
    validator: (val) => {
      urlRegex =
        /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
      return urlRegex.test(val);
    },
  },
});

module.exports = schema;
