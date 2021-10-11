const express = require("express");
const router = express.Router();
const parameters = require("../controllers/parameters");

router.get("/", parameters.getParametersOfModel);

module.exports = router;
