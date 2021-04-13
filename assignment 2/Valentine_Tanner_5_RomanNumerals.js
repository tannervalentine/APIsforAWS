//
// Write a program that prompts the user to enter a number within the range of 1
// through 10 and displays the roman numeral version of that number. If the number 
// is outside the range of 1 through 10, the program should display an error message.
//
// The following table shows the Roman numerals for the numbers 1 through 10:
//		1 = I		4 = IV		7 = VII		10 = X
//		2 = II		5 = V		8 = VIII
//		3 = III		6 = VI		9 = IX
//
// Name your file lastname_firstname_RomanNumerals.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_RomanNumerals.js
//
// Upload your file to OwlBox as directed by your instructor.
//


/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
rS = require("readline-sync");
inputNum = rS.questionInt("What number to convert to roman numerals (1-10)? ");
if (inputNum == 1) {
    numeral = "I";
    console.log(numeral);
} else if (inputNum == 2) {
    numeral = "II";
    console.log(numeral);
} else if (inputNum == 3) {
    numeral = "III";
    console.log(numeral);
} else if (inputNum == 4) {
    numeral = "IV";
    console.log(numeral);
} else if (inputNum == 5) {
    numeral = "V";
    console.log(numeral);
} else if (inputNum == 6) {
    numeral = "VI";
    console.log(numeral);
} else if (inputNum == 7) {
    numeral = "VII";
    console.log(numeral);
} else if (inputNum == 8) {
    numeral = "VIII";
    console.log(numeral);
} else if (inputNum == 9) {
    numeral = "IX";
    console.log(numeral);
} else if (inputNum == 10) {
    numeral = "X";
    console.log(numeral);
} else {
    console.log("The value you enetered is not within the range of numbers.");
}

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////