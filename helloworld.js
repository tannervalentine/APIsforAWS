var readlineSyc = require("readline-sync");
var name = readlineSyc.question("What is your name?");
if (name == "") {
    console.log("Hello stranger");
} else {
    console.log("hello "+name+"!");
};