const { authJwt } = require("../middleware");

module.exports = app => {
    const tracts = require("../controllers/tracts.controller");
  
    var router = require("express").Router();

    // Retrieve all growers
    router.get("/",
      [authJwt.verifyToken],
      tracts.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tracts.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tracts.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tracts.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tracts.delete);
  
    // Create a new Tutorial
    router.delete("/", tracts.deleteAll);
  
    app.use('/api/tracts', router);
  };