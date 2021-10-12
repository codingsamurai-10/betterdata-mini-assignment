const express = require("express");
const router = express.Router();
const models = require("../controllers/model");
const { upload } = require("../db");

router.post("/", models.addNewModel);
router.put("/", models.updateModelName);
router.delete("/", models.deleteModel);
router.get("/", models.getModelsOfProject);
router.post(
  "/file/upload",
  upload.single("upload"),
  models.uploadSyntheticDataset
);
router.delete("/file", models.deleteSyntheticDataset);
router.get("/files", models.getSyntheticDatasetMetadata);
router.get("/file/download", models.downloadSyntheticData);

module.exports = router;
