const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const storyRoutes = require("./routes/storyRoutes");
const musicRoutes = require("./routes/musicRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const actorRoutes = require("./routes/actorRoutes");
const directorRoutes = require("./routes/directorRoutes");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use(cors());
app.use("/api/story", storyRoutes);
app.use("/api/music", musicRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/actor", actorRoutes);
app.use("/api/director", directorRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
