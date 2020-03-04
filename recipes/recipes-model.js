const db = require("../data/dbconfig");

module.exports = {
  getRecipes,
  getRecipesById,
  addRecipe
  // destroyRecipe,
  // editRecipe
};

async function getRecipes() {
  return await db("recipes");
}

async function getRecipesById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

async function addRecipe(recipe, id) {
  const newlyAdded = { ...recipe, user_id };
  return db("recipes")
    .insert(newlyAdded)
    .then(() => {
      return newlyAdded;
    });
}

// async function destroyRecipe(recipeId, userId) {
//   await db("tags")
//     .join("recipes", "recipes.id", "tags.recipe_id")
//     .where({ "tags.recipe_id": recipeId })
//     .del();

//   await db("instructions")
//     .join("recipes", "recipes.id", "instructions.recipe_id")
//     .where({ "instructions.recipe_id": recipeId })
//     .del();

//   await db("ingredients")
//     .join("recipes", "recipes.id", "ingredients.recipe_id")
//     .where({ "ingredients.recipe_id": recipeId })
//     .del();

//   await db("recipes")
//     .where({ "recipes.id": recipeId })
//     .del();

//   return getRecipes(userId);
// }

// async function editRecipe(recipeId, userId, changes) {
//   const recipe = await db("recipes")
//     .where({ "recipes.id": recipeId, "recipes.user_id": userId })
//     .first();

//   const originalIngredients = await db("ingredients")
//     .join("recipes", "recipes.id", "ingredients.recipe_id")
//     .select("ingredients.*")
//     .where({ "ingredients.recipe_id": recipeId })
//     .map(ingredient => {
//       return ingredient.name;
//     });

//   const originalInstructions = await db("instructions")
//     .join("recipes", "recipes.id", "instructions.recipe_id")
//     .select("instructions.*")
//     .where({ "instructions.recipe_id": recipeId })
//     .map(instructions => {
//       return instructions.name;
//     });

//   const originalTags = await db("tags")
//     .join("recipes", "recipes.id", "tags.recipe_id")
//     .select("tags.*")
//     .where({ "tags.recipe_id": recipeId })
//     .map(tag => {
//       return tag.name;
//     });

//   const recipeUpdate = {
//     ...recipe,
//     title: changes.title,
//     source: changes.source,
//     notes: changes.notes
//   };

//   if (recipe) {
//     await db("recipes")
//       .where({ "recipes.id": recipeId })
//       .first()
//       .update(recipeUpdate);

//     if (originalIngredients !== changes.ingredients) {
//       await db("ingredients")
//         .join("recipes", "recipes.id", "ingredients.recipe_id")
//         .select("ingredients.*")
//         .where({ "ingredients.recipe_id": recipeId })
//         .del();

//       changes.ingredients.forEach(async ingredient => {
//         ingredientInsert = { name: ingredient, recipe_id: recipeId };
//         await db("ingredients").insert(ingredientInsert);
//       });
//     }

//     if (originalInstructions !== changes.instructions) {
//       await db("instructions")
//         .join("recipes", "recipes.id", "instructions.recipe_id")
//         .select("instructions.*")
//         .where({ "instructions.recipe_id": recipeId })
//         .del();

//       changes.instructions.forEach(async instruction => {
//         instructionInsert = { name: instruction, recipe_id: recipeId };
//         await db("instructions").insert(instructionInsert);
//       });
//     }

//     if (originalTags !== changes.tags) {
//       await db("tags")
//         .join("recipes", "recipes.id", "tags.recipe_id")
//         .select("tags.*")
//         .where({ "tags.recipe_id": recipeId })
//         .del();

//       changes.tags.forEach(async tag => {
//         tagInsert = { tag: tag, recipe_id: recipeId };
//         await db("tags").insert(tagInsert);
//       });
//     }

//     return getRecipeById(recipeId, userId);
//   } else {
//     return null;
//   }
// }
