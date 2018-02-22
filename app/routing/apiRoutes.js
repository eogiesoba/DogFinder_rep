// *********************************************************************************
// apiRoutes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Dogs = require("../models/table.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Get DB info and find matching dog, then send dog info to the front-end. 
  app.get("/api/match", function(req, res) {
    Dogs.findAll({}).then(results => {
      res.json(results);
      console.log(JSON.stringify(results));
    });
  });
};