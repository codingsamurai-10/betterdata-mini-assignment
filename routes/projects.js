const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/", projectController.addNewProject);

module.exports = router;
