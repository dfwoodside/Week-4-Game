//Pseudo Code
//A.) Have the computer pick a random number and display that value in the HTML document.
//B.) Using 4 images that get assigned a random value upon it's inital click and retains that value to game end.
//C.) Show the summation of the click tallies in the HTML document.
//D.) Compare the summed click total to the random generated computer number.
//E.) If the summed click totals = the generated computer number, register a win in the HTML document.
//F.) If the summed click totals do not equal the generated computer number, register a loss in the HTML document.
//G.) Show a prompt at game end that will ask the player if they wish to play again.
//H.) If "true" run steps A thru G again.
//I.) If "false" end the game.

//Pseudo Code turned into Actual Code
//Global variables defined
var wins = 0;
var losses = 0;
var computerGuess = 0;
var crystalSumTotal = 0;

//Following code empties the crystal values and generates a random number between 0 and 150 and captures it as computerGuess
var resetAndStartGame = function () {
    $(".crystals").empty();
        computerGuess = [Math.floor(Math.random() * 120) + 20];

    //jQuery code used to document the randomly selected computer value to the HTML document
    $("#result").html("Number to Achieve: " + computerGuess);
    console.log("Computer value is " + computerGuess)

    //Generates a random value between 1 and 25 and assigns that number to a crystal.
    for (var i = 0; i < 4; i++) {

        var crystalImages = [
            "Assets/Images/BlueCrystal.jpg",
            "Assets/Images/RedCrystal.JPG",
            "Assets/Images/YellowCrystal.jpg",
            "Assets/Images/PurpleCrystal.jpg"]

        var crystalRandomNumber = [Math.floor(Math.random() * 23) + 1];
        console.log("Crystal Values: " + crystalRandomNumber)

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "random-number": crystalRandomNumber,
            "id": "crystal-" + i
        });
        crystal.css({
            "background-image": "url('" + crystalImages[i] + "')"
        })
        // crystal.html(crystalRandomNumber); //Allows you to see the assigned crystal value
        $(".crystals").append(crystal);
    }
    //Add to the funtion so that it's value is reset to zero upon start of new game.
    $("#Sum").html("Current Crystal Summation: " + crystalSumTotal);
}
//Calls and runs the function upon page load.
resetAndStartGame();

//Upon click of the crystal assigns a number to that crystal and ensures that crystalNumber is an actual number and not a string value.
$(document).on('click', ".crystal", function () {//Event delegation needed when using jQuery in order to call values.
    var crystalNumber = parseInt($(this).attr("random-number"));

    //Adds the crystal clicks and places that total in the variable crystalSumTotal.
    crystalSumTotal += crystalNumber
    $("#Sum").html("Current Crystal Summation: " + crystalSumTotal);
    console.log(typeof crystalSumTotal);
    console.log("Computer quess: " + computerGuess);
    console.log(typeof computerGuess);

    //Conditional statements used to determine game results and document wins and losses.
    if (crystalSumTotal == computerGuess) {
        wins++;
        $("#Win").html("Wins: " + wins);
        crystalSumTotal = 0;
        console.log("You win");
        resetAndStartGame();
    }
    else if (crystalSumTotal > computerGuess) {
        losses++;
        $("#Loss").html("Losses: " + losses);
        crystalSumTotal = 0;
        console.log("You lose")
        resetAndStartGame();
    }



});





