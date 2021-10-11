const userModel = require("../models/userModel");

const addNewProject = async (req, res) => {
  const userId = req.body.userId;
  const user = await userModel.findById(userId);
  user.projects.push(req.body.project);
  await user.save();
  res.send("ok");
};

const uploadRealData = async (req, res) => {};

module.exports = { addNewProject, uploadRealData };
