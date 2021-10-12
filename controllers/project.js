const userModel = require("../models/userModel");

const addNewProject = async (req, res) => {
  const userId = req.body.userId;
  const user = await userModel.findById(userId);
  user.projects.push(req.body.project);
  await user.save();
  res.send("ok");
};

const uploadRealDataset = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  project.realData.push(req.file);
  await user.save();
  res.send("ok");
};

module.exports = { addNewProject, uploadRealDataset };
