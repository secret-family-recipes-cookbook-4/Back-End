const router = require("express").Router();
const Recipes = require("./recipes-model");
const authorize = require("../auth/auth-middleware");
const Users = require("../users/users-model");

//Get all recipes when user is signed in
router.get("/", authorize, (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json({ recipes });
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Unable to get recipes", err });
    });
});

//Get specified recipe by id for signed in user
router.get("/:id", authorize, (req, res) => {
  const { id } = req.params;

  Recipes.getRecipesById(id)
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
router.post("/", authorize, (req, res) => {
  const newRecipe = req.body;
  Recipes.addRecipe(newRecipe)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(err => {
      res.status(501).json({ errorMessage: "Unable to post recipe", err });
    });
});

//Destroy (bc its a cooler word) a recipe by id for signed in user
router.delete("/:id", authorize, (req, res) => {
  const { id } = req.params;

  Recipes.destroyRecipe(id)
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
  const { id } = req.params;
  // const userId = req.user.id;
  const recipeEdit = req.body;
  Recipes.editRecipe(id, recipeEdit)
    .then(edited => {
      if (!edited) {
        res
          .status(404)
          .json({ errorMessage: "Unable to locate specified recipe" });
      } else {
        console.log(edited);
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
