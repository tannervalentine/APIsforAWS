const http = require('http');		// use the http module and call it 'http'
var numberOfKnocksAtTheDoor = 1;	// initialize number of knocks at door (counter)

// This creates a server object called 'app' 
// The function that executes when the server is triggered does this:
//		Displays a message to the console with the number of knocks.
//		Increments the knock counter (numberOfKnocksAtTheDoor) by 1.
const app = http.createServer(function(req,res) {
	console.log("Someone is knocking at the door...knock number " + numberOfKnocksAtTheDoor);
	numberOfKnocksAtTheDoor = numberOfKnocksAtTheDoor + 1;
});

console.log("Listening on port 80");
// Tells our server 'app' to listen on port 80 - regular http request.
// When the server receives a request on port 80 the function above will execute.
app.listen(80);						
