//
// Write a program that asks the user to enter a person's age. The program should
// display a indicating whether the person is an infant, a child, a teenager, or 
// an adult. Following are the guidelines:
//
// If the person is 1 year old or less, he or she is an infant.
// If the person is older than 1 year, but younger than 13 years, he or she is a child.
// If the person is at least 13 years old, but less than 20 years old, he or she is a teenager.
// If the person is at least 20 years old, he or she is an adult.
//
// Name your file lastname_firstname_AgeClassifier.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_AgeClassifier.js
//
// Upload your file to OwlBox as directed by your instructor.
//

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
rS = require("readline-sync");
age = rS.questionInt("What is your age?");
if (age <= 1) {
    ageClass = "infant";
} else if (age <= 12) {
    ageClass = "child";
} else if (age <= 19) {
    ageClass = "teenager";
} else {
    ageClass = "adult";
}
console.log("You are a(n) "+ageClass);


/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////