import mongoose from "mongoose";
import parameterSchema from "./parameterSchema";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  parameters: parameterSchema,
});
export default schema;
