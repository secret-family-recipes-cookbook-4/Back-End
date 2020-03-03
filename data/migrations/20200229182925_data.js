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
  });
  await knex.schema.createTable("ingredients", tbl => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("name").notNullable();
  });
  await knex.schema.createTable("instructions", tbl => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("steps");
  });
  await knex.schema.createTable("tags", tbl => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("tag").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("tags")
    .dropTableIfExists("recipes")
    .dropTableIfExists("users");
};
