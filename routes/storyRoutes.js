const express = require("express");
const {
  submitStory,
  updateStoryStatus,
} = require("../controllers/storyController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/submit", auth, submitStory);
router.put("/status", auth, updateStoryStatus);

module.exports = router;
