const { growers } = require("../models");
const db = require("../models");
const Growers = db.growers;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  };

// Retrieve all Growers from the database.
exports.findAllGrowers   = (req, res) => {
    console.log(" Within the controller");
  
    Growers.findAll({ attributes: ["Users_Name", "GrowerId", "EmailAddress", "Password", "CompanyName"] })
    .then(folks => {
      res.status(200).json({
        data: folks
      })
    });

  };

// Find a single Grower with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Growers.findOne({where: { GrowerId: id } })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Grower with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Grower with id=" + id
        });
      });
  };

// Update a grower by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Growers.update(req.body, {
      where: { GrowerId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Grower was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Grower with id=${id}. Maybe Grower was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        console.log(num);
        res.status(500).send({
          message: "Error updating Grower with id=" + id
        });
      });
  };

// Delete a grower with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(req.params.id)
  
    Growers.destroy({
      where: { GrowerId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Grower was deleted successfully!"
          });
        } else {
          console.log("What is the number" + num)
          res.send({
            message: `Cannot delete Grower with id=${id}. Maybe Grower was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete grower with id = " + id
        });
      });
  };