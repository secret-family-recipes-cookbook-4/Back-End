const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "GrandmasCookies",
          password: bcrypt.hashSync("password123", 10)
        },
        {
          id: 2,
          username: "ChefJeff",
          password: bcrypt.hashSync("password123", 10)
        },
        {
          id: 3,
          username: "GrillinNChillin",
          password: bcrypt.hashSync("password123", 10)
        },
        {
          id: 4,
          username: "MamaCooks",
          password: bcrypt.hashSync("password123", 10)
        }
      ]);
    });
};
