var pgp= require('pg-promise')({});
var connectionString = 'postgress://localhost/newgame';
var datab= pgp(connectionString);
const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function registerUser(req, res, next) {
  return authHelpers
    .createUser(req)
    .then(response => {
      passport.authenticate("local", (err, user, info) => {
        if (user) {
          res.status(200).json({
            status: "success",
            data: user,
            message: "Registered one user"
          });
        }
      })(req, res, next);
    })
    .then(req.logIn(user, function (err) {
      if (err) {
        res.status(500).send("error");
      } else {
        res.status(200).send(user);
      }
    }))
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err
      });
    });
}

function getUser(req, res, next) {
  db
    .any("select * from users where username = ${username}", req.user)
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched one user"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateUser(req, res, next) {
  db
    .none(
    "update users set username = ${newName} where username = ${username}",
    req.body
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        message: "Changed one user"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function loginUser(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      res.status(500).send("error while trying to log in");
    } else if (!user) {
      res.status(401).send("invalid username/password");
    } else if (user) {
      req.logIn(user, function (err) {
        if (err) {
          res.status(500).send("error");
        } else {
          res.status(200).send(user);
        }
      });
    }
  })(req, res, next);
}

module.exports = {
  getUser: getUser,
  registerUser: registerUser,
  updateUser: updateUser,
  loginUser: loginUser,
};
