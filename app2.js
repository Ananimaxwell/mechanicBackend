const port=8006,
http=require("http"),
httpStatus=require("httpStatus"),

app=http.createServer((request,respond)=>{
	console.log("Incoming request received");
	respond.writeHead(httpStatus.Ok,{
		"Content-type":"text/html"
	});

	let responMessage="<h1>Hello Followers</h1>";
	respond.write(responMessage);
	respond.end();

	console.log(`Sent a respond:${responMessage}`)

});

app.listen(port);

console.log(`Server is running on port: ${port}`)
