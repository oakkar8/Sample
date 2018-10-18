var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {

    console.log("Hello+ doing demo");
    console.log("Hello"+ request.url);
        console.log("hello again");
        fs.readFile("index.html", function(err,data) {
            console.log("in read file");
            if(err) {
                response.writeHead(404);
                console.log(" in inf");
                response.write("File not found!");
            }else{
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(data);
                console.log("in else");
                response.end("end of data");
            }
        });
    
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
//   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
  // response.end('Hello World\n');
}).listen(8080);



// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
