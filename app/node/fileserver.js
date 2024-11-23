const { Socket } = require('dgram');
const net=require('net');
var server=net.createServer((Socket)=>{
    Socket.end('Goodbye\n');
}).on('error',(err)=>{
    throw err;
})
server.listen(()=>{
    address=server.address();
    console.log('Open server on %j',address); 
})