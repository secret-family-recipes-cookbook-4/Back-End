const server = require("./recipes-router");
const request = require("supertest");

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  // it("is running properly", async () => {
  //   const res = await request(server).get("/");
  //   expect(res.status).toBe(200);
  // });
});
