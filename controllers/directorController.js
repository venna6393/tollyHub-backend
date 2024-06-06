const pool = require("../config/database");

exports.applyForProject = async (req, res) => {
  const { userId, projectName } = req.body;

  try {
    await pool.query(
      "INSERT INTO directors (user_id, project_name, payment_status) VALUES (?, ?, ?)",
      [userId, projectName, "pending"]
    );
    res.json({ msg: "Applied for project. Awaiting payment." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updatePaymentStatus = async (req, res) => {
  const { directorId, paymentStatus } = req.body;

  try {
    await pool.query("UPDATE directors SET payment_status = ? WHERE id = ?", [
      paymentStatus,
      directorId,
    ]);
    res.json({ msg: "Payment status updated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
