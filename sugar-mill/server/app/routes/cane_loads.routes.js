module.exports = app => {
    const cane_loads = require("../controllers/cane_loads.controller");
  
    var router = require("express").Router();

    // Retrieve all growers
    router.get("/", cane_loads.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", cane_loads.findAllPublished);
  
    // Retrieve a single loads with id
    router.get("/:id", cane_loads.findOneGrowersLoad);
  
    // Update a Tutorial with id
    router.put("/update/:id", cane_loads.updateTracts);
  
    // Delete a Tutorial with id
    router.delete("/:id", cane_loads.delete);
  
    // Create a new Tutorial
    router.delete("/", cane_loads.deleteAll);
  
    app.use('/api/cane_loads', router);
  };