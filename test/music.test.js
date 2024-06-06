const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const pool = require("../config/database");

chai.should();
chai.use(chaiHttp);

describe("Music Routes", () => {
  let token;

  before(async () => {
    await pool.query("DELETE FROM users");
    await pool.query("DELETE FROM music_submissions");
    await pool.query("DELETE FROM payment_transactions");

    // Register a user and get a token
    const user = {
      username: "testuser",
      email: "test@example.com",
      password: "password",
      phoneNumber: "1234567890",
    };
    const res = await chai.request(app).post("/api/auth/register").send(user);
    token = res.body.token;
  });

  describe("POST /api/music/submit", () => {
    it("should submit a music file", (done) => {
      const music = {
        songName: "Test Song",
        audioFile: "test.mp3",
        composerId: 1, // Assuming the composerId is 1
      };
      chai
        .request(app)
        .post("/api/music/submit")
        .set("x-auth-token", token)
        .send(music)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("msg", "Music submitted");
          done();
        });
    });
  });
});
