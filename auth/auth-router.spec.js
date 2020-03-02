const request = require("supertest");
const server = require("../api/server");

//testing auth router
describe("auth-router", () => {
  describe("POST /register", () => {
    it("returns json", () => {
      request(server)
        .post("/api/auth/register")
        .send({ username: "GrandmaG", password: "Glamma" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((error, res) => {
          if (error) return document(error);
          else done();
        });
    });
  });
  describe("POST /login", () => {
    it("returns json", () => {
      request(server)
        .post("/api/auth/login")
        .send({ username: "GrandmaG", password: "Glamma" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((error, res) => {
          if (error) return document(error);
          else done();
        });
    });
  });
});
