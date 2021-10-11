const userModel = require("../models/userModel");

const addNewModel = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  project.models.push(req.body.model);
  user.save();
  res.send("ok");
};

module.exports = { addNewModel };
