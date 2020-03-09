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
    tbl.string("title").notNullable();
    tbl.string("source").notNullable();
    tbl.string("notes").notNullable();
    tbl.string("img_url");
    tbl.string("ingredients").notNullable();
    tbl.string("instructions").notNullable();
    tbl.string("tags").notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes").dropTableIfExists("users");
};
