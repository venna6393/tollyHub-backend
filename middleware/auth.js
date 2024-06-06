const jwt = require("jsonwebtoken");
const pool = require("../config/database");
require("dotenv").config();

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [
      req.user.id,
    ]);
    if (rows.length === 0)
      return res.status(401).json({ msg: "User does not exist" });
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
