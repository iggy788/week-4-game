// GLOBAL VARIABLES
// -----------------------------------------------------------------------------------------------

// FUNCTIONS
// -----------------------------------------------------------------------------------------------
$(document).ready(function() {

    var matchNumber = '';

    for (var i = 0; i < 9; i++) {
        var myRand = Math.floor(Math.random() * 9);

        // Create a new div to add this to the html 9 more times
        matchNumber += myRand;
        $('#result').text(matchNumber);
    }

});
// DEBUGGING PROCESS
// -----------------------------------------------------------------------------------------------
var debug = true;

function debug() {
    console.log('we are linked');
    console.log(matchNumber);
}