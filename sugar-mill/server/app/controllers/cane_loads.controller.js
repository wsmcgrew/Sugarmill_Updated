const { sequelize } = require("../models");
const db = require("../models");
const cane_loads = db.cane_loads;
const mills = db.mills;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
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

// Find a single Tutorial with an id
exports.findOneGrowersLoad = (req, res) => {
  console.log(" Within the controller");

  let id = req.params.id
  let condition = id ? { GrowerId: id } : null;

  cane_loads.findAll({ where: condition })
  .then(folks => {
    res.status(200).json({
      data: folks
    })
  });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};