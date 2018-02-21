// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Puppy = require("../models/table.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Puppy.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("Dog Data:");
    console.log(req.body);

    Puppy.create({
      Q1: req.body.Q1,
      Q2: req.body.Q2,
      Q3: req.body.Q3,
      Q4: req.body.Q4,
      Q5: req.body.Q5,
      Q6: req.body.Q6,
      Q7: req.body.Q7,
      Q8: req.body.Q8,
      Q9: req.body.Q9,
      Q10: req.body.Q10,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};