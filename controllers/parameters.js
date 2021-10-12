const userModel = require("../models/userModel");

const getParametersOfModel = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  const project = user.projects.id(req.body.projectId);
  const model = project.models.id(req.body.modelId);
  res.send(model.parameters);
};

module.exports = { getParametersOfModel };
