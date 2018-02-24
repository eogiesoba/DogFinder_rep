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
  app.post("/match", function(req, res) {
    Dogs.findAll({}).then(results => {
      var surveyArr = [];
      var tableArr = [];
      var surveyData = req.body;//Object
      var tableData = JSON.parse(JSON.stringify(results));//Array of Objects

      for (var k in surveyData) {//Push survey reponse data from object to an array
        surveyArr.push(surveyData[k]);
      }
      for(var i=0; i < tableData.length; i++){//Push all table values onto into an array of arrays => matrix. 
        miniArr = [];
        for(var k in tableData[i]){
          miniArr.push(tableData[i][k]);
        }
        miniArr.shift();
        tableArr.push(miniArr);
      }

      totalDiff = [];

      for (var i=0; i < 10; i++){
          var diff = 0;
          for (var a=0; a < 10; a++){
            diff += Math.abs(tableArr[i][a] - surveyArr[a]);
          }
          totalDiff.push(diff);
      }
      var index = totalDiff.indexOf(Math.min(...totalDiff));
      var matchingRow = index + 1;//This will equal the row number of the matching dog!

      console.log(surveyArr);
      console.log(tableArr);
      console.log(totalDiff);
      console.log(index);
      res.json(results[matchingRow]);
    });
  });
};