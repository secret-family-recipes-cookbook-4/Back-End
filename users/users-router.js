const router = require("express").Router();
const Users = require("./users-model");
const authorize = require("../auth/auth-middleware");

router.get("/", authorize, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.send(err);
    });
});

// router.get("/:id", authorize, (req, res) => {
//   Users.findById(req.params.id)
//     .then(user => {
//       res.json(user);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// });

module.exports = router;
