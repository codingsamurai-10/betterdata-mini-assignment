const express = require("express");
const router = express.Router();
const models = require("../controllers/model");

router.post("/", models.addNewModel);
router.put("/", models.updateModelName);
router.delete("/", models.deleteModel);

module.exports = router;
