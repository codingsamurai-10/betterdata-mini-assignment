import mongoose from "mongoose";
import projectSchema from "./projectSchema";

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    projects: [projectSchema],
  },
});
