//
// Assuming there are no accidents or delays, the distance that a car travels
// down the interstate can be calculated with the following formula:
//
//	Distance=Speed * Time
//
// Write a program that prompts for both Speed and Time and calculates and  
// displays the distance traveled.
//
// Name your file lastname_firstname_TotalDistance.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_TotalDistance.js
//
// Upload your file to OwlBox as directed by your instructor.
//

//const { time } = require("node:console");

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
rS = require("readline-sync");
speed = rS.questionFloat("How fast were you going? (mph): ");
time = rS.questionFloat("How long were you driving? (hours): ");
distance = speed*time;
console.log("You travelled a total of "+distance+" miles.");

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////