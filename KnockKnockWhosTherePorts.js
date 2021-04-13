const http = require('http');		// use the http module and call it 'http'
var numberOfKnocksAtTheDoor = 1;	// initialize number of knocks at door (counter)
var portNumber = 80;				// we set the application's default port number 

// argv[2] looks at the third argument from the command line
// i.e., node KnockKnockWhosThereWithPortNumbers 85
// "85" is the third argument; if missing use value in portNumber (80)
// if not missing use that parameter as the port number
if (process.argv[2] !== undefined) {
	portNumber = process.argv[2];
}

// This creates a server object called 'app' 
// The function that executes when the server is triggered does this:
//		Displays a message to the console with the number of knocks.
//		Writes HTML to the HTML response stream and will appear in the browser.
//		Ends the HTML response stream.
//		Increments the knock counter (numberOfKnocksAtTheDoor) by 1.
const app = http.createServer(function(req,res){
	console.log("Someone is knocking at the door on port number " + 
		portNumber + "...knock number " + numberOfKnocksAtTheDoor);
	res.write("<h1>You just knocked at the door on port number " + 
		portNumber + ".  Knocks so far..." + numberOfKnocksAtTheDoor + "</h1>");
	res.end();
	numberOfKnocksAtTheDoor = numberOfKnocksAtTheDoor + 1;
});

console.log("Listening on port " + portNumber);
// Tells our server 'app' to listen on port portNumber.
app.listen(portNumber);
