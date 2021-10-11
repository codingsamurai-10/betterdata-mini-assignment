const userModel = require("../models/userModel");

const addNewUser = async (req, res) => {
  const user = new userModel({ ...req.body });
  await user.save();
  res.send("ok");
};

module.exports = { addNewUser };
