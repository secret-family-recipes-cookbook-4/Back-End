exports.up = async function(knex, Promise) {
  await knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .string("username", 280)
      .unique()
      .notNullable();
    tbl.string("password", 130).notNullable();
  });
  await knex.schema.createTable("recipes", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .string("title")
      .notNullable()
      .unique();

    tbl.string("source");
    tbl.string("notes");
    tbl.binary("img_url");
    tbl.string("ingredients").notNullable();
    tbl.string("instructions").notNullable();
    tbl.string("tags").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes").dropTableIfExists("users");
};
