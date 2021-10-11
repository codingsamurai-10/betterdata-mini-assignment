const userModel = require("../models/userModel");

const addNewModel = async (req, res) => {
  const userId = req.body.userId;
  const projectId = req.body.projectId;
  const user = await userModel.findById(userId);
  const project = user.projects.id(projectId);
  project.models.push(req.body.model);
  user.save();
  res.send("ok");
};

module.exports = { addNewModel };
