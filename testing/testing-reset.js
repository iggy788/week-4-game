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
    var totalScore = 0;
    var win = 1;
    var lose = 1;
    $('#result').html(randomNumber);

    // This way when the user hits clear, we can guarantee a reset of the app.
    function startGame() {
        redCrystal = Math.floor(Math.random() * 11) + 1;
        greenCrystal = Math.floor(Math.random() * 11) + 1;
        purpleCrystal = Math.floor(Math.random() * 11) + 1;
        yellowCrystal = Math.floor(Math.random() * 11) + 1;
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        totalScore = 0;

        $('#score').empty();
        // For each iteration, generate a new random number between 1 and 9.
        $('#result').html(randomNumber);
        // Take this number and then add it to the rest of the string.
    }
}

// FUNCTIONS
// -----------------------------------------------------------------------------------------------
function debug(inDebugString) {
    console.log(inDebugString);
}

function reset() {
    // GLOBAL VARIABLES
    // -----------------------------------------------------------------------------------------------


    // Created a string which will hold the random number to be matched
    redCrystal = Math.floor(Math.random() * 11) + 1;
    greenCrystal = Math.floor(Math.random() * 11) + 1;
    purpleCrystal = Math.floor(Math.random() * 11) + 1;
    yellowCrystal = Math.floor(Math.random() * 11) + 1;
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $('#result').html(randomNumber);

    //$('#score').html(totalScore);

    // FUNCTIONS
    // -----------------------------------------------------------------------------------------------
    function debug(inDebugString) {
        console.log(inDebugString);
    }

};

// MAIN PROCESS
// -----------------------------------------------------------------------------------------------
// Add on click event to red crystal
$('#red-crystal').click(function() {
    // We add the value associated with the crystal using parseInt and add it to the total score div
    totalScore = totalScore + parseInt(redCrystal);
    $('#score').html(totalScore);
    roundComplete();
});
// Add on click event to green crystal
$('#green-crystal').click(function() {
    // We get the value associated with the crystal the user picked from here
    totalScore = totalScore + parseInt(greenCrystal);
    $('#score').html(totalScore);
    roundComplete();
});
// Add on click event to purple crystal
$('#purple-crystal').click(function() {
    // We get the value associated with the crystal the user picked from here
    totalScore = totalScore + parseInt(purpleCrystal);
    $('#score').html(totalScore);
    roundComplete();
}); $('#yellow-crystal').click(function() {
    // We get the value associated with the crystal the user picked from here
    totalScore = totalScore + parseInt(yellowCrystal);
    $('#score').html(totalScore);
    roundComplete();
});
// Start round Function

function roundComplete() {
    if (totalScore === randomNumber) {
        alert('You Win!');
        win++;
        $('#winCounter').html(win);
        reset();
    } else if (totalScore > randomNumber) {
        alert('You lose!');

        $('#lossCounter').html(lose++);
        reset();
    }

}


console.log('Debugger is ON'); console.log('Red Crystal Value: ' + redCrystal); console.log('Green Crystal Value: ' + greenCrystal); console.log('Purple Crystal Value: ' + purpleCrystal); console.log('Yellow Crystal Value: ' + yellowCrystal); console.log('Random Number to Match Value: ' + randomNumber); console.log(parseInt(yellowCrystal)); console.log(totalScore);
});