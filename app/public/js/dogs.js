//Frond-End logic for the Dog survey to take in user inputs and send to DB and output a final result

$(document).ready(function () { //This ensures DOM elements are loaded
    // When user clicks add-btn
    $("#add-btn").on("click", function (event) {
        // event.preventDefault();
        // Creates a new survey object
        var newSurvey = { 
            Q1: parseInt($("#question1").val()),  
            Q2: parseInt($("#question2").val()),  
            Q3: parseInt($("#question3").val()),  
            Q4: parseInt($("#question4").val()),  
            Q5: parseInt($("#question5").val()),  
            Q6: parseInt($("#question6").val()),  
            Q7: parseInt($("#question7").val()),   
            Q8: parseInt($("#question8").val()),  
            Q9: parseInt($("#question9").val()),  
            Q10: parseInt($("#question10").val()),
            name: $("#name").val().trim(),
            link: $("#link").val().trim()  
        };

        //Validate Survey
        var pass = true;
        (function surveyCheck(){
            for (var property in newSurvey) {
                if (newSurvey[property]){}
                else{   
                    pass = false;
                }
            }
        })();

        //An AJAX request wit jQuery. This finds the matching dog row to be used here on the front-end
        if (pass) {
            $.post("/api/match", newSurvey, function (data) {
                alert("Matching Dog: " + data.DogName + "\n Matching Link: " + data.Link);
            });
        }else{
            alert("Please fill in all fields in order to complete survey");
        }
    });
});