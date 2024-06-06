const pool = require("../config/database");

exports.submitStory = async (req, res) => {
  const { storyName, storyPDF, writerId } = req.body;

  try {
    await pool.query(
      "INSERT INTO stories (story_name, story_pdf, writer_id) VALUES (?, ?, ?)",
      [storyName, storyPDF, writerId]
    );
    res.json({ msg: "Story submitted for initial review" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateStoryStatus = async (req, res) => {
  const { storyId, status } = req.body;

  try {
    await pool.query("UPDATE stories SET status = ? WHERE id = ?", [
      status,
      storyId,
    ]);
    res.json({ msg: "Story status updated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
