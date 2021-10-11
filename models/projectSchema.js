import mongoose from "mongoose";
import modelSchema from "./modelSchema";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  models: [modelSchema],
});
export default schema;
