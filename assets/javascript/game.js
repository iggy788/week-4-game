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
    // Created a string which will hold the random number to be matched

    var redCrystal = Math.floor(Math.random() * 11) + 1;
    var greenCrystal = Math.floor(Math.random() * 11) + 1;
    var purpleCrystal = Math.floor(Math.random() * 11) + 1;
    var yellowCrystal = Math.floor(Math.random() * 11) + 1;
    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    var totalScore = 0;
    var win = 0;
    var lose = 0;
    $('#result').html(randomNumber);
    // debug();
    // -----------------------------------------------------------------------------------------------
    // RESET GAME
    // -----------------------------------------------------------------------------------------------
    // Removing the var gives the reset function access to the Global Variables since we are now changing them too
    function resetGame() {
        // We are emptying the score div in the HTML
        redCrystal = Math.floor(Math.random() * 11) + 1;
        greenCrystal = Math.floor(Math.random() * 11) + 1;
        purpleCrystal = Math.floor(Math.random() * 11) + 1;
        yellowCrystal = Math.floor(Math.random() * 11) + 1;
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        totalScore = 0;
        // Use the jQuery "empty()" method to clear the contents of the "#score" div.
        $('#score').empty();
        // Generate a new random number and then add it to the #result DIV in the HTML
        $('#result').html(randomNumber);

        // Testing the Reset
        // -----------------------------------------------------------------------------------------------
        // debug();
    }
    // -----------------------------------------------------------------------------------------------
    // FUNCTIONS
    // -----------------------------------------------------------------------------------------------
    function lostGame() {
        alert('You lose!');
        lose++;
        $('#lossCounter').html(lose);
        resetGame();
    }

    function winGame() {
        alert('You Win!');
        win++;
        $('#winCounter').html(win);
        resetGame();
    }

    function debug() {
        console.log('Debugger is ON');
        console.log('Red Crystal Value: ' + redCrystal);
        console.log('Green Crystal Value: ' + greenCrystal);
        console.log('Purple Crystal Value: ' + purpleCrystal);
        console.log('Yellow Crystal Value: ' + yellowCrystal);
        console.log('Random Number to Match Value: ' + randomNumber);
    }
    // -----------------------------------------------------------------------------------------------
    // MAIN PROCESS
    // -----------------------------------------------------------------------------------------------
    // No special function needed because jQuery already has the built in click function
    // -----------------------------------------------------------------------------------------------
    // Add on click event to red crystal
    $('#red-crystal').click(function() {
        // We get the value associated with the crystal the user picked from here
        totalScore = totalScore + redCrystal;
        $('#score').html(totalScore);
        if (totalScore === randomNumber) {
            winGame();
        } else if (totalScore > randomNumber) {
            lostGame();
        }
    });
    // -----------------------------------------------------------------------------------------------
    // Add on click event to green crystal
    $('#green-crystal').click(function() {
        // We get the value associated with the crystal the user picked from here
        totalScore = totalScore + greenCrystal;
        $('#score').html(totalScore);
        if (totalScore === randomNumber) {
            winGame();
        } else if (totalScore > randomNumber) {
            lostGame();
        }
    });
    // -----------------------------------------------------------------------------------------------
    // Add on click event to purple crystal
    $('#purple-crystal').click(function() {
        // We get the value associated with the crystal the user picked from here
        totalScore = totalScore + purpleCrystal;
        $('#score').html(totalScore);
        if (totalScore === randomNumber) {
            winGame();
        } else if (totalScore > randomNumber) {
            lostGame();
        }
    });
    // -----------------------------------------------------------------------------------------------
    // Add on click event to yellow crystal
    $('#yellow-crystal').click(function() {
        // We get the value associated with the crystal the user picked from here
        totalScore = totalScore + yellowCrystal;
        $('#score').html(totalScore);
        if (totalScore === randomNumber) {
            winGame();
        } else if (totalScore > randomNumber) {
            lostGame();
        }
    });
    // -----------------------------------------------------------------------------------------------
    // Testing
    // -----------------------------------------------------------------------------------------------

    // END OF DOCUMENT READY PROCESS
    // -----------------------------------------------------------------------------------------------
});