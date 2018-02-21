// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a Dog table model that matches up with our MySQL DB
var Dog = sequelize.define("Survey", {
  Q1: {
    type: Sequelize.STRING
  },
  Q2: {
    type: Sequelize.STRING
  },
  Q3: {
    type: Sequelize.STRING
  },
  Q4: {
    type: Sequelize.STRING
  },
  Q5: {
    type: Sequelize.STRING
  },
  Q6: {
    type: Sequelize.STRING
  },
  Q7: {
    type: Sequelize.STRING
  },
  Q8: {
    type: Sequelize.STRING
  },
  Q9: {
    type: Sequelize.STRING
  },
  Q10: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with MySQL DB
Dog.sync();

// Makes the Dog Model available for other files (will also create a table)
module.exports = Dog;
