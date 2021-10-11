const userModel = require("../models/userModel");

const addNewUser = (req, res) => {
  const user = new userModel({ ...req.body });
  user.save();
  res.send("ok");
};

module.exports = { addNewUser };
