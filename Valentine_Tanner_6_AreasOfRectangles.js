//
// The area of a rectangle is the rectangle's length times its width. Write a
// program that asks for the length and width of two rectangles. The program
// should tell the user which rectangle has the greater area, or if the areas
// are the same.
//
// Name your file lastname_firstname_AreasOfRectangles.js where lastname is 
// your last name and first name is your first name. For example
//
//		Doyle_Mart_AreasOfRectangles.js
//

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
var rS = require("readline-sync");
width1 = rS.questionFloat("What is the width of the first rectangle?");
length1 = rS.questionFloat("What is the length of the first rectangle?");
width2 = rS.questionFloat("What is the width of the second rectangle?");
length2 = rS.questionFloat("What is the length of the second rectangle?");

area1 = width1*length1;
area2 = width2*length2;

if (area1 > area2) {
    console.log("The first rectangle is larger with an area of "+area1);
} else if (area1 < area2) {
    console.log("The second rectangle is larger with an area of "+area2);
} else {
    console.log("The areas of the two rectangles are the same");
}
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////