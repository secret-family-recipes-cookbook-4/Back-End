exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "spring roll wraps", recipe_id: 1 },
        { id: 2, name: "thinly sliced nappa cabbage", recipe_id: 1 },
        { id: 3, name: "bean sprouts", recipe_id: 1 },
        { id: 4, name: "carrots", recipe_id: 1 },
        { id: 5, name: "mushrooms", recipe_id: 1 },
        { id: 6, name: "onions", recipe_id: 1 },
        { id: 7, name: "6oz halibut steaks", recipe_id: 2 },
        { id: 8, name: "3 tsp capers", recipe_id: 2 },
        { id: 9, name: "4 sprigs thyme", recipe_id: 2 },
        { id: 10, name: "1/2 stick unsalted butter", recipe_id: 2 },
        { id: 11, name: "4 russet potatoes, peeled", recipe_id: 3 },
        { id: 12, name: "2 large eggs", recipe_id: 3 },
        { id: 13, name: "salt and pepper, to taste", recipe_id: 3 },
        { id: 14, name: "1/4 cup of flour", recipe_id: 3 },
        { id: 15, name: "4 cups all purpose flour", recipe_id: 4 },
        { id: 16, name: "1 1/2 cups water", recipe_id: 4 },
        { id: 17, name: "2 tbps lard", recipe_id: 4 },
        { id: 18, name: "2 lbs flank steak", recipe_id: 5 },
        { id: 19, name: "1/3 cup soy sauce", recipe_id: 5 },
        { id: 20, name: "2 tsp red wine vinegar", recipe_id: 5 },
        { id: 21, name: "1/4 cup honey", recipe_id: 5 },
        { id: 22, name: "2 lbs baby back pork ribs", recipe_id: 6 },
        { id: 23, name: "1 tbsp Sriracha", recipe_id: 6 },
        { id: 24, name: "2 tbsp brown sugar", recipe_id: 6 },
        { id: 25, name: "1/2 cup ketchup", recipe_id: 6 },
        { id: 26, name: "2 lbs cavatappi pasta", recipe_id: 7 },
        { id: 27, name: "1/4 cup flour", recipe_id: 7 },
        { id: 28, name: "1/4 cup unsalted butter", recipe_id: 7 },
        { id: 29, name: "1/4 lb colby-jack cheese", recipe_id: 7 },
        { id: 30, name: "1/4 lb smoked gouda cheese", recipe_id: 7 },
        { id: 31, name: "1 large firm eggplant", recipe_id: 8 },
        { id: 32, name: "24oz marinara sauce", recipe_id: 8 },
        { id: 33, name: "1 1/2 lbs italian-blend cheese", recipe_id: 8 },
        { id: 34, name: "1/4 cup parmesan cheese", recipe_id: 8 },
        { id: 35, name: "2 cups breadcrumbs", recipe_id: 8 }
      ]);
    });
};
