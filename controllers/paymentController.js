const pool = require("../config/database");
const { processPayment } = require("../config/payment");

exports.processPayment = async (req, res) => {
  const { userId, amount } = req.body;

  try {
    const paymentResult = await processPayment(userId, amount);
    if (paymentResult.status === "completed") {
      await pool.query(
        "INSERT INTO payment_transactions (user_id, amount, status) VALUES (?, ?, ?)",
        [userId, amount, "completed"]
      );
      res.json({ msg: "Payment successful" });
    } else {
      res.status(400).json({ msg: "Payment failed" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
