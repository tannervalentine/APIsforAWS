//
// A customer in a store is purchasing five items. Write a program that asks
// for the price of each item, then displays the subtotal of the sale, the 
// amount of sales tax, and the total. Assume the sales tax is 7 percent.
//
// Name your file lastname_firstname_TotalPurchases.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_TotalPurchase.js
//
// Upload your file to OwlBox as directed by your instructor.
//

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
rS = require("readline-sync");
p1 = rS.questionFloat("What is the price of item #1?");
p2 = rS.questionFloat("What is the price of item #2?");
p3 = rS.questionFloat("What is the price of item #3?");
p4 = rS.questionFloat("What is the price of item #4?");
p5 = rS.questionFloat("What is the price of item #5?");

subtotal = p1+p2+p3+p4+p5;
tax = subtotal*.07;
console.log("The total is $"+(subtotal+tax)+" made from a subtotal of $"+subtotal+" and a tax of $"+tax+".");
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////