const db = require("../data/dbconfig");

module.exports = {
  getRecipes,
  getRecipesById,
  addRecipe,
  destroyRecipe,
  editRecipe
};

async function getRecipes() {
  return await db("recipes");
}

async function getRecipesById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

async function addRecipe(recipe) {
  const newlyAdded = { ...recipe };
  return db("recipes")
    .insert(newlyAdded)
    .then(() => {
      return newlyAdded;
    });
}

async function destroyRecipe(id) {
  return db("recipes")
    .where({ id })
    .del();
}

async function editRecipe(id, changes) {
  return db("recipes")
    .where({ id })
    .update(changes)
    .then(recipe => {
      return getRecipesById(id);
    });
}
