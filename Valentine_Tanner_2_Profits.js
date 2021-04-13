//
// A company has determined that its annual profit is typically 23 percent of total sales. 
// Write a program that asks the user to enter the projected amount of total sales, then 
// displays the profit that will be made from that amount.
//
// Hint: Use the value 0.23 to represent 23 percent.
//
// Name your file lastname_firstname_Profits.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_Profits.js
//

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
var rS = require("readline-sync");
var profit = rS.questionFloat("What is are the total sales?")*0.23;
console.log(profit+" dollars in profit");
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////