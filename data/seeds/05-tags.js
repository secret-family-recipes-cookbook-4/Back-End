exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tags")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tags").insert([
        { id: 1, tag: "appetizer", recipe_id: 1 },
        { id: 2, tag: "vegetarian", recipe_id: 1 },
        { id: 3, tag: "seafood", recipe_id: 2 },
        { id: 4, tag: "appetizer", recipe_id: 3 },
        { id: 5, tag: "vegetarian", recipe_id: 3 },
        { id: 6, tag: "bread", recipe_id: 4 },
        { id: 7, tag: "beef", recipe_id: 5 },
        { id: 8, tag: "steak", recipe_id: 5 },
        { id: 9, tag: "steak", recipe_id: 2 },
        { id: 10, tag: "pork", recipe_id: 6 },
        { id: 11, tag: "bbq", recipe_id: 6 },
        { id: 12, tag: "pasta", recipe_id: 7 },
        { id: 13, tag: "side", recipe_id: 7 },
        { id: 14, tag: "vegetarian", recipe_id: 8 },
        { id: 15, tag: "Asian", recipe_id: 1 },
        { id: 16, tag: "Italian", recipe_id: 8 },
        { id: 17, tag: "American", recipe_id: 5 },
        { id: 18, tag: "American", recipe_id: 7 }
      ]);
    });
};
