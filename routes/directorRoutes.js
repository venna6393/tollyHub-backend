const express = require("express");
const {
  applyForProject,
  updatePaymentStatus,
} = require("../controllers/directorController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/apply", auth, applyForProject);
router.put("/payment-status", auth, updatePaymentStatus);

module.exports = router;
