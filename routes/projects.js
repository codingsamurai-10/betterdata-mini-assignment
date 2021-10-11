const express = require("express");
const router = express.Router();
const projects = require("../controllers/project");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({ url: process.env.MONGODB_URI });
const upload = multer({ storage });

router.post("/", projects.addNewProject);
router.post("/upload", upload.single("upload"), projects.uploadRealData);

module.exports = router;
