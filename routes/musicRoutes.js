const express = require("express");
const {
  submitMusic,
  updateMusicStatus,
} = require("../controllers/musicController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/submit", auth, submitMusic);
router.put("/status", auth, updateMusicStatus);

module.exports = router;
