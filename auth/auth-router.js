const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
const Users = require("../users/users-model");

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "3d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

router.post("/register", (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = generateToken(saved);
      res.status(201).json({ created_user: saved, token: token });
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Unable to register new user", error });
    });
});

router.post("/login", (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res
          .status(200)
          .json({
            message: `Welcome ${user.username}!`,
            username: user.username,
            token: token
          });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "An error occurred while signing in", error });
    });
});

module.exports = router;
