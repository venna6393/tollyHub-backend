const pool = require("../config/database");

exports.applyForRole = async (req, res) => {
  const { userId, roleName } = req.body;

  try {
    await pool.query(
      "INSERT INTO actors (user_id, role_name, payment_status) VALUES (?, ?, ?)",
      [userId, roleName, "pending"]
    );
    res.json({ msg: "Applied for role. Awaiting payment." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updatePaymentStatus = async (req, res) => {
  const { actorId, paymentStatus } = req.body;

  try {
    await pool.query("UPDATE actors SET payment_status = ? WHERE id = ?", [
      paymentStatus,
      actorId,
    ]);
    res.json({ msg: "Payment status updated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
