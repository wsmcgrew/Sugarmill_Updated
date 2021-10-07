module.exports = app => {
    const mills = require("../controllers/mills.controller");
  
    var router = require("express").Router();

    // Retrieve all growers
    router.get("/", mills.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", mills.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", mills.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", mills.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", mills.delete);
  
    // Create a new Tutorial
    router.delete("/", mills.deleteAll);
  
    app.use('/api/mills', router);
  };