const userModel = require("../models/userModel");
const fs = require("fs");

const assertProjectNameAlreadyExists = (name, projects) => {
  if (projects.some((project) => project.name === name)) {
    return true;
  }
  return false;
};

const addNewProject = async (req, res, next) => {
  const userId = req.body.userId;
  const user = await userModel.findById(userId);
  if (assertProjectNameAlreadyExists(req.body.project.name, user.projects)) {
    const error = new Error("Project name already exists");
    error.status = 400;
    return next(error);
  }
  user.projects.push(req.body.project);
  await user.save();
  res.send("ok");
};

const uploadRealDataset = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  project.realData.push(req.file);
  await user.save();
  res.send("ok");
};

const deleteRealDataset = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const fileData = project.realData.id(req.body.fileId);
  fs.unlinkSync(fileData.path);
  project.realData.pull(req.body.fileId);
  await user.save();
  res.send("ok");
};

const updateRealDatasetName = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const fileData = project.realData.id(req.body.fileId);
  fileData.originalname = req.body.updatedName;
  await user.save();
  res.send("ok");
};

const getRealDatasetMetadata = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  res.send(project.realData);
};

module.exports = {
  addNewProject,
  uploadRealDataset,
  deleteRealDataset,
  updateRealDatasetName,
  getRealDatasetMetadata,
};
