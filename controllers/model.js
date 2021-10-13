const userModel = require("../models/userModel");
const fs = require("fs");

const assertModelNameAlreadyExists = (name, models) => {
  if (models.some((model) => model.name === name)) {
    return true;
  }
  return false;
};

const addNewModel = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  if (assertModelNameAlreadyExists(req.body.model.name, project.models)) {
    const error = new Error("Model name already exists");
    error.status = 400;
    return next(error);
  }
  project.models.push(req.body.model);
  user.save();
  res.send("ok");
};

const updateModelName = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const model = project.models.id(req.body.modelId);
  if (assertModelNameAlreadyExists(req.body.updatedName, project.models)) {
    const error = new Error("Model name already exists");
    error.status = 400;
    return next(error);
  }
  model.name = req.body.updatedName;
  user.save();
  res.send("ok");
};

const deleteModel = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  project.models.pull(req.body.modelId);
  user.save();
  res.send("ok");
};

const getModelsOfProject = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  res.send(project.models);
};

const uploadSyntheticDataset = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const model = project.models.id(req.body.modelId);
  model.syntheticData.push(req.file);
  await user.save();
  res.send("ok");
};

const deleteSyntheticDataset = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const model = project.models.id(req.body.modelId);
  const fileData = model.syntheticData.id(req.body.fileId);
  fs.unlinkSync(fileData.path);
  model.syntheticData.pull(req.body.fileId);
  await user.save();
  res.send("ok");
};

const getSyntheticDatasetMetadata = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const model = project.models.id(req.body.modelId);
  res.send(model.syntheticData);
};

const downloadSyntheticData = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const model = project.models.id(req.body.modelId);
  const fileData = model.syntheticData.id(req.body.fileId);
  res.download(fileData.path, fileData.originalname);
};

module.exports = {
  addNewModel,
  updateModelName,
  deleteModel,
  getModelsOfProject,
  uploadSyntheticDataset,
  deleteSyntheticDataset,
  getSyntheticDatasetMetadata,
  downloadSyntheticData,
};
