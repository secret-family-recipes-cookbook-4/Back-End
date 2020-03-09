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
  return await db("recipes")
    .where({ id })
    .first();
}

async function addRecipe(recipe) {
  const [id] = await db("recipes").insert(recipe, "id");
  return db("recipes")
    .where({ id })
    .first();
}

async function destroyRecipe(id) {
  return await db("recipes")
    .where({ id })
    .del();
}

async function editRecipe(id, changes) {
  return await db("recipes")
    .where({ id })
    .update(changes)
    .then(recipe => {
      return getRecipesById(id);
    });
}
