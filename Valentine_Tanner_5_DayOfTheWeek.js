//
// Write a program that asks the user for a number in the range of 1 through 7.
// The program should display the corresponding day of the week
// where 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday,
// 6 = Saturday, and 7 = Sunday. The program should display an error message if
// the user enters a number that is outside the range of 1 through 7.
//
// Name your file lastname_firstname_DaysOfTheWeek.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_DayOfTheWeek.js
//

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
var rS = require("readline-sync");
var input = rS.questionInt("What day of the week number?");
if (input == 1) {
    console.log("It is Monday");
} else if (input == 2) {
    console.log("It is Tuesday");
} else if (input == 3) {
    console.log("It is Wednesday");
} else if (input == 4) {
    console.log("It is Thursday");
} else if (input == 5) {
    console.log("It is Friday");
} else if (input == 6) {
    console.log("It is Saturday");
} else if (input == 7) {
    console.log("It is Sunday");
} else {
    console.log("That number is out of the week range (1-7)");
}

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////