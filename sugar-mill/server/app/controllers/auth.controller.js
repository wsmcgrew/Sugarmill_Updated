const db = require("../models");
const config = require("../config/auth.config");
const growers = db.growers;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

  // Save growers to Database
  growers.create({
    Users_Name: req.body.Users_Name,
    EmailAddress: req.body.EmailAddress,
    Password: bcrypt.hashSync(req.body.Password, 8),
    CompanyName: req.body.CompanyName
  })
    .then(growers => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          growers.setRoles(roles).then(() => {
            res.send({ message: "growers was registered successfully!" });
          });
        });
      } else {
        // growers role = 1
        growers.setRoles([1]).then(() => {
          res.send({ message: "growers was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  growers.findOne({
    where: {
      EmailAddress: req.body.EmailAddress
    }
  })
    .then(grower => {
      if (!grower) {
        return res.status(404).send({ message: "growers Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.Password,
        grower.Password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      console.log("GrowerId -->" + grower.GrowerId)
      var token = jwt.sign({ id: grower.GrowerId }, config.secret, {
        expiresIn: 7200 // 2 hours
      });

      var authorities = [];
      grower.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: grower.GrowerId,
          Users_Name: grower.Users_Name,
          EmailAddress: grower.EmailAddress,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};