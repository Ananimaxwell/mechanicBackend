var http=require('http');
var dtime=require('./myModule');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The curent date and time is: " + dtime.myDateTime(8,4,6));
    res.end();
}).listen(8000)