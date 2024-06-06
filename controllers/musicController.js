const pool = require("../config/database");

exports.submitMusic = async (req, res) => {
  const { songName, audioFile, composerId } = req.body;

  try {
    await pool.query(
      "INSERT INTO music (song_name, audio_file, composer_id) VALUES (?, ?, ?)",
      [songName, audioFile, composerId]
    );
    res.json({ msg: "Music submitted for review" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateMusicStatus = async (req, res) => {
  const { musicId, status } = req.body;

  try {
    await pool.query("UPDATE music SET status = ? WHERE id = ?", [
      status,
      musicId,
    ]);
    res.json({ msg: "Music status updated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
