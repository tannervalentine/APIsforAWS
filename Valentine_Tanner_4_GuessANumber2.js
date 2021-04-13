//
// Update your GuessANumber1.js program so that after the random number is generated
// and the use is prompted for a guess.  If the guess is “Too high”, “Too low” 
// or “Correct”, display the random number that was generated, the number that was
// guessed and an appropriate message that indicates if the guess was too high, 
// too low or correct.
//
// Name your file lastname_firstname_GuessANumber2.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_GuessANumber2.js
//

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
randomNumber = Math.floor(Math.random() * 100) + 1;
var rS = require("readline-sync");
var guess = rS.questionInt("Guess a number from 1-100");
if (guess < randomNumber) {
    console.log("Too low");
} else if (guess > randomNumber) {
    console.log("Too high");
} else {
    console.log("Correct");
}

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////