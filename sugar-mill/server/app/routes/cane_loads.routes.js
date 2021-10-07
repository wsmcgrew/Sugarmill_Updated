module.exports = app => {
    const cane_loads = require("../controllers/cane_loads.controller");
  
    var router = require("express").Router();

    // Retrieve all growers
    router.get("/", cane_loads.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", cane_loads.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", cane_loads.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", cane_loads.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", cane_loads.delete);
  
    // Create a new Tutorial
    router.delete("/", cane_loads.deleteAll);
  
    app.use('/api/cane_loads', router);
  };