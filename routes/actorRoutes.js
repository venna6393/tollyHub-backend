const express = require("express");
const {
  applyForRole,
  updatePaymentStatus,
} = require("../controllers/actorController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/apply", auth, applyForRole);
router.put("/payment-status", auth, updatePaymentStatus);

module.exports = router;
