const router = require("express").Router();
const Recipes = require("./recipes-model");
// const authorize = require("../auth/auth-middleware");

//Get all recipes when user is signed in
router.get("/", (req, res) => {
  const userId = req.user.id;
  Recipes.getRecipes(userId)
    .then(recipes => {
      res.status(200).json({ recipes });
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Unable to get recipes", err });
    });
});

//Get specified recipe by id for signed in user
router.get("/:id", (req, res) => {
  const recipeId = req.params.id;
  const userId = req.user.id;
  Recipes.getRecipesById(recipeId, userId)
    .then(recipe => {
      if (!recipe) {
        res
          .status(404)
          .json({ errorMessage: "Recipe with specified ID not found" });
      } else {
        res.status(200).json({ recipe });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Unable to get specified recipe", err });
    });
});

//Post a new recipe added by a signed in user
router.post("/", (req, res) => {
  const recipe = req.body;
  const userId = req.user.id;
  Recipes.addRecipe(recipe, userId)
    .then(recipes => {
      res.status(201).json({ recipes });
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Unable to post recipe", err });
    });
});

//Destroy (bc its a cooler word) a recipe by id for signed in user
router.delete("/:id", (req, res) => {
  const recipeId = req.params.id;
  const userId = req.user.id;
  Recipes.destroyRecipe(recipeId, userId)
    .then(recipes => {
      //204 = req received & completed and no content to be sent back
      res.status(204).json(recipes);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Unable to delete selected recipe", err });
    });
});

//Put - update a recipe by id for signed in user
router.put("/:id", (req, res) => {
  const recipeId = req.params.id;
  const userId = req.user.id;
  const recipeEdit = req.body;
  Recipes.editRecipe(recipeId, userId, recipeEdit)
    .then(edited => {
      if (!edited) {
        res
          .status(404)
          .json({ errorMessage: "Unable to locate specified recipe" });
      } else {
        res.status(200).json(edited);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "An error occurred while editing recipe", err });
    });
});

module.exports = router;
