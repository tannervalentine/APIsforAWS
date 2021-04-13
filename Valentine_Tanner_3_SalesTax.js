//
// Write a program that will ask the user to enter the amount of a purchase. 
// The program should then calculate the state and county sales tax
// Assume the state sales tax is 5 percent and the county sales tax is 2.5 
// percent.  The function should display the total for the purchase including the
// original purchase price plus state sales tax and county sales tax. 
//
// Hint: Use the value 0.025 to represent 2.5 percent, and 0.05 to represent 5 percent.
//
// Name your file lastname_firstname_SalesTax.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_SalesTax.js
//
// Upload your file to OwlBox as directed by your instructor.
//

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
rS = require("readline-sync");
purchase = rS.questionFloat("What was the total purchase price?: ");
taxPrice = purchase*1.075;
console.log("The total purchase price including county and sales tax is $"+taxPrice);

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////