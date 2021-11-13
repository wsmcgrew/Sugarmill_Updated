const { authJwt } = require("../middleware");

module.exports = app => {
    const growers = require("../controllers/growers.controller.js");
  
    var router = require("express").Router();

    // Retrieve all growers
    router.get("/",
      [authJwt.verifyToken, authJwt.isAdmin],
      growers.findAllGrowers);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", growers.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", growers.update);
  
    // Delete a Tutorial with id
    router.delete("/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
     growers.delete);
  
  
    app.use('/api/growers', router);
  };