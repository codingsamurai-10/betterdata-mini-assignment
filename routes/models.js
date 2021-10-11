const express = require("express");
const router = express.Router();
const models = require("../controllers/model");

router.post("/", models.addNewModel);

module.exports = router;
