const express = require("express");
const router = express.Router();
const projects = require("../controllers/project");

router.post("/", projects.addNewProject);

module.exports = router;
