const { sequelize } = require("../models");
const db = require("../models");
const cane_loads = db.cane_loads;
const mills = db.mills;
const Op = db.Sequelize.Op;

// Create and Save a new load
exports.create = (req, res) => {
  
};

// Retrieve all loads from the database.
exports.findAll = (req, res) => {
    console.log(" Within the controller");
  
    cane_loads.findAll({ include: mills })
    .then(folks => {
      res.status(200).json({
        data: folks
      })
    });
};

// Find a single load with an id
exports.findOneGrowersLoad = (req, res) => {
  console.log("Req.body=" + req.body);

  let id = req.params.id
  let condition = id ? { GrowerId: id } : null;

  cane_loads.findAll({ where: condition, include: mills })
  .then(folks => {
    res.status(200).json({
      data: folks
    })
  });
};

// Update a load by the id in the request
exports.updateTracts = (req, res) => {
  const id = req.params.id;
  
  cane_loads.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "load was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Load with id=${id}. Maybe load was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tracts with id=" + id
      });
    });
};

// Delete a load with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all loads from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published loads
exports.findAllPublished = (req, res) => {
  
};