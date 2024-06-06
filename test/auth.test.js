const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Auth API", () => {
  describe("POST /api/auth/register", () => {
    it("should register a new user", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send({
          username: "testuser",
          email: "test@example.com",
          password: "password",
          phoneNumber: "1234567890",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("token");
          done();
        });
    });
  });

  describe("POST /api/auth/login", () => {
    it("should login a user", (done) => {
      chai
        .request(app)
        .post("/api/auth/login")
        .send({
          email: "test@example.com",
          password: "password",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("token");
          done();
        });
    });
  });
});
