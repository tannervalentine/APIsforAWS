//
// Scientists measure an object’s mass in kilograms and its weight in newtons.
// If you know the amount of mass of an object in kilograms, you can calculate
// its weight in newtons with the following formula:
//
//		weight=mass×9.8
//
// Write a program that asks the user to enter an object’s mass, then calculates  
// and displays the object's weigh in newtown. If the object weighs
// more than 500 newtons, display a message indicating that it is too heavy. 
// If the object weighs less than 100 newtons, display a message indicating
// that it is too light.
//
// Name your file lastname_firstname_MassAndWeight.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_MassAndWeight.js
//
// Upload file to OwlBox as directed by your instructor.
//

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
rS = require("readline-sync");
mass = rS.questionFloat("What is the objects mass in kg? ");
weight = mass*9.8;
console.log(weight+" newtons");
if (weight < 100) {
    console.log("This item is too light!");
} else if (weight > 500) {
    console.log("This item is too heavy!");
}

	
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////