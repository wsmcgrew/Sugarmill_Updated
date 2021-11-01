module.exports = app => {
    const grower_mill = require("../controllers/grower_mill.controller.js");
  
    var router = require("express").Router();

    // Retrieve all growers
    router.get("/", grower_mill.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", grower_mill.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", grower_mill.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", grower_mill.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", grower_mill.delete);
  
    // Create a new Tutorial
    router.delete("/", grower_mill.deleteAll);
  
    app.use('/api/grower_mill', router);
  };