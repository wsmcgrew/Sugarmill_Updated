const { authJwt } = require("../middleware");

module.exports = app => {
    const growers = require("../controllers/growers.controller.js");
  
    var router = require("express").Router();

    // Retrieve all growers
    router.get("/",
      [authJwt.verifyToken, authJwt.isAdmin],
      growers.findAllGrowers);
  
    // Retrieve all published Tutorials
    router.get("/published",
    [authJwt.verifyToken],
    growers.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", growers.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", growers.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", growers.delete);
  
    // Create a new Tutorial
    router.delete("/", growers.deleteAll);
  
    app.use('/api/growers', router);
  };