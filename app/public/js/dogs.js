//Frond-End logic for the Dog survey to take in user inputs and send to DB and output a final result

$(document).ready(function(){ //This ensures DOM elements are loaded
    // When user clicks add-btn
    $("#add-btn").on("click", function(event) {
        // event.preventDefault();
        console.log("you are about to enter the api route get call");
        //An AJAX request wit jQuery. This finds the matching dog row to be used here on the front-end
        $.get("/api/match", function(data) {
            console.log(data);
        });
    });
});