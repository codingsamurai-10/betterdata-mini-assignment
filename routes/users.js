const express = require("express");
const router = express.Router();
const users = require("../controllers/user");

router.post("/", users.addNewUser);

module.exports = router;
