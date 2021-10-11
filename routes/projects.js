const express = require("express");
const router = express.Router();
const projects = require("../controllers/project");
const { upload } = require("../db");

router.post("/", projects.addNewProject);
router.post("/upload", upload.single("upload"), projects.uploadRealData);

module.exports = router;
