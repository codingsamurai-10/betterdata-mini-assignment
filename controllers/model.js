const userModel = require("../models/userModel");
const fs = require("fs");

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

const deleteModel = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  project.models.pull(req.body.modelId);
  user.save();
  res.send("ok");
};

const getModelsOfProject = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  res.send(project.models);
};

const uploadSyntheticDataset = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const model = project.models.id(req.body.modelId);
  model.syntheticData.push(req.file);
  await user.save();
  res.send("ok");
};

const deleteSyntheticDataset = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const model = project.models.id(req.body.modelId);
  const fileData = model.syntheticData.id(req.body.fileId);
  fs.unlinkSync(fileData.path);
  model.syntheticData.pull(req.body.fileId);
  await user.save();
  res.send("ok");
};

const getSyntheticDatasetMetadata = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const model = project.models.id(req.body.modelId);
  res.send(model.syntheticData);
};

module.exports = {
  addNewModel,
  updateModelName,
  deleteModel,
  getModelsOfProject,
  uploadSyntheticDataset,
  deleteSyntheticDataset,
  getSyntheticDatasetMetadata,
};
