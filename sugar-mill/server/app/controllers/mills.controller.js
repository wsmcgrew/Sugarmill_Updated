const db = require("../models");
const mills = db.mills;
const cane_loads = db.cane_loads
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    console.log(" Within the controller");
  
    mills.findAll({ attributes: ["Mill_Name", "id"] })
    .then(folks => {
      res.status(200).json({
        data: folks
      })
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  console.log("Req.body=" + req.body);

  let gid = req.params.id
  let includes = {
    model: cane_loads,
    where: {
      GrowerId: gid
    }
  };
  console.log("Current ID being set to API" + gid);

  mills.findAll({ include: includes })
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