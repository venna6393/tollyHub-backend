const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Story API", () => {
  let token;

  before((done) => {
    chai
      .request(app)
      .post("/api/auth/login")
      .send({
        email: "test@example.com",
        password: "password",
      })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  describe("POST /api/story/submit", () => {
    it("should submit a story for review", (done) => {
      chai
        .request(app)
        .post("/api/story/submit")
        .set("x-auth-token", token)
        .send({
          storyName: "Sample Story",
          storyPDF: "path/to/story.pdf",
          writerId: 1,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have
            .property("msg")
            .eql("Story submitted for initial review");
          done();
        });
    });
  });
});
