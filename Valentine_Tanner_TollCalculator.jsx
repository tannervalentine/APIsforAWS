// HelloWorld1.js - a simple API running on Node.js and using Express
var express = require('express');					// use the express module and call it 'express'
var bodyParser = require('body-parser');			// use the body-parser module and call it 'body-parser'
var mySQL = require("sync-mysql");

var connection = new mySQL({
  host: "helloworld.ctpkou8y73bi.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "opensesame",
  database: "tollschedule"
});

					// initialize counter

var app = express();								// create a new express() server object called 'app'
app.use(bodyParser.urlencoded({extended:false}));   // allows us to parse (i.e., get information from) URLs 
app.use(bodyParser.json());                         // allows us to parse (i.e., get information from) JSON

randomNumber = [];
// app.use() configures the middleware server object. It is called each time a request is sent to the server.
// It contains code for general configuration of the server. 
// In this case we're setting up CORS (cross-origin resource sharing). This just means content on a web page
// can come from a domain other than the domain of that page.
app.use(function(req, res, next) {
    bodyParser.urlencoded({extended:false})
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

// app.get() instructs the application what to do when an HTTP GET request is made to the API.
// In this case, the code only runs if you use the route /sayhello (i.e., http://127.0.0.1/sayhello).
// And the code just increments the counter, sends a line of output to the console, and sends a line of 
// output to the browser.

/*app.post('/startGame', function(req,res){
	randomNumberGenerated = Math.floor(Math.random()*100) + 1;
	console.log("Creating game number:" + req.body.gameId+ " number to guess is "+randomNumberGenerated);
  //randomNumber[req.body.gameId] = randomNumberGenerated
  connection.query("INSERT INTO guesses (gameId, randomNumberGenerated) "+"VALUES ('"+req.body.gameId+"', '"+randomNumberGenerated+"')");
	res.send("Game number "+req.body.gameId+" started.");	 
	}); */
	
app.get('/getToll',function(req,res){
  console.log("Received request for toll from "+req.query.enterToll+" to "+req.query.exitToll+" paying with "+req.query.payMethod);
  if (req.query.enterToll == req.query.exitToll) {
    messageToUser = "You picked the same toll twice! Try again please."
  } else {
    if (req.query.payMethod == "cash") {
      if (req.query.enterToll == "352" || req.query.enterToll == "340" || req.query.enterToll == "320" || req.query.exitToll == "352" || req.query.exitToll == "340" || req.query.exitToll == "320" ) {
        messageToUser = "One or more of the tolls you selected is E-ZPass only. Try again please."
      } else {
        var result = connection.query("SELECT toll FROM cashtollschedule WHERE interchangeEnter="+req.query.enterToll+" AND interchangeExit="+req.query.exitToll);
        var tollToPay = (result[0].toll).toString();
        messageToUser = ("The toll from "+req.query.enterToll+" to "+req.query.exitToll+" paying with "+req.query.payMethod+" is $"+tollToPay);
      }
    } else if (req.query.payMethod == "E-ZPass") {
      var result = connection.query("SELECT toll FROM ezpasstollschedule WHERE interchangeEnter="+req.query.enterToll+" AND interchangeExit="+req.query.exitToll);
      var tollToPay = (result[0].toll).toString();
      messageToUser = ("The toll from "+req.query.enterToll+" to "+req.query.exitToll+" paying with "+req.query.payMethod+" is $"+tollToPay);

    }
  }
  console.log(messageToUser);
  res.send(messageToUser);
});

console.log("Listening on port 8080");
app.listen(8080);									// And we're listening on port 8080

