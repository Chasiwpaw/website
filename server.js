var http = require('http');

function handleRequest(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end();
}

function startServer(){
	http.createServer(handleRequest).listen(8000);
	console.log("Server is listening on port 8000");
}

exports.startServer = startServer;