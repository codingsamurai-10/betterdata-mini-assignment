const express = require("express");
const router = express.Router();
const projects = require("../controllers/project");
const { upload } = require("../db");

router.post("/", projects.addNewProject);
router.post(
  "/file/upload",
  upload.single("upload"),
  projects.uploadRealDataset
);
router.delete("/file", projects.deleteRealDataset);
router.put("/file", projects.updateRealDatasetName);
router.get("/files", projects.getRealDatasetNames);

module.exports = router;
