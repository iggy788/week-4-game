// elements to target
// #result
// .img red-crystal
// .img green-crystal
// .img purple-crystal
// .img yellow-crystal
// -----------------------------------------------------------------------------------------------
// jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
$(function() {
    // GLOBAL VARIABLES
    // -----------------------------------------------------------------------------------------------
    var debug = true;
    // Created a string which will hold the random number to be matched
    var matchNumber = '';

    // FUNCTIONS
    // -----------------------------------------------------------------------------------------------
    function debug(inDebugString) {
        console.log(inDebugString);
    }

    // MAIN PROCESS
    // -----------------------------------------------------------------------------------------------

    // Then initiate a loop to generate 9 separate numbers
    for (var i = 0; i < 9; i++) {
        // For each iteration, generate a new random number between 1 and 9.
        var myRand = Math.floor(Math.random() * 9);

        // Take this number and then add it to the rest of the string.
        matchNumber += myRand;
    }
    // Once we have our final lotto number, we'll prepend it to the top of our random-number div.
    $('#result').text(matchNumber);

    // Add on click event to red crystal
    $('#red-crystal').on('click', function() {
        alert('It Works');
    });

    // Add on click event to green crystal
    $('#green-crystal').on('click', function() {
        alert('It Works');
    });

    // Add on click event to purple crystal
    $('#purple-crystal').on('click', function() {
        alert('It Works');
    });

    // Add on click event to yellow crystal
    $('#yellow-crystal').on('click', function() {
        alert('It Works');
    });
    // We get the value associated with the crystal the user picked from here

    // If users matched the random number you let them know.

    // If users went over the random number you let them know.

    // Once the user has won or lost create an "on-click" event attached to the "#clear" button id.
    $('#clear').on('click', function() {
        // Inside the on-click event...

        // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
        $('#result').empty();
    });
    // Testing
    // -----------------------------------------------------------------------------------------------
    console.log('Debugger is ON');
    console.log(matchNumber);
    console.log(myRand);

    // END OF DOCUMENT READY PROCESS
    // -----------------------------------------------------------------------------------------------
});