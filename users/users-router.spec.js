const db = require("../data/dbconfig");
const Users = require("./users-model");

describe("user-model.js", () => {
  describe("add()", () => {
    afterEach(async () => {
      //clean up
      await db("users").truncate();
    });

    it("should insert a user into the db", async () => {
      //using our model method
      await Users.add({ username: "dadechico", password: "abc123" });
      await Users.add({ username: "onetiredmom", password: "abc123" });

      //confirm with knex
      const users = await db("users");

      expect(users).toHaveLength(2);
      expect(users[0].username).toBe("dadechico");
    });

    it("should return new user on insert", async () => {
      const user = await Users.add({
        username: "dadechico",
        password: "abc123"
      });

      expect(user).toEqual({ id: 1, username: "dadechico", password: 'abc123' });
    });
  });

  describe("findById", () => {
    afterEach(async () => {
      //clean up
      await db("users").truncate();
    });

    it("finds a user by id", async () => {
      //set up
      await db("users").insert([
        { username: "dadechico", password: "abc" },
        { username: "onetiredmom", password: "abc" }
      ]);

      const user = await Users.findById(2);

      expect(user.username).toBe("onetiredmom");
    });

    it("returns undefined on invalid id", async () => {
      const user = await Users.findById(2);

      expect(user).toBeUndefined();
    });
  });

  describe("find", () => {
    afterEach(async () => {
      //clean up
      await db("users").truncate();
    });

    it("should return all users", async () => {
      //using our model method
      await Users.add({ username: "dadechico", password: "abc123" });
      await Users.add({ username: "onetiredmom", password: "abc123" });

      //confirm with knex
      const users = await Users.find();

      expect(users).toHaveLength(2);
    });
  });
});
