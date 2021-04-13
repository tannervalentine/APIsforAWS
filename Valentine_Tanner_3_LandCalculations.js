//
// One acre of land is equivalent to 43,560 square feet. Write a program that asks the user 
// to enter the total square feet in a tract of land and calculates and displays the number
// of acres in the tract.
//
// Hint: Divide the amount entered by 43,560 to get the number of acres.
//
// Name your file lastname_firstname_LandCalculations.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_LandCalculations.js
//

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
var rS = require("readline-sync");
var acres = rS.questionFloat("What is the total square footage of the land?")/43560;
console.log(acres+" acre(s)");

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////