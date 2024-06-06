const express = require("express");
const { processPayment } = require("../controllers/paymentController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/process", auth, processPayment);

module.exports = router;
