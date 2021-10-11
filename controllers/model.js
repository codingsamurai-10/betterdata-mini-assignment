const userModel = require("../models/userModel");

const addNewModel = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  project.models.push(req.body.model);
  user.save();
  res.send("ok");
};

const updateModelName = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const model = project.models.id(req.body.modelId);
  model.name = req.body.updatedName;
  user.save();
  res.send("ok");
};

module.exports = { addNewModel, updateModelName };
