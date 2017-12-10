// elements to target
// #result
// .img red-crystal
// .img green-crystal
// .img purple-crystal
// .img yellow-crystal
// -----------------------------------------------------------------------------------------------
// jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.

$(document).ready(function() {
    // GLOBAL VARIABLES
    // -----------------------------------------------------------------------------------------------
    var debug = true;
    // Created a string which will hold the random number to be matched
    var redCrystal = Math.floor(Math.random() * 11) + 1;
    var greenCrystal = Math.floor(Math.random() * 11) + 1;
    var purpleCrystal = Math.floor(Math.random() * 11) + 1;
    var yellowCrystal = Math.floor(Math.random() * 11) + 1;
    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    var totalScore = '';

    // This way when the user hits clear, we can guarantee a reset of the app.
    function startGame() {
        var redCrystal = Math.floor(Math.random() * 11) + 1;
        var greenCrystal = Math.floor(Math.random() * 11) + 1;
        var purpleCrystal = Math.floor(Math.random() * 11) + 1;
        var yellowCrystal = Math.floor(Math.random() * 11) + 1;
        var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        var totalScore = 0;

        // For each iteration, generate a new random number between 1 and 9.
        $('#result').html(randomNumber);
        // Take this number and then add it to the rest of the string.
        randomNumber = totalScore + randomNumber;
        $('#result').empty();
    }
    // FUNCTIONS
    // -----------------------------------------------------------------------------------------------
    function debug(inDebugString) {
        console.log(inDebugString);
    }

    // MAIN PROCESS
    // -----------------------------------------------------------------------------------------------
    // For each iteration, generate a new random number between 1 and 9.
    $('#result').html(randomNumber);

    // Add on click event to red crystal
    $('#red-crystal').click(function() {
        totalScore = totalScore + redCrystal;
        $('#score').html(totalScore);
        redCrystal = $(this).val();
        if (totalScore === randomNumber) {
            alert('You Win!');
            win();
        } else if (totalScore > randomNumber) {
            alert('You lose Sucka!');
            lose();
        }
        console.log('Your Pick: ' + redCrystal);
    });

    // Add on click event to green crystal
    $('#green-crystal').click(function() {
        totalScore = totalScore + greenCrystal;
        $('#score').html(totalScore);
        greenCrystal = $(this).val();
        if (totalScore === randomNumber) {
            alert('You Win!');
            win();
        } else if (totalScore > randomNumber) {
            alert('You lose Sucka!');
            lose();
        }
        console.log('Your Pick: ' + greenCrystal);
    });
    // Add on click event to purple crystal
    $('#purple-crystal').click(function() {
        totalScore = totalScore + purpleCrystal;
        $('#score').html(totalScore);
        purpleCrystal = $(this).val();
        if (totalScore === randomNumber) {
            alert('You Win!');
            win();
        } else if (totalScore > randomNumber) {
            alert('You lose Sucka!');
            lose();
        }
        console.log('Your Pick: ' + purpleCrystal);
    });
    // Add on click event to yellow crystal
    $('#yellow-crystal').click(function() {
        totalScore = totalScore + yellowCrystal;
        $('#score').html(totalScore);
        yellowCrystal = $(this).val();
        if (totalScore === randomNumber) {
            alert('You Win!');
            win();
        } else if (totalScore > randomNumber) {
            alert('You lose Sucka!');
            lose();
        }
        console.log('Your Pick: ' + yellowCrystal);
    });
    // We get the value associated with the crystal the user picked from here

    // If users matched the random number you let them know.

    // If users went over the random number you let them know.

    // Once the user has won or lost create an "on-click" event attached to the "#clear" button id.

    // Inside the on-click event...

    // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.

    // Testing
    // -----------------------------------------------------------------------------------------------
    console.log('Debugger is ON');
    console.log(redCrystal);
    console.log(greenCrystal);
    console.log(purpleCrystal);
    console.log(yellowCrystal);
    console.log(totalScore);
    console.log(randomNumber);

    // END OF DOCUMENT READY PROCESS
    // -----------------------------------------------------------------------------------------------
});