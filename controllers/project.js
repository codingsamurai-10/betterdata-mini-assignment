const userModel = require("../models/userModel");

const addNewProject = async (req, res) => {
  const userId = req.body.userId;
  const user = await userModel.findById(userId).exec();
  user.projects.push(req.body.project);
  await user.save();
  res.send("ok");
};

module.exports = { addNewProject };
