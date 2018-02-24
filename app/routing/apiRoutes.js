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
    // Dogs.findAll({}).then(results => {
      var surveyArr = [];
      // var tableArr = [];
      var surveyData = req.body;//Object
      // var tableData = JSON.parse(JSON.stringify(results));//Array of Objects

      for (var k in surveyData) {//Push survey reponse data from object to an array
        surveyArr.push(surveyData[k]);
      }
      // for(var i=0; i < tableData.length; i++){//Push all table values onto into an array of arrays => matrix. 
      //   miniArr = [];
      //   for(var k in tableData[i]){
      //     miniArr.push(tableData[i][k]);
      //   }
      //   miniArr.shift();
      //   tableArr.push(miniArr);
      // }

      var tableArr = [ [ 2,
                        3,
                        4,
                        3,
                        1,
                        5,
                        3,
                        1,
                        3,
                        2,
                        'African',
                        'https://dog.ceo/api/img/african/n02116738_7105.jpg' ],
                      [ 4,
                        2,
                        5,
                        5,
                        2,
                        2,
                        1,
                        3,
                        4,
                        2,
                        'Appenzeller',
                        'https://dog.ceo/api/img/appenzeller/n02107908_6751.jpg' ],
                      [ 1,
                        1,
                        3,
                        4,
                        2,
                        3,
                        2,
                        5,
                        2,
                        3,
                        'Coonhound',
                        'https://dog.ceo/api/img/coonhound/n02089078_1668.jpg' ],
                      [ 2,
                        2,
                        2,
                        3,
                        3,
                        3,
                        4,
                        5,
                        5,
                        5,
                        'Shiba',
                        'https://dog.ceo/api/img/shiba/shiba-12.jpg' ],
                      [ 2,
                        3,
                        3,
                        3,
                        1,
                        1,
                        1,
                        1,
                        1,
                        5,
                        'Gordon Setter',
                        'https://dog.ceo/api/img/setter-gordon/n02101006_2613.jpg' ],
                      [ 5,
                        5,
                        5,
                        5,
                        5,
                        5,
                        5,
                        1,
                        1,
                        1,
                        'Golden Retriever',
                        'https://dog.ceo/api/img/retriever-golden/n02099601_7803.jpg' ],
                      [ 2,
                        3,
                        2,
                        3,
                        2,
                        3,
                        3,
                        2,
                        4,
                        3,
                        'Newfoundland',
                        'https://dog.ceo/api/img/newfoundland/n02111277_6410.jpg' ],
                      [ 1,
                        3,
                        1,
                        3,
                        1,
                        5,
                        3,
                        1,
                        3,
                        1,
                        'Dingo',
                        'https://dog.ceo/api/img/dingo/n02115641_14117.jpg' ],
                      [ 5,
                        3,
                        4,
                        3,
                        1,
                        5,
                        3,
                        1,
                        3,
                        5,
                        'Beagle',
                        'https://dog.ceo/api/img/beagle/n02088364_17474.jpg' ],
                      [ 2,
                        3,
                        1,
                        4,
                        4,
                        4,
                        4,
                        1,
                        3,
                        2,
                        'Keeshond',
                        'https://dog.ceo/api/img/keeshond/n02112350_4005.jpg' ] ];

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
      res.json(tableArr[index]);
    // });
  });
};

