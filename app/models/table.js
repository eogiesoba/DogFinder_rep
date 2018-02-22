// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a Dog table model that matches up with our MySQL DB
var Dog = sequelize.define("DogInfo", {
  Q1: {
    type: Sequelize.INTEGER
  },
  Q2: {
    type: Sequelize.INTEGER
  },
  Q3: {
    type: Sequelize.INTEGER
  },
  Q4: {
    type: Sequelize.INTEGER
  },
  Q5: {
    type: Sequelize.INTEGER
  },
  Q6: {
    type: Sequelize.INTEGER
  },
  Q7: {
    type: Sequelize.INTEGER
  },
  Q8: {
    type: Sequelize.INTEGER
  },
  Q9: {
    type: Sequelize.INTEGER
  },
  Q10: {
    type: Sequelize.INTEGER
  },
  DogName: {
    type: Sequelize.STRING
  },
  Link: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with MySQL DB
Dog.sync();

// Makes the Dog Model available for other files (will also create a table)
module.exports = Dog;
